<template>
  <header :class="{ opened: menuStore.opened }">
    <div class="logo-container">
      <p id="logo">LOGO</p>
      <button type="button" @click="closeMenu">X</button>
    </div>
    <Menu />
  </header>
</template>

<script setup>
import Menu from '@/components/Menu.vue';
import { useMenuStore } from '@/store/menuStore';

const menuStore = useMenuStore();

const closeMenu = () => {
  menuStore.closeMenu();
}
</script>

<style scoped>
header {
  display: flex;
  flex-flow: column nowrap;
  position: fixed;
  top: 0; right: 0;
  display: flex;
  width: 280px;
  height: 100vh;
  padding: 1em 2em;
  background-color: #E2E2E2;
  margin-bottom: 1em;
  transform: translate3d(100%, 0, 0);
  transition: transform .3s ease-in-out;
}

header.opened {
  transform: translate3d(0, 0, 0);
  transition: transform .3s ease-in-out;
}

.logo-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

button {
  display: block;
  width: 2em;
  height: 2em;
  cursor: pointer;
}

#logo {
  font-size: 1.5rem;
}
</style>