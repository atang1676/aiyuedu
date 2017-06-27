<template>
	<div id="content">
		<div class="NavHeader" v-if=" kind == 'column' ">
			<h1>爱阅读-专栏</h1>
			<div class="subtitle">世间之事，经验之谈。
				<a href="" class="">了解更多 &gt;</a>
			</div>
		</div>
		<div class="NavHeader" v-else>
			<h1>爱阅读-连载</h1>
			<div class="subtitle">追就对了
				<a href="" class="">了解更多 &gt;</a>
			</div>
		</div>
		<navInfoTop :img-banners="banners"></navInfoTop>
		<navInfoCenter :charts-zero="charts0" :charts-one="charts1"></navInfoCenter>
		<navInfoBottom :list-kinds="kinds"></navInfoBottom>
	</div>
</template>

<script>
import Vue from 'vue'
import navInfoTop from './navInfoTop'
import navInfoCenter from './navInfoCenter'
import navInfoBottom from './navInfoBottom'

export default{
	name:'NavInfo',
	components:{navInfoTop,navInfoCenter,navInfoBottom},
	data(){
		return {
			banners:'',
			charts:'',
			kinds:'',
			kind:'',
			charts0:'',
			charts1:''
		}
	},
	created(){
		var kind = window.location.pathname.split('/')[2];
		var url ='';
		//var url = 'https://read.douban.com/j/column/?kind='+ kind
		if(kind == 'column'){
			//url = 'https://read.douban.com/j/column/?kind='+ kind
			//url = '../static/navInfoColumn.json';
			this.kind = 'column';
		}else if(kind == 'serial'){
			//url = 'https://read.douban.com/j/column/?kind='+ kind
			//url = '../static/navInfoSerial.json';
			this.kind = 'serial';
		}
	//	url = 'https://read.douban.com/j/column/?kind='+ kind
		url = '/j/column/?kind='+ kind
		console.log(url)
	//	console.log(url);
		 Vue.axios.get(url).then((res)=> {
	        this.banners = Array.prototype.slice.call(res.data.banners);
	        this.charts = Array.prototype.slice.call(res.data.charts);
	        
	        this.charts0 = this.charts[0];
	        this.charts1 = this.charts[1];
	        this.kinds = Array.prototype.slice.call(res.data.kinds);
	        console.log(this.charts);
	     })
	}
}

//专栏 ： https://read.douban.com/j/column/?kind=column
//连载： https://read.douban.com/j/column/?kind=serial 

</script>

<style scoped>
.NavHeader{
	width: 100%;
	height: 1.4rem;
	font-size: 0.25rem;
	padding-top:0.3rem;
	padding-left: 0.2rem;
	position: relative;
}
.NavHeader h1{
	font-weight: bold;
	font-size:0.28rem;
	line-height: 1;
	margin-bottom: 8px;
	color: #71ceb5;
}
.NavHeader a{
	position: absolute;
	color: #71ceb5;
	font-size: 0.25rem;
	right: 5px;
	
}
</style>