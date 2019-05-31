const router = require('koa-router')()
const address = require('../controller/address')

router.prefix('/address')
// 默认
router.get('/', address.index)
// 采集地址数据
router.post('/getData', address.getData)
// 采集邮编和区号
router.post('/getZipcode', address.getZipcode)

module.exports = router
