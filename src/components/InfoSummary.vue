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
		    	<router-link :to="{ name:'fenleiInfo'}" v-for="item in tags">
				    {{item.tag}}
		    	</router-link>
		    </div>
		    
		  </div> 
		  
		  <div class="jianjie">
		  	<h2>出版方</h2>
		    <p>{{jianjie}}</p>
		  </div>
		  
		  <div class="pinglun">
		  	<h2>评论</h2>
		    <p>还没有评论</p>
		  </div>
  </div>
</template>

<script>
export default {
  name: 'InfoSummary',
  props:["jianjie","mvlu","tags"],
  
  data(){
    return {
      data:"",
      flag:true
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
		height:40vh;
		padding:0 0.3rem;
		font-size: 0.28rem;
		border-bottom: 1px solid gainsboro;
	}
</style>
