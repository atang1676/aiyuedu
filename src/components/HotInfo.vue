<template>
<div id="content">
		<div>
			<router-link class="flList" v-for="item in spliceStr" :to="{ name:'ListInfo', params:{id:item.id} }">
				<div class="left">
					<img :src="item.cover">
				</div>
				<div class="right">
					<p>{{item.title}}<span class="isZL">{{item.kind}}</span></p>
					<p>{{item.subtitle}}</p>
					<p v-if="item.price!=0">￥{{item.price/100}}</p>
					<p v-if="item.on_sale_num != item.works_num">{{item.release_schedule_short}}，已发表{{item.on_sale_num}}/{{item.works_num}}</p>
					<p v-else>已完结，共{{item.works_num}}期</p>
					<p>{{item.abstract}}</p> 
					<p><span class="dingyue">订阅</span>{{item.subscriber_num}}人订阅</p>
					
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
	import Vue from "vue"
	import {Indicator} from 'mint-ui'
	export default{
		name:'HotInfo',
		data(){
			return {
				infoData:'',
				limit:10,
				url:''
			}
		},
		created(){
			var isHot = window.location.pathname.split('/')[2];
			//url=https://read.douban.com/j/column/chart/hot?start=0&limit=20
			//this.url = 'https://read.douban.com/j/column/chart/'+ isHot +'?start=0&limit='+this.limit;
			this.url = '/j/column/chart/'+ isHot +'?start=0&limit='+this.limit;
			console.log(this.limit)
			Vue.axios.get(this.url).then((res)=> {
			 	return res.data.columns;
		    }).then((data)=>{
		    	this.infoData = data
		    })
		},
		computed:{
			spliceStr:function(){
				this.infoData=Array.prototype.slice.call(this.infoData)
	            return this.infoData.map(item=>{ 
	                item.abstract = item.abstract.substring(0,25) + "..."
	                return item;
	            })
			},
//			this.list = spliceStr
		},
		methods:{
			
			nextPage:function(){
				var isHot = window.location.pathname.split('/')[2];
				this.limit = Number(this.limit) + 10;
				console.log(this.limit)
				//this.url = 'https://read.douban.com/j/column/chart/'+ isHot +'?start=0'+'&limit='+this.limit;
				this.url = '/j/column/chart/'+ isHot +'?start=0'+'&limit='+this.limit;
				Indicator.open();
				setTimeout(function(){
					Indicator.close();
				},2500)
				Vue.axios.get(this.url).then((res)=> {
				 	return res.data.columns;
			    }).then((data)=>{
			    	this.infoData = data
			    })
			},
			/*prevPage:function(){
				var isHot = window.location.pathname.split('/')[2];
				if(this.limit > 10){
					this.limit = Number(this.limit) - 10;
				}else{
					this.limit = 10
				}
				console.log(this.limit)
				this.url = 'https://read.douban.com/j/column/chart/'+ isHot +'?start=0'+'&limit='+this.limit
				Vue.axios.get(this.url).then((res)=> {
				 	return res.data.columns;
			    }).then((data)=>{
			    	this.infoData = data
			    })
			}*/
			
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
		font-size: 0.25rem;
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
		margin-bottom: 10px;
	}
	.am-pagination{
		font-size: 0.3rem;
	}
	.isZL{
		font-size: 0.16rem;
		color: #fff;
		background: #71ceb5;
		padding: 2px;
		margin-left: 4px;
	}
	.dingyue{
		font-size: .16rem;
		color: #fff;
		background: #71ceb5;
		border-radius: 2px;
		padding: 4px 12px;
		margin-right: 4px;
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