<template>
  <div id="app">
     <header data-am-widget="header"
          class="am-header am-header-default">
      <div class="am-header-left am-header-nav">
          <a href="" class="">
                豆瓣阅读
          </a>
      </div>
      <div class="am-header-right am-header-nav">
          <a href="#user-link" class="">

                <i class="iconfont icon-sousuo-sousuo"></i>
          </a>
          <a href="#cart-link" class="">

                <i class="iconfont icon-wode1"></i>
          </a>
      </div>
  </header>
  <div id="content">
    <router-view></router-view>
  </div>
	<footer>
		<p>
			<span class="user-name">阿糖</span>
			<a href="/logout?ck=qUhz&amp;target=/">退出</a> | 手机版 | <a href="" class="go-web">网页版</a></p><p class="copyright">© 2005-2017 douban.com
		</p>
	</footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}

</script>

<style>
 
html,body, ul, li, ol, dl, dd, dt, p, h1, h2, h3, h4, h5, h6, form, fieldset, legend, img,input,figure,div,header,section,aside,main,header,footer,article{ margin:0; padding:0;box-sizing:border-box; }
a{text-decoration:none;}
ul,ol,li{list-style: none;}
img{border:0;display:block;}
body{font-family:"微软雅黑";}
b,strong{font-weight:100;}
i,em{font-style:normal;}
input{border: 0;outline: none;}
h1,h2,h3,h4,h5,h6{font-size:16px;font-weight:100;}
.clearfix:after{content:".";clear:both;display:block;height:0;overflow:hidden;visibility: hidden;}
html,body{height:100%;background:#f8f9f9;}
html{
	font-size: 15.625vw;
}
body{
	display: flex;
  flex-flow: column wrap; 
  justify-content:space-between;
}
#app {
	height:100%;
  display: flex;
  flex-flow: column wrap; 
  overflow-x: hidden;
  justify-content:space-between;
}
.am-header-default {
	display: flex;
	justify-content: space-between;
	align-items:center;
	color: #77A4B3;
	font-size: 0.16rem;
	height: 0.88rem;
	background: #fff;
}
.am-header .am-header-nav img{
	display: inline-block;
	width: 1rem;
	height: 0.88rem;
}
.am-header .am-header-nav a{
	font-size: 0.3rem;
	color: #77A4B3;
	font-weight: 900;
}
.am-header-right a i{
	font-size: 0.35rem!important;
}

#content{
	display: flex;
	flex: 1;
}


footer{
	height: 0.89rem;
	font-size: 0.16rem;
	text-align: center;
}
</style>
