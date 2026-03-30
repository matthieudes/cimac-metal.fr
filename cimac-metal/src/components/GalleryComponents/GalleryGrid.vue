<script setup>
defineProps({
  items: Array,
  type: String, // 'photos' ou 'videos'
  startIndex: Number // Équivaut à (currentPage * itemsPerPage)
});
defineEmits(['open']);
</script>

<template>
  <!-- On garde votre logique d'ID et de classes -->
  <section class="gallery-grid" :id="type === 'videos' ? 'video-grid' : null">
    
    <div 
      v-for="(item, localIndex) in items" 
      :key="localIndex"
      :class="type === 'photos' ? 'grid-item' : 'gallery-item'"
      @click="$emit('open', startIndex + localIndex)"
    >
      <!-- SI PHOTOS -->
      <img 
        v-if="type === 'photos'" 
        :src="item" 
        :alt="`Réalisation métallerie - Image ${startIndex + localIndex + 1}`" 
        loading="lazy"
      />

      <!-- SI VIDÉOS -->
      <template v-else>
        <video 
          class="gallery-media" 
          aria-label="Vidéo de présentation de nos découpes laser 3D" 
          muted 
          playsinline 
          preload="metadata" 
          style="width:100%; height:100%; object-fit: cover;"
        >
          <source :src="item" type="video/mp4">
        </video>
        <!-- Votre icône Play par-dessus -->
        <div class="play-overlay">
          <svg viewBox="0 0 24 24" class="play-icon"><path d="M8 5v14l11-7z"/></svg>
        </div>
      </template>

    </div>
  </section>
</template>

<style scoped>
.gallery-item {
  position: relative;
  cursor: pointer;
  height: 250px;
  width: 400px;
  overflow: hidden;
  border-radius: 12px;
  grid-template-columns: repeat(3, 1fr);
}
.gallery-grid {
  max-width: 1300px;
  margin: 0 auto 40px; 
  padding: 0 30px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}


.grid-item {
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
}

.grid-item img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  transition: 0.4s ease;
}

.grid-item:hover img {
  transform: scale(1.08);
}

.play-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none; 
}

.play-icon {
  fill: white;
  width: 24px;
  height: 24px;
}

@media (max-width: 1285px) {
  .gallery-grid{
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 900px) {
  #video-grid {
    grid-template-columns: repeat(1, 1fr);
    justify-items: center;
  }
  .gallery-grid {
    grid-template-columns: repeat(1, 1fr);
  }
  .left { left: 10px; }
  .right { right: 10px; }
}

@media (max-width: 600px) {
  /* On passe à 1 seule colonne sur téléphone */
  .gallery-grid {
    grid-template-columns: 1fr;
    padding: 0 15px; 
  }

  .grid-item, .gallery-item {
    width: 100% !important;
  }
}
</style>
