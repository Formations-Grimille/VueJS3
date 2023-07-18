<template>
  <nav>
    <ul>
      <li>Accueil</li>
      <li>Boutique</li>
      <li>Contact</li>
      <li v-if="isAuthenticated">
        <img class="avatar" src="https://xsgames.co/randomusers/avatar.php?g=male">
        <span>Mickaël</span>
      </li>
      <li v-else>Connexion</li>
    </ul>
  </nav>
</template>

<script setup>
import { ref } from 'vue';

const isAuthenticated = ref(true);
</script>

<style scoped>
nav ul {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  list-style-type: none;
}

nav ul li {
  display: flex;
  align-items: center;
  margin: 0 1em;
}

.avatar {
  border-radius: 50%;
  width: 1.5em;
  height: 1.5em;
  margin-right: 0.5em;
}
</style>