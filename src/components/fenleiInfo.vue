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
					<p>￥{{item.price/100}}</span></p>
				</div>
			</router-link>
		</div>
		<ul data-am-widget="pagination" class="am-pagination am-pagination-select">
	        <!--<li class="am-pagination-prev ">
	        	<a class="" @click="prevPage">上一页</a>
	        </li>-->
	        <li class="am-pagination-next ">
	        <a class="" @click="nextPage">加载更多</a>
	        </li>
		</ul>
	</div>
	
</template>

<script>
	import Vue from 'vue'
	export default{
		name:'fenleiInfo',
		data(){
			return {
				infoData:''
			}
		},
		created(){
			//var url = 
			var url = '../static/fenleiInfo.json';
			 Vue.axios.get(url).then((res)=> {
		        this.infoData = Array.prototype.slice.call(res.data);
		        //console.log(this.infoData)
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
				return this.infoData.map(item=>{ 
				 	this.infoData.push(item)
	            })
			},
			prevPage:function(){
				 this.infoData.splice(-1,10);
				 return this.infoData
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
	.am-pagination-next {
	    position: absolute;
	    left: 10%;
	    top: -50px;
	    width: 80%;
	    text-align: center;
		font-size: 0.3rem;
		margin: 0.4rem 0rem 1.5rem;
		padding: 10px 40px;
    }
</style>