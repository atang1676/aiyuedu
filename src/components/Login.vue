<template>
	<div id="content">
		<h2 class="jion">欢迎登录爱阅读</h2>
		<div class="am-g">
		  <div class="am-u-md-10 am-u-sm-centered">
		    <div class="am-form">
		      <fieldset class="am-form-set">
		        <input type="text" placeholder="填个名字" v-model="username">
		        <input type="text" placeholder="写个密码" v-model="pwd">
		      </fieldset>
		      <router-link :to="{name:'Content'}">
		      	<span class="am-btn am-btn-primary am-btn-block saveBtn" @click="save">Let's Go</span></router-link>
		      
		    </div>
		  </div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'Login',
		data(){
			return{
				username:"",
				pwd:""
			}
			
		},
		methods:{
			save:function(){
				localStorage.username = this.username;
				localStorage.pwd = this.pwd;
				
			}
		}
	}
</script>

<style scoped>
	#content{
		padding: 0.4rem;
		
	}
	.jion{
		font-size: 0.33rem;
		text-align: center;
		color: #71ceb5;
		margin-bottom: 20px;
	}
	.am-g{
		font-size: 0.16rem;
	
	}
	.am-g .am-form{
		display: flex;
		flex-flow: column;
		align-items: center;
	}
	.am-g .am-form input{
		width:4.5rem;
		height: 0.8rem;
		font-size: 0.2rem;
	}
	.am-g .am-form .saveBtn{
		width:4.5rem;
		height: 0.8rem;
		font-size: 0.3rem;
		color: #fff;
		border: 0;
		border-radius: 5px;
		background: #71ceb5;
		margin-top: -0.6rem;
		outline: none;
	}
</style>