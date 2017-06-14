<template>
	<div class="kinds">
		<h2>分类</h2>
		<div class="kindsList">
			<router-link :to="{name:'fenleiInfo',params:{flInfo:item.id}}" v-for="item in listKinds">{{item.name}}</router-link>
		</div>
	</div>
</template>

<script>
	export default{
		name:'navInfoBottom',
		props:['listKinds']
	}
</script>

<style scoped>
	.kinds{
		width: 100%;
		padding: 0 8px;
		margin-top:0.3rem;
		font-size: 0.16rem;
		margin-bottom:2rem;
	}
	.kinds h2{
		padding: 5px ;
		border-bottom: 2px solid #ccc;
		color: #000;
	}
	.kindsList{
		width: 100%;
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		padding-top: 10px;
	}
	.kindsList a{
		display: block;
		width:26%;
		height: 0.5rem;
		background: #eee;
		text-align: center;
		line-height: 0.5rem;
		margin-right: 0.3rem;
		margin-bottom: 10px;
		color: #626262;
		font-size: 0.18rem;
	}
</style>