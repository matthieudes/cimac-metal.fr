import { createRouter, createWebHistory } from 'vue-router'

// Définit toutes les routes des différentes pages avec leurs méta descriptions
const routes = [
  {
    path:'/',
    name: 'Accueil',
    component: () => import('@/pages/Accueil.vue'),
    meta: {
      title: 'SARL Cimac | Chaudronnerie et Métallerie à Saint-Chamond',
      description: 'SARL Cimac, entreprise de chaudronnerie et métallerie à Saint-Chamond 42400, service de Découpe de tube au Laser 3D.'
    }
  },
  {
    path: '/Galerie',
    name: 'Galerie',
    component: () => import('@/pages/Galerie.vue'),
    meta: {
      title: 'Nos Réalisation | SARL Cimac',
      description: 'Notre galerie de réalisations, SARL Cimac à Saint-Chamond 42400, entreprise de chaudronnerie et métallerie.'
    }
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: () => import('@/pages/Contact.vue'),
    meta: {
      title: 'Contactez-nous | SARL Cimac',
      description: 'Contactez-nous pour vos projets et demandez un devis, SARL Cimac à Saint-Chamond 42400, entreprise de chaudronnerie et métallerie.'
    }
  },
  {
    path: '/Laser',
    name: 'Laser',
    component: () => import('@/pages/Laser.vue'),
    meta: {
      title: 'Découpe Laser 3D | SARL Cimac',
      description: 'Service de découpe laser 3D proposé par SARL Cimac à Saint-Chamond 42400, entreprise de chaudronnerie et métallerie.'
    }
  },
  {
    path: '/MentionsLegales',
    name: 'MentionsLegales',
    component: () => import('@/pages/MentionsLegales.vue'),
    meta: {
      title: 'Mentions Légales | SARL Cimac',
      description: 'Mentions légales de SARL Cimac à Saint-Chamond 42400, entreprise de chaudronnerie et métallerie.'
    }
  }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
