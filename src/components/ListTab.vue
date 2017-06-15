<template>
	<div>
	  <div class="list">
	  	<h2>
	  		新上架
	  		<a>></a>
	  	</h2>
	    <div class="swiper-container">
		    <div class="swiper-wrapper">
		        <div class="swiper-slide" v-for="item in list1">
		        	<router-link :to="{ name:'ListInfo', params:{id:item.id} }">
			        	<img :src="item.cover"/>
			  				<h3 class="book-title">{{item.title}}</h3>
			  				<p class="book-author">{{item.author}}</p>
			  				<p class="book-price">￥{{
			  					item.price /100}}</p>
		  				</router-link>
		        </div>
		    </div>
			</div>
	  </div>
	  <div class="list">
	  	<h2>热门<a>></a></h2>
	    <div class="swiper-container">
		    <div class="swiper-wrapper">
		        <div class="swiper-slide" v-for="item in list2">
		        	<router-link :to="{ name:'ListInfo', params:{id:item.id} }">
			        	<img :src="item.cover"/>
			  				<h3 class="book-title">{{item.title}}</h3>
			  				<p class="book-author">{{item.author}}</p>
			  				<p class="book-price">{{item.price}}</p>
		  				</router-link>
		        </div>
		    </div>
			</div>
	  </div>
	  <div class="list">
	  	<h2>画册<a>></a></h2>
	    <div class="swiper-container">
		    <div class="swiper-wrapper">
		        <div class="swiper-slide" v-for="item in list3">
		        	<router-link :to="{ name:'ListInfo', params:{id:item.id} }">
			        	<img :src="item.cover"/>
			  				<h3 class="book-title">{{item.title}}</h3>
			  				<p class="book-author">{{item.author}}</p>
			  				<p class="book-price">{{item.price}}</p>
		  				</router-link>
		        </div>
		    </div>
			</div>
	  </div>
	  <div class="list lastList">
	  	<h2>免费<a>></a></h2>
	    <div class="swiper-container">
		    <div class="swiper-wrapper">
		        <div class="swiper-slide" v-for="item in list4">
		        	<router-link :to="{ name:'ListInfo', params:{id:item.id} }">
			        	<img :src="item.cover"/>
			  				<h3 class="book-title">{{item.title}}</h3>
			  				<p class="book-author">{{item.author}}</p>
			  				<p class="book-price">免费</p>
		  				</router-link>
		        </div>
		    </div>
			</div>
	  </div>
  </div>
</template>

<script type="text/javascript">
	 import jsonp from "jsonp"
	 import Vue from "vue"
//	 var Swiper = new Swiper('.swiper-container',{
//				slidesPerView : 3,
//				//slidesPerGroup : 3,
//				loop:true
//		})
	export default {
  		name: 'ListTab',
  data () {
    return {
    	
      msg: "111",
      list1:"",
      list2:"",
      list3:"",
      list4:""
    }
  },
 	created(){
 			//var url = "https://read.douban.com/j/category/";
		Vue.axios.get("../static/list.json").then((res)=> {
        	return res
     	}).then((res)=> {
        //console.log(res.data);
        var data = res.data;
        //console.log(data)
	  	console.log(data[0]);
	   	this.arr = data[0];
	   
		this.list1 = data[0].works;
		
		this.list2 = data[1].works;
		
		this.list3 = data[2].works;
		
		this.list4 = data[3].works;
      })
 	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	*{margin:0;padding:0}
	.swiper-container{
		overflow-y: hidden;
		overflow-x:scroll ;
		
	}
	.swiper-slide{
		width:22vw;
		margin-right:0.4rem;
		text-align: left;
	}
	.swiper-slide img{
		width:22vw;
	}
	.book-title{
		color: #222;
	    margin-top: 0.12rem;
	    font-size: 0.24rem;
	    line-height: 0.32rem;
	    -webkit-line-clamp: 2;
	    -webkit-box-orient: vertical;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    display: -webkit-box;
	}
	.book-author{
		font-size: 0.24rem;
    color: #737373;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
	}
	.book-price{
		font-size: 0.24rem;
    color: #77a4b3;
	}
	.list{
		margin:0.3rem 0 0.3rem;
		padding: 0 8px;
	}
	.list h2{
		display: flex;
		justify-content: space-between;
		margin-bottom: 10px;
		color: #000;
	}
	.list h2 a{
		display: block;
		width:0.5rem;
		height: 0.5rem;
		border-radius: 100%;
		text-align: center;
		line-height: 0.5rem;
		background: #77a4b3;
		color: #fff;
	}
	.lastList{
		margin-bottom:2rem;
	}
</style>
