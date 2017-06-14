<template>
  <div>
  	<div class="am-panel-group" id="accordion">
	    <div class="am-panel am-panel-default">
		    <div class="am-panel-hd">
		    	
		      <h4 class="am-panel-title" data-am-collapse="{parent: '#accordion', target: '#do-not-say-1'}">
		      	<p>简介</p>
		      	<p>哈哈哈哈哈</p>
		      </h4>
		      
		    </div>
		    <div id="do-not-say-1" class="am-panel-collapse am-collapse am-in">
		      <div class="am-panel-bd">
		       简介电放费
		      </div>
		    </div>
	  	</div>
	  	<div class="am-panel-group" id="accordion">
	    <div class="am-panel am-panel-default">
		    <div class="am-panel-hd">
		    	
		      <h4 class="am-panel-title" data-am-collapse="{parent: '#accordion', target: '#do-not-say-2'}">
		      	<p>目录</p>
		      	<p>{{data.table_of_contents}}</p>
		      </h4>
		      
		    </div>
		    <div id="do-not-say-2" class="am-panel-collapse am-collapse">
		      <div class="am-panel-bd">
		       我是目录下里的
		      </div>
		    </div>
	  	</div>
  	</div>
  	</div>
  </div>
</template>

<script>
	import jQuery from "jquery"
window.$=window.jQuery=jQuery;
	
export default {
  name: 'InfoSummary',
  props:["passData"],
  
  data(){
    return {
      data: this.passData
    }
  }
	
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	div{
		height:50vh;
		font-size: 0.3rem;
	}
	.am-panel-hd{
		height:30vh;
		width:100vw;
		background:red;
		padding:0.2rem 0.2rem 0.1rem;
		font-size: 0.3rem;
	}
	.am-panel-title{
		height:0.5rem;
		width:98vw;
	}
	#do-not-say-1{
		background:yellow;
	}
</style>
