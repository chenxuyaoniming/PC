
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
            'city|2-5':{
                "tit":'@region()',
                "second|2-5":[
                    "@county()"
                ]
            }
        }
    ]
})



Mock.mock('http://bannerlist/api','post',(req)=>{
    let id = eval(req.body)
    if(id === 1){
        return data1;
    }else{
        return data2;
    }
 }
)



