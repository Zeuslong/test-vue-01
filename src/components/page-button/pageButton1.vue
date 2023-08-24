<template>
 <div class="page-button">
   <span>1515151515454454</span>
   <div>
     <button @click="test">点击我</button>
   </div>
 </div>
</template>

<script>
import {pageButton} from './page-button.js'
export default {
  name: "pageButton1",
  methods:{
    test(){
      pageButton(1231)
    }
  }
}
</script>

<style scoped>
.page-button span {
  color: blue;
}
</style>
