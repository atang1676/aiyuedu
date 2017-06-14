<template>
	<div class="swiper-container navInfoTopSwiper">
	    <div class="swiper-wrapper">
	        <div class="swiper-slide" v-for="item in imgBanners">
	        	<img :src="item.image_url"/>
	        </div>
	    </div>
	    <div class="swiper-pagination navInfoTopPagination"></div>
	</div>
	
</template>

<script>
import swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
export default{
	name:'navInfoTop',
	props:['imgBanners'],
	
	beforeUpdate(){
		setTimeout(function(){
			var mySwiper1 = new Swiper('.navInfoTopSwiper',{
				autoplay: 4000,//可选选项，自动滑动
				loop:true,
				pagination : '.navInfoTopPagination',
				autoplayDisableOnInteraction : false,
				freeModeMomentumVelocityRatio : 5,
				paginationClickable :true,
				//pagination : '#swiper-pagination1',
			})
			
		},0)
		
	}
}
	
</script>

<style scoped>
.swiper-container{
	overflow:visible;
	margin-bottom: 0.5rem;
}
.swiper-wrapper{
	width: 100vw;
	height: 80%;
}
.swiper-wrapper img{
	
}	
.swiper-pagination{
	height:0.5rem;
	line-height:1;
	padding-top: 0.2rem;
	padding-left: 2.5rem;
	position: absolute;
	top:3.5rem
}
</style>