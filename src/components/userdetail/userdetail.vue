<template>
    <div class="userdetail">
      <div class="header">
           <div class="header">
               <span class="text">用户详情</span>
           </div>
       </div>
       <div class="userInfo">
           <div class="bgImg">
               <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=73823530,1601728755&fm=27&gp=0.jpg" alt="">
               <div class="filter"></div>
           </div>
           <div class="userImg">
               <img :src="userInfo.avatar_url" alt="">
               <p class="userName">{{userInfo.loginname}}</p>
               <p class="github">
                    <a :href="'https://github.com/'+userInfo.githubUsername">
                       <icon name="github" class="github_icon"></icon>&nbsp;&nbsp;<span class="githubName">{{userInfo.githubUsername}}</span>
                    </a>
               </p>
               <p class="createTime"><!-- 突然间不想要时间啦 --> 积分:{{userInfo.score}}</p>
           </div> 
       </div>
       <div class="userReccentTopic">
           <chapter-list></chapter-list>
       </div>

    </div>
</template>

<script>
    import chapterList from '../index/chapterList'
    export default {
        name: 'userdetail',
        data() {
            return {
                userInfo:null,
                recentReplies:[],

            }
        },
        components:{
         chapterList
        },
        computed:{


        },
        methods:{
         getTopicDetail(chapterId){
         //通过文章ID获取文章详情
             this.$http.get('https://cnodejs.org/api/v1/topic/'+chapterId)
                .then((response)=>{
                    this.chapterdata = response.data.data;
                })
                .catch((err)=>{
                    console.log('获取文章内容失败！');
                })




         },
         getUserData(){
          this.$http.get('https://cnodejs.org/api/v1/user/'+this.$route.params.loginname)
          .then(response=>{
          
            if(response.data.success){
               //获取用户详情成功TODO
               this.userInfo = response.data.data;
               this.recentReplies = this.userInfo.recent_replies;
               console.log(this.recentReplies);




            }
          })
          .catch(error=>{
            console.log('获取用户详情失败！');
          });
         }
        },
        mounted(){
 
           this.getUserData();
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    *{
       padding:0px;
       margin:0px;
    }
    .userdetail{
        width:100%;
        height:100%;
        position: relative;
    }
    .header{
        /*background:yellow;*/
        position: absolute;
        top:0px;
        left:0px;
        height:40px;
        width:100%;
        text-align: center;
        line-height: 40px;
        border-bottom: 1px solid rgb(228,228,228);
        box-sizing: border-box;

    }
    .header>.text{
        font-size: 16px;
        padding-left: 20px;
        color:rgb(31,31,31);

    }

    .userInfo{
        position: absolute;
        top:40px;
        left:0px;
        width:100%;
        height:280px;
        border-bottom: 2px solid rgb(231,231,231);
        box-sizing: border-box;
        background:rgba(37, 37, 37, 0.91);

    }
    .userInfo .github{
        padding-top: 8px;
        padding-bottom: 5px;
        
    }
    .userInfo .github .github_icon{
        vertical-align: bottom;
        color: gray;
    }
    .userInfo .github a{
        text-decoration: none;
        color: gray;
    }
    .userInfo  .createTime{
      padding-top: 8px;
      font-size: 14px;
      color: gray;
    }
    .userInfo>.bgImg{
        position: relative;
        width:100%;
        height:150px;
        overflow: hidden;
    }
    .bgImg>img{
        position: absolute;
        top:0px;
        left:0px;
        width:100%;
        height:100%;
        z-index: 222;
        -webkit-filter:blur(2px);

    }
    .bgImg>.filter{
      position: absolute;
        top:0px;
        left:0px;
        width:100%;
        height:100%;
       /*必要留着添加文字用 备用*/
        z-index: 333;
    }
    .userInfo>.userImg{
        z-index: 444;
        width:100px;
        height:130px;
       text-align: center;
        position:absolute;
        top:85px;
        left:50%;
        margin-left: -50px;

    }
    .userImg>img{
        width:100px;
        height:100px;
        border-radius: 50px;
        border:2px solid white;
    }
    .userName{
        padding-top: 5px;
        font-size: 14px;
        color:rgb(117,193,26);
    }
    .userReccentTopic{
      width: 100%;
      height: 200px;
      background: red;
      position: absolute;
      top: 320px;
    }


</style>