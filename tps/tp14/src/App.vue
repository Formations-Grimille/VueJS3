<template>
  <Header/>
  <main>
    <RouterView />
  </main>
</template>

<script setup>
import Header from '@/components/Header.vue';
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
  width: calc(100% - 280px);
  margin-left: 280px;
}

h1 {
  margin-bottom: 1em;
}
</style>
