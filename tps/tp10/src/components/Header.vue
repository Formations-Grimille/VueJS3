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
  flex-flow: row nowrap;
  align-items:center;
  justify-content: space-between;
  padding: 1em 2em;
  background-color: #E2E2E2;
}

#logo {
  font-size: 1.5rem;
  margin: 0;
}
</style>