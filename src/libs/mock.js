/** mockjs模拟json返回数据*/
import Mock from 'mockjs'

const Random = Mock.Random

// mock需要给三个参数,url(与axios请求是传的url一致,我这个是本地启动的项目就直接用本地域名了)
// 请求类型: get post...其他看文档
// 数据处理函数,函数需要return数据
Mock.mock('http://localhost:3666/recommend/video', 'get', () => {
  let recommendVideos = []
  for (let i = 0; i < 10; i++) {
    let obj = {
      id:Random.natural(1000,10000),
      title:Random.ctitle(),
      author: Random.cname(),
      type: Random.string('小吃店','奶茶店','早餐店'),
      videoImage:Random.image('200x100', '#50B347', '#FFF', 'Mock.js'),
      lookNum:i+100,
      commentNum:i+50,
      time:Random.time('mm:ss')
    }
    recommendVideos.push(obj)
  }
  return {recommendVideos}
})
// post请求,带参数,参数会在data中返回,会返回url,type,body三个参数,可以把data打印出来看看
Mock.mock('http://localhost:3666/test/cityInfo', 'post', (data) => {
  // 请求传过来的参数在body中,传回的是json字符串,需要转义一下
  const info= JSON.parse(data.body)
  return {
    img: Random.image('200x100', '#4A7BF7', info.name)
  }
})