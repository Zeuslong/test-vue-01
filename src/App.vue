<template>
<!--  <img alt="Vue logo" src="./assets/logo.png">-->
<!--  <HelloWorld msg="Welcome to Your Vue.js App"/>-->
  <div>
<!--    <page-button1></page-button1>-->
    <page-button3></page-button3>
<!--    <SenseController></SenseController>-->
    <SenseController :sense="sense_name"></SenseController>
  </div>
</template>

<script>

// import HelloWorld from './components/HelloWorld.vue'
// import HelloWorld from './components/TodoListDelete.vue'
// import pageButton3 from './components/page-button3/pageButton3.vue'
import pageButton3 from './components/page-button3/pageButton3.vue'

export default {
  name: 'App',
  components: {
    pageButton3,
  },
  data() {
    return {
      sense_name: 'chaotu'
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
