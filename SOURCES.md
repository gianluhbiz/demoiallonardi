# Fonti e contenuti

Consultazione: 12 ottobre 2026.

- Storia, lavorazione e prodotti del salumificio: https://www.iallonardisalumi.it/ e https://www.iallonardisalumi.it/prodotti/
- Descrizione del locale, piatti (didascalie delle foto del proprietario), punteggi e recensioni: https://www.tripadvisor.it/Restaurant_Review-g1055426-d21347129-Reviews-Iallonardi_Sapori_Autentici-Isernia_Province_of_Isernia_Molise.html
- Indirizzi, telefono della cucina, orari, punteggio e recensioni: scheda Google Maps fornita dal cliente (coordinate 41.5977733, 14.2341613).

## Da confermare con il cliente prima della pubblicazione

- **Prezzi**: nessuna fonte li riporta. Il menu (`src/data/menu.ts`) non li mostra e rimanda a sede e telefono.
- **Voci del menu ricavate dalle recensioni**: tartare, carpaccio, arrosticini, fritti del giorno, panino del banco con porchetta, vini. Le descrizioni sono generiche di proposito.
- **Orari**: presi da Google Maps (lun chiuso, mar-sab 9-14:30 e 17-23, dom 17-23). Tripadvisor indica il pranzo dalle 12:15.
- **Telefoni**: 0865 221389 (Google, usato come numero principale); 0865 270014 e 338 826 8932 (sito del salumificio).
- **Recensioni**: citazioni brevi e testuali da Tripadvisor e Google, con nome e iniziale come appaiono sulle piattaforme.

## Immagini

Convertite in WebP in `public/images/`.

- Archivio del salumificio (`iallonardisalumi.it/wp-content/uploads/2019/11/`): `salumi-*.webp`, `gallery-*.webp`, `culatello`, `lonza`, `pancetta`, `prosciutto`, `salsicce`, `soppressata`, `logo.png`. `logo-light.png` è il logo con le scritte schiarite per gli sfondi scuri.
- Foto Tripadvisor caricate dal locale (con le didascalie del menu): `burger-*`, `hot-dog`, `panino-bis-steack`, `ribs`.
- Foto Tripadvisor caricate da clienti: `hero-bistecca`, `bistecca-servita`, `tagliere`, `tagliere-ardesia`, `arrosticini`, `patatine`, `panino-ciabatta`, `interni-*`, `banco`, `salsicce-sottovuoto`. Per la versione pubblica vanno sostituite con foto del locale o usate con il permesso degli autori.
- `ribs.webp` è disponibile solo a 275 px: va usata solo come miniatura.

## Sviluppo

React 19, TypeScript, Vite, Tailwind CSS 4, Framer Motion, Remix Icon e React Router 7.

```sh
npm install
npm run dev
npm run build
npm run lint
```

Su PowerShell con script disabilitati usare `npm.cmd` al posto di `npm`.

Percorsi: `/` e `/menu`. Le sezioni hanno URL condivisibili (`/#cucina`, `/menu#griglia`). L'hosting deve fare fallback su `index.html` per `/menu`. Font Fraunces e Manrope da Google Fonts.

### Movimento

- Cambio pagina: sipario color carta che sale, mostra il nome della pagina e prosegue verso l'alto (`src/components/layout/PageTransition.tsx`). Al primo caricamento non compare.
- Curve in `src/config/motion.ts` e nei token `ease-out-strong` / `ease-in-out-strong` di `src/index.css`.
- `MotionConfig reducedMotion="user"`: con "riduci movimento" attivo restano solo le dissolvenze, il sipario diventa una dissolvenza e i nastri si fermano.
