
import Mock from 'mockjs';

Mock.mock('http://bannerlist/api',{
    'list|6':[
        {
            "tit":"@province()",
            "city|3":[
                "@city()"
            ],
            "second|3-5":{
                    "tit2":"@city()",
                    "citys|3-6":[
                        "@county()"
                    ]
            }
        }
    ]
})