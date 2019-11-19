

//  <div>
//     <h2>cookie 跨域问题</h2>
//     <div class="cross-mode-introduce">
//       <p>在同源政策的限制下，网页中的cookie不能被非同源网页获取。</p>
//       <p>在此模块中，本页面的功能是设置网站中的cookie。而辅助测试页的功能是尝试获取cookie中的数据。</p>
//     </div>
//     <div class="cross-code-box">
//       <h3>前端代码如下</h3>
//       <xmp class="cross-code-area">

//       </xmp>
//     </div>
//     <div
//       class="cross-btn-group"
//       ref="codeTarget"
//     >

//     </div>
//   </div>
<script>
import '@/static/js/jquery-cookie.js'
export default {
  name: 'cookieNoSolve',
  data () {
    return {
      cookieCode: 'testCookie',
      cookieValue: 'testCookie'
    }
  },
  mounted () {
    let renderStr = `<Input
        style="width:500px;"
        v-model="cookieCode"
      >
      <span slot="prepend">设置的cookie字段：</span>
      </Input>
      <Input
        style="width:500px;"
        v-model="cookieValue"
      >
      <Button
        slot="append"
        @click="setCookie"
      >点击此处设置该cookie字段的值</Button>
      </Input>`
    // let codeTarget = this.$refs.codeTarget;
    // codeTarget.innerHTML = renderStr
  },
  //   render: function (h) {
  //     return (
  //       <div>111</div>
  //     )
  //   },
  render: (h) => {
    return (<div>123</div>)
  },
  methods: {
    setCookie () {
      let {
        cookieCode,
        cookieValue
      } = this
      $.cookie(cookieCode, cookieValue)
    }
  }
}
</script>

<style scoped>
</style>
