<template>
  <Alert>
    <template v-slot:title>Super alerte !</template>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
  </Alert>
</template>

<script setup>
import Alert from '@/components/Alert.vue';
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

</style>