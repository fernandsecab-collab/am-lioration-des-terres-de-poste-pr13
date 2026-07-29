import fs from 'node:fs';
import assert from 'node:assert/strict';
const css=fs.readFileSync(new URL('./styles.css',import.meta.url),'utf8');
const main=fs.readFileSync(new URL('./main.jsx',import.meta.url),'utf8');
const pkg=JSON.parse(fs.readFileSync(new URL('../package.json',import.meta.url),'utf8'));
assert.equal(pkg.version,'200.18.0','Version package incohérente');
assert.ok(main.includes("2.0.0-RC18"),'Version applicative incohérente');
assert.ok(!main.includes('initial.rni:c.rm'),'Régression c non défini encore présente');
assert.ok(!main.includes('initialCoeff=c.c'),'Régression coefficient initial encore présente');
for(const token of ['RC14 — CONTRASTE GLOBAL TOUS ONGLETS','RC18 — ÉTATS DE BOUTONS CLAIREMENT DIFFÉRENCIÉS','.fatalErrorCard .fatalErrorMessage','.fatalErrorCard pre','input:not([type="checkbox"])','.globalSearchResults','@media print']) assert.ok(css.includes(token),`Règle RC14 absente: ${token}`);

const finalControl=main.slice(main.indexOf('function FinalControl('),main.indexOf('function FinalPhoto('));
assert.ok(!/\bc\.(?:ok|c|rm|rni|rmn|rc)\b/.test(finalControl), 'FinalControl ne doit plus référencer une variable c inexistante');
assert.ok(main.includes("<b>{initial.ok?'Conforme':'Non conforme'}</b>"), 'FinalControl doit utiliser le calcul initial déclaré');

console.log('RC18 stability tests: OK');

assert.ok(css.includes('box-shadow:0 0 0 3px rgba(255,212,0,.42)'), 'Le bouton sélectionné doit avoir un halo visible');
assert.ok(css.includes('content:"✓"'), 'Le bouton sélectionné doit afficher un repère visuel');

assert.ok(css.includes('RC18 — CONTRASTE ABSOLU SUR LES SURFACES SOMBRES'), 'Le filet CSS RC18 doit être présent');
assert.ok(fs.readFileSync(new URL('./contrastGuard.js',import.meta.url),'utf8').includes("style.setProperty('color',color,'important')"), 'Le garde-fou doit imposer la couleur inline');
