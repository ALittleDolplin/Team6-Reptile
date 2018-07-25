## 安装

1. 安装Node环境以及npm或yarn包管理工具
2. 克隆本仓库
3. yarn && node app.js

## 接口说明

1. 爬取列表: http://localhost:5000/list/:page

	链接中的 page 代表页数，如果爬第一页则链接为 http://localhost:5000/list/1 ，以此类推。可以将爬取的数据以 json 格式下载下来。

2. 爬取房源详情:  http://localhost:5000/fang/:page

	链接中的 page和列表中的page相对应，可一次性获取多条房源的信息，比如：http://localhost:5000/fang/1。