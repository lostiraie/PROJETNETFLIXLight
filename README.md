# 🎬 NetflixLight

**NetflixLight** est une plateforme de streaming vidéo prototype développée par une équipe de développeurs junior.  
L'application permet de naviguer dans un catalogue de films et séries, gérer des favoris, effectuer des recherches et lire des vidéos via un lecteur personnalisé.  
Le projet utilise l'API TMDB pour récupérer des données réelles sur les films et séries.

---

## 📝 Contexte

Vous êtes une équipe de développeurs junior chez une startup qui souhaite créer une plateforme de streaming vidéo.  
L’objectif est de développer un **prototype fonctionnel** démontrant les fonctionnalités essentielles :

- Navigation dans un catalogue
- Recherche
- Gestion de favoris (Watchlist)
- Lecture vidéo avec un lecteur personnalisé

---

## 🎯 Objectifs pédagogiques

- Consommer une **API REST externe** avec authentification
- Maîtriser les appels asynchrones (`fetch`, `async/await`, `Promise.all`)
- Manipuler le **DOM** de manière performante
- Implémenter un **routing côté client** (SPA)
- Gérer la **persistance des données côté client**
- Optimiser les performances (`lazy loading`, `debounce`)

---

## 🛠 Stack technique

| Couche | Technologies |
|--------|--------------|
| Frontend | HTML5, CSS3 / Tailwind, JavaScript Vanilla |
| Backend | Node.js + Express.js |
| API externe | [TMDB API](https://www.themoviedb.org/documentation/api) |
| Données utilisateur | JSON files ou SQLite |

---

## 🚀 Fonctionnalités obligatoires

### 1. Authentification utilisateur
- Inscription (email, pseudo, mot de passe)
- Connexion avec génération de session
- Routes protégées pour l'accès aux favoris et profil utilisateur

### 2. Page d'accueil
- Hero banner avec un film/série aléatoire parmi les tendances
- Carrousels horizontaux par catégories : tendances, films populaires, séries populaires, contenus mieux notés, genres spécifiques (ex: Action, Comédie)
- Posters interactifs avec infos au survol : titre, note moyenne, année de sortie

### 3. Page détail (Film / Série)
- Affichage immersive avec image backdrop
- Infos détaillées : titre, synopsis, date, durée/nombre de saisons, genres, note moyenne, casting
- Section films/séries similaires
- Bouton pour ajouter/retirer des favoris

### 4. Recherche
- Barre de recherche persistante
- Déclenchement instantané avec **debounce 300ms**

### 5. Favoris (Watchlist)
- Ajouter ou supprimer des contenus en un clic
- Visualisation immédiate de l’état des favoris

### 6. Lecteur vidéo personnalisé
- Support pour vidéos libres de droits ou bandes-annonces YouTube
- Barre de progression interactive
- Contrôles : play/pause, volume/mute, durée écoulée et totale, plein écran
- Masquage automatique des contrôles après 3 secondes d’inactivité

---

## ✨ Bonus (optionnel)

- **Continue Watching** : sauvegarde de la progression de lecture
- **Multi-profils**
- **Thème sombre/clair** avec persistance
- **PWA basique** (manifest + Service Worker)
- **Historique de visionnage**
- **Notation personnelle** (1-5 étoiles)
- **Recommandations** basées sur genres favoris
- **Responsive** mobile/tablette/desktop
- **Animations fluides**
- **Accessibilité** (navigation clavier, aria-labels, focus visible)

---

## 📂 Architecture du projet

NetflixLight/
│
├─ backend/ # Serveur Node.js + Express
│ ├─ controllers/
│ ├─ routes/
│ ├─ models/
│ └─ app.js
│
├─ frontend/ # Frontend SPA
│ ├─ index.html
│ ├─ css/
│ ├─ js/
│ └─ assets/

💡 Choix techniques

Vanilla JS pour comprendre le fonctionnement natif du DOM et des SPA
Tailwind CSS pour un styling rapide et responsive
Node.js + Express pour un backend léger et modulaire
JSON/SQLite pour la persistance utilisateur simple
Fetch + async/await pour appels API asynchrones
Debounce pour limiter les requêtes de recherche
├─ data/ # JSON ou SQLite pour les utilisateurs
├─ README.md
└─ package.json
