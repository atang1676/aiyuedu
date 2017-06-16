<template>
	<div id="content"> 
		<h1>我的礼券</h1>
		<div class="change">+兑换</div>
		<div class="gift">
			<p>我的礼券</p>
			<div class="gitcon">
				你还没有礼券哦！
			</div>
		</div>
		<div class="gift">
			<p>可用礼券</p>
			<div class="gituse">
				你还没用可用礼券哦！
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'Gift',
		data(){
			return {
				value:""
			}
		}
	}
</script>

<style scoped>
	#content{
		color:#71ceb5;
		
		padding:0 0.3rem;
	}
	h1{
		font-size: 0.3rem;
		text-align: center;
		color:#71ceb5;
		
		font-weight: 800;
		height:1.4rem;
		line-height: 1.4rem;
	}
	.change{
    border: 0;
	height:0.8rem;
	line-height:0.8rem;
	border-radius:0.4rem;
	width:70vw;
	margin-left:10vw;
	background:#71ceb5;
	font-size: 0.3rem;
	color:#fff;
	text-align: center;
	}
	.gift{
		border:1px solid gainsboro;
		margin-top:0.4rem;
		padding:0 0.2rem;
		border-radius:10px;
	}
	.gift p{
		font-size: 0.3rem;
	}
	.gitcon,.gituse{
		height:15vh;
		font-size: 0.3rem;
		background:#fff;
		margin-top:0.3rem;
		text-align: center;
		line-height: 15vh;
		border-radius:10px;
	}
</style>