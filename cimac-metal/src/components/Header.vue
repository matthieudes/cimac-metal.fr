<template>
  <header class="header">
    <div class="header-container">
      <router-link to="/" class="logo">
        <img src="@/assets/LogoCimac.webp" alt="SARL Cimac Logo" />
      </router-link>

      <nav class="navigation">
        <router-link to="/">Accueil</router-link>
        <router-link to="/laser">Découpe laser</router-link>
        <router-link to="/galerie">Galerie</router-link>
      </nav>

      <router-link to="/contact" class="btn-contact">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
        <span>Contactez-nous</span>
      </router-link>
    </div>
  </header>
</template>

<style scoped>
.header {
  width: 100%;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05); /* Petit ombrage pour le style */
}

.header-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 18px;
  display: flex;
  align-items: center;
  height: 80px; /* Hauteur fixe pour centrer verticalement proprement */
}

.logo img {
  height: 60px;
  width: auto; /* Garde les proportions */
  display: block;
}

.navigation {
  display: flex;
  margin-left: 40px;
}

.navigation a {
  text-decoration: none;
  font-size: 15px;
  font-weight: 500;
  color: #111;
  transition: color 0.2s ease;
  padding: 10px 15px; /* Réduit un peu le padding énorme de 30px */
}

.navigation a:hover, 
.navigation a.router-link-active {
  color: #0062C5;
}

/* --- STYLE DU BOUTON CONTACT --- */
.btn-contact {
  margin-left: auto; 
  display: flex;
  align-items: center;
  gap: 8px; /* Espace entre icône et texte */
  text-decoration: none;
  background-color: #0062C5; /* Votre couleur bleue */
  color: white;
  padding: 10px 20px;
  border-radius: 4px; /* Coins légèrement arrondis */
  font-weight: 600;
  font-size: 15px;
  transition: background-color 0.3s ease, transform 0.2s;
}

.btn-contact:hover {
  background-color: #004a94; /* Bleu un peu plus foncé au survol */
  transform: translateY(-1px);
}

/* --- RESPONSIVE MOBILE --- */
@media (max-width: 768px) {
  .navigation {
    display: none; /* Cache le menu texte sur mobile (à remplacer par un menu burger plus tard) */
  }
  
  .header-container {
    justify-content: space-between; /* Ecarte le logo et le bouton contact */
  }
  
  .btn-contact span {
    display: none; /* Cache le texte "Contactez-nous" sur mobile pour ne garder que l'icône */
  }
  
  .btn-contact {
    padding: 10px; /* Bouton carré sur mobile */
    border-radius: 50%;
  }
}
</style>