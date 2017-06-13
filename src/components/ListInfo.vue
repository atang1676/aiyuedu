<template>
  <div>
    <h2>详情页</h2>
  </div>
</template>

<script>
	
	import Vue from 'vue'
	import jsonp from 'jsonp'
	
export default {
  name: 'ListInfo',
  data () {
    return {
    	arr:"",
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created(){
  	//详情 https://read.douban.com/j/ebook/
  	console.log(window.location.hash);
  	var id = window.location.hash.split("/")[2];
  	console.log(id);
  	var ur = "https://read.douban.com/j/ebook/"+id;
  	console.log(ur);
		$.ajax({
			url:ur,
			dataType:"json"
		}).done(function(data){
			console.log(data)
		})
//	Vue.axios.get(ur).then((res)=> {
//      return console.log(res)
//    }).then(data=>{
//    	return data
//    })
//		jsonp(ur,null,(err,data)=> {
//	          if(err){
//	            console.log('数据无法获取')
//	          }else{
//	            
//	            console.log(data)
//	          }
//	         })
	 }	
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
