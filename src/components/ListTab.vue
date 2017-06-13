<template>
  <div>
    <div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in list1">
        	<router-link :to="{ name:'ListInfo', params:{id:item.id} }">
	        	<img :src="item.cover"/>
	  				<h3 class="book-title">{{item.title}}</h3>
	  				<p class="book-author">{{item.author}}</p>
	  				<p class="book-price">{{item.price}}</p>
  				</router-link>
        </div>
    </div>
		</div>
  </div>
</template>

<script type="text/javascript">
	 import jsonp from "jsonp"
	 import Vue from "vue"
//	 var Swiper = new Swiper('.swiper-container',{
//				slidesPerView : 3,
//				//slidesPerGroup : 3,
//				loop:true
//		})
	export default {
		
  name: 'ListTab',
  data () {
    return {
    	
      msg: "111",
      list1:""
      
    }
  },
 	created(){
 			//var url = "https://read.douban.com/j/category/"
//       jsonp(url,null,(err,data)=> {
//        if(err){
//          console.log('数据无法获取')
//        }else{
//          this.arr = data
//          console.log(this.arr)
//        }
//       })
			Vue.axios.get("../static/list.json").then((res)=> {
        return res
      }).then((res)=> {
        //console.log(res.data);
        var data = res.data;
        //console.log(data)
        
       console.log(data[0])
       this.arr = data[0];
       var list1 = data[0].works;
       console.log(list1)
      	this.list1 = data[0].works;
     	
    
      })
 	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	*{margin:0;padding:0}
	.swiper-container{
		overflow-y: hidden;
		overflow-x:scroll ;
	}
	.swiper-slide{
		width:25vw;
		margin-right:1rem;
		text-align: left;
	}
	.swiper-slide img{
		width:25vw;
	}
	.book-title{
		color: #222;
    margin-top: 6px;
    font-size: 12px;
    line-height: 16px;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
	}
	.book-author{
		font-size: 12px;
    color: #737373;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
	}
	.book-price{
		font-size: 12px;
    color: #77a4b3;
	}
</style>
