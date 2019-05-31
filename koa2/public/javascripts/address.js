var app = new Vue({
  el: '#address',
  data: {
    placeholder: 'http://www.mca.gov.cn/article/sj/xzqh/2019/201901-06/201902061009.html',
    url: '',
    data: []
  },
  created () {
  },
  methods: {
    // 提交
    handleSubmit () {
      const self = this
      const apiUrl = '/address/getData'
      const params = {
        url: self.url ? self.url : self.placeholder
      }
      axios.post(apiUrl, params)
        .then(res => {
          console.log(res.data.data)
          self.data = res.data.data
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
})