# test-vue-01

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### 项目打包上传私有化仓库
```
npm run package
```

```
cd pig-ui
```

```
npm init -y
```
```将以下信息拷贝至刚初始化的package.json文件中，注意增加对应的版本号（"version": "0.1.7"）
{
  "name": "page-button-test1",
  "version": "1.0.6",
  "description": "",
  "main": "pig-ui.common.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}

```

```设置上传的私有化仓库信息【或者可以上传至公共npm仓库】
npm config set registry http://10.*.*.13:***/repository/kfptbcity/ 
```

```上传打包文件至对应的仓库
npm publish
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
