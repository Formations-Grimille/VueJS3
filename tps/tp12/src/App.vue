<template>
  <div class="quizz-container">
    <Quizz :question="question" :answers="answers" @toto="onAnswer"/>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Quizz from './components/Quizz.vue';

const question = ref("Lorsqu'un pancake tombe dans la neige avant le 31 décembre, on dit qu'il est :");
const answers = ref([{
    code: 'A',
    text: 'Tombé dans la neige avant le 31 décembre'
  },
  {
    code: 'B',
    text: 'Un frizby comestible'
  },
  {
    code: 'C',
    text: 'Une Kipa surgelée'
  },
  {
    code: 'D',
    text:  'La réponse D'
  }
]);

const onAnswer = (answer) => {
  alert("Le mec a répondu :" + answer.text);
}

</script>

<style>
@import url(https://fonts.bunny.net/css?family=abeezee:400);

* {
  padding: 0;
  margin: 0;
}

body {
  font-family: 'ABeeZee', sans-serif;
  font-size: 16px;
}

</style>

<style scoped>
.quizz-container {
  width: 100%;
  height: 100vh;
  display: grid;
  place-items: center;
}
</style>