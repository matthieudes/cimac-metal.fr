<script setup>
defineProps({
  modelValue: String // 'photos' ou 'videos'
});
defineEmits(['update:modelValue']);
</script>

<template>
  <div class="gallery-toggle-container">
    <div class="gallery-toggle">
      <div class="toggle-slider" :class="modelValue"></div>
      <button 
        class="toggle-btn"
        :class="{ active: modelValue === 'photos' }" 
        @click="$emit('update:modelValue', 'photos')"
      >
        Photos
      </button>
      <button 
        class="toggle-btn"
        :class="{ active: modelValue === 'videos' }" 
        @click="$emit('update:modelValue', 'videos')"
      >
        Vidéos
      </button>
    </div>
  </div>
</template>

<style scoped>

/* CONTENEUR DU SÉLECTEUR */
.gallery-toggle-container {
  display: flex;
  justify-content: center;
  margin : 40px 40px;
}

/* LE FOND DU SÉLECTEUR (La pilule grise) */
.gallery-toggle {
  position: relative;
  display: flex;
  background-color: #f0f0f581;
  border-radius: 40px;
  padding: 5px;
  box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.05);
  width: 300px; 
}

/* LES BOUTONS TRANSPARENTS AU DESSUS */
.toggle-btn {
  font-family: inherit;
  flex: 1;
  background: transparent;
  border: none;
  padding: 12px 20px;
  font-size: 1rem;
  font-weight: 600;
  color: #666;
  cursor: pointer;
  position: relative;
  z-index: 2;
  transition: color 0.3s ease;
  border-radius: 35px;
}

/* COULEUR DU TEXTE QUAND ACTIF */
.toggle-btn.active {
  color: white;
}

/* LE FOND COLORÉ QUI GLISSE (Le slider bleu) */
.toggle-slider {
  position: absolute;
  top: 5px;
  bottom: 5px;
  left: 5px;
  width: calc(50% - 5px); 
  background-color: #0b5fb3d2;
  border-radius: 35px;
  z-index: 1;
  transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1);
  box-shadow: 0 4px 10px rgba(11, 95, 179, 0.3);
}

/* POSITIONS DU SLIDER SELON L'ONGLET ACTIF */
.toggle-slider.photos {
  transform: translateX(0);
}

.toggle-slider.videos {
  transform: translateX(100%); 
}

.gallery-toggle:hover .toggle-slider {
  background-color: #074f96;
}

</style>