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
			"ping":"0"
		}
	]
})