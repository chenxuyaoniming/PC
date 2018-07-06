
import Mock from 'mockjs';
var data1 = Mock.mock({
    'list|6':[
        {
            "tit":"@region()",
            "city|1-2":[
                "@province()"
            ]
        }
    ]
});
var data2 = Mock.mock({
    'list|6':[
        {
            'city|2-5':[{

                "tit":'@county()',
                "second|2-5":[
                    "@county()"
                    ]
                }
                
            ]
        }
    ]
})
var data3 = Mock.mock({
    "product|7":[
        {
            'id|+1':1001,
            'img':'@dataImage',
            "price":'@natural(1200, 10000)',
            'good':'@natural(30, 100)',
            'address':'@county(true)'           
        }
    ]
});
var data4 = Mock.mock({
    'oldman|3':[
        {
            'list|3-6':[
                {
                    'id|+1':1001,
                    'img':'@dataImage',
                    "price":'@natural(1200, 10000)',
                    'good':'@natural(30, 100)',
                    'address':'@county(true)'  
                }
            ]
        }
    ]
});
var data5=Mock.mock({
    'add|4-8':[
        '@county()'
    ]
})

Mock.mock('http://bannerlist/api','post',(req)=>{
    let id = eval(req.body)
    if(id === 1){
        return data1;
    }
    if(id === 2){
        return data2;
    }
    if(id === 3){
        return data3;
    }
    if(id === 4){
        return data4;
    }
    if(id === 5){
        return data5;
    }
 }
)



