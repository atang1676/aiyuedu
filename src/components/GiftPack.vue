<template>
	<div id="content"> 
		<div class="am-tabs" data-am-tabs>
  			<ul class="am-tabs-nav am-nav am-nav-tabs">
			    <li class="am-active songchu"><a href="#tab1">送出</a></li>
			    <li class="shoudao"><a href="#tab2">收到</a></li>
  			</ul>
  			<div class="am-tabs-bd">
  				<div class="am-tab-panel am-fade am-in am-active" id="tab1">
  					你还没有送出的礼物！
  				</div>
  				<div class="am-tab-panel am-fade" id="tab2">
  					你还没有收到的礼物！
  				</div>
  			</div>
  		</div>
	</div>
</template>

<script>
	export default{
		name:'GiftPack',
		data(){
			return {
				value:""
			}
		}
	}
</script>

<style scoped>
	
	.am-tabs{
		margin-top:0.1rem;
	}
	.am-tabs-nav li{
		font-size: 0.3rem;
		width:50vw;
	}
	.am-tab-panel{
		font-size: 0.3rem;
	}
</style>