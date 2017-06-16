<template>
	<div id="content">
		<h2 class="jion">欢迎加入爱阅读</h2>
		<div class="am-g">
		  <div class="am-u-md-10 am-u-sm-centered">
		    <div class="am-form">
		      <fieldset class="am-form-set">
		      	<div>
			      	<input type="text" v-verify.grow1="userphone" v-model="userphone" placeholder="给个手机号">
			      	<label v-verified="verifyError.userphone" class="am-form-field"></label>
		      	</div>
		      	<div>
			        <input type="text" v-verify.grow1="username" v-model="username" placeholder="取个名字">
			        <label v-verified="verifyError.username" class="am-form-field"></label>
		        </div>
		        <div>
		        	<input type="password"  v-verify.grow1="pwd" v-model="pwd" placeholder="设个密码">
		        	 <label v-verified="verifyError.pwd" class="am-form-field"></label>
		        </div>
		      </fieldset>
		       <button  @click="submit"  class="am-btn am-btn-primary am-btn-block saveBtn">注册个账号</button>
		    </div>
		  </div>
		</div>
	</div>
</template>

<script>
	
	export default{
		name:'Register',
	  	data:function(){
		    return {
		      userphone:"",
		      username:"",
		      pwd:""
		    }
  		},
		methods:{
		    submit:function(){
		      if(this.$verify.check()){
		        //通过验证  
		      }
		    }
		},
		verify:{
			userphone:[
			  "required",
			  {
			  	test:/^1[34578]\d{9}$/,
   				message:"小主，格式不正确呀！"
			  }
			],
		    username:[
		      "required",
		      {
		        test:function(val){
		          if(val.length<2){
		            return false;
		          }
		          return true;
		        },
		        message:"名字不得少于两个字，再换个试试吧-_-"
		      }
		    ],
		    pwd:[
		      "required",
		      {
		      	test: /[a-zA-Z][0-9]{5,17}$/,
		      	message:"密码由6-18位数字、字母组成"
		      }
		    ]
		},
		computed:{
		    verifyError:function(){
		      return this.$verify.$errors;
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
	.am-g .am-form label{
		font-size: 0.2rem;
		border: 1px solid red;
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