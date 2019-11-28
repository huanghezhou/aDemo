#### require两个特点
    require有两个功能
    1、加载并执行文件模块
    2、获取文件模块的 exports对象

    node中没有全局作用于，只有文件模块作用于
    把b.js require到a.js，把c.js require到b.js，a.js就可以拥有b.js和c.js的功能

#### end()的特点
    res.end()可以处理二进制和文本字符串
