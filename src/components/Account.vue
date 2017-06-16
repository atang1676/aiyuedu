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
			<p class="copy">由于苹果公司政策限制，豆币仅能在「爱阅读 iOS App」内充值及使用。</p>
		</div>
		
<<<<<<< HEAD
		<p class="accountBottom"><a >消费记录</a>></p>
		<p class="accountBottom songhua"><a >送花记录</a>></p>
		<div class="bottom"></div>
=======
		<p class="accountBottom"><a href="">消费记录</a>></p>
		<p class="accountBottom"><a href="">送花记录</a>></p>
		<div class="bottom"><p>￥:0.00</p></div>
>>>>>>> e44fcef57e30ce4a49919c04feda9834c4ef6833
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
		padding:0 0.3rem;
		color:#71ceb5;
	}
	h1{
		font-size: 0.3rem;
		text-align: center;
		color:#71ceb5;
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
		color:#71ceb5;
		margin-top:0.3rem;
	}
	button{
    width: 80vw;
    height: 0.8rem;
    border-radius: 0.4rem;
    background: #71ceb5;
    font-size: 0.3rem;
    margin-top: -0.8rem;
    color: #fff;
    border: 0;
}
	.accountmoney{
		height:0.8rem;
		font-size: 0.3rem;
    	text-align: center;
    	line-height: 0.8rem;
    	background:#fff;
	}
	.accountmoney a{
		color:#71ceb5;
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
<<<<<<< HEAD
		color:#71ceb5;
=======
		color:#aac6d0;
>>>>>>> e44fcef57e30ce4a49919c04feda9834c4ef6833
		margin-top:0.5rem;
		padding-left:0.3rem;
		border-radius: 5px;
	}
	.accountBottom a{
		padding-right:60vw;
<<<<<<< HEAD
		color:#71ceb5;
	}
	.songhua{
		margin-bottom: 100px;
=======
>>>>>>> e44fcef57e30ce4a49919c04feda9834c4ef6833
	}
	.bottom{
		margin-top:1rem;
		height:2rem;
		background:lavender;
	}
</style>