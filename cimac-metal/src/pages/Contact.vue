<script setup>
import { onMounted } from 'vue';
import logoCimac from '@/assets/Logo/LogoCimac.webp';

onMounted(() => {
  // On fabrique l'URL complète de l'image (ex: https://votre-site.fr/assets/LogoCimac.1234.webp)
  // window.location.origin récupère automatiquement l'adresse de votre site
  const logoUrlComplete = window.location.origin + logoCimac;
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.text = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "SARL Cimac",
    "image": logoUrlComplete,
    "description": "Atelier de chaudronnerie et découpe laser à Saint-Chamond.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "11 Rue Michel Rondet",
      "addressLocality": "Saint-Chamond",
      "postalCode": "42400",
      "addressCountry": "FR"
    },
    "telephone": "+33477299441",
    "email": "contact@cimac-metal.fr",
    "openingHours": [
      "Mo-Th 07:00-16:00",
      "Fr 07:00-12:00"
    ]
  });
  document.head.appendChild(script);
});
</script>

<template>
  <div class="contact-page">

    <section class="contact-cover-image">
      <img src="@/assets/ContactAssets/devanture2.webp" alt="SARL Cimac - Atelier chaudronnerie" />
    </section>

    <section class="contact-content">
      <div class="layout-grid">

        <div class="blue-card">
          <p class="subtitle">Contactez nous !</p>
          <h1>Faites votre<br>demande de devis<br>dès à présent !</h1>
          <p class="description">Nous répondrons dès que possible</p>
        </div>

        <div class="info-columns">
          
          <div class="card">
            <h2 class="card-title">
              <span class="vertical-line"></span> Adresse et horaires
            </h2>
            
            <div class="card-item">
              <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              
              <a href="https://maps.google.com/?q=Cimac+11+Rue+Michel+Rondet,+42400+Saint-Chamond"
                 target="_blank"
                 rel="noopener noreferrer"
                 class="hover-link">
                11 Rue Michel Rondet, 42400 Saint-Chamond
              </a>
            </div>

            <div class="card-item align-top">
              <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              <div>
                <p>Du Lundi au jeudi : 7h - 16h</p>
                <p>Le vendredi : 7h - 12h</p>
              </div>
            </div>
          </div>

          <div class="card">
            <h2 class="card-title">
              <span class="vertical-line"></span> Contact
            </h2>

            <div class="card-item">
              <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              <a href="tel:0477299441" class="hover-link">04 77 29 94 41</a>
            </div>

            <div class="card-item">
              <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              <a href="mailto:contact@cimac-metal.fr" class="hover-link">contact@cimac-metal.fr</a>
            </div>
          </div>

        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.contact-cover-image img {
  width: 100%;
  height: 35vh;
  object-fit: cover;
  display: block;
}

.contact-content {
  padding: 60px 20px;
  background-color: #fafafa;
}

.layout-grid {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  align-items: stretch;
}

.blue-card {
  background-color: #0056b3; 
  color: white;
  font-size: 1.1rem;
  padding: 50px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.blue-card .subtitle {
  font-size: 1.2rem;
  margin-bottom: 20px;
}

.blue-card h2 {
  font-size: 2.2rem;
  font-weight: bold;
  line-height: 1.3;
  margin-bottom: 30px;
}

.blue-card .description {
  font-size: 1.2rem;
  opacity: 0.9;
}

.info-columns {
  display: flex;
  flex-direction: column;
  gap: 30px; 
}

.card {
  background: white;
  border-radius: 8px;
  padding: 40px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  flex: 1; 
}

.card-title {
  display: flex;
  align-items: center;
  color: #0056b3;
  font-size: 1.3rem;
  margin-bottom: 25px;
  font-weight: bold;
}

.vertical-line {
  display: inline-block;
  width: 4px;
  height: 20px;
  background-color: #0056b3;
  margin-right: 15px;
  border-radius: 2px;
}

.card-item {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  color: #555;
  font-size: 1rem;
}

.card-item.align-top {
  align-items: flex-start;
}

.card-item p {
  margin: 0 0 5px 0;
}

.card-item .icon {
  width: 20px;
  height: 20px;
  margin-right: 15px;
  color: #0056b3;
  flex-shrink: 0;
}

.hover-link {
  color: #555;
  text-decoration: none;
  position: relative;
  display: inline-block;
  transition: color 0.3s ease;
}

.hover-link::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px; 
  bottom: -2px;
  left: 0;
  background-color: #0056b3;
  transition: width 0.5s ease; 
}


.hover-link:hover {
  color: #0056b3;
}

.hover-link:hover::after {
  width: 100%;
}

@media (max-width: 900px) {
  .layout-grid {
    grid-template-columns: 1fr; /* Les colonnes passent l'une sous l'autre */
  }
}
</style>
