<template>
  <div class="error-page">
    <h1>404</h1>
    <h2>Oups ! Il y a eu un problème lors du chargement de la page...</h2>
    <p>La page que vous recherchez n'existe pas ou a été déplacée.</p>
    
    <router-link to="/" class="back-button">
      Retour à l'accueil
    </router-link>
  </div>
</template>

<style scoped>
.error-page {
  text-align: center;
  padding: 100px 20px;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h1 {
  font-size: 80px;
  margin: 0;
  color: #333;
}

.back-button {
  margin-top: 30px;
  padding: 10px 20px;
  background-color: #333;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  transition: background 0.3s;
}

.back-button:hover {
  background-color: #555;
}
</style>
