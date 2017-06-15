<template>
	<div id="content"> 
		<h1>拥有的作品</h1>
		<div class="library">
			这里是空的
		</div>
	</div>
</template>

<script>
	export default{
		name:'Library',
		data(){
			return {
				value:""
			}
		}
	}
</script>

<style scoped>
	#content{
		background:lavender;
		padding:0 0.3rem;
	}
	h1{
		font-size: 0.3rem;
		text-align: center;
		color:#aac6d0;
		font-weight: 800;
		height:1.4rem;
		line-height: 1.4rem;
	}
	.library{
		height:0.4rem;
		font-size: 0.3rem;
		color:#fff;
		text-align: center;
	}
</style>