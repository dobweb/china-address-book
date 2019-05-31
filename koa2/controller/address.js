const cheerio = require('cheerio')
const superagent = require('superagent')

// 默认渲染前端界面
exports.index = async (ctx) => {
  await ctx.render('address/index', {
    title: '中国地址库更新'
  })
}
// 采集地区数据
exports.getData = async (ctx) => {
  const url = ctx.request.body.url
  let result = new Promise(function (resolve, reject) {
    superagent.get(url)
    // .charset('utf-8') //当前页面编码格式 
    .end((err, res) => { //页面获取到的数据 
      let html = res.text, 
      arr = [],
      $ = cheerio.load(html, { decodeEntities: false }); //用cheerio解析页面数据 
      $('table tr').each((i, con) => {
        let obj = {}
        let $td = $(con).find('td')
        if ($td.eq(1).text()*1 > 10000) {
          obj.code = $td.eq(1).text()
          obj.name= $td.eq(2).text()
          arr.push(obj)
        }
      })
      if (arr.length > 0) {
        resolve(arr)
      } else {
        reject([])
      }
    }) 
  })
  
  ctx.body = await {
    status: 200,
    msg: 'ok',
    data: await result
  }
}
// 采集扩展数据
exports.getZipcode = async (ctx) => {
  
}