<template>
  <nav>
    <ul>
      <li><RouterLink :to="{name: 'dashboard'}">Dashboard</RouterLink></li>
      <li><RouterLink :to="{name: 'users'}">Utilisateurs</RouterLink></li>
    </ul>
  </nav>
</template>

<style scoped>
nav ul {
  list-style-type: none;
}

nav ul li {
  display: flex;
  align-items: center;
  margin: 1em 0;
}

nav ul li a {
  color: #1C1C1C;
  text-decoration: none;
}

.avatar {
  border-radius: 50%;
  width: 1.5em;
  height: 1.5em;
  margin-right: 0.5em;
}
</style>