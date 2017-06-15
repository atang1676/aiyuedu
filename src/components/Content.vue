<template>
	<div id="content"> 
		<div class="navTab">
			<ul>
				<li>
					<router-link :to="{name:'NavInfo',params:{kind:'column'}}">专栏></router-link>
				</li>
				<li>
					<router-link :to="{ name:'NavInfo', params:{kind:'serial'} }">连载></router-link>
				</li>
			</ul>
		</div>
		<ListTab></ListTab>
	</div>
</template>

<script>
	import ListTab from './ListTab'
	
	export default{
		name:'Content',
		components:{
			ListTab
		}
	}
</script>

<style scoped>
.navTab{
	width: 100%;
	height:1rem;
	margin-top:0.2rem;
}
.navTab ul{
	width: 100%;
	height:100%;
	display: flex;
	justify-content: space-around;
	align-items: center;
}
.navTab ul li{
	display: flex;
	align-items: center;
	justify-content:flex-end;
	width:45%;
	height: 80%;
	padding-right: 5px;
	border-radius: 5px;
	
}
.navTab ul li a{
	color: #fff;
	font-size: 0.28rem;
}
.navTab ul li:first-child{
	background: url(../assets/navColumn.jpg) no-repeat 0 0;
	background-size: cover;
}
.navTab ul li:last-child{
	background: url(../assets/navSerial.jpg) no-repeat 0 0;
	background-size: cover;
}
</style>