<script setup>
import ActionsBoutons from '@/components/ActionsBoutons.vue';
import imgMif from '@/assets/madeInFrance.webp'
</script>
<template>
    <section class="video">
        <video 
        autoplay
        loop
        playsinline
        class="videolaser">
            <source src="@/assets/laser480p.webm" type="video/webm" />
            Votre navigateur ne supporte pas la vidéo.
        </video>
    </section>
    
    
    <ActionsBoutons />

    

    <section class="made-in-france">
      <div class="mif-container">
        <div class="mif-text">
          <h3>
            Choisir Cimac pour vos découpes laser de tube c’est choisir une PME
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


/*.videoText {
  position: relative;
  z-index: 2;
  margin-left: 1rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: white;
  
}*/
.video {
  position: relative;
  width: auto;
  height: 60vh;
  overflow: hidden;
}


.videolaser {
  position: absolute;
  top: 20%;
  left: 50%;
  width: 100%;
  height: 140%;
  object-fit: cover;
  object-position: 50% 30%;
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

  /* Fond neutre légèrement contrasté */
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
  height: 12rem; /* image plus grande */
  object-fit: contain;
}
/* RESPONSIVE */
@media (max-width: 768px) {
  .mif-container {
    flex-direction: column;
    text-align: center;
  }

  .mif-image img {
    height: 80px;
  }
}

@media (max-width: 768px) {
  
  .videolaser{
    height: 70vh;
  }
}

@media (max-width: 768px) {
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
</style>