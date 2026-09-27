# François Aubeut — portfolio

Site personnel : https://francoisaubeut.com/

Portfolio HTML/CSS statique, sans framework, sans JavaScript et sans dépendance à installer. Refonte blanc/bleu approuvée le 27 septembre 2026 : portrait et logos officiels, présentation de Mexar, stack détaillée et missions Carrier / Dametis.

## Développement

```sh
npm run build
npm run dev
```

Aperçu : http://127.0.0.1:8791. Le fichier `index.html` peut aussi être ouvert directement. Les expériences supplémentaires utilisent `details` / `summary` natifs.

## Organisation

- `index.html` : page et contenu.
- `style.css` : styles et responsive.
- `assets/` : portrait WebP, logos PNG et police Inter locale.
- `CV-Francois-Aubeut.pdf` : CV conservé depuis le précédent site public.
- `scripts/build.mjs` : copie des seuls fichiers publics vers `dist/`.
- `vercel.json` : hébergement statique et redirection de l’ancienne URL `/cv.pdf`.

Le CV est conservé à l’identique et n’a pas été actualisé avec les nouvelles missions. Carrier et Dametis sont indiqués « En cours », sans date de début non vérifiée.

## Déploiement

Dépôt : `MeXaaR/francois-website`, branche `main`.
Projet Vercel existant : `francois-aubeut`, équipe `mexar`.
Build : `node scripts/build.mjs`. Sortie : `dist`. Aucune variable d’environnement nécessaire.

Le précédent site public avait été déployé depuis v0, sans liaison Git. Cette refonte rétablit le dépôt comme source du site. L’ancien code du dépôt reste accessible dans l’historique Git au commit `bd735c7`.

Dernier déploiement de production avant refonte : `dpl_DCAaSAUAjr9cEi6YqTTZCuqmMYtB` (`francois-aubeut-aucqbo7lq-mexar.vercel.app`). Cette référence permet un retour arrière Vercel indépendant du code historique du dépôt.

## Vérification

Rendu vérifié à 1280, 390 et 320 pixels : aucun débordement horizontal, images chargées, navigation par ancres fonctionnelle et aucune erreur console détectée. Le parcours s’ouvre au clic et se referme avec Entrée. Les deux missions Carrier restent distinctes. La version HTML fonctionne sans JavaScript.

## Identité

Portrait et logos issus de l’identité Mexar / ROI First validée par François. Les PNG sont des exports réduits des maîtres officiels. Le lien commercial cible https://www.mexar.fr/.
