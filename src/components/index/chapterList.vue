<template>
    <div class="list">
        <load-ding v-show="this.isShowLoadding"></load-ding>
                   <div class="contentBox">
                       <scroller
                          class="wrapper" 
                          :on-refresh="_refresh"
                          :on-infinite="_infinite" 
                          v-show='show_infinite'
                          ref="scroller"


                  >
                       <div v-for="item in data" class="itemBox">
                           <span v-show="item.top" class="itemtop">置顶</span>
                           <span v-show="item.good" class="essence">精华</span>
                           <div class="top outer">
                               <div class="imgBox">
                                   <router-link :to="{path:'/userdetail/'+item.author.loginname}">
                                       <img :title="item.author.loginname" :src="item.author.avatar_url" alt="">
                                   </router-link>
                               </div>
                               <div class="infoBox">
                                   <p class="author">{{item.author.loginname}}</p>
                                   <p class="activeInfo"><span class="activeTime">1分钟前</span><span class="type">#{{item.tab}}#</span></p>
                               </div>
                               <div class="clear"></div>
                           </div>
                           <router-link class="href" :to="{path:'/detail/'+item.id}"><h4 id="title">{{item.title}}</h4></router-link>
                           <div class="bottom">
                               <div class="item" id="left">
                                   <icon name="eye"></icon>
                                   <span>{{item.visit_count}}</span>
                               </div>
                               <div class="item">
                                   <icon name="comments"></icon>
                                   <span>{{item.reply_count>0?item.reply_count:'暂无评论'}}</span>
                               </div>
                               <div class="item">
                                   <icon name="clock-o"></icon>
                                   <span>{{item.last_reply_at | getTimeInfos}}</span>
                               </div>
                               <div class="clear"></div>
                           </div>
                       </div>


                       </scroller>
                   </div>                
    </div>
</template>

<script>
    import loadDing from '../loadding.vue'

    export default {
        name: 'chapterList',
        props:['data','showInfinite']
      ,
        components:{
            loadDing
        },
        data() {
            return {
                 isShowLoadding:true,
                 show_infinite:true,

            }
        },
        mounted(){
          this.isShowLoadding = false;
          this.show_infinite = this.showInfinite;
        
 
        
        },
        filters: {
//            可以抽出来做成通用的
            getTimeInfos(str) {
                if (!str) {
                    return ''
                }
                const date = new Date(str);
                const time = new Date().getTime() - date.getTime(); //现在的时间-传入的时间 = 相差的时间（单位 = 毫秒）
                if (time < 0) {
                    return '';//我也想这件事可能发生
                } else if (time / 1000 < 60) {
                    return '刚刚';
                } else if ((time / 60000) < 60) {
                    return parseInt((time / 60000)) + '分钟前';
                } else if ((time / 3600000) < 24) {
                    return parseInt(time / 3600000) + '小时前';
                } else if ((time / 86400000) < 31) {
                    return parseInt(time / 86400000) + '天前';
                } else if ((time / 2592000000) < 12) {
                    return parseInt(time / 2592000000) + '月前';
                } else {
                    return parseInt(time / 31536000000) + '年前';
                }
            }
        },
        computed:{

        },
        created(){
           
          },
        methods: {
            _refresh:function(done){
                setTimeout(function (){
                    done();
                },2000)

            },

            _infinite:function(done){
                //获取VM
                this.$nextTick(()=>{

                    let scroll = this.$refs.scroller;
                    let Pleft =scroll.getPosition().left-0;
                    let Ptop = scroll.getPosition().top-0;

                    done();

                })
            },
            _getData(type,pageCount){

                   this.$http.get('https://cnodejs.org/api/v1/topics?tab=' + type + '&page=1&limit='+pageCount*10+'&mdrender=false').
                    then((response)=>{

                       this.isShowLoadding = false;

                   }).
                   catch((error)=>{
                       console.log('获取下拉数据加载失败！');
                   });
            }

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
  *{
    padding:0px;
    margin:0px;
  }
   
  .list{
    width:100%;
    
    position:absolute;
    top:40px;
    left:0px;
    height: 100%;
    z-index: 100;
  }
 
  .wrapper{
    position: relative;
    top: 0px;
    left: 0px;  
    width: 100%;
    height: 10%;

        
  }
 .contentBox{
    width: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    height: 100%;

    overflow: auto;
}
  .itemBox{
    width:100%;
    height:130px;
    background:white;
    margin-bottom:20px;
    position:relative;
   

  }
  .loading-layer{
    height: 40px;
  }
  .itemBox:last-child{
      width:100%;
      height:130px;
      background:red; 
      position:relative;
  }
  .top{
    width:100%;
    height:45px;
    padding-top: 10px;
    padding-bottom: 5px;

  }

  .imgBox{
    display: block;
    float: left;
    width:40px;
    height:40px;
    padding-left:15px;
    padding-right: 15px;

  }
  .imgBox img{
    width:40px;
    height:40px;
    border-radius: 20px;
  }
  .infoBox{
    display: block;
    float:left;
  }
  .author{
    font-size:14px;
  }
  .activeInfo{
    padding-top: 3px;
  }
  .activeInfo>.activeTime{
    color:gray;
    padding-right: 5px;
  }
  .activeInfo>.type{
    color:rgb(137,196,34);
  }
  h4{
    padding-top:5px;
    font-size:14px;
    padding-left: 15px;
    padding-bottom: 10px;
    border-bottom: 1px solid rgb(237,237,237);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

  }
  .bottom{
    width:100%;
    height:30px;
    padding-top: 5px;
    border-bottom: 1px rgb(237,237,237) solid;
    font-size:10px;


  }
  .bottom>.item{
    display: block;
    float: left;
    width:33%;
    font-size:10px;

    border-left: 1px solid rgb(237,237,237);

  }
  .bottom #left{
    border:none;
  }

  .bottom>.item>span {
    display: inline-block;
    vertical-align: top;
    font-size:10px;

  }
  .itemtop{
    display: block;
    width:80px;
    height:30px;
    border:2px  rgb(137,196,34) solid ;
    text-align: center;
    line-height: 30px;
    position:absolute;
    right: 10px;
    top:55px;
    transform: rotate(55deg);
    font-size: 14px;
    color:rgb(137,196,34)!important;

  }
  .essence{
    display: block;
    width:80px;
    height:30px;
    border:2px rgb(255, 52, 14) solid ;
    text-align: center;
    line-height: 30px;
    position:absolute;
    right: 70px;
    top:60px;
    transform: rotate(55deg);
    font-size: 14px;
    color:rgb(255, 52, 14)!important;
  }
  .href{
    text-decoration: none;
    color:black;
  }


.clear{
   clear:both; 
   height: 0; 
   height: 0; 
   overflow:hidden;
}
.outer {zoom:1;}   
.outer:after {
   clear:both;
   content:'.';
   display:block;
   width: 0;
   height: 0;
   visibility:hidden;
}

</style>
