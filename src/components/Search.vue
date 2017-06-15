<template>
	<div> 
		<mt-search
		  v-model="value"
		  placeholder="作品 / 电子书 / 专栏 / 连载 / 作者">
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
	
</style>