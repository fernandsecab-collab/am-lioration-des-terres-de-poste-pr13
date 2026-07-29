# RC31 — Contrastes garantis

- Reconstruction du moteur visuel à partir d'une seule couche CSS.
- Huit thèmes conservés.
- Suppression des règles globales recolorant tous les textes et tous les `span`.
- Suppression totale des `!important`.
- Couleurs de premier plan choisies selon le fond réel de chaque thème.
- Boutons Copper, Emerald, Dark Navy, Champagne et Black & Gold corrigés avec texte sombre pour satisfaire le contraste WCAG AA.
- Textes secondaires recalibrés pour obtenir au moins 4,5:1 sur les surfaces.
- Rapport final maintenu sur papier blanc, indépendant du thème.
- Test automatique `src/rc31Contrast.test.mjs` : ratios texte/fond, texte secondaire/surface, bouton, barre latérale et architecture CSS.
