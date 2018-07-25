## 安装

1. 安装Node环境以及npm或yarn包管理工具
2. 克隆本仓库
3. yarn && node app.js

## 接口说明

1. 爬取列表: http://localhost:5000/list/:page

链接中的 page 代表页数，如果爬第一页则链接为 http://localhost:5000/list/1，以此类推。可以将爬取的数据以 json 格式下载下来。

2. 爬取房源详情:  http://localhost:5000/fang/:id

链接中的 id 为房源的id，该id可以通过上面爬取列表的接口中获取，比如：http://localhost:5000/fang/107100335084。