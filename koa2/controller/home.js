
const fs = require('fs');

exports.index = async (ctx) => {
  await ctx.render('home/index', {
    title: '中国地址库'
  })

}