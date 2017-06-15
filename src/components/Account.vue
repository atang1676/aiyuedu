<template>
	<div id="content"> 
		
		<h1>账户余额</h1>
		<div class="accountTop">
			<p>￥:0.00</p>
			<button>充值</button>
		</div>
		<div class="accountmoney">
			<a href="">充值记录</a>
			<a href="">遇到问题</a>
		</div>
		<div class="accountCenter">
			<p>￥:0.00</p>
			<p class="copy">由于苹果公司政策限制，豆币仅能在「豆瓣阅读 iOS App」内充值及使用。</p>
		</div>
		
		<p class="accountBottom"><a href="">消费记录</a>></p>
		<p class="accountBottom"><a href="">送花记录</a>></p>
		<div class="bottom"><p>￥:0.00</p></div>
	</div>
</template>

<script>
	export default{
		name:'Account',
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
	.accountTop,.accountCenter{
		text-align: center;
		background:#fff;
		border-radius: 5px;
		height:25vh;
		border-bottom: 1px solid gainsboro;
	}
	p{
		font-size: 0.5rem;
		color:#6a9acc;
		margin-top:0.3rem;
	}
	button{
		width:80vw;
		height:0.8rem;
		border-radius:0.4rem;
		background:#77a4b3;
		font-size: 0.3rem;
		margin-top:-0.8rem;
		color:#fff;
	}
	.accountmoney{
		height:0.8rem;
		font-size: 0.3rem;
    	text-align: center;
    	line-height: 0.8rem;
    	background:#fff;
	}
	.accountmoney a{
		width:35vw;
		padding:0 0.4rem;
	}
	.accountCenter{
		margin-top:0.5rem;
	}
	.copy{
		font-size: 0.25rem;
		color:#aac6d0;
		padding:0 0.2rem;
	}
	.accountBottom{
		background: #fff;
		height:1rem;
		line-height: 1rem;
		font-size: 0.3rem;
		color:#aac6d0;
		margin-top:0.5rem;
		padding-left:0.3rem;
		border-radius: 5px;
	}
	.accountBottom a{
		padding-right:60vw;
	}
	.bottom{
		margin-top:1rem;
		height:2rem;
		background:lavender;
	}
</style>