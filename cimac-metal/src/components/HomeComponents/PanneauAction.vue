<script setup>
defineProps({
  title: String,
  text: String,
  image: String,
  link: String
})
</script>

<template>
  <section class="panel">
    <div class="panel-image">
      <img :src="image" :alt="title" />
    </div>

    <div class="panel-content">
      <h3>{{ title }}</h3>
      <p>{{ text }}</p>

      <RouterLink :to="link" class="panel-button">
        En savoir plus
      </RouterLink>
    </div>
  </section>
</template>

<style scoped>
.panel {
  display: flex;
  margin-top: 3rem;
  background: #f2f2f2;
  overflow: hidden;
  max-height: 480px;
  align-items: anchor-center;

}

/* IMAGE */
.panel-image {
  width: 42%;
}

.panel-image img {
  width: 100%;
  height: 100%;
  max-height: 500px;
  object-fit: cover;
  object-position:50% 40%;
  clip-path: polygon(0px 0px,85% 3px, 70% 50%, 85% 98.80%, 0px 100%);

}

/* CONTENU */
.panel-content {
  height: 100%;
  width: 58%;
  padding: 3rem 3.5rem;
  position: relative;
}

.panel-content h3 {
  font-size: 1.6rem;
  margin-bottom: 1rem;
}

.panel-content p {
  line-height: 1.6;
  margin-bottom: 2.5rem;
  max-width: 520px;
}

/* BOUTON */
.panel-button {
  display: inline-block;
  padding: 0.75rem 2.2rem;
  background: #0b5ea8;
  color: white;
  text-decoration: none;
  font-weight: 600;
  clip-path: polygon(0 0, 92% 0, 100% 50%, 92% 100%, 0 100%);
}

@media (min-width: 2560px) {
  .panel {
    width: 1250px;
    margin-left: -5rem;
  }
  
}

@media (max-width: 900px) {
  .panel { 
    flex-direction: column;
    height: auto !important; 
    min-height: 100% !important;
    max-height: none !important; 
  }
  .panel-content {
    padding: 2rem;
    text-align: center;
  }
  .panel-image {
    width: 100%;
  }
  
  .panel-image img {
    max-height: 400px;
    object-fit: cover;
    object-position: 50% 45%;
  }
}

@media (max-width: 768px) {
  .panel {
    flex-direction: column;
  }

  .panel-image,
  .panel-content {
    width: 100%;
  }

  .panel-content::before {
    display: none;
  }

  .panel-content {
    padding: 2rem;
    text-align: center;
  }
  .panel-content p{
    padding: 1.5rem;
  }
  .panel-content h3 {
    font-size: 1.5rem; 
  }
}


</style>