<template>
  <button type="button" class="menu-burger" @click="openMenu">
    <span></span>
  </button>
  <Header/>
  <main>
    <RouterView />
  </main>
</template>

<script setup>
import Header from '@/components/Header.vue';
import { useMenuStore } from '@/store/menuStore';

const menuStore = useMenuStore();

const openMenu = () => {
  menuStore.openMenu();
}
</script>

<style>
@import url(https://fonts.bunny.net/css?family=abeezee:400);

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  font-family: 'ABeeZee', sans-serif;
  font-size: 16px;
}

main {
  padding: 2em;
}

h1 {
  margin-bottom: 1em;
}
</style>

<style scoped>
.menu-burger {
  position: absolute;
  top: 22px; right: 22px;
  cursor: pointer;
  padding: 1em;
  background: none;
  border: none;
}

.menu-burger span{
  display: block;
  width: 30px;
  height: 3px;
  background-color: #000;
}

.menu-burger span::before, .menu-burger span::after{
  content: '';
  position: relative;
  display: block;
  width: 30px;
  height: 3px;
  background-color: #000;
}

.menu-burger span::before {
  transform: translate3d(0, -8px, 0)
}

.menu-burger span::after {
  transform: translate3d(0, 5px, 0)
}
</style>
