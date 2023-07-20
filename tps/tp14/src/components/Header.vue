<template>
  <header>
    <p id="logo">LOGO</p>
    <Menu />
  </header>
</template>

<script setup>
import Menu from '@/components/Menu.vue';
</script>

<style scoped>
header {
  display: flex;
  flex-flow: column nowrap;
  position: fixed;
  top: 0; left: 0;
  display: flex;
  width: 280px;
  height: 100vh;
  padding: 1em 2em;
  background-color: #E2E2E2;
}

#logo {
  font-size: 1.5rem;
  margin-bottom: 1em;
}
</style>