<template>
  <div class="alert">
    <h3><slot name="title">Message important !</slot></h3>
    <slot></slot>
  </div>
</template>

<script setup>

</script>

<style scoped>
.alert {
  padding: 2em;
  background-color: rgb(175, 65, 84, 0.8);
  border: 1px solid rgb(175, 65, 84);
  color: white;
  margin: 2em auto;
  max-width: 500px;
  border-radius: 4px;
}

h3 {
  margin-bottom: 1em;
}
</style>