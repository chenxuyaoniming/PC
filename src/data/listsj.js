import Mock from 'mockjs'


var  data1=Mock.mock({
    'togou|5':[
        {
            'list|3-6':[
                '@county()'
            ]
        }
    ]
})

Mock.mock('http://www.list.com/api',data1)