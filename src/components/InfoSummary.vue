<template>
  <div>
		  <div class="jianjie" @click="change">  
		  	<h2>简介</h2>
		    <p v-if="this.flag==true">{{jianjie.substring(0,88)}}<i>点击加载更多...</i></p>
		    <p v-else>{{jianjie}}</p>
		  </div> 
		  
		  <div class="mulu" @click="change">  
		  	<h2>目录  ></h2>
		  	<ul v-if="this.flag==true">
		    </ul>
		    <ul v-else>
		    	<li class="level0"  v-for="item in mvlu" v-show="item.level == 0">
		    		{{item.title}}
		    	</li>
		    	<li class="level1"  v-for="item in mvlu" v-show="item.level == 1">
		    		{{item.title}}
		    	</li>
		    </ul>
		  </div> 
		  
		  <div class="tags">  
		  	<h2>标题</h2>
		    <div class="tagsList">
		    	<router-link :to="{ name:'fenleiInfo'}" v-for="item in tags" :keys="item.id">
				    {{item.tag}}
		    	</router-link>
		    </div>
		    
		  </div> 
		  
		  <div class="jianjie">
		  	<h2>出版方</h2>
		    <p>浙江文艺出版社成立于1983年，是全国重要的文学出版重镇之一。浙江文艺一直以出版高品位、高格调、高档次、高质量的中外文学名著、人文社科著作为特色，近年来也多次成功推出引起全国轰动的重量级畅销书。</p>
		  </div>
		  
		  <div class="pinglun">
		  	<h2>读者评论</h2>
		  	<ul v-if="this.arr.length==0"><li>还没有评论哦！</li></ul>
		    <ul v-if="this.arr.length!=0">
		    		<li class="pinglunInfo" v-for="item in arr">
		    				<div class="pinglunleft">
		    						<img :src='item.author_picture' alt="" />
		    				</div>
		    				<div class="pinglunright">
		    						<p class="authorname">{{item.author_name}}</p>
		    						<p class="plxinxi">{{item.abstract.substring(0,50)}}...</p>
		    						<p class="pltime">{{item.created_time}}</p>
		    				</div>
		    		</li>
		    </ul>
		  </div>
  </div>
</template>

<script>
	import Vue from 'vue'
	export default {
  name: 'InfoSummary',
  props:["jianjie","mvlu","tags","pinglunId"],
  
  data(){
    return {
      data:"",
      pingId:this.pinglunId,
      flag:true,
      arr:""
    }
  },
  methods:{
				change:function(){
				 if(this.flag==true){
						this.flag=false;
					}else{
						this.flag=true;
					}
				}
	},
	created(){
				var url = 'https://read.douban.com/j/ebook/'+this.pingId+'/reviews?start=0&limit=10';
				console.log(this.pingId);
				Vue.axios.get(url).then((res)=>{
					return res.data;
				}).then((data)=>{
					console.log(data);
					this.arr = data;
				})
	}
	
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.jianjie,.mulu{
		padding:0 0.3rem;
		font-size: 0.28rem;
		border-bottom: 1px solid gainsboro;
		
	}
	.mulu ul{
		padding-left:0.3rem;
	}
	.mulu li{
		list-style: disc;
	}
	h2{
		font-weight: 800;
		font-size:0.3rem;
		height:0.8rem;
		line-height:0.8rem;
	}
	.tags{
		width: 100%;
		border-bottom: 1px solid gainsboro;
		padding:0 0.3rem;
	}
	.tagsList{
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
	}
	
	.tagsList a{
		display: block;
		background:#71ceb5;
		color:#fff;
		font-size: 0.25rem;
		border-radius: 8px;
		text-align: center;
		padding: 3px 10px;
		margin-bottom:8px;
		margin-right: 8px;
	}
	h2{
		font-weight: 800;
		font-size:0.3rem;
		height:0.8rem;
		line-height:0.8rem;
	}
	.mulu .level1{
		margin-left:0.4rem;
		
	}
	.jianjie i{
		font-size: 0.25rem;
		color:#71ceb5;
	}
	.pinglun{
		padding:0 0.3rem;
		font-size: 0.28rem;
		border-bottom: 1px solid gainsboro;
		padding-bottom: 15vh;
	}
	.pinglunInfo{
		width:90vw;
		height:25vh;
		margin:0.2rem;
		border-bottom: 1px solid gainsboro;
	}
	.pinglunleft{
		width:20vw;
		height:20vw;
		float:left;
	}
	.pinglunleft img{
		width:80%;
		height:80%;
		border-radius: 20vw;
	}
	.pinglunright{
		width:70vw;
		float:left;
	}
	.plxinxi{
		font-size: 0.25rem;
		padding:0.2rem 0.1rem;
		color:grey;
	}
	.authorname{
		color:#71ceb5;
	}
	.pltime{
		font-size: 0.25rem;
		color:#71ceb5;
	}
</style>
