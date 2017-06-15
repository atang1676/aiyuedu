<template>
	<div id="content"> 
		<mt-search class="bgImg"
		  v-model="value"
		  placeholder="作品 / 电子书 / 专栏 / 连载 / 作者">
		<div>还没有呢</div>
		</mt-search>
		
	</div>
</template>

<script>
	export default{
		name:'Search',
		data(){
			return {
				value:""
			}
		}
	}
</script>

<style scoped>
	.bgImg{
		background: #fff url(../assets/bookpg.jpg) no-repeat 0 center;
		background-size:100%;
	}
</style>