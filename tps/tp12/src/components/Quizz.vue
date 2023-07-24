<template>
  <div class="quizz">
    <h3 class="question">{{ question }}</h3>
      <ul class="answers">
        <li v-for="answer in answers" :key="answer.code" @click="clickedOnAnswer(answer)">{{ answer.text }}</li>
      </ul>
  </div>
</template>

<script setup>

const props = defineProps({
  question: {
    type: String,
    required: true
  },
  answers: {
    type: Object,
    required: true
  }
});

const emits = defineEmits(['toto']);

const clickedOnAnswer = (answer) => {
  emits('toto', answer);
}

</script>

<style scoped>
.quizz {
  max-width: 700px;
  background-color: #F0F0F0;
  padding: 2em;
}

.question {
  margin-bottom: 2em;
}

.answers {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  font-size: 0.9rem;
}

.answers li {
  width: calc(50% - 5em);
  padding: 1em 2em;
  background-color: #D1D1D1;
  border-radius: 2em;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  margin: 0.5em;
  cursor: pointer;
  user-select: none;
}

.answers li:nth-child(n) {
  margin-right: 0.5em;
}

.answers li:nth-child(2n) {
  margin-left: 0.5em;
}
</style>