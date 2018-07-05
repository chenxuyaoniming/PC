import Mock from "mockjs";

Mock.mock("http://www.lei.com/api",{
	"user|1":[
		{
			"id":10000,
			"name":"@cname",
			"text":"@cparagraph",
			"img":"@dataImage('200x100')",
			"address":"@county(true)",
			"jd":"台北101大楼、台北故宫、日月潭、孙逸仙纪念馆、阿里山、垦丁公园",
			"pri":"2780",
			"xiao":"35",
			"manyi":"98%",
			"ping":"0",
			"from":"郑州",
			"day1":"6天7晚",
			"image":["http://www.aozhoutrip.com/uploads/2018/0313/d96b3f8e7e579da6bcfea889234f251c_90x61.jpg","http://www.aozhoutrip.com/uploads/2018/0313/d1bbf4d165d7efa994295251d46eec1d_90x61.jpg","http://www.aozhoutrip.com/uploads/2018/0313/4b46dfc1fa8af8cc0f9a9037f32569eb_90x61.jpg"],
			"day":[
				{
					"id":"1",
					"time":"07-08(周日) ￥2780/成人"
				},
				{
					"id":"2",
					"time":"07-28(周日) ￥278120/成人"
				},
				{
					"id":"3",
					"time":"07-13(周日) ￥2780/成人"
				}

			],
			"taocan":[
					{
						"id":"001"
					},
					{
						"id":"002"
					}
			],
			"richeng":[
					{
						"day":"第一天",
						"way":"郑州--台北",
						"zao":"不含",
						"wu":"不含",
						"wan":"不含",
						"zhu":"五花酒店",
						"gongju":"飞机",
						"con":"客人下午于指定时间在新郑机场集中，乘直飞航班郑州-台北飞往台湾，展开宝岛之旅；后入住酒店休息。"
					}



			]
		}
	]
})