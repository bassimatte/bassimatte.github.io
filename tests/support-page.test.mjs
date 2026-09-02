import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const [english, italian, home, homeItalian, sitemap] = await Promise.all([
  readFile(new URL("../app/support/page.tsx", import.meta.url), "utf8"),
  readFile(new URL("../app/it/support/page.tsx", import.meta.url), "utf8"),
  readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
  readFile(new URL("../app/it/page.tsx", import.meta.url), "utf8"),
  readFile(new URL("../app/sitemap.ts", import.meta.url), "utf8"),
]);

test("support pages keep the instruments free and explain server costs", () => {
  assert.match(english, /Free stays free/);
  assert.match(english, /All instruments are free to use/);
  assert.match(english, /real hosting costs/);
  assert.match(english, /voluntary support, not a purchase/);
  assert.match(italian, /Gratuito, sempre/);
  assert.match(italian, /Tutti gli strumenti sono gratuiti/);
  assert.match(italian, /costi di hosting reali/);
  assert.match(italian, /sostegno volontario, non un acquisto/);
});

test("support destination is stable, bilingual and discoverable", () => {
  assert.match(home, /href="\/support\/"/);
  assert.match(homeItalian, /href="\/it\/support\/"/);
  assert.match(english, /href="\/it\/support\/"/);
  assert.match(italian, /href="\/support\/"/);
  assert.match(sitemap, /https:\/\/bassimatte\.github\.io\/support\//);
  assert.match(sitemap, /https:\/\/bassimatte\.github\.io\/it\/support\//);
});

test("support pages offer verified PayPal amounts without handling payment credentials", () => {
  const links = {
    "3": "XBB3GTVW4A4HJ",
    "5": "MG75SFMPNTJ2N",
    "10": "2G57DWHR2MTXN",
    "20": "S25UZZ2UC3JZQ",
    custom: "LXKTGLVEJRMR8",
  };
  for (const id of Object.values(links)) {
    assert.match(english, new RegExp(`paypal\\.com/ncp/payment/${id}`));
    assert.match(italian, new RegExp(`paypal\\.com/ncp/payment/${id}`));
  }
  assert.match(english, /Suggested/);
  assert.match(italian, /Consigliato/);
  assert.match(english, /Bassimat never receives your payment credentials/);
  assert.match(italian, /Bassimat non riceve mai i tuoi dati di pagamento/);
  assert.doesNotMatch(english, /client.secret|data-email-link/i);
  assert.doesNotMatch(italian, /client.secret|data-email-link/i);
});
