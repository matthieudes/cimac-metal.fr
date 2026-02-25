<script setup>
import { computed } from 'vue'
import logo from '@/assets/LogoCimacSansBg.png'

const year = computed(() => new Date().getFullYear())
</script>

<template>
  <footer class="footer">
    <div class="footer-container">
      
      <div class="footer-left">
        <img :src="logo" alt="Logo" class="footer-logo" />
      </div>

      <nav class="footer-nav">
        <RouterLink to="/">Accueil</RouterLink>
        <RouterLink to="/galerie">Galerie</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
      </nav>

    </div>

    <div class="footer-bottom">
      <span>
        © {{ year }} – Cimac - MD – Tous droits réservés
      </span>
      <RouterLink to="/mentions-legales" class="legal">
        Mentions légales
      </RouterLink>
    </div>
  </footer>
</template>



<style scoped>
.footer {
  background: linear-gradient(135deg, #2e2e2e, #3a3a3a);
  color: #f5f5f5;
  padding: 60px 80px 30px;
  margin-top: 10rem;
}

/* CONTAINER */
.footer-container {
  max-width: 1400px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
}

/* LOGO */
.footer-logo {
  height: 45px;
  filter: brightness(1.1);
}

/* NAVIGATION */
.footer-nav {
  display: flex;
  gap: 60px;
}

.footer-nav a {
  position: relative;
  color: #e0e0e0;
  text-decoration: none;
  font-size: 15px;
  font-weight: 500;
  transition: color 0.3s ease;
}

/* Underline animée */
.footer-nav a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -6px;
  width: 0%;
  height: 2px;
  background: #4ea1ff;
  transition: width 0.3s ease;
}

.footer-nav a:hover {
  color: #ffffff;
}

.footer-nav a:hover::after {
  width: 100%;
}

/* BAS FOOTER */
.footer-bottom {
  max-width: 1400px;
  margin: auto;
  padding-top: 20px;
  border-top: 1px solid rgba(255,255,255,0.1);
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #bdbdbd;
}

.footer-bottom .legal {
  color: #bdbdbd;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-bottom .legal:hover {
  color: #4ea1ff;
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .footer-container {
    flex-direction: column;
    gap: 30px;
  }

  .footer-nav {
    gap: 30px;
  }

  .footer-bottom {
    flex-direction: column;
    gap: 10px;
    text-align: center;
  }
}
</style>