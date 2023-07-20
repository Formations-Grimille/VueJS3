<template>
  <div class="profile">
    <h1>Profil n°{{ id }}</h1>
    <p>Théoriquement, nous devrions faire une requête à l'API pour récupérer les informations du profil utilisateurs en passant l'id numéro {{ id }}</p>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const id = computed(() => {
  return useRoute().params.id ?? 0
});
</script>

