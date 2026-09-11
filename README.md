# Hackathon — Dashboard NFT « Ready Players » (Vue 3 + PrimeVue)

![Vue](https://img.shields.io/badge/Vue-3-4FC08D?logo=vue.js&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)
![PrimeVue](https://img.shields.io/badge/PrimeVue-4-41B883?logo=primevue&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss&logoColor=white)

🔗 **Démo en ligne** : <https://nft-dashboard-vue.vercel.app>
📦 **Code source** : <https://github.com/Georginio-prod/Hackathon>
🔁 **Version React du même écran** : <https://github.com/Georginio-prod/hack>

---

## 📌 Présentation

Interface de **tableau de bord d'une marketplace NFT / gaming** réalisée lors d'un
hackathon (septembre 2024). L'écran, sur fond sombre, reproduit une maquette Figma :
enchère du moment, NFT mis en avant, portefeuille crypto de l'utilisateur et transactions
récentes.

Le même écran a été intégré **deux fois** pour comparer les approches : ici en **Vue 3 +
PrimeVue**, et dans le dépôt [`hack`](https://github.com/Georginio-prod/hack) en
**React + Chart.js**.

## ✨ Contenu de l'écran

- **Barre de navigation** avec recherche (composant PrimeVue `AutoComplete` personnalisé via un preset Tailwind).
- **Top Auction** : carte de l'enchère en cours (« Magic Bullets », vendeur, prix par NFT en *PLAYR*, compte à rebours, bouton « Place a bid »).
- **Featured NFTs** : galerie de NFT mis en avant avec dernière enchère.
- **My Wallet** : solde (`$16,533.10`), avoirs en BTC / ETH, revenus et dépenses.
- **Recent Transactions** : liste des dernières opérations.

Les données sont statiques (maquette d'interface, pas d'API).

## 🛠️ Stack technique

| Couche | Technologie |
|---|---|
| UI | Vue 3 (`<script setup>`) |
| Composants | PrimeVue 4 + `@primevue/themes` (mode *unstyled* avec presets Tailwind dans `src/presets/`) |
| Styles | Tailwind CSS 3, PostCSS, Autoprefixer |
| Build | Vite 5 |

## 📁 Structure

```
Hackathon/
├── index.html
├── tailwind.config.js · postcss.config.js · vite.config.js
├── public/                       # Images de la maquette (NFT, avatars, icônes)
└── src/
    ├── main.js                   # Monte l'app + PrimeVue (preset Tailwind)
    ├── App.vue
    ├── style.css
    ├── components/
    │   ├── navbar.vue            # Barre de navigation + recherche
    │   └── content.vue           # Toutes les sections du dashboard
    └── presets/config/           # Presets PrimeVue (AutoComplete…)
```

## 🚀 Installation & lancement

```bash
git clone https://github.com/Georginio-prod/Hackathon.git
cd Hackathon
npm install
npm run dev          # http://localhost:5173
```

`npm run build` génère le site statique dans `dist/`, `npm run preview` le prévisualise.

## 🌐 Déploiement

Déployé sur **Vercel** (voir lien en haut de page). Build Vite statique, aucune variable d'environnement.

## 🎓 Ce que ce projet démontre

Intégration rapide d'une maquette complexe sous contrainte de temps, usage de PrimeVue
en mode *unstyled* avec Tailwind, comparaison Vue / React sur un même écran.

---

## 👤 Auteur

**Komla Etonam Georges EKLOU** (Georginio) — Développeur Full Stack Web & Web3

[![GitHub](https://img.shields.io/badge/GitHub-Georginio--prod-181717?logo=github)](https://github.com/Georginio-prod)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Profil-0A66C2?logo=linkedin)](https://www.linkedin.com/in/komla-etonam-georges-eklou-68518b23b)
[![Portfolio](https://img.shields.io/badge/Portfolio-georginio.w3frame.com-6C63FF)](https://georginio.w3frame.com/)

> 📚 Tous mes projets sont listés et documentés sur mon [profil GitHub](https://github.com/Georginio-prod).
