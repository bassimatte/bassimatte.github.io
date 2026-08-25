(function () {
  'use strict';

  const player = new Audio();
  player.preload = 'none';

  let activeButton = null;
  const nextSampleByProject = new Map();

  function iconFor(button) {
    return button?.querySelector('.sample-icon');
  }

  function labelFor(button) {
    return button?.dataset.sampleLabel || button?.dataset.sampleProject;
  }

  function setIdle(button) {
    if (!button) return;
    const icon = iconFor(button);
    if (icon) icon.textContent = '▶';
    button.setAttribute('aria-pressed', 'false');
    button.setAttribute('aria-label', `Play ${labelFor(button)}`);
  }

  function setPlaying(button) {
    const icon = iconFor(button);
    if (icon) icon.textContent = 'Ⅱ';
    button.setAttribute('aria-pressed', 'true');
    button.setAttribute('aria-label', `Pause ${labelFor(button)}`);
  }

  function sampleSet(button) {
    const sources = (button.dataset.samples || '').split('|').filter(Boolean);
    const names = (button.dataset.sampleNames || '').split('|');
    const gainsDb = (button.dataset.sampleGainsDb || '').split('|').map(Number);
    return { sources, names, gainsDb };
  }

  function playbackVolume(gainDb) {
    if (!Number.isFinite(gainDb)) return 1;
    return Math.min(1, Math.max(0, Math.pow(10, gainDb / 20)));
  }

  function dispatchStarted(project, sample) {
    document.dispatchEvent(new CustomEvent('portfolio:sample-started', {
      detail: { project, sample },
    }));
  }

  function startFresh(button) {
    const project = button.dataset.sampleProject;
    const { sources, names, gainsDb } = sampleSet(button);
    if (!project || sources.length === 0) return;

    setIdle(activeButton);
    const index = nextSampleByProject.get(project) || 0;
    nextSampleByProject.set(project, (index + 1) % sources.length);
    player.volume = playbackVolume(gainsDb[index]);
    player.src = sources[index];
    activeButton = button;

    player.play().then(function () {
      setPlaying(button);
      dispatchStarted(project, names[index] || `sample_${index + 1}`);
    }).catch(function () {
      setIdle(button);
      activeButton = null;
    });
  }

  document.addEventListener('click', function (event) {
    if (!(event.target instanceof Element)) return;
    const button = event.target.closest('button[data-sample-project]');
    if (!button) return;

    if (button === activeButton && !player.paused) {
      player.pause();
      setIdle(button);
      return;
    }

    if (button === activeButton && player.src && player.currentTime > 0 && !player.ended) {
      if (sampleSet(button).sources.length > 1) {
        startFresh(button);
        return;
      }
      player.play().then(function () { setPlaying(button); }).catch(function () { setIdle(button); });
      return;
    }

    startFresh(button);
  });

  player.addEventListener('ended', function () {
    setIdle(activeButton);
    activeButton = null;
  });

  player.addEventListener('error', function () {
    setIdle(activeButton);
    activeButton = null;
  });
})();
