import fs from 'node:fs';
const jsx=fs.readFileSync(new URL('./main.jsx',import.meta.url),'utf8');
const css=fs.readFileSync(new URL('./styles.css',import.meta.url),'utf8');
const themes=['titanium','copper','emerald','slate','dark-navy','champagne','edf-next','black-gold'];
for(const theme of themes){
  if(!jsx.includes(`id:'${theme}'`)) throw new Error(`Thème absent dans React: ${theme}`);
  if(!css.includes(`[data-theme='${theme}']`) && theme!=='titanium') throw new Error(`Palette CSS absente: ${theme}`);
}
if(!jsx.includes('UI_THEME_KEY')) throw new Error('Persistance du thème absente');
if(!jsx.includes('headerThemePicker')) throw new Error('Sélecteur rapide absent');
if(!jsx.includes('themeGallery')) throw new Error('Galerie Administration absente');
if(css.includes('rc27-premium-themes')||css.includes('rc28-semantic-contrast')) throw new Error('Ancienne couche de thème détectée');
console.log('RC31 themes: 8 palettes, persistance et galerie OK');
