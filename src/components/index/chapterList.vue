<template>
    <div class="list">
        <load-ding v-show="this.isShowLoadding"></load-ding>


        <scroller
                :on-refresh="_refresh"
                :on-infinite="_infinite"

        >
                 <div class="contentBox">
                     <div v-for="item in data" class="itemBox">
                         <span v-show="item.top" class="itemtop">置顶</span>
                         <span v-show="item.good" class="essence">精华</span>
                         <div class="top">
                             <div class="imgBox">
                                 <router-link :to="{path:'/userdetail/'+item.author_id}">
                                     <img :title="item.author.loginname" :src="item.author.avatar_url" alt="">
                                 </router-link>
                             </div>
                             <div class="infoBox">
                                 <p class="author">{{item.author.loginname}}</p>
                                 <p class="activeInfo"><span class="activeTime">1分钟前</span><span class="type">#{{item.tab}}#</span></p>
                             </div>
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
                                 <span>21分钟前</span>
                             </div>
                         </div>
                     </div>
                 </div>
        </scroller>




    </div>




</template>

<script>
    import loadDing from '../loadding.vue'
    export default {
        name: 'chapterList',
        props:['data']
      ,
        components:{
            loadDing
        },
        data() {
            return {
                 isShowLoadding:true,
            }
        },
        mounted:function(){
          this.isShowLoadding = false;

        },
        methods: {
            _refresh:function(done){
                setTimeout(function (){
                    done();
                },2000)

            },
            _infinite:function(done){
                setTimeout(function (){
                    console.log('xxx');
                    done();
                },2000)
            },
            _getData(type,pageCount){
                    let tempData = this.data;
                   this.$http.get('https://cnodejs.org/api/v1/topics?tab=' + type + '&page=1&limit='+pageCount*10+'&mdrender=false').
                    then((response)=>{
                       this.data = response.data.data;
                   }).
                   catch((error)=>{
                       console.log('获取下拉数据加载失败！');
                   });
            }

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  *{
    padding:0px;
    margin:0px;
  }

  .list{
    width:100%;
    margin-bottom: -80px;
    overflow: auto;
    position:absolute;
    top:40px;
    left:0px;
    bottom:-38px;
    z-index: 100;
  }
  .itemBox{
    width:100%;
    height:130px;
    background:white;
    margin-bottom:20px;
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
.contentBox{
    /*background:red;*/
}


</style>
