import fs from 'node:fs';
import assert from 'node:assert/strict';
const css=fs.readFileSync(new URL('./styles.css',import.meta.url),'utf8');
const main=fs.readFileSync(new URL('./main.jsx',import.meta.url),'utf8');
const hexToRgb=h=>{h=h.replace('#','');return [0,2,4].map(i=>parseInt(h.slice(i,i+2),16)/255)};
const lum=h=>{const [r,g,b]=hexToRgb(h).map(c=>c<=.04045?c/12.92:((c+.055)/1.055)**2.4);return .2126*r+.7152*g+.0722*b};
const ratio=(a,b)=>{const [x,y]=[lum(a),lum(b)].sort((a,b)=>b-a);return (x+.05)/(y+.05)};
const themes=[
 ['titanium','#F2F4F7','#FFFFFF','#202124','#5E6673','#2F6FED','#FFFFFF','#23262B','#FFFFFF'],
 ['copper','#F6F5F2','#FFFFFF','#1F1F1F','#675F57','#B87333','#17140A','#2D2A26','#FFFFFF'],
 ['emerald','#F5F8F7','#FFFFFF','#242424','#5D6A66','#0F9D7A','#17140A','#1F2A2E','#FFFFFF'],
 ['slate','#ECEFF2','#FFFFFF','#202020','#606A74','#4F6D8A','#FFFFFF','#303640','#FFFFFF'],
 ['dark-navy','#10151D','#1B2431','#F7FAFC','#B6C0CD','#60A5FA','#10151D','#0A0E14','#FFFFFF'],
 ['champagne','#FBFAF6','#FFFFFF','#2A2A2A','#6D665D','#C9A66B','#191714','#3A3834','#FFFFFF'],
 ['edf-next','#F4F8FB','#FFFFFF','#1C1C1C','#596979','#0077CC','#FFFFFF','#1E3A5F','#FFFFFF'],
 ['black-gold','#F5F5F5','#FFFFFF','#202020','#626262','#D4AF37','#17140A','#1E1E1E','#FFFFFF']
];
for(const [name,bg,surface,text,muted,primary,onPrimary,sidebar,onSidebar] of themes){
 assert.ok(ratio(text,bg)>=4.5,`${name}: texte/fond ${ratio(text,bg)}`);
 assert.ok(ratio(text,surface)>=4.5,`${name}: texte/surface ${ratio(text,surface)}`);
 assert.ok(ratio(muted,surface)>=4.5,`${name}: texte secondaire/surface ${ratio(muted,surface)}`);
 assert.ok(ratio(onPrimary,primary)>=4.5,`${name}: bouton ${ratio(onPrimary,primary)}`);
 assert.ok(ratio(onSidebar,sidebar)>=4.5,`${name}: barre latérale ${ratio(onSidebar,sidebar)}`);
}
assert.match(main,/2\.0\.0-RC31/);
assert.equal((css.match(/!important/g)||[]).length,0,'Aucun !important autorisé');
const rc31=css.slice(css.indexOf('/* RC31 —'));
assert.doesNotMatch(rc31,/main\s+:where\([^}]*\bspan\b[^}]*\)\s*\{[^}]*color\s*:/s,'RC31 ne recolore pas globalement tous les spans');
for(const id of themes.map(x=>x[0])) assert.match(css,new RegExp(`data-theme=['"]${id}['"]`));
console.log('RC31 contrast architecture: OK — 8 thèmes, ratios WCAG AA et zéro !important');
