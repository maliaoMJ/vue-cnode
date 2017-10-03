<template>
    <div class="user">
       <div class="header">
           <div class="header">
               <span class="text">个人中心</span>
               <span class="loginout" @click="this.loginOut" v-show="userData.loginname?true:false"><icon name="power-off" class="loginout" ></icon></span>
           </div>
       </div>
       <div class="userInfo">
           <div class="bgImg">
               <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=73823530,1601728755&fm=27&gp=0.jpg" alt="">
               <div class="filter"></div>
           </div>
           <div class="userImg">
               <img :src="userData.avatar_url" alt="">
               <p class="userName">{{userData.loginname?userData.loginname:'用户未登录'}}&nbsp;<router-link v-show="userData.loginname?false:true" :to="{path:'/login'}">登录</router-link></p>
           </div>
       </div>
        <div class="menu">
            <router-link :to="{path:'/send'}">
                <div class="item">
                   <icon name="send" class="icons"></icon> <span class="text">发表文章</span><icon class="right" name="chevron-right"></icon>
                </div>
            </router-link>
            <router-link :to="{path:'/message'}">
                <div class="item">
                    <icon id="message" name="envelope-o" class="icons"></icon> <span class="text">我的消息</span><icon class="right" name="chevron-right"></icon>
                </div>
            </router-link>
            <router-link :to="{path:'/about'}">
                <div class="item">
                    <icon id="about" name="reddit-alien" class="icons"></icon> <span class="text">关于</span><icon class="right" name="chevron-right"></icon>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'user',
        data() {
            return {
                userData:null,
            }
        },
        methods:{
            login (){
                this.$http.post('https://cnodejs.org/api/v1/accesstoken',{accesstoken:'fd693dd6-276f-42ee-b374-0ddde37c9157'}).then(
                    (response)=>{
                        console.log(response);
                        this.userData = response.data;
                    }
                ).catch((error)=>{
                    console.log("don't found your username");
                });
            },
            loginOut(){
                alert("退出登录");
            }
        },
        mounted(){
            this.login();
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    *{
       padding:0px;
       margin:0px;
    }
    .user{
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
        padding-left: 40px;
        color:rgb(31,31,31);

    }
    .header>.loginout{
    display: block;
    float: right;
    height:100%;
    padding-right: 20px;
    color:rgb(86,86,86);
    }
    .userInfo{
        position: absolute;
        top:40px;
        left:0px;
        width:100%;
        height:250px;
        border-bottom: 2px solid rgb(231,231,231);
        box-sizing: border-box;

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
    .menu{
        width:100%;
        position:absolute;
        top:290px;
    }
    .item{
        width:100%;
        height:40px;
        padding-top: 10px;
        padding-bottom: 10px;
        padding-left: 10px;
        text-align: left;
        position:relative;
        border-bottom: 1px solid rgb(231,231,231);
        box-sizing: border-box;

    }
    .item>.icons{
        float: left;
        padding-left: 10px;
        font-size: 14px;

        vertical-align: text-bottom;
        color:rgb(71,174,39);
    }
    .item>.right{
        float:right;
        padding-right:8px;
        font-size: 14px;
        padding-top: 4px;
        color:rgb(202,202,202);
    }
    .item>span{
        font-size: 15px;
        padding-left: 50px;
        color:rgb(33,33,33);

    }
    #message{
        color:rgb(173,27,30);
    }
    #about{
        color:rgb(164,164,164);
    }



</style>
