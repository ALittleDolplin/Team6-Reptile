var superagent = require('superagent');
var cheerio = require('cheerio');
var url = require('url');
var eventproxy = require('eventproxy');

var LianJiaList = 'https://sh.lianjia.com/zufang/';

var PostControl = function() {

	var ep = new eventproxy();

	this.getLJList = function (req, res) {
		superagent.get(LianJiaList + 'pg' + req.params.page)
			.end(function (error, result) {
				var $ = cheerio.load(result.text);
				var list = [];
				$('.house-lst > li').each(function (index, element) {
					var $element = $(element);
					var id = $element.data('id');
					var image = $element.find('.pic-panel a img').data('img');
					var title = $element.find('.info-panel h2 a').text();
					var address = $element.find('.region').text();
					var house_type = $element.find('.zone span').text();
					var area = $element.find('.meters').text();
					var price = $element.find('.num').text();
					var tags = [];

					$element.find('.view-label span span').each(function (index, tag) {
						var text = $(tag).text();

						if (text && text!== '') {
							tags.push(text);
						}
					});

					list.push({
						id: id,
						image: image,
						title: title,
						address: address,
						house_type: house_type,
						area: area,
						price: price,
						tags: tags
					});
				});
				res.send(list);
			});
	};

	this.getLJFang = function (req, res) {
		superagent.get(LianJiaList + req.params.id + '.html')
			.end(function (error, result) {
				var $ = cheerio.load(result.text);
				var title = $('.main').text();
				var price = $('.total').text();
				var area = $('.zf-room p:first-child').text();
				var house_type = $('.zf-room p:nth-child(2)').text();
				var floor = $('.zf-room p:nth-child(3)').text();
				var address = $('.zf-room p:nth-child(7) a:first-of-type').text();
				var regin = $('.zf-room p:nth-child(8) a:first-of-type').text();
				var publish_time = $('.zf-room p:nth-child(9)').text();
				var images = [];
				$('.thumbnail li img').each((index, element) => {
					var src = $(element).attr('src');

					if (src && src !== '') {
						images.push(src);
					}
				});
				var des = $('.sub').text();

				var fang = {
					id: req.params.id,
					title: title,
					price: price,
					area: area,
					house_type:house_type,
					floor,
					address,
					regin,
					publish_time,
					images,
					des
				};

				res.send(fang);
			});
	};
};

module.exports = PostControl;