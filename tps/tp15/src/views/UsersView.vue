<template>
  <div class="about">
    <h1>Liste des utilisateurs</h1>
    <div class="table-row" v-for="user in users" :key="'U-' + user.id">
      <div class="table-data">
        <img class="avatar" :src="user.avatar" :alt="`${user.firstName}'s avatar'`">
        <span>{{ user.firstname }}</span>
        <span>{{ user.lastname }}</span>
        <span class="email">{{ user.email }}</span>
        <span>{{ new Date(user.createdAt).toLocaleDateString() }}</span>
      </div>
      <div class="table-actions">
        <RouterLink :to="{ name: 'profile', params: { id : user.id }}">Voir le profil</RouterLink>
      </div>
    </div>
  </div>
</template>


<script setup>
import { faker } from '@faker-js/faker'; // npm install @faker-js/faker dans le terminal pour l'avoir :)
import { ref, onBeforeMount } from 'vue';
import { RouterLink } from 'vue-router';
const users = ref([]);

onBeforeMount(() => {
  for(let i = 0; i < 20; i++) { // Generer 20 utilisateurs
    users.value.push({
      id: faker.number.int(),
      firstname: faker.person.firstName(),
      lastname: faker.person.lastName(),
      avatar: faker.internet.avatar(),
      email: faker.internet.email(),
      createdAt: faker.date.recent()
    })
  }
});

</script>

<style scoped>

.table-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  margin: 0.5em 0;
  padding: 0.25em 0.5em;
}

.table-data {
  display: flex;
  align-items: center;
}

.table-row:nth-child(2n) {
  background-color: #D1D1D1;
}

.table-row span {
  display: block;
  width: 150px;
  text-overflow: ellipsis;
  overflow: hidden;
}

.table-row span.email {
  width: 260px;
  margin-right: 1em;
}

.avatar {
  border-radius: 50%;
  height: 2em;
  margin-right: 1em;
}
</style>
