<template>
 <div class="page-button">
   <span>2222121212121</span>
   <div>
     <button @click="test1">点击我</button>
   </div>
 </div>
</template>

<script>
import {pageButton2} from './page-button2.js'

export default {
  name: "pageButton2",
  methods:{
    test1(){
      pageButton2(1231)
    }
  }
}
</script>

<style scoped>
.page-button span {
  color: red;
}
</style>
