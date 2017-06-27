<template>
<div id="content">
		<div>
			<router-link class="flList" v-for="item in spliceStr" :to="{ name:'ListInfo', params:{id:item.id} }">
				<div class="left">
					<img :src="item.cover">
				</div>
				<div class="right">
					<p>{{item.title}}</p>
					<p>{{item.subtitle}}</p>
					<p>{{item.author}}</p>
					<p>{{item.abstract}}</p> 
					<p v-if="item.price!=0">￥{{item.price/100}}</span></p>
					<p v-else>免费</span></p>
				</div>
			</router-link>
		</div>
		<ul data-am-widget="pagination" class="am-pagination am-pagination-select">
	        <li class="am-pagination-prev ">
	        	<a class="" @click="prevPage">上一页</a>
	        </li>
	        <li class="am-pagination-next ">
	        <a class="" @click="nextPage">下一页</a>
	        </li>
		</ul>
	</div>
</template>

<script>
	import Vue from "vue"
	export default{
		name:'NewInfo',
		data(){
			return {
				infoData:'',
				start:0,
				url:''
			}
		},
		created(){
			var liInfo = window.location.pathname.split('/')[2];
			
			//var url = 'https://read.douban.com/j/category/new?start=0&limit=10'
			//this.url = 'https://read.douban.com/j/category/'+ liInfo +'?start=0&limit=10';
			this.url = '/j/category/'+ liInfo +'?start=0&limit=10'
			console.log(this.url)
			Vue.axios.get(this.url).then((res)=> {
			 	this.infoData = Array.prototype.slice.call(res.data);
		    })
		},
		computed:{
			spliceStr:function(){
				this.infoData=Array.prototype.slice.call(this.infoData)
	            return this.infoData.map(item=>{ 
	                item.abstract = item.abstract.substring(0,25) + "..."
	                return item;
	            })
			}
		},
		methods:{
			nextPage:function(){
				var liInfo = window.location.pathname.split('/')[2];
				this.start = Number(this.start) + 10;
				console.log(this.start)
				//this.url = 'https://read.douban.com/j/category/'+ liInfo +'?start='+this.start+'&limit=10';
				this.url = '/j/category/'+ liInfo +'?start='+this.start+'&limit=10'
				/*Indicator.open();
				setTimeout(function(){
					Indicator.close();
				},2500)*/
				Vue.axios.get(this.url).then((res)=> {
				 	this.infoData = Array.prototype.slice.call(res.data);
			    })
			},
			prevPage:function(){
				var liInfo = window.location.pathname.split('/')[2];
				if(this.start > 0){
					this.start = Number(this.start) - 10;
				}else{
					this.start = 0
				}
				console.log(this.start)
				//this.url = 'https://read.douban.com/j/category/'+ liInfo +'?start='+this.start+'&limit=10';
				this.url = '/j/category/'+ liInfo +'?start='+this.start+'&limit=10'
				/*Indicator.open();
				setTimeout(function(){
					Indicator.close();
				},1000)*/
				Vue.axios.get(this.url).then((res)=> {
				 	this.infoData = Array.prototype.slice.call(res.data);
			    })
			}
		}
	}
</script>

<style scoped>
.flList {
	    
	    display: flex;
	    justify-content: space-between;
	    font-size: 0.2rem;
	    width: 100%;
	    padding: 8px 0 20px;
	    margin-top: 0.3rem;
	    border-bottom: 1px solid #ccc;
	    
	}
	.left{
		display: flex;
		justify-content: center;
		width: 30%;
		padding-top: 3px;
	}
	.left img{
		width: 80%;
		height:2.3rem;
	}
	.flList .right {
	    width: 70%;
	    padding-right: 0.2rem;
	    padding-bottom:10px;
	}
	.right p:first-child{
		font-size: 0.3rem;
		font-weight: 800;
		color: #000;
	}
	.right p:nth-child(2){
		font-size: 0.25rem;
		color: #000;
	}
	.right p:last-child{
		font-size: 0.25rem;
		color: #333;
	}
	.right p {
		font-size: 0.25rem;
		color: #a6a6a6;
	}
	.am-pagination{
		font-size: 0.3rem;
		margin: 0.4rem 0rem 1.5rem;
		padding: 10px 40px;
	}
</style>