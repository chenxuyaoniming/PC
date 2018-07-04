import Mock from 'mockjs'

Mock.mock('http://banner/api','get',{
    "banner|2":[
        {
            "img":"@dataImage"
        }
    ]
})