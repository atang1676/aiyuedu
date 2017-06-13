<template>
	<div>
		<div class="NavHeader">
			<h1>豆瓣专栏</h1>
			<div class="subtitle">世间之事，经验之谈。
				<a href="" class="">了解更多 &gt;</a>
			</div>
		</div>
		<navInfoTop></navInfoTop>
	</div>
</template>

<script>
import navInfoTop from './navInfoTop'
export default{
	name:'NavInfo'
}
</script>

<style scoped>
.NavHeader{
	width: 100%;
	height: 1.4rem;
	font-size: 0.25rem;
	padding-top:0.3rem;
	padding-left: 0.2rem;
}
.NavHeader h1{
	font-weight: bold;
	font-size:0.35rem;
	line-height: 1;
	margin-bottom: 8px;
}
.NavHeader a{
	color: #71ceb5;
	font-size: 0.25rem;
	margin-left:2rem;
	
}
</style>