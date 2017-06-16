<template>
	<div id="content"> 
		<mt-search class="bgImg"
		  v-model="value"
		  placeholder="作品 / 电子书 / 专栏 / 连载 / 作者">
		  <mt-cell 
		   	v-for="item in result"
		    :title="item">
		  </mt-cell>
		</mt-search>
		 
		
	</div>
</template>

<script>
	import Vue from "vue"
	import { Search,Cell,Indicator} from 'mint-ui'
	Vue.component(Search.name, Search)
	export default{
		name:'Search',
		data(){
			return {
				value:"",
				result:'',
				getData:"",
				newVal:""
			}
		},
		
		created(){
			 console.log(Search)
			//var  url = 'https://read.douban.com/j/suggest?q=%E7%99%BD'
			//var url = 'https://read.douban.com/j/suggest?q='+ this.value;
			
			var url = '../static/baiInfo.json'
			Vue.axios.get(url).then((res)=> {
			 	this.result = res.data.suggests;
			 	
		  })
		},
		methods:{
			receviceData(){
				alert(this.value)
			}
		}
		 
	}
</script>

<style scoped>
	.bgImg{
		background: #fff url(../assets/bookpg.jpg) no-repeat 0 center;
		background-size:100%;
	}
</style>