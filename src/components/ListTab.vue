<template>
  <div>
    <div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide"><img src="../assets/logo.png"/></div>
        <div class="swiper-slide"><img src="../assets/logo.png"/></div>
        <div class="swiper-slide"><img src="../assets/logo.png"/></div>
    </div>
    <!-- 如果需要滚动条 -->
    <div class="swiper-scrollbar"></div>
</div>
  </div>
</template>

<script type="text/javascript">
	
	 var mySwiper = new Swiper('.swiper-container',{
			slidesPerView : 3,
			slidesPerGroup : 3,
		})
	 
	 import jsonp from "jsonp"
	 import Vue from "vue"
	export default {
  name: 'ListTab',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
 	created(){
 			//var url = "https://read.douban.com/j/category/"
//       jsonp(url,null,(err,data)=> {
//        if(err){
//          console.log('数据无法获取')
//        }else{
//          this.arr = data
//          console.log(this.arr)
//        }
//       })
			Vue.axios.get("../static/list.json").then((res)=> {
        return res
      }).then((data)=> {
        console.log(data)
        this.arr = data
      })
 	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
