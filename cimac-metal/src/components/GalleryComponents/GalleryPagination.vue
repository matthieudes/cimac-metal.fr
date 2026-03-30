<script setup>
// On définit les propriétés (données) reçues du parent
defineProps({
  currentPage: {
    type: Number,
    required: true
  },
  totalPages: {
    type: Number,
    required: true
  }
});

// On définit les événements envoyés au parent quand on clique
defineEmits(['prev', 'next']);
</script>

<template>
  <!-- La pagination ne s'affiche que s'il y a plus d'une page -->
  <div class="grid-pagination" v-if="totalPages > 1">
    
    <!-- Bouton Précédent -->
    <button 
      class="page-arrow" 
      @click="$emit('prev')" 
      :disabled="currentPage === 0"
    >
      &#8592;
    </button>
    
    <!-- Compteur de pages -->
    <span class="page-numbers">Page {{ currentPage + 1 }} / {{ totalPages }}</span>
    
    <!-- Bouton Suivant -->
    <button 
      class="page-arrow" 
      @click="$emit('next')" 
      :disabled="currentPage === totalPages - 1"
    >
      &#8594;
    </button>
    
  </div>
</template>

<style scoped>
.grid-pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  margin-top: 40px;
  margin-bottom: 60px;
}

.page-arrow {
  background-color: transparent;
  color: #0b5fb3; 
  border: 2px solid #0b5fb3;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  font-size: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  box-shadow: 0 4px 6px rgba(11, 95, 179, 0.1);
  padding: 0;             
  line-height: 0;         
  padding-bottom: 3px;    
}

/* Effet au survol (Hover) */
.page-arrow:hover:not(:disabled) {
  background-color: #0b5fb3;
  color: white;
  box-shadow: 0 8px 15px rgba(11, 95, 179, 0.3);
  transform: translateY(-3px) scale(1.05); 
  
}

/* Effet au clic (Active) */
.page-arrow:active:not(:disabled) {
  transform: translateY(1px) scale(0.92); 
  box-shadow: 0 2px 4px rgba(11, 95, 179, 0.2);
}

/* État désactivé (quand on est sur la première ou dernière page) */
.page-arrow:disabled {
  border-color: #e0e0e0;
  color: #cccccc;
  box-shadow: none;
  cursor: not-allowed;
  background-color: transparent;
}

.page-numbers {
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
  padding: 8px 20px;
  border-radius: 25px;
  background: #f8f9fa; 
  box-shadow: inset 0 2px 4px rgba(0,0,0,0.03); 
  letter-spacing: 0.5px;
}
</style>
