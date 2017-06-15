<template>
  <div>
    <div class="totle">
    		<div class="bookleft">
	    		<h1 class="title">{{data.title}}</h1>
	    		<div class="bookcon">
		    		<p>{{data.original_author}}</p>
		    		<p>{{data.kind}}</p>
		    		<p>{{data.publisher}}/{{data.publish_time}}</p>
		    		<p>{{data.round_word_count}}</p>
	    		</div>
    		</div>
    		<div class="bookright">
    				<img :src="data.cover" alt="" />
    		</div>
    </div>
    <div class="bookread">
    	<div class="readbutton">
    			<i class="iconfont icon-book"></i>
    			<span class="read">阅读</span>
    	</div>
    	<div class="fenxiang">
    			<i class="iconfont icon-fenxiang"></i>
    	</div>
    </div>
    <ul class="price">
    	<li class="priceleft">
    		￥{{data.fixed_price/100}}
    	</li>
    	<li class="buy">
    		<i class="iconfont icon-64d"></i>
    		购买
    	</li>
    	<li class="buy">
    		<i class="iconfont icon-iconfontliwu"></i>
    		赠送
    	</li>
    </ul>
    <InfoSummary :jianjie="jianjie" :mvlu="mvlu" :tags="tags"></InfoSummary>
  </div>
</template>

<script>
	
	import Vue from 'vue'
	import jsonp from 'jsonp'
	import InfoSummary from './InfoSummary'
export default {
  name: 'ListInfo',
  components:{
			InfoSummary
	},
  data () {
    return {
    	arr:"",
    	data:"",
    	jianjie:"",
    	mvlu:"",
    	tags:""
    }
  },
  created(){
  	//详情 https://read.douban.com/j/ebook/
  	console.log(window.location);
  	var id = window.location.pathname.split("/")[2];
  	console.log(id);
  	//var url = "https://read.douban.com/j/ebook/"+id;
  	//console.log(url);
	   Vue.axios.get("../static/listInfo.json").then((res)=> {
        return res.data;
        console.log(res);
    }).then((data)=>{
      	this.data = data;
      	console.log(data);
      	this.jianjie = data.abstract;
      	this.mvlu = data.table_of_contents;
      	this.tags = data.tags;
    })
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p{
	font-size:0.28rem;
	line-height:1.3;
	color:#a6a6a6;
}
.totle{
	width:100vw;
	height:3.5rem;
	padding:0.35rem 0.3rem 0;
	background: white;
	border-top: 1px solid gainsboro;
}
.title{
	font-size: 0.4rem;
	font-weight: 900;
}
.bookcon{
	margin-top:0.5rem;
}
.bookleft{
	float: left;
	left:0.3rem;
}
.bookright{
	float: right;
	right:0.2rem;
	top:0.5rem;
}
.bookright img{
	width:1.9rem;
	height:2.58rem;
}
.bookread{
	height:0.8rem;
	background:white;
	padding:0 0.3rem 0;
}
.readbutton{
	float:left;
	height:0.6rem;
	width:4.8rem;
	background:#71ceb5;
	border-radius: 0.35rem;
	font-size: 0.3rem;
	color:white;
	text-align: center;
	line-height:0.6rem;
}
.fenxiang{
	float:right;
	width:0.6rem;
	height:0.6rem;
	color:#77a4b3;
	font-size: 0.3rem;
	border-radius: 0.3rem;
	text-align: center;
	line-height:0.6rem;
	border:1px solid #77a4b3;
}
.price{
	height:1rem;
	border:1px solid gainsboro;
	background: white;
}
.price li{
	float:left;
	font-size: 0.25rem;
	border-right: 1px solid gainsboro;
}
.priceleft{
	width:60vw;
	height:1rem;
	line-height: 1rem;
	padding-left:0.4rem;
}
.buy{
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width:19.7vw;
	height:1rem;
}
</style>
