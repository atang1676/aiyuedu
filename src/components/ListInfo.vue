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
    	arr:""
    }
  },
  created(){
  	//详情 https://read.douban.com/j/ebook/
  	console.log(window.location);
  	console.log("--------------------")
  	var id = window.location.pathname.split("/")[2];
  	console.log(id);
  	var url = "/j/ebook/"+id;
  	console.log(url);
		/*$.ajax({
			url:ur,
			dataType:"json"
		}).done(function(data){
			console.log(data)
		})*/
	   Vue.axios.get(url).then((res)=> {
        console.log(res)
      }).then(data=>{
      	return data
      })
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
