<template>
  <div class="hello">
    <h1>dagadgawe</h1>
    <el-button type="primary" @click="handleClick">
       上传excel信息------------
      <i class="el-icon-upload el-icon--right"></i>
    </el-button>
    <input
        type="file"
        class="csv-file-input"
        :accept="SheetJSFT"
        ref="input"
        @change="uploadFileToParse"
    />

    <el-checkbox
        border
        size="small"
        v-model="firstAsHeader"
        @change="rebuildData"
        style="margin-left: 20px;"
    >
     展示首航属性
    </el-checkbox>
    <span>请上传excel、csv格式文件，支持UTF-8编码格式</span>

    <el-table
        :data="tableData"
        style="width: 100%">
      <el-table-column prop="ip" label="序号" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
    </el-table>
  </div>
</template>
<script>
  import * as XLSX from 'xlsx';
  import {getHeaderRow} from "@/components/utils";
// import * as lodash from "core-js";


export default {
  name: 'CsvParse',
  data() {
    return {
      SheetJSFT: ['xlsx', 'xlsb', 'xlsm', 'xls', 'xml', 'csv']
          .map(function(x) {
            return '.' + x;
          })
          .join(','),
      firstAsHeader: true,
      tempResult: null,
      tableData:[{'ip': 'ddd','name':'ddd','CCC':'dfewf'},]
    };
  },
  props: {
    config: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  mounted() {
    console.log(XLSX)
  },
  methods: {
    handleClick() {
      console.log("handleClick methods");
      this.$refs.input.value = null;
      this.$refs.input.click();
    },
    uploadFileToParse(e) {
      console.log("uploadFileToParse methods")
      let files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      console.log("uploadFileToParse methods")
      //获取  到了files信息
      console.log("uploadFileToParse methods----",files[0])
      return this.parseFile(files[0], e);
    },
    to_json(workbook) {
      // 3. 获取第一张表格(工作簿)名称
      const firstSheetName = workbook.SheetNames[0];
      console.log("firstSheetName-----",firstSheetName)

      // 4. 只读取 Sheet1（第一张表格）的数据
      const worksheet = workbook.Sheets[firstSheetName]
      console.log("worksheet-----",worksheet)

      // 5. 解析数据表头
      const header = getHeaderRow(worksheet)
      console.log("hader信息：",header)
      // 6. 解析数据体
      const results = XLSX.utils.sheet_to_json(worksheet)
      console.log("解析数据体中的内容：",results);
      //7、将请求体中的数据放入
      const list1 = results[0];
      console.log("list1",list1);
      console.log("list1--params",list1.params);
      console.log("list1--type",list1.type);
      console.log("list1--value",list1.value);

      if (results.length>0){
        console.log("ageawg长度:",results.length);
      }
      // // 7. 传入解析之后的数据
      // generateData({ header, results })
      // const generateData = (excelData) => {
      //   loading.value = false
      //   dropText.value = '拖拽一个文件'
      //   props.uploadSuccess && props.uploadSuccess(excelData)
      // };


      var result = {};
      workbook.SheetNames.forEach(function(sheetName) {
        var roa = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], {
          header: 1,
        });
        if (roa.length) {
          roa = roa.filter(item => item.length !== 0);
          result[sheetName] = roa;
        }
      });
      this.tempResult = result;
      return this.useFirstRowAsPropName(result);
    },
    rebuildData() {
      this.tempResult &&
      this.$emit('complete', this.useFirstRowAsPropName(this.tempResult));
    },
    useFirstRowAsPropName(dataArrayObj) {
      if (this.firstAsHeader && dataArrayObj) {
        let result = {};
        let sheets = Object.keys(dataArrayObj);
        sheets.forEach( sheetName => {
          let sheetArray = dataArrayObj[sheetName];
          let firstRow = sheetArray.shift(); // 首行作为属性名
          // 循环数据中的每一行
          let resultObj = [];
          // eslint-disable-next-line no-unused-vars
          sheetArray.forEach((item, rowIndex) => {
            // 循环每个单元格
            let tempObj = {};
            for (let i = 0; i < firstRow.length; i++) {
              // 将单元格放在对应位置上
              tempObj[firstRow[i]] = item[i];
            }
            resultObj.push(tempObj);
          });
          result[sheetName] = resultObj;
          // 结束处理后，把首行加上；
          sheetArray.unshift(firstRow);
        });
        console.log("useFirstRowAsPropName--",result)
        return result;
      } else {
        return dataArrayObj;
      }
    },
    // eslint-disable-next-line no-unused-vars
    parseFile(file, e) {
      var vm = this;
      var bol = false;
      var fileReader = new FileReader();
      fileReader.onload = function(ev) {
        try {
          var data = ev.target.result;
          // 1. 获取解析到的数据
          var data1 = e.target.result;
          console.log("data1: " + data1);

          var workbook = XLSX.read(data, {
            type: 'binary',
          });
        } catch (e) {
          console.log("打印出错误信息   ",e)
          window.$message({
            message: this.$t('文件类型不正确'),
            type: 'error',
            customClass: 'g-message',
          });
          return;
        }
        vm.$emit('complete', vm.to_json(workbook));
      };
      bol =
          file.name.split('.').reverse()[0] == 'txt' ||
          file.name.split('.').reverse()[0] == 'csv'; //判断文件类型
      if (bol) {
        // 将文件读取为文本
        fileReader.readAsText(file, 'utf-8');
      } else {
        //将文件读取为二进制字符串
        fileReader.readAsBinaryString(file);
      }
    },
  },
};


</script>
<style lang="less" scoped>
.csv-file-input {
  display: none;
}

.excel-csv-parser {
  display: flex;

  span {
    flex-shrink: 0;
    flex-wrap: nowrap;
    margin-left: 20px;
    color: #aaa;
  }
}
</style>














<!--<template>-->
<!--  <div class="hello">-->
<!--    <div>-->
<!--      <div>-->
<!--        <el-button type="primary" @click="uploadExcel">点击上传</el-button>-->
<!--      </div>-->
<!--      <input-->
<!--          ref="inputRef"-->
<!--          style="display: none"-->
<!--          type="file"-->
<!--          accept=".xlsx, .xls"-->
<!--          @change="inputChange"-->
<!--      />-->
<!--      <div-->
<!--          class="drop"-->
<!--          @drop.stop.prevent="handleDrop"-->
<!--          @dragover.stop.prevent="handleDragover"-->
<!--          @dragleave.stop.prevent="dropText = '拖拽一个文件'"-->
<!--      >-->
<!--        <span>{{ dropText }}</span>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->


<!--<script setup>-->
<!--import { ref, defineProps } from 'vue'-->
<!--import XLSX from 'xlsx'-->
<!--import { getHeaderRow } from './utils'-->
<!--const props = defineProps({-->
<!--  beforeUpload: Function,-->
<!--  uploadSuccess: Function-->
<!--})-->
<!--const inputRef = ref(null)-->
<!--const dropText = ref('拖拽一个文件')-->
<!--const loading = ref(false)-->
<!--const uploadExcel = () => {-->
<!--  console.log("上传文件完毕")-->
<!--  inputRef.value.click()-->
<!--}-->
<!--const inputChange = (e) => {-->
<!--  console.log("dafdgasdgadsga")-->
<!--  const files = e.target.files[0]-->
<!--  if (!files) return-->
<!--  uploadFun(files)-->
<!--}-->
<!--const uploadFun = (files) => {-->
<!--  // 解决同一个文件第二次上传不触发问题-->
<!--  inputRef.value.value = ''-->
<!--  if (!props.beforeUpload) {-->
<!--    readerData(files)-->
<!--  }-->
<!--  if (props.beforeUpload(files)) {-->
<!--    readerData(files)-->
<!--  } else {-->
<!--    loading.value = false-->
<!--    dropText.value = '拖拽一个文件'-->
<!--  }-->
<!--}-->
<!--const readerData = (files) => {-->
<!--  loading.value = true-->
<!--  // eslint-disable-next-line no-unused-vars-->
<!--  return new Promise((resolve, reject) => {-->
<!--    // https://developer.mozilla.org/zh-CN/docs/Web/API/FileReader-->
<!--    const reader = new FileReader()-->
<!--    // 该事件在读取操作完成时触发-->
<!--    // https://developer.mozilla.org/zh-CN/docs/Web/API/FileReader/onload-->
<!--    reader.onload = (e) => {-->
<!--      // 1. 获取解析到的数据-->
<!--      console.log("gawegaewgaew")-->
<!--      const data = e.target.result-->
<!--      // 2. 利用 XLSX 对数据进行解析-->
<!--      const workbook = XLSX.read(data, { type: 'array' })-->
<!--      // const workbook = XLSX.read(data, { type: 'array' })-->
<!--      // 3. 获取第一张表格(工作簿)名称-->
<!--      const firstSheetName = workbook.SheetNames[0]-->
<!--      // 4. 只读取 Sheet1（第一张表格）的数据-->
<!--      const worksheet = workbook.Sheets[firstSheetName]-->
<!--      // 5. 解析数据表头-->
<!--      const header = getHeaderRow(worksheet)-->
<!--      // 6. 解析数据体-->
<!--      const results = XLSX.utils.sheet_to_json(worksheet)-->
<!--      // 7. 传入解析之后的数据-->
<!--      generateData({ header, results })-->
<!--      // 8. 异步完成-->
<!--      resolve()-->
<!--      // 启动读取指定的 Blob 或 File 内容-->
<!--    }-->
<!--    reader.readAsArrayBuffer(files)-->
<!--  })-->
<!--}-->
<!--const generateData = (excelData) => {-->
<!--  loading.value = false-->
<!--  dropText.value = '拖拽一个文件'-->
<!--  props.uploadSuccess && props.uploadSuccess(excelData)-->
<!--}-->

<!--// 拖拽-->
<!--/**-->
<!-- * 拖拽文本释放时触发-->
<!-- */-->
<!--const handleDrop = (e) => {-->
<!--  // 上传中跳过-->
<!--  if (loading.value) return-->
<!--  dropText.value = '上传中'-->
<!--  const files = e.dataTransfer.files-->
<!--  if (files.length !== 1) {-->
<!--    dropText.value = '拖拽一个文件'-->
<!--    loading.value = false-->
<!--    return-->
<!--  }-->
<!--  const rawFile = files[0]-->
<!--  // 触发上传事件-->
<!--  uploadFun(rawFile)-->
<!--}-->

<!--/**-->
<!-- * 拖拽悬停时触发-->
<!-- */-->
<!--const handleDragover = (e) => {-->
<!--  // https://developer.mozilla.org/zh-CN/docs/Web/API/DataTransfer/dropEffect-->
<!--  // 在新位置生成源项的副本-->
<!--  e.dataTransfer.dropEffect = 'copy'-->
<!--  dropText.value = '可以放手了'-->
<!--}-->
<!--</script>-->

<!--<style scoped lang="scss">-->
<!--.drop {-->
<!--  width: 300px;-->
<!--  height: 300px;-->
<!--  border: 1px dashed #ccc;-->
<!--}-->
<!--</style>-->

<!--&lt;!&ndash;<script>&ndash;&gt;-->
<!--&lt;!&ndash;import XLSX from 'xlsx';&ndash;&gt;-->
<!--&lt;!&ndash;export default {&ndash;&gt;-->
<!--&lt;!&ndash;  name:"hello",&ndash;&gt;-->
<!--&lt;!&ndash;  methods: {&ndash;&gt;-->
<!--&lt;!&ndash;    uploadUrl: function() {&ndash;&gt;-->
<!--&lt;!&ndash;      return (&ndash;&gt;-->
<!--&lt;!&ndash;          "/fanxing/import/batchInsertShops" +&ndash;&gt;-->
<!--&lt;!&ndash;          "?businessName=" +&ndash;&gt;-->
<!--&lt;!&ndash;          this.businessName +&ndash;&gt;-->
<!--&lt;!&ndash;          "&businessStatus=" +&ndash;&gt;-->
<!--&lt;!&ndash;          this.businessStatus +&ndash;&gt;-->
<!--&lt;!&ndash;          "&businessType=" +&ndash;&gt;-->
<!--&lt;!&ndash;          this.businessType&ndash;&gt;-->
<!--&lt;!&ndash;      );&ndash;&gt;-->
<!--&lt;!&ndash;    },&ndash;&gt;-->
<!--&lt;!&ndash;    // eslint-disable-next-line no-unused-vars&ndash;&gt;-->
<!--&lt;!&ndash;    uploadSuccess(response, file, fileList) {&ndash;&gt;-->
<!--&lt;!&ndash;      if (response.status) {&ndash;&gt;-->
<!--&lt;!&ndash;        alert("文件导入成功");&ndash;&gt;-->
<!--&lt;!&ndash;      } else {&ndash;&gt;-->
<!--&lt;!&ndash;        alert("文件导入失败");&ndash;&gt;-->
<!--&lt;!&ndash;      }&ndash;&gt;-->
<!--&lt;!&ndash;    },&ndash;&gt;-->
<!--&lt;!&ndash;    // eslint-disable-next-line no-unused-vars&ndash;&gt;-->
<!--&lt;!&ndash;    uploadFalse(response, file, fileList) {&ndash;&gt;-->
<!--&lt;!&ndash;      alert("文件上传失败！");&ndash;&gt;-->
<!--&lt;!&ndash;    },&ndash;&gt;-->
<!--&lt;!&ndash;    // 上传前对文件的大小的判断&ndash;&gt;-->
<!--&lt;!&ndash;    beforeAvatarUpload(file) {&ndash;&gt;-->
<!--&lt;!&ndash;      const extension = file.name.split(".")[1] === "xls";&ndash;&gt;-->
<!--&lt;!&ndash;      const extension2 = file.name.split(".")[1] === "xlsx";&ndash;&gt;-->
<!--&lt;!&ndash;      const extension3 = file.name.split(".")[1] === "doc";&ndash;&gt;-->
<!--&lt;!&ndash;      const extension4 = file.name.split(".")[1] === "docx";&ndash;&gt;-->
<!--&lt;!&ndash;      const isLt2M = file.size / 1024 / 1024 < 10;&ndash;&gt;-->
<!--&lt;!&ndash;      if (!extension && !extension2 && !extension3 && !extension4) {&ndash;&gt;-->
<!--&lt;!&ndash;        alert("上传模板只能是 xls、xlsx、doc、docx 格式!");&ndash;&gt;-->
<!--&lt;!&ndash;      }&ndash;&gt;-->
<!--&lt;!&ndash;      if (!isLt2M) {&ndash;&gt;-->
<!--&lt;!&ndash;        console.log("上传模板大小不能超过 10MB!");&ndash;&gt;-->
<!--&lt;!&ndash;      }&ndash;&gt;-->
<!--&lt;!&ndash;      return extension || extension2 || extension3 || (extension4 && isLt2M);&ndash;&gt;-->
<!--&lt;!&ndash;    },&ndash;&gt;-->
<!--&lt;!&ndash;    submitUpload() {&ndash;&gt;-->
<!--&lt;!&ndash;      if (this.businessType != null) {&ndash;&gt;-->
<!--&lt;!&ndash;        //触发组件的action&ndash;&gt;-->
<!--&lt;!&ndash;        this.$refs.upload.submit();&ndash;&gt;-->
<!--&lt;!&ndash;      }&ndash;&gt;-->
<!--&lt;!&ndash;      if (this.businessType == null) {&ndash;&gt;-->
<!--&lt;!&ndash;        this.businessType = "businessType不能为空";&ndash;&gt;-->
<!--&lt;!&ndash;      }&ndash;&gt;-->
<!--&lt;!&ndash;    },&ndash;&gt;-->
<!--&lt;!&ndash;    handleRemove(file, fileList) {&ndash;&gt;-->
<!--&lt;!&ndash;      console.log(file, fileList);&ndash;&gt;-->
<!--&lt;!&ndash;    },&ndash;&gt;-->
<!--&lt;!&ndash;    handlePreview(file) {&ndash;&gt;-->
<!--&lt;!&ndash;      if (file.response.status) {&ndash;&gt;-->
<!--&lt;!&ndash;        alert("此文件导入成功");&ndash;&gt;-->
<!--&lt;!&ndash;      } else {&ndash;&gt;-->
<!--&lt;!&ndash;        alert("此文件导入失败");&ndash;&gt;-->
<!--&lt;!&ndash;      }&ndash;&gt;-->
<!--&lt;!&ndash;    }&ndash;&gt;-->
<!--&lt;!&ndash;  }&ndash;&gt;-->
<!--&lt;!&ndash;}&ndash;&gt;-->

<!--&lt;!&ndash;// export default {&ndash;&gt;-->
<!--&lt;!&ndash;//   name: "ExportImport",&ndash;&gt;-->
<!--&lt;!&ndash;//   props: {&ndash;&gt;-->
<!--&lt;!&ndash;//     // eslint-disable-next-line vue/require-valid-default-prop&ndash;&gt;-->
<!--&lt;!&ndash;//     headerTitle: { type: Array, default: [] }&ndash;&gt;-->
<!--&lt;!&ndash;//   },&ndash;&gt;-->
<!--&lt;!&ndash;//   data() {&ndash;&gt;-->
<!--&lt;!&ndash;//     return {&ndash;&gt;-->
<!--&lt;!&ndash;//       fileList: [],&ndash;&gt;-->
<!--&lt;!&ndash;//       file: null&ndash;&gt;-->
<!--&lt;!&ndash;//     };&ndash;&gt;-->
<!--&lt;!&ndash;//   },&ndash;&gt;-->
<!--&lt;!&ndash;//   methods: {&ndash;&gt;-->
<!--&lt;!&ndash;//     readFile(file) {&ndash;&gt;-->
<!--&lt;!&ndash;//       //文件读取&ndash;&gt;-->
<!--&lt;!&ndash;//       return new Promise(resolve => {&ndash;&gt;-->
<!--&lt;!&ndash;//         let reader = new FileReader();&ndash;&gt;-->
<!--&lt;!&ndash;//         reader.readAsBinaryString(file); //以二进制的方式读取&ndash;&gt;-->
<!--&lt;!&ndash;//         reader.onload = ev => {&ndash;&gt;-->
<!--&lt;!&ndash;//           resolve(ev.target.result);&ndash;&gt;-->
<!--&lt;!&ndash;//         };&ndash;&gt;-->
<!--&lt;!&ndash;//       });&ndash;&gt;-->
<!--&lt;!&ndash;//     },&ndash;&gt;-->
<!--&lt;!&ndash;//     // eslint-disable-next-line no-unused-vars&ndash;&gt;-->
<!--&lt;!&ndash;//     handleRemove(file, fileList) {&ndash;&gt;-->
<!--&lt;!&ndash;//       this.file = null;&ndash;&gt;-->
<!--&lt;!&ndash;//     },&ndash;&gt;-->
<!--&lt;!&ndash;//     handleExceed(files, fileList) {&ndash;&gt;-->
<!--&lt;!&ndash;//       if (fileList.length > 1) {&ndash;&gt;-->
<!--&lt;!&ndash;//         fileList.splice(0, 1);&ndash;&gt;-->
<!--&lt;!&ndash;//         this.$message.error("只能上传一个文件");&ndash;&gt;-->
<!--&lt;!&ndash;//       }&ndash;&gt;-->
<!--&lt;!&ndash;//     },&ndash;&gt;-->
<!--&lt;!&ndash;//     // eslint-disable-next-line no-unused-vars&ndash;&gt;-->
<!--&lt;!&ndash;//     beforeRemove(file, fileList) {&ndash;&gt;-->
<!--&lt;!&ndash;//       return this.$confirm(`确定移除 ${file.name}？`);&ndash;&gt;-->
<!--&lt;!&ndash;//     },&ndash;&gt;-->
<!--&lt;!&ndash;//     handleChange(file, fileList) {&ndash;&gt;-->
<!--&lt;!&ndash;//       this.file = file;&ndash;&gt;-->
<!--&lt;!&ndash;//       if (fileList.length > 0) {&ndash;&gt;-->
<!--&lt;!&ndash;//         this.fileList = [fileList[fileList.length - 1]]; //这一步，是 展示最后一次选择文件&ndash;&gt;-->
<!--&lt;!&ndash;//       }&ndash;&gt;-->
<!--&lt;!&ndash;//     },&ndash;&gt;-->
<!--&lt;!&ndash;//     async handle() {&ndash;&gt;-->
<!--&lt;!&ndash;//       let file = this.file?.raw;&ndash;&gt;-->
<!--&lt;!&ndash;//       if (!this.file) {&ndash;&gt;-->
<!--&lt;!&ndash;//         console.log("文件打开失败");&ndash;&gt;-->
<!--&lt;!&ndash;//         return;&ndash;&gt;-->
<!--&lt;!&ndash;//       } else {&ndash;&gt;-->
<!--&lt;!&ndash;//         let data = await this.readFile(file);&ndash;&gt;-->
<!--&lt;!&ndash;//         let workbook = XLSX.read(data, { type: "binary" }); //解析二进制格式数据&ndash;&gt;-->
<!--&lt;!&ndash;//         let resultArr = [];&ndash;&gt;-->
<!--&lt;!&ndash;//         for (let i = 0; i < workbook.SheetNames.length; i++) {&ndash;&gt;-->
<!--&lt;!&ndash;//           let worksheet = workbook.Sheets[workbook.SheetNames[i]]; //获取第i个Sheet&ndash;&gt;-->
<!--&lt;!&ndash;//           let headerRow = this.headerTitle[i]; // 获取第i个Sheet的表格头参数&ndash;&gt;-->
<!--&lt;!&ndash;//           const sheet2JSONOpts = {&ndash;&gt;-->
<!--&lt;!&ndash;//             defval: "" // 给defval赋值为空的字符串&ndash;&gt;-->
<!--&lt;!&ndash;//           };&ndash;&gt;-->
<!--&lt;!&ndash;//           let sheetData = XLSX.utils.sheet_to_json(worksheet, sheet2JSONOpts); // 获取当期Sheet中数据&ndash;&gt;-->
<!--&lt;!&ndash;//&ndash;&gt;-->
<!--&lt;!&ndash;//           for (let tIdx = 0; tIdx < sheetData.length; tIdx++) {&ndash;&gt;-->
<!--&lt;!&ndash;//             for (let RowIdx = 0; RowIdx < headerRow.length; RowIdx++) {&ndash;&gt;-->
<!--&lt;!&ndash;//               let label = headerRow[RowIdx].dataIndex; // 传给服务端字段&ndash;&gt;-->
<!--&lt;!&ndash;//               let hTitleName = headerRow[RowIdx].title; // 表格中表头展示的名字&ndash;&gt;-->
<!--&lt;!&ndash;//               // eslint-disable-next-line no-unused-vars&ndash;&gt;-->
<!--&lt;!&ndash;//               Object.keys(sheetData[tIdx]).forEach((key, item) => {&ndash;&gt;-->
<!--&lt;!&ndash;//                 if (key.includes(hTitleName)) {&ndash;&gt;-->
<!--&lt;!&ndash;//                   sheetData[tIdx][label] = sheetData[tIdx][key];&ndash;&gt;-->
<!--&lt;!&ndash;//                   delete sheetData[tIdx][key];&ndash;&gt;-->
<!--&lt;!&ndash;//                 }&ndash;&gt;-->
<!--&lt;!&ndash;//               });&ndash;&gt;-->
<!--&lt;!&ndash;//             }&ndash;&gt;-->
<!--&lt;!&ndash;//           }&ndash;&gt;-->
<!--&lt;!&ndash;//           resultArr.push(sheetData);&ndash;&gt;-->
<!--&lt;!&ndash;//         }&ndash;&gt;-->
<!--&lt;!&ndash;//         this.$emit("handelImportChange", resultArr);&ndash;&gt;-->
<!--&lt;!&ndash;//       }&ndash;&gt;-->
<!--&lt;!&ndash;//     }&ndash;&gt;-->
<!--&lt;!&ndash;//   }&ndash;&gt;-->
<!--&lt;!&ndash;// };&ndash;&gt;-->
<!--&lt;!&ndash;// export default {&ndash;&gt;-->
<!--&lt;!&ndash;//   name: 'HelloWorld',&ndash;&gt;-->
<!--&lt;!&ndash;//   props: {&ndash;&gt;-->
<!--&lt;!&ndash;//     msg: String&ndash;&gt;-->
<!--&lt;!&ndash;//   }&ndash;&gt;-->
<!--&lt;!&ndash;// }&ndash;&gt;-->
<!--&lt;!&ndash;</script>&ndash;&gt;-->

<!--&lt;!&ndash; Add "scoped" attribute to limit CSS to this component only &ndash;&gt;-->
<!--<style scoped>-->
<!--h3 {-->
<!--  margin: 40px 0 0;-->
<!--}-->
<!--ul {-->
<!--  list-style-type: none;-->
<!--  padding: 0;-->
<!--}-->
<!--li {-->
<!--  display: inline-block;-->
<!--  margin: 0 10px;-->
<!--}-->
<!--a {-->
<!--  color: #42b983;-->
<!--}-->
<!--</style>-->
