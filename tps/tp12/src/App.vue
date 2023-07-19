<template>
  <div class="quizz-container">
    <Quizz :question="question" :answers="answers" @answer="onAnswer"/>
    <p v-if="selectedAnswer !== undefined && isRightAnswer">Bravo, il s'agit de la bonne réponse.</p>
    <p v-else-if="selectedAnswer !== undefined  && !isRightAnswer">Ce n'est pas la bonne réponse</p>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import Quizz from './components/Quizz.vue';

const selectedAnswer = ref();
const question = ref("Lorsqu'un pancake tombe dans la neige avant le 31 décembre, on dit qu'il est :");
const answers = ref([{
    code: 'A',
    text: 'Tombé dans la neige avant le 31 décembre',
    rightAnswer: false
  },
  {
    code: 'B',
    text: 'Un frizby comestible',
    rightAnswer: false
  },
  {
    code: 'C',
    text: 'Une Kipa surgelée',
    rightAnswer: true
  },
  {
    code: 'D',
    text:  'La réponse D',
    rightAnswer: false
  }
]);

const onAnswer = (code) => {
  selectedAnswer.value = answers.value.find((a) => a.code === code);
}

const isRightAnswer = computed(() => {
  return selectedAnswer.value !== undefined && selectedAnswer.value.rightAnswer;
});
</script>

<style>
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