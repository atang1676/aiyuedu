<template>
  <div id="app">
     <header data-am-widget="header"
          class="am-header am-header-default am-header-fixed">
      <div class="am-header-left am-header-nav">
          <router-link :to="{name:'Content'}">
                爱阅读
          </router-link>
      </div>
      <div class="am-header-right am-header-nav">
          <router-link :to="{ name:'Search'}" class="search">
                <i class="iconfont icon-sousuo-sousuo"></i>
          </router-link>
          
					<div class="am-dropdown" data-am-dropdown>
								<button class="am-btn  am-dropdown-toggle" data-am-dropdown-toggle><i class="iconfont icon-wode1"></i> </button>
								<ul class="am-dropdown-content">
								    <li><router-link :to="{ name:'Account'}">账户余额</router-link></li>
								    <li><a href="#">礼券</a></li>
								    <li><a href="#">拥有的作品</a></li>
								    <li><a href="#">礼物</a></li>
								    <li><a href="#">账户信息</a></li>
								</ul>
								
					</div>
      </div>
  </header>
  
    <router-view></router-view>
  <footer data-am-widget="footer"
          class="am-footer am-footer-default am-footer-fixed"
           data-am-footer="{  }">
    <div class="am-footer-switch">
    <span class="am-footer-ysp" data-rel="mobile"
          data-am-modal="{target: '#am-switch-mode'}">
    	阿糖
    </span>
      
      <a id="godesktop" data-rel="desktop" class="am-footer-desktop" href="javascript:">
          退出
      </a>
      <span class="am-footer-divider"> | </span>
      <span class="am-footer-ysp" data-rel="mobile"
          data-am-modal="{target: '#am-switch-mode'}">
    	手机版
    </span>
      
      <a id="godesktop" data-rel="desktop" class="am-footer-desktop" href="javascript:">
          网页版
      </a>
    </div>
    <div class="am-footer-miscs ">
			<p class="copyright">© 2005-2017 douban.com</p>
    </div>
  </footer>
  </div>
</template>

<script>
import 'mint-ui/lib/style.css'
import 'amazeui/dist/css/amazeui.min.css'	
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
  flex-flow: column; 
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
	background:#fff;
	border-bottom:1px solid #77A4B3;
}
.am-header .am-header-nav img{
	display: inline-block;
	width: 1rem;
	height: 0.88rem;
}
.am-header .am-header-nav a{
	font-size: 0.3rem;
	color: #71ceb5;
	font-weight: 900;
}
.am-header-right a i{
	font-size: 0.35rem!important;
}
.search{padding-top:0px;}
.am-btn{
	background: #fff;
}
.am-btn i{
	color: #71ceb5;
	font-size: 0.4rem!important;
	
}
#content{
	display: flex;
	flex-flow: column;
	flex: 1;
}


.am-footer-default{
	font-size: 0.22rem;
	background:#f8f9f9;
}
.am-footer-fixed {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 1010;
}
.am-footer-default .am-footer-desktop{
	color:#71ceb5
}

.am-dropdown .am-dropdown-content li a{
	font-size: 0.25rem;
	color: #000;
}
.am-dropdown-content{
	background:ghostwhite;
	box-shadow: 0 0 10px 3px;
}
.am-dropdown-content li{
	border-bottom: 1px solid gainsboro;
}
.am-dropdown-content li:hover{
	background: gold;
}
/*navInfoTop里的tips*/

.swiper-pagination-bullet{
	display:block;
	float: left;
	background:#ccc;
}
.swiper-pagination-bullet-active{
	background:#71ceb5;
}

/*Search里的搜索框*/
.mint-searchbar-inner{
	font-size:0.25rem;
}
.mint-searchbar-cancel{
	font-size:0.25rem;
}
/*搜索框的背景*/
.mint-searchbar{
	background:#f8f9f9;
}
/*加载更多的模态框*/
	.mint-indicator-wrapper {
    top: 82%;
    left: 50%;
    position: fixed;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    border-radius: 5px;
    /* background: rgba(0, 0, 0, 0.7); */
    color: white;
    box-sizing: border-box;
    text-align: center;
    width: 300px;
    height: 40px;
}
.mint-indicator-spin {
    display: inline-block;
    text-align: center;
    position: absolute;
    left: 45%;
    top: 4px;
}
</style>
