<script setup>
import ActionsBoutons from '@/components/HomeComponents/ActionsBoutons.vue';
import imgMif from '@/assets/AccueilAssets/madeInFrance.webp'
</script>
<template>
    <section class="video">
        <video 
        autoplay
        loop
        muted
        playsinline
        class="videolaser">
            <source src="@/assets/AccueilAssets/videoAccueil.mp4" type="video/mp4" />
            Votre navigateur ne supporte pas la vidéo.
        </video>
              
        <h1 class="video-title">CIMAC : <br>Découpe laser 3D à Saint-Chamond</h1>

    </section>
    
    
    <ActionsBoutons />

    

    <section class="made-in-france">
      <div class="mif-container">
        <div class="mif-text">
          <h3>
            Choisir Cimac pour vos découpes laser de tube ou autre type de profil c’est choisir une PME
            chaudronnerie/métallerie française
          </h3>
        </div>

        <div class="mif-image">
          <img :src="imgMif" alt="Made in France" />
        </div>
      </div>
    </section>

</template>

<style scoped>

.video {
  position: relative;
  width: auto;
  height: 55vh;
  overflow: hidden;
}
.video-title {
  position: absolute;
  bottom: 15%; 
  left: 5vw;
  z-index: 2;
  color: #ffffff;
  font-size: 3rem; 
  font-weight: 800;
  letter-spacing: -1px;
  line-height: 1.1;
  max-width: 900px;
  margin: 0;
  text-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  opacity: 0;
  transform: translateY(30px);
  animation: fadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  animation-delay: 0.3s;
}

.video-title::after {
  content: "";
  display: block;
  width: 80px;
  height: 5px;
  background: #ffffff; 
  margin-top: 20px;
  border-radius: 50px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}

@keyframes fadeUp {
  0% {
    opacity: 0;
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.videolaser {
  position: absolute;
  top: 20%;
  left: 50%;
  width: 100%;
  height: 140%;
  object-fit: cover;
  object-position: 50% 25%;
  transform: translate(-50%, -50%);
}

.video::before {
  content: "";
  position: absolute;
  inset: 0;
  height: 90%;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.6) 0%,
    rgba(0, 0, 0, 0.2) 30%,
    rgba(0, 0, 0, 0.6) 100%
  );
  z-index: 1;
}
.made-in-france {
  padding: 5rem 5vw;
  margin-top: 6rem;
  background: linear-gradient(135deg, #f0f0f0, #e6e6e6);
  display: flex;
  justify-content: center;
}

.mif-container {
  width: 100%;
  max-width: 1200px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;

  /* GLASS EFFECT */
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);

  border-radius: 20px;
  padding: 3rem 4rem;

  border: 1px solid rgba(255, 255, 255, 0.6);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
}

.mif-text {
  max-width: 850px;
}

.mif-text h3 {
  font-size: 1.35rem;
  font-weight: 500;
  color: #1f1f1f;
  line-height: 1.6;
  margin: 0;
}

.mif-image img {
  height: 12rem;
  object-fit: contain;
}

@media (max-width: 900px) {
  .video-title{
    bottom: 20%;
  }
  .actions-buttons {
    gap: 2rem; 
    flex-wrap: wrap; 
  }

  .action-card {
    width: 150px;
  }
}

@media (max-width: 768px) {
  .videolaser{
    height: 70vh;
  }
  .video::before {
    height: 84%;
  }

  .video-title {
    font-size: 1.8rem;
    left: 1.5rem;
    max-width: 85%;
    letter-spacing: 0;
  }
  
  .video-title::after {
    width: 50px;
    height: 4px;
    margin-top: 15px;
  }

  .made-in-france {
    padding: 2.5rem 1.5rem;
  }

  .mif-container {
    flex-direction: column;
    text-align: center;
  }

  .mif-text h3 {
    font-size: 1rem;
  }

  .mif-image img {
    height: 5rem;
    margin-top: 1rem;
  }
}

@media (max-width: 600px) {
  .actions-buttons {
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }

  .action-card {
    width: 100%;
    max-width: 320px;
    aspect-ratio: auto; 
    height: 100px;
  }
  
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