<script setup>
import { ref, computed,onMounted, onUnmounted, watch } from 'vue';
import GalleryToggle from '@/components/GalleryComponents/GalleryToggle.vue';
import GalleryGrid from '@/components/GalleryComponents/GalleryGrid.vue';
import GalleryPagination from '@/components/GalleryComponents/GalleryPagination.vue';
import MediaModal from '@/components/GalleryComponents/MediaModal.vue';

const selectedIndex = ref(null);
const currentGallery = ref('photos'); 

const imagesGlob = import.meta.glob('@/assets/GalerieAssets/*.{png,jpg,jpeg,webp}', { eager: true });
const images = Object.values(imagesGlob).map(module => module.default);

const videosGlob = import.meta.glob('@/assets/videos/*.{mp4,webm,mov}', { eager: true });
const videos = Object.values(videosGlob).map(module => module.default);

// 4. LISTE ACTIVE (La "magie" qui bascule entre photos et vidéos)
const currentMediaList = computed(() => {
  return currentGallery.value === 'photos' ? images : videos;
});

// --- Système de pagination pour la grille ---
const currentPage = ref(0);
const itemsPerPage = 9;

// On remet la page à 0 quand on change d'onglet
watch(currentGallery, () => {
  currentPage.value = 0;
});

// Le total de pages s'adapte selon l'onglet actif
// Calcul du nombre total de pages en fonction de la liste active
const totalPages = computed(() => {
  return Math.ceil(currentMediaList.value.length / itemsPerPage);
});

// La portion exacte des 9 médias à afficher sur la page actuelle !
// C'est CETTE variable qui est envoyée au GalleryGrid
const paginatedMedia = computed(() => {
  const start = currentPage.value * itemsPerPage;
  const end = start + itemsPerPage;
  return currentMediaList.value.slice(start, end);
});
const openModal = (globalIndex) => {
  selectedIndex.value = globalIndex;
};

const closeModal = () => {
  selectedIndex.value = null;
};

const nextMedia = () => {
  if (selectedIndex.value < currentMediaList.value.length - 1) {
    selectedIndex.value++;
  } else {
    selectedIndex.value = 0; // Retourne au début
  }
};

const prevMedia = () => {
  if (selectedIndex.value > 0) {
    selectedIndex.value--;
  } else {
    selectedIndex.value = currentMediaList.value.length - 1; // Va à la fin
  }
};

const goToMedia = (index) => {
  selectedIndex.value = index;
};

const nextGridPage = () => {
  if (currentPage.value < totalPages.value - 1) currentPage.value++;
};

const prevGridPage = () => {
  if (currentPage.value > 0) currentPage.value--;
};

const handleKey = (e) => {
  if (selectedIndex.value !== null) {
    if (e.key === "ArrowRight") nextMedia();
    if (e.key === "ArrowLeft") prevMedia();
    if (e.key === "Escape") closeModal();
  }
};
// On active l'écouteur quand la page est chargée
onMounted(() => {
  window.addEventListener("keydown", handleKey);
});

// IMPORTANT : On retire l'écouteur quand on quitte la page (pour ne pas faire bugger le reste du site)
onUnmounted(() => {
  window.removeEventListener("keydown", handleKey);
});

</script>


<template>
  <div class="gallery-page">

    <!-- cover-image -->
    <section class="gallery-cover-image">
      <div class="cover-image-overlay">
        <h1>Quelques réalisations</h1>
        <p>Découvrez nos projets réalisés avec précision et savoir‑faire.</p>
      </div>
    </section>

    <gallery-toggle v-model="currentGallery" />

    <!-- grille -->
    <GalleryGrid 
      :items="paginatedMedia" 
      :type="currentGallery" 
      :startIndex="currentPage * itemsPerPage"
      @open="openModal"
    />

    <GalleryPagination 
      :currentPage="currentPage" 
      :totalPages="totalPages"
      @prev="prevGridPage"
      @next="nextGridPage"
    />
    
    <!-- MODALE UNIQUE -->
    <transition name="fade">
      <MediaModal 
        v-if="selectedIndex !== null"
        :mediaList="currentMediaList"
        :currentIndex="selectedIndex"
        :type="currentGallery"
        @close="closeModal"
        @prev="prevMedia"
        @next="nextMedia"
        @goTo="goToMedia"
      />
    </transition>

    
  </div>
</template>

<style scoped>

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* --- STYLE POUR LA GRILLE --- */
.gallery-cover-image {
  height: 420px;
  background: url('@/assets/LaserAssets/laserPhoto.webp') center/cover no-repeat;
  display: flex;
}

.cover-image-overlay {
  background: rgba(0, 0, 0, 0.21);
  padding: 50px 70px 90px;
  color: white;
  backdrop-filter: blur(5px);
  width: 100%;
  align-content: end;
}

.cover-image-overlay h1 {
  font-size: 3rem;
  margin-bottom: 15px;
}

/* ANIMATIONS */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active {
  transition: all 0.3s ease;
}
.slide-enter-from {
  opacity: 0;
  transform: translateX(40px);
}
.slide-leave-to {
  opacity: 0;
  transform: translateX(-40px);
}

/* ============================================= RESPONSIVE ============================================== */
@media (max-width: 600px) {
  .cover-image-overlay {
    padding: 30px 20px 40px;
  }
  .cover-image-overlay h1 {
    font-size: 2rem;
  }
}

</style>
