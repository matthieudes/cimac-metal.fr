<script setup>
defineProps({
  mediaList: { type: Array, required: true },
  currentIndex: { type: Number, required: true },
  type: { type: String, required: true } // 'photos' ou 'videos'
});

defineEmits(['close', 'prev', 'next', 'goTo']);
</script>

<template>
  <div class="modal" @click="$emit('close')">
    <div class="modal-content" @click.stop>
      
      <!-- Bouton Fermer -->
      <span class="close" @click="$emit('close')">&times;</span>

      <!-- Affichage du Média (Image OU Vidéo) -->
      <transition name="slide" mode="out-in">
        
        <img 
          v-if="type === 'photos'"
          :key="`img-${currentIndex}`"
          :src="mediaList[currentIndex]" 
          class="modal-image"
        />

        <video 
          v-else-if="type === 'videos'"
          :key="`vid-${currentIndex}`"
          :src="mediaList[currentIndex]" 
          class="modal-image" 
          controls 
          autoplay
        ></video>

      </transition>

      <!-- Flèches de navigation -->
      <button class="arrow left" @click.stop="$emit('prev')">&#10094;</button>
      <button class="arrow right" @click.stop="$emit('next')">&#10095;</button>

      <!-- Points de pagination -->
      <div class="pagination">
        <span
          v-for="(_, index) in mediaList"
          :key="index"
          :class="{ active: index === currentIndex }"
          @click="$emit('goTo', index)"
        ></span>
      </div>

      <!-- Compteur -->
      <div class="counter">
        {{ currentIndex + 1 }} / {{ mediaList.length }}
      </div>

    </div>
  </div>
</template>

<style scoped>


.modal {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.7);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  position: relative;
  max-width: 800px;
  width: 100%; 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.modal-image {
  max-width: 100% !important;  
  max-height: 75vh !important;  
  width: auto !important;      
  height: auto !important;     
  object-fit: contain !important; 
  display: block;
  margin: 0 auto;
  box-shadow: 0 4px 20px rgba(0,0,0,0.5); 
  border-radius: 8px; 
}
/* --- STYLE POUR LA MODALE D'AGRANDISSEMENT --- */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
.modal-content video {
  display: block;
  margin: 0 auto;      
  max-width: 100%;     
  max-height: 100vh;    
  object-fit: contain; 
}
.modal-media-video {
  max-width: 90vw;
  max-height: 90vh;
  border-radius: 8px;
  outline: none;
  box-shadow: 0 4px 20px rgba(0,0,0,0.5);
}

/*********  ARROWS ***********/
.arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 40px;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  padding: 10px;
}

.left { left: -60px; }
.right { right: -60px; }

/* PAGINATION (Points de la modale) */
.pagination {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 20px;
  gap: 10px;
  max-width: 80%;
  margin-left: auto;
  margin-right: auto;
}

.pagination span {
  width: 12px;
  height: 12px;
  background: #bbb;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.3s;
}

.pagination span.active {
  background: #0b5fb3;
  transform: scale(1.3);
}

/************ Compteur ************/
.counter {
  text-align: center;
  margin-top: 10px;
  color: white;
  font-size: 14px;
}

.close {
  position: absolute;
  top: -40px;
  right: 0;
  font-size: 40px;
  color: white;
  cursor: pointer;
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

@media (max-width: 900px) {

  .left { left: 10px; }
  .right { right: 10px; }
}

@media (max-width: 600px) {

  .close-btn {
    top: 15px;
    right: 20px;
    font-size: 40px;
    z-index: 4;
  }
}
</style>
