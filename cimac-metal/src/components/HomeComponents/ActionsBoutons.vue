
<script setup>
import imgDecoupeLaser from '@/assets/AccueilAssets/laserminiature.png'
import devisIcon from '@/assets/AccueilAssets/devisbouton.png'
import laserDessin from '@/assets/AccueilAssets/laserbouton.png'
import pieceLaser from '@/assets/GalerieAssets/3-pieceLaser.jpg'
import planLaser from '@/assets/LaserAssets/PlanLaser.webp'
import { ref, computed } from 'vue';
import ActionPanel from '@/components/HomeComponents/PanneauAction.vue';

// On crée un tableau avec les informations des boutons lors de l'action
const actions = ref([
    {
        id: 1,
        title: "Découpe Laser",
        text: "Nous proposons la découpe laser de différents type de profils pour la réalisation de pièces précises, adaptées à vos besoins.\nGrâce à notre machine découpe laser 3D nous réalisons des découpes nettes et complexes, sur différentes épaisseurs et matières.",
        btnImg: laserDessin,
        panelImage: imgDecoupeLaser,
        buttonLink: '/Laser'
        },
        {
        id: 2,
        title: "Notre Expertise",
        text: "Nous avons une expertise de plus de 30 ans dans la chaudronnerie et la métallerie et nous proposons maintenant nos services de découpe laser à nos clients. Nous sommes fiers de notre savoir-faire et de notre capacité à répondre aux besoins spécifiques de chaque projet.",
        panelImage: pieceLaser,
        buttonLink: '/Galerie'
        },
        {
        id: 3,
        title: "Devis sur mesure",
        text: "Nous accompagnons nos clients dans la réalisation de leurs projets, pour cela il suffit de nous contacter pour connaître la faisabilité de ces derniers.",
        btnImg: devisIcon,
        panelImage: planLaser,
        buttonLink: '/Contact'
    }
 ])

 // On crée une constante pour stocker l'ID de l'action active
 const activeId = ref(actions.value[0].id)

 // On crée une constante calculée pour obtenir l'action active en fonction de l'ID
 const activeAction = computed(() => 
    actions.value.find(action => action.id === activeId.value)
 )
</script>

<template>
  <section class="actions-section">
    
    <!-- les boutons -->
    <div class="actions-buttons">
      <button
        v-for="action in actions"
        :key="action.id"
        class="action-card"
        :class="{ 'text-only': !action.btnImg , 'active': activeId === action.id}"
        @click="activeId = action.id"
      >
        <img v-if="action.btnImg" 
        :src="action.btnImg" 
        :alt="action.title" />
        
        <span v-else class="action-text">{{ action.title }}</span>

        <div class="action-overlay">
          <h2>{{ action.title }}</h2>
        </div>
      </button>
    </div>

    <!-- panneau après l'action -->
    <Transition name="panel" mode="out-in">
      <ActionPanel
        v-if="activeAction"
        :key="activeAction.id"
        :title="activeAction.title"
        :text="activeAction.text"
        :image="activeAction.panelImage"
        :link="activeAction.buttonLink"
      />
    </Transition>

    <div class="hidden-content">
      <div v-for="action in actions" :key="'seo-' + action.id">
        <h3>{{ action.title }}</h3>
        <p>{{ action.text }}</p>
        <a :href="action.buttonLink">En savoir plus sur {{ action.title }}</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.actions-section {
  max-width: 1100px;
  margin: 0 auto;
  padding: 2rem 1rem 0;
  overflow: hidden;
}

.actions-buttons {
  display: flex;
  justify-content: center;
  gap: 6rem;
}

.action-card {
  position: relative;
  width: 180px;
  aspect-ratio: 1 / 1;
  border: none;
  border-radius: 2%;
  padding: 0;
  cursor: pointer;
  overflow: hidden;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.action-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.35s ease, transform 0.35s ease;
}

.action-card.text-only .action-text {
  color: black;       
  font-weight: 600;
  font-size: 1.5rem;
  transition: color 0.3s ease; 
}

.action-card.text-only:hover {
  background-color: #0b5ea8;
  transition: background-color 0.3s ease, color 0.3s ease;   
}

.action-card.text-only:hover .action-text {
  color: #ffffff;
  transition: background-color 0.3s ease, color 0.3s ease;   
}

/* effet du survolement des boutons */
.action-overlay {
  position: absolute;
  inset: 0;
  background: rgba(11, 94, 168, 0.9);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 1rem;
  opacity: 0;
  transition: opacity 0.35s ease;
}

/* Bouton actif */
.action-card.active {
  background: #0b5ea8;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}
.action-card.active img {
  opacity: 1;

}
.action-card.active .action-overlay {
  opacity: 0;
}
.action-card.text-only.active .action-text {
  color: #ffffff; 
}

.action-card:not(.active):hover {
  background-color: #0b5ea8;
}
.action-card:not(.active):hover img {
  opacity: 0;
}
.action-card:not(.active):hover .action-overlay {
  opacity: 1;
}
.hidden-content {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

/* Transition des panneaux */
.panel-enter-from {
  opacity: 0;
  transform: translateX(40px);
}

.panel-enter-active {
  transition: all 0.45s ease;
}

.panel-enter-to {
  opacity: 1;
  transform: translateX(0);
}

.panel-leave-from {
  opacity: 1;
  transform: translateX(0);
}

.panel-leave-active {
  transition: all 0.35s ease;
}

.panel-leave-to {
  opacity: 0;
  transform: translateX(-40px);
}


/* ============================================= RESPONSIVE ============================================== */

@media (min-width: 2560px) {
  
  .actions-buttons{
    gap: 10rem;
  }
  .action-card {
    min-width: 250px;
    min-height: 200px;
  }

  .action-overlay span,
  .action-card.text-only .action-text {
    font-size: 1.5rem;
  }
  
}

@media (max-width: 768px) {
  .actions-buttons {
    flex-direction: column;
    align-items: center;
  }

  .action-card {
    width: 100%;
    max-width: 320px;
  }

  .action-card.text-only .action-text{
    color: white;
    font-size: 1.5rem;
  }
  /* Pas de hover sur mobile → texte visible */
  .action-overlay {
    opacity: 1;
    background: rgba(0, 0, 0, 0.55);
  }

  .action-card img {
    opacity: 1;
    transform: none;
  }
}
</style>