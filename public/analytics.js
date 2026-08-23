(function () {
  'use strict';

  const PORTFOLIO_ANALYTICS_HOST = 'bassimatte.github.io';
  const PORTFOLIO_ANALYTICS_TAG = 'portfolio';
  const PORTFOLIO_ANALYTICS_EVENT_PREFIX = 'portfolio_';
  const PORTFOLIO_UMAMI_WEBSITE_ID = 'b2300e0b-bc69-49d7-ad05-06f980b5ed38';
  const PORTFOLIO_UMAMI_SCRIPT_URL = 'https://cloud.umami.is/script.js';

  if (window.location.hostname !== PORTFOLIO_ANALYTICS_HOST) return;

  const pendingEvents = [];

  function sendAnalyticsEvent(eventName, properties) {
    if (typeof window.umami?.track !== 'function') return false;
    window.umami.track(`${PORTFOLIO_ANALYTICS_EVENT_PREFIX}${eventName}`, properties);
    return true;
  }

  function track(eventName, properties) {
    if (sendAnalyticsEvent(eventName, properties)) return;
    if (pendingEvents.length < 24) pendingEvents.push({ eventName, properties });
  }

  function placementFor(element) {
    const section = element.closest('section[id]');
    if (section) return section.id;
    if (element.closest('header')) return 'header';
    return 'footer';
  }

  document.addEventListener('click', function (event) {
    if (!(event.target instanceof Element)) return;
    const element = event.target.closest('a[href], button[data-email-link]');
    if (!element) return;

    const placement = placementFor(element);
    if (element.matches('button[data-email-link]')) {
      track('contact_opened', { channel: 'email', placement });
      return;
    }

    const url = new URL(element.href, window.location.href);
    const project = ['mantice', 'glorb', 'campana', 'maresono'].find(function (name) {
      return url.pathname.includes(`/${name}`);
    });

    if (project) {
      track('project_opened', {
        project,
        destination: url.hostname === 'github.com' ? 'source' : 'play',
        placement,
      });
      return;
    }

    if (url.hostname === 'freesound.org') {
      track('profile_opened', { profile: 'freesound', placement });
    } else if (url.hostname === 'github.com') {
      track('profile_opened', { profile: 'github', placement });
    } else if (url.hostname === 't.me') {
      track('contact_opened', { channel: 'telegram', placement });
    } else if (url.hostname === 'paypal.me') {
      track('support_opened', { method: 'coffee', placement });
    }
  });

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting || entry.intersectionRatio < 0.35) return;
        track('section_viewed', { section: entry.target.id });
        observer.unobserve(entry.target);
      });
    }, { threshold: [0.35] });

    document.querySelectorAll('#instruments, #sounds, #about, #contact').forEach(function (section) {
      observer.observe(section);
    });
  }

  const script = document.createElement('script');
  script.defer = true;
  script.src = PORTFOLIO_UMAMI_SCRIPT_URL;
  script.dataset.websiteId = PORTFOLIO_UMAMI_WEBSITE_ID;
  script.dataset.domains = PORTFOLIO_ANALYTICS_HOST;
  script.dataset.tag = PORTFOLIO_ANALYTICS_TAG;
  script.dataset.excludeSearch = 'true';
  script.dataset.excludeHash = 'true';
  script.dataset.doNotTrack = 'true';
  script.dataset.portfolioAnalytics = 'umami';
  script.addEventListener('load', function () {
    pendingEvents.splice(0).forEach(function (event) {
      sendAnalyticsEvent(event.eventName, event.properties);
    });
  });
  document.head.appendChild(script);
})();
