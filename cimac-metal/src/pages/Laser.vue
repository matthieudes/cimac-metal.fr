<script setup>
import SpecTable from '@/components/LaserComponent/SpecTable.vue';
</script>
<template>
    <div class="laser-header">
      <div class="laserHeader-content">
          <h1>Découpe Laser 3D</h1>
          <p>Précision, rapidité et qualité pour tous vos projets de métallerie, construction industrielle et charpente.</p>
      </div>
    </div>
    <section class="laser-presentation">
      <h2>Des découpes laser précises et sur mesure</h2>
      <div class="container">
        
        <div class="text-column">
          
          <div class="text-top">
              <p>
                  Notre entreprise est équipée d’une machine de découpe laser 3D pour tubes et différents types de profilés. 
                  Nous réalisons la découpe laser de tubes acier, inox et aluminium, sur profils ronds, carrés, 
                  rectangulaires ou spécifiques.
              </p>
          </div>

          <div class="blue-block">
              <p>
                  Notre service s'adresse aussi bien aux professionnels (industrie, bâtiment, 
                  métallerie, serrurerie, chaudronnerie) qu'aux particuliers. Grâce à la découpe laser 
                  3D, nous garantissons des assemblages précis, des délais maitrisés et une 
                  qualité constante.
              </p>
          </div>

        </div>

        <div class="image-column">
              <img src="@/assets/LaserAssets/laserPhoto.webp" alt="Machine Découpe Laser 3D" loading="lazy"/>
        </div>

      </div>
  </section>
  <section class="plans-section">
      <div class="plans-border-container">
        
        <div class="plans-image">
          <img src="@/assets/GalerieAssets/14-pieceLaser.jpg" alt="Bureau d'étude découpe laser" />
        </div>

        <div class="plans-text">
          <h3>Découpe sur mesure à partir de vos plans</h3>
          <p>
            Nous réalisons vos découpes sur mesure directement à partir des plans fournis par le client, 
            en garantissant une fidélité entre le dessin et la pièce finale. Chaque projet est 
            étudié avec soin afin d’assurer précision, qualité et respect des dimensions, que ce soit 
            pour une pièce unique, un prototype ou une petite série.
          </p>

          <h3>Formats de fichiers acceptés</h3>
          <p>
            Pour un traitement optimal, nous privilégions les fichiers <strong>.STEP</strong> ou <strong>.DWG</strong>.<br>
            À défaut, un PDF correctement coté (dimensions, angles, informations techniques) est également accepté.
          </p>
        </div>

      </div>
    </section>
    <spec-table /> 
</template>

<style scoped>
.laser-header {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('@/assets/LaserAssets/DessinDelaser.svg');
  height: 400px;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center; 
  justify-content: center;
  text-align: center;
  color: white;
  background-attachment: fixed; 
}

.laserHeader-content h1 {
  font-size: 3rem; 
  font-weight: 700;
  margin-bottom: 10px;
  text-shadow: 0 2px 4px rgba(0,0,0,0.3); 
}

.laserHeader-content p {
  font-size: 1.2rem;
  font-weight: 300;
  max-width: 600px;
  margin: 0 auto; 
}

.content-container {
  max-width: 1400px;
  margin: 50px auto;
  padding: 0 20px;
}

.laser-presentation {
  padding: 80px 0;
  position: relative;
}

.laser-presentation h2 {
  max-width: 1400px;
  margin: 0 auto 40px auto;
  padding: 0 40px;
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: 1px;
}

.laser-presentation .container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;

  display: flex;
  align-items: stretch;
  position: relative;
}

.text-column {
  flex: 1;
  padding-right: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.text-top {
  margin-bottom: 0;
  padding-bottom: 30px;
}

.text-top p {
  color: #555;
  line-height: 1.7;
  font-size: 1.05rem;
  clip-path: polygon(0px 0px, 100% 1px, 88% 100.00%, 0% 100%);
  padding: 30px 80px 30px 40px;
  margin-right: -100px;
}

.text-top h2 {
  font-size: 2.2rem;
  font-weight: 800;
  color: #000;
  margin-bottom: 20px;
  font-family: 'Arial', sans-serif;
  text-transform: uppercase;
}

.blue-block {
  background-color: #0062C5;
  color: white;
  padding: 45px 80px 45px 40px;
  line-height: 1.7;
  padding: 30px 80px 30px 40px;
  font-size: 1.05rem;
  position: relative;
  margin-right: -100px;
  clip-path: polygon(0 0, 88% 0, 100% 100%, 0% 100%);
}

.image-column {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.image-column img {
  width: 115%;
  max-width: 850px;
  height: auto;
  object-fit: contain;
  clip-path: polygon(12% 0px, 100% 0px, 100% 100%, 12% 100.00%, 0% 50%);
}

.plans-section {
  padding: 30px 20px;
  display: flex;
  justify-content: center;
  max-height: 40vh;
  min-height: 500px;
}

.plans-border-container {
  max-width: 1350px;
  width: 100%;
  background-color: white;
  display: flex;
  position: relative;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
}

/* IMAGE GAUCHE (Forme Flèche >) */
.plans-image {
  flex: 0 0 40%;
  position: relative;
  overflow: hidden; 
}

.plans-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  clip-path: polygon(0 0, 85% 0, 100% 50%, 85% 100%, 0 100%);
}

/* TEXTE DROITE */
.plans-text {
  flex: 1;
  padding: 40px 50px 40px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

.plans-text h3 {
  font-weight: 700;
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: #222;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.plans-text h3:nth-of-type(2) {
  margin-top: 30px;
}

.plans-text p {
  font-size: 1rem;
  line-height: 1.5;
  color: #444;
  margin-bottom: 10px;
}

/* ============================================= RESPONSIVE ============================================== */

@media (max-width: 900px) {
  .plans-section {
    max-height: none;
    height: auto;
    padding: 40px 20px;
  }

  .plans-border-container {
    flex-direction: column; 
    height: auto;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  }

  .plans-image {
    flex: none;
    width: 100%;
    height: 400px;
  }

  .plans-image img {
    clip-path: none; 
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  .plans-text {
    width: 88%;
    padding: 30px 20px;
    text-align: center;
  }

  .laser-presentation .container {
    flex-direction: column;
    padding: 0 20px;
  }

  .text-column {
    padding-right: 0;
    margin-bottom: 40px;
  }

  .blue-block {
    margin-right: 0; 
    clip-path: none; 
    width: 88%;
    border-radius: 8px;
    padding: 20px;
  }

  .text-top p {
    margin-right: 0;
    clip-path: none;
    padding: 0 0 20px 0;
  }

  .image-column img {
    width: 100%;
    max-width: 100%;
    clip-path: none; 
    border-radius: 8px;
  }
}

@media (max-width: 768px) {
  .laser-header {
    height: 300px;
  }

  .laserHeader-content h1 {
    font-size: 2rem;
  }
  
  .laserHeader-content p {
    font-size: 1rem;
    padding: 0 10px;
  }
}
</style>
