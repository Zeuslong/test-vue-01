<template>
 <div class="page-button">
   <span>33333333</span>
   <page-button1></page-button1>
   <page-button2></page-button2>
 </div>
</template>


<script>
import pageButton1 from "@/components/page-button/pageButton1";
import pageButton2 from "@/components/page-button2/pageButton2";
export default {
  name: "pageButton3",
  components:{
    pageButton1,
    pageButton2
  }
}
</script>

<style scoped>
.page-button span {
  color: #5555e0;
}
</style>
