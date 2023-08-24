//导入封装好的组件
import PageButton from "../components/page-button/pageButton1.vue"
import PageButton2 from "../components/page-button2/pageButton2.vue"
import PageButton3 from "../components/page-button3/pageButton3.vue"

//组件数组
const components = [PageButton,PageButton2,PageButton3];

//批量组件注册
const install =  function (Vue){
    components.forEach((component) => {
        Vue.component(component.name,component)
    });
};
//将组件暴露出去
export default install;
