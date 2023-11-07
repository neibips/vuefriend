<script setup>

// const loading = ref(true);
// const students = ref(null);

</script>

<template>
<div class="" v-if="loading">Loading...</div>
  <div class="" v-else>
    <div class="">
      <div class="">
        <h1>Список студентов</h1>
      </div>
      <div class="">
        <div class="">Номер студента</div>
        <div class="">Фамилия имя отчество</div>
      </div>
      <div class="" v-for="student in students">
        <div class="">
          {{student.id}}
        </div>
        <div class="">
          {{student.name}}
        </div>
      </div>
      <div class="">
        <button v-on:click="addStudent">Добавить</button>
      </div>
    </div>
  </div>
</template>

<script>
 import axios from "axios";

 export default {
   data() {
     return {
       loading: true,
       students: null,
     }
   },
   mounted() {
     axios
         .get('http://localhost:8080', {mode: 'no-cors'})
         .then((r) => this.student = r.data)
         .finally(() => this.loading = false)
   },
   methods: {
     addStudent: function () {
       this.$router.push('/students');
     }
   }
 }
</script>

<style scoped>

</style>
