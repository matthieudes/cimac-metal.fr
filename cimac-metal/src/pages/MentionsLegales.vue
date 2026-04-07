<script setup>
import { ref } from 'vue';

const estRevele = ref(false);
const emailCache = "Y29udGFjdEBjaW1hYy1tZXRhbC5mcg";
const emailDecrypte = ref('');

const revelerEmailRgpd = () => {
  emailDecrypte.value = atob(emailCache);
  estRevele.value = true;
}
</script>

<template>
  <div class="legal-page">
    <div class="legal-container">
      <h1>Mentions Légales</h1>
      <p class="last-update">Dernière mise à jour : 16/03/2026</p>

      <section>
        <h2>1. Éditeur du site</h2>
        <p>Le site <strong>Cimac-metal.fr</strong> est édité par :</p>
        <ul>
          <li><strong>Raison sociale :</strong> SARL Cimac</li>
          <li><strong>Forme juridique :</strong> SARL au capital de 220 000,00 Euros</li>
          <li><strong>Siège social :</strong> 11 rue Michel Rondet, ZI du clos Marquet, BP206, 42400 Saint-Chamond - France</li>
          <li><strong>SIREN :</strong> 429 313 042</li>
          <li><strong>Immatriculation :</strong> Inscrit au registre du commerce et des sociétés (RCS) sous le numéro 429 313 042 R.C.S. Saint Etienne </li>
          <li><strong>Immatriculation au registre national des entreprises (RNE) :</strong> RM 429 313 042 422</li>
          <li><strong>TVA Intracommunautaire :</strong> FR 07 429 313 042</li>
          <li><strong>Téléphone :</strong> 04 77 29 94 41</li>
          <li>
            <strong>Email : </strong>
            <span v-if="!estRevele" class="email-cache-li" @click="revelerEmailRgpd" style="font-weight: bold;"> Voir l'adresse e-mail</span>
            <span v-else class="email-li"> {{ emailDecrypte }} </span>
          </li>
        </ul>

        <h3>Assurance professionnelle et Garantie décennale</h3>
        <p>Conformément à la réglementation applicable aux artisans, l'entreprise a souscrit aux assurances professionnelles obligatoires :</p>
        <ul>
          <li><strong>Type d'assurance :</strong> Responsabilité Civile Professionnelle et Responsabilité Décennale</li>
          <li><strong>Compagnie d'assurance :</strong> AXA FRANCE</li>
          <li><strong>Coordonnées de l'assureur :</strong> 100 Route de Bourg 01390 Saint-André-de-Corcy</li>
          <li><strong>Couverture géographique :</strong> France Métropolitaine</li>
        </ul>
      </section>

      <section>
        <h2>2. Hébergement du site</h2>
        <p>Le site est hébergé par :</p>
        <ul>
          <li><strong>Hébergeur :</strong> Vercel</li>
          <li><strong>Siège social :</strong> 650 California St, San Francisco, CA 94108, États-Unis</li>
          <li><strong>Site web :</strong> <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">https://vercel.com</a></li>
        </ul>
      </section>

      <section>
        <h2>3. Propriété intellectuelle</h2>
        <p>
          L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques (notamment les photos de nos machines et réalisations).
        </p>
        <p>
          La reproduction, représentation, modification ou adaptation de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite sauf autorisation expresse du directeur de la publication.
        </p>
      </section>

      <section>
        <h2>4. Données personnelles (RGPD)</h2>
        <p>
          Le présent site web ne collecte aucune donnée personnelle de manière automatisée et ne comporte aucun formulaire de saisie. 
        </p>
        <p>
          Si vous décidez de nous contacter directement par email ou par téléphone via les coordonnées indiquées sur la page Contact, vos informations (adresse email, numéro de téléphone, nom et le contenu de votre message) seront uniquement utilisées par <strong>Cimac</strong> dans le seul but de traiter votre demande et d'y répondre. 
        </p>
        <p>
          Ces données ne sont jamais vendues, cédées à des tiers, ni utilisées à des fins de prospection commerciale non sollicitée. Conformément à la réglementation, vous disposez d'un droit d'accès, de rectification et d'effacement de ces données en nous contactant directement à 
          <strong v-if="!estRevele">
            <span class="email-cache" @click="revelerEmailRgpd">Voir l'adresse e-mail</span>
          </strong>

          <!-- Vrai lien affiché après le clic -->
          <strong v-else>
            <a :href="'mailto:' + emailDecrypte" class="email-link">{{ emailDecrypte }}</a>
          </strong>.
        </p>
      </section>

      <section>
        <h2>5. Gestion des Cookies</h2>
        <p>
          Le présent site a fait le choix de protéger la vie privée de ses utilisateurs. <strong>Nous n'utilisons aucun cookie de suivi, de profilage ou traceur publicitaire.</strong>
        </p>
        <p>
          Aucune donnée de navigation n'est collectée à votre insu lors de votre visite. Par conséquent, aucun bandeau de recueil de consentement aux cookies ne s'affiche lors de votre arrivée sur notre site, conformément aux recommandations de la CNIL.
        </p>
      </section>

    </div>
  </div>
</template>

<style scoped>
.legal-page {
  background-color: #f9fafb;
  min-height: 100vh;
  padding: 60px 20px;
  color: #333;
}

.legal-container {
  max-width: 800px;
  margin: 0 auto;
  background: white;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

h1 {
  font-size: 2.2rem;
  color: #1a1a1a;
  margin-bottom: 5px;
}

.last-update {
  font-style: italic;
  color: #666;
  margin-bottom: 40px;
  font-size: 0.9rem;
}

h2 {
  font-size: 1.4rem;
  color: #2c3e50;
  margin-top: 35px;
  margin-bottom: 15px;
  border-bottom: 2px solid #eee;
  padding-bottom: 5px;
}

p {
  line-height: 1.6;
  margin-bottom: 15px;
}

ul {
  list-style-type: none;
  padding-left: 0;
}

li {
  margin-bottom: 10px;
  line-height: 1.5;
}

.email-cache-li {
  display: inline-block;
  background-color: #f0f0f0;
  color: black;
  padding: 3px 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  cursor: pointer;
  font-size: 0.9em;
}

.email-cache {
  display: inline-block;
  position: relative;
  background-color: #f0f0f0;
  color: #f0f0f0;
  padding: 3px 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  cursor: pointer;
  font-size: 0.9em;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.email-cache:hover {
  background-color: #e0e0e0;
}

.email-link {
  color: #0056b3;  
  text-decoration: none; 
  border-bottom: 2px solid transparent;
  position: relative;
  display: inline-block;
  transition: color 0.3s ease;
}

.email-link::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px; 
  bottom: -2px;
  left: 0;
  background-color: #0056b3;
  transition: width 0.5s ease; 
}
.email-link:hover {
  color: #0056b3;
}

.email-link:hover::after {
  width: 100%;
}

@media (max-width: 600px) {
  .legal-container {
    padding: 20px;
  }
  
  h1 {
    font-size: 1.8rem;
  }
}
</style>
