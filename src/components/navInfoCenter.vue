<template>
	<div>
		<div class="hot">
		  	<h2>
		  		近期热门
		  		<a>></a>
		  	</h2>
		  	<div class="swiper-container hotContainer">
			    <div class="swiper-wrapper">
			        <div class="swiper-slide hotList" v-for="item in listCharts[0].columns">
			        	<router-link :to="{ name:'ListInfo', params:{id:item.id} }">
				        	<img :src="item.cover_url"/>
			  				<h3 class="book-title">{{item.title}}</h3>
			  				<p class="book-category">{{item.category}}</p>
			  				<p class="book-author">{{item.author}}</p>
			  				<p class="book-subscriber">{{item.subscriber_num}}人订阅</p>
			  			</router-link>
			        </div>
				</div>
			</div>
		</div>
		<div class="hot">
		  	<h2>
		  		最近更新
		  		<a>></a>
		  	</h2>
		    <div class="swiper-container hotContainer">
			    <div class="swiper-wrapper">
			        <div class="swiper-slide hotList" v-for="item in listCharts[1].columns">
			        	<router-link :to="{ name:'ListInfo', params:{id:item.id} }">
				        	<img :src="item.cover_url"/>
			  				<h3 class="book-title">{{item.title}}</h3>
			  				<p class="book-category">{{item.category}}</p>
			  				<p class="book-author">{{item.author}}</p>
			  				<p class="book-subscriber">{{item.subscriber_num}}人订阅</p>
			  			</router-link>
			        </div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name :'navInfoCenter',
		props:['listCharts']
	}
</script>

<style scoped>
.hot{
	padding: 0 8px;
	margin-top:0.3rem;
}
.hot h2{
	display: flex;
	justify-content: space-between;
	margin-bottom: 10px;
	color: #000;
}
.hot h2 a{
	display: block;
	width:0.5rem;
	height: 0.5rem;
	border-radius: 100%;
	text-align: center;
	line-height: 0.5rem;
	background: #77a4b3;
	color: #fff;
}
.hotContainer{
	width: 100%;
	overflow-y: hidden;
	overflow-x:scroll ;
}
.hotList{
	font-size: 0.16rem;
	width: 28%;
	margin-right: 10px;
}
.hotList img{
	width: 100%;
}
.book-title{
	color: #222;
    margin-top: 0.12rem;
    font-size: 0.2rem;
    line-height: 0.32rem;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
}
.book-author,.book-category{
	font-size: 0.18rem;
    color: #999;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
	}
.book-subscriber{
	font-size: 0.18rem;
    color: #77a4b3;
}
</style>