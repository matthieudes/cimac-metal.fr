<script setup>
import { ref } from 'vue';
const specs = ref([
  {
    label: 'Matières travaillées',
    values: ['• Acier', '• Inox', '• Aluminium']
  },
  {
    label: 'Section possible',
    values: ['• De 30x30mm à 350x350mm']
  },
  {
    label: 'Épaisseurs',
    values: ['• De 1mm à 20mm']
  },
  {
    label: 'Type de profil',
    values: [
      '• Tubes carré, rond, rectangulaire et ovales',
      '• HEA, HEB',
      '• IPN',
      '• UPE, UPN',
      '• Toutes formes - section max 350x350mm'
    ]
  },
  {
    label: 'Capacité (Longueur)',
    values: [
      "• Jusqu'à 6.50 mètres linéaires en chargement automatique",
      "• Max 7.50m en chargement manuel (tarification)"
    ]
  },
  {
    label: 'Capacité (Poids)',
    values: ['• Jusqu\'à 1300KG']
  }
]);
</script>

<template>
  <section class="laser-details-container">

    <h2 class="spec-title">Des capacités adaptées à tous vos projets</h2>
    
    <!-- L'image est placée avant, elle va "flotter" à droite -->
    <div class="spec-image-wrapper">
        <img src="@/assets/spec.png" alt="Rendu 3D de plusieurs types de profil de tube accepté" />
    </div>    

    <div class="spec-list">
        <div v-for="(spec, index) in specs" :key="index" class="spec-row">

            <div class="spec-label">
                {{ spec.label }}
            </div>

            <div class="spec-value">
                <ul>
                    <li v-for="(line, lineIndex) in spec.values" 
                    :key="lineIndex">
                    {{ line }}
                    </li>
                </ul>
            </div>

        </div>
    </div>

    <!-- Clearfix pour remettre le flux normal après le float -->
    <div style="clear: both;"></div>

    <div class="spec-footer">
      <router-link to="/contact" class="spec-btn">
        Demander un devis
      </router-link>
    </div>

  </section>
</template>

<style scoped>
.laser-details-container {
  font-family: 'Trispace', monospace;
  width: 100%;
  max-width: 1400px;
  margin: 50px auto;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  padding: 40px;
  color: #333;
  /* Important pour contenir les éléments flottants si besoin */
  overflow: hidden; 
}

.spec-title {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.5rem;
  margin-bottom: 40px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: -0.5px;
}

/* --- LE BLOC IMAGE (FLOTTANT) --- */
.spec-image-wrapper {
  /* Au lieu de marges fixes, on fait flotter l'image à droite */
  float: right;
  width: 45%; /* L'image prend 45% de la largeur */
  margin-left: 40px; /* Espace entre le texte et l'image */
  margin-bottom: 20px;
  text-align: right; /* Aligne l'image à droite dans son conteneur */
}

.spec-image-wrapper img {
  width: 100%;
  max-width: 100%; /* S'adapte à la largeur du conteneur */
  height: auto;
  border-radius: 4px;
  background-color: grey;
  padding: 10px;
  /* On garde l'aspect visuel que vous aviez */
  box-sizing: border-box; 
}

/* --- LA LISTE --- */
.spec-list {
  /* Plus de marge négative ! Le texte va naturellement couler à gauche de l'image */
  margin-top: 0; 
}

/* La ligne bleue de séparation */
.spec-row {
  display: flex;
  border-bottom: 2px solid #0062C5;
  padding: 25px 0;
  /* Astuce : force la ligne à recalculer sa largeur à côté de l'image */
  overflow: hidden; 
}
.spec-row:nth-child(4){
  border-bottom: none;
}
.spec-row:nth-child(5){
  border-top: 2px solid #0062C5;
}
.spec-label {
  width: 35%; /* Garde la proportion */
  min-width: 150px; /* Évite que le label soit trop écrasé */
  font-weight: bold;
  padding-left: 20px;
}

.spec-value {
  width: 65%;
}

.spec-value ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.spec-value li {
  margin-bottom: 8px;
  line-height: 1.4;
}

/* --- PIED DE PAGE --- */
.spec-footer {
  display: flex;
  justify-content: flex-end;
  margin-top: 40px;
  clear: both; /* Assure que le bouton est bien en dessous de tout */
}

.spec-btn {
  background-color: #0066cc;
  color: white;
  text-decoration: none;
  padding: 15px 50px 15px 30px;
  font-weight: bold;
  font-size: 1rem;
  display: inline-block;
  clip-path: polygon(0% 0%, 90% 0%, 100% 50%, 90% 100%, 0% 100%);
  transition: background-color 0.3s;
}

.spec-btn:hover {
  background-color: #004c99;
}

/* --- RESPONSIVE --- */
/* On rassemble tout dans un seul bloc média pour la propreté */
@media (max-width: 900px) {
  
  .spec-image-wrapper {
    /* Sur mobile, on annule le flottant */
    float: none;
    width: 100%;
    margin-left: 0;
    margin-bottom: 30px;
    text-align: center; /* Centre l'image sur mobile */
  }

  .spec-image-wrapper img {
    /* L'image peut être un peu moins haute sur mobile */
    max-height: 300px;
    width: auto;
    max-width: 100%;
  }

  /* La liste reprend sa place normale */
  .spec-list {
    margin-top: 0;
  }

  .spec-row {
    flex-direction: column; /* Label au dessus, valeur en dessous */
    padding: 15px 0;
  }

  .spec-label {
    width: 100%;
    padding-left: 0;
    margin-bottom: 10px;
    text-decoration: underline; 
    color: #0062C5;
  }

  .spec-value {
    width: 100%;
    padding-left: 10px;
  }

  .laser-details-container {
    padding: 20px;
  }
  
  .spec-footer {
      justify-content: center; /* Bouton centré sur mobile */
  }
}
</style>
