## 安装

1. 安装Node环境以及npm或yarn包管理工具
2. 克隆本仓库
3. yarn && node app.js

## 接口说明

1. 爬取列表: http://localhost:5000/list/:page

	链接中的 page 代表页数，如果爬第一页则链接为 http://localhost:5000/list/1 ，以此类推。可以将爬取的数据以 json 格式下载下来。

2. 列表大数据接口: http://localhost:5000/big/list/:page

	上面爬取列表的链接一次性可爬取链家一页的数据，也就是 30 条数据，为了方便，特提供此接口，一次性可爬取 20 页的数据，也就是 600 条数据，可根据 page 的指定爬不同的页，比如指定page为1则爬取链家 1-20 页的内容，page为 2 则爬取 20-40页的内容。现在链家租房只有100页数据，所以执行5次此接口即可爬取所有数据。

3. 爬取房源详情:  http://localhost:5000/fang/:page

	链接中的 page和列表中的page相对应，可一次性获取多条房源的信息，比如：http://localhost:5000/fang/1。

4. 爬取房源大数据接口: http://localhost:5000/big/fang/:page

	为了方便，提供此接口，不过需要注意，该接口需要耗费很长时间(30s或更长)，因为此接口会同时发起上百个ajax请求。