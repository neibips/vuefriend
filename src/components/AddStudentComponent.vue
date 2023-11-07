<script setup>

</script>

<template>
  <div>
      <div>
        <h1>Форма добавления студента</h1>
      </div>
      <section>
        <div>
          <div>
            <input type="text" v-model="student.id" placeholder="ID student">
          </div>
          <div>
<!--            <input :value="student.name" @input="$emit('update:modelValue', $event.target.value)" />-->
            <input type="text" v-model="student.name" placeholder="Name student">
          </div>
        </div>
      </section>
    <div class="">
      <div class="">
        <div class="">
          <button v-on:click="addStudent">Сохранить</button>
          <button v-on:click="cancel">Отмена</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      student: {
        id: null,
        name: ''
      }
    }
  },
  methods: {
    addStudent: function (event) {
    axios.post('http://localhost:8080/students',
    JSON.stringify(this. student), {
  headers: {'Content-Type': 'application/json; charset=utf-8'}
• then (response => {
    console.log ("student added"); this.$router.push ('/students');
•catch (error = { alert (error) ;
    } ;
    cancel: function (event) {
      this.Srouter•push('/students');
｝
  }
}
</script>
<style scoped>
</style>
