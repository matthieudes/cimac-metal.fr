<template>
  <header class="header">
    <div class="header-container">

      <!-- LOGO -->
      <router-link to="/" class="logo">
        <img src="@/assets/Logo/LogoCimac.webp" alt="SARL Cimac Logo" />
      </router-link>

      <!-- NAV DESKTOP -->
      <nav class="navigation">
        <router-link to="/">Accueil</router-link>
        <router-link to="/laser">Découpe laser</router-link>
        <router-link to="/galerie">Galerie</router-link>
      </nav>

      <!-- BOUTON CONTACT -->
      <router-link to="/contact" class="btn-contact">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
          fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
        <span>Contactez-nous</span>
      </router-link>

      <!-- BURGER BUTTON (mobile only) -->
      <button class="burger" :class="{ open: menuOpen }" @click="menuOpen = !menuOpen" aria-label="Menu">
        <span></span>
        <span></span>
        <span></span>
      </button>

    </div>

    <!-- MENU MOBILE -->
    <transition name="slide-down">
      <nav v-if="menuOpen" class="mobile-nav">
        <router-link to="/" @click="menuOpen = false">Accueil</router-link>
        <router-link to="/laser" @click="menuOpen = false">Découpe laser</router-link>
        <router-link to="/galerie" @click="menuOpen = false">Galerie</router-link>
        <router-link to="/contact" @click="menuOpen = false" class="mobile-contact">
          Contactez-nous
        </router-link>
      </nav>
    </transition>
  </header>
</template>

<script setup>
import { ref } from 'vue';

const menuOpen = ref(false);
</script>

<style scoped>

.header {
  width: 100%;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: 100;
}

.header-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 18px;
  display: flex;
  align-items: center;
  height: 80px;
}

.logo img {
  height: 60px;
  width: auto;
  display: block;
}

/* ==================== NAV DESKTOP ==================== */

.navigation {
  display: flex;
  margin-left: 40px;
}

.navigation a {
  text-decoration: none;
  font-size: 15px;
  font-weight: 500;
  color: #111;
  padding: 10px 15px;
  transition: color 0.2s ease;
}

.navigation a:hover,
.navigation a.router-link-active {
  color: #0062C5;
}

/* ==================== BOUTON CONTACT ==================== */

.btn-contact {
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  background-color: #0062C5;
  color: white;
  padding: 10px 20px;
  border-radius: 4px;
  font-weight: 600;
  font-size: 15px;
  transition: background-color 0.3s ease, transform 0.2s;
}

.btn-contact:hover {
  background-color: #004a94;
  transform: translateY(-1px);
}

/* ==================== BURGER (caché en desktop) ==================== */

.burger {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  z-index: 101;
}

.burger span {
  display: block;
  width: 26px;
  height: 3px;
  background: #111;
  border-radius: 3px;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

/* Animation burger → croix */
.burger.open span:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}
.burger.open span:nth-child(2) {
  opacity: 0;
}
.burger.open span:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}

/* ==================== MENU MOBILE (caché en desktop) ==================== */

.mobile-nav {
  display: none;
}

/* ==================== ANIMATION SLIDE DOWN ==================== */

.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
}
.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* ==================== RESPONSIVE ==================== */

@media (max-width: 768px) {

  .navigation,
  .btn-contact {
    display: none;
  }

  .burger {
    display: flex;
    margin-left: auto;
  }

  .mobile-nav {
    display: flex;
    flex-direction: column;
    background: #ffffff;
    border-top: 1px solid #eee;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  }

  .mobile-nav a {
    display: flex;
    justify-content: center;
    text-decoration: none;
    color: #111;
    font-size: 16px;
    font-weight: 500;
    padding: 16px 24px;
    border-bottom: 1px solid #f0f0f0;
    transition: background 0.2s ease, color 0.2s ease;
  }

  .mobile-nav a:hover,
  .mobile-nav a.router-link-active {
    background: #f5f9ff;
    color: #0062C5;
  }

  .mobile-contact {
    background-color: #0062C5 !important;
    color: white !important;
    text-align: center;
    margin: 12px 20px;
    padding: 14px !important;
    border-radius: 6px;
    border-bottom: none !important;
    font-weight: 600;
  }

  .mobile-contact:hover {
    background-color: #004a94 !important;
  }

  .logo img {
    height: 45px;
  }

  .header-container {
    height: 65px;
  }
}
</style>
