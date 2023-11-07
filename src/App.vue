<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import AddStudentComponent from "@/components/AddStudentComponent.vue";
import StudentsComponent from "@/components/studentsComponent.vue";
</script>

<template>
<!--  <main>-->
<!--    <students-component />-->
<!--  </main>-->
  <router-view></router-view>
</template>

<style scoped>
</style>
