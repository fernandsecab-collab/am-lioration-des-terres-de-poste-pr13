# Import GitHub — RC14

Le fichier `package.json` est placé directement à la racine de cette archive.

## Import correct

1. Décompressez le ZIP RC14.
2. Ouvrez le dossier décompressé.
3. Sélectionnez **tout son contenu**, notamment `package.json`, `src`, `electron`, `public` et `.github`.
4. Déposez ces éléments directement à la racine du dépôt GitHub.
5. Vérifiez dans GitHub que `package.json` est visible sur la première page du dépôt, sans ouvrir un sous-dossier.
6. Lancez **Actions > Windows Electron Build > Run workflow**.

Une erreur `ENOENT ... package.json` signifie que les fichiers ont été importés dans un dossier parent supplémentaire.
