<template>
    <div class="login">
        <div class="arrows">   
        </div>
        <div class="titles">
            <p>CNode社区</p>
            <p><icon name="gitlab" class="gitlab"></icon></p>
        </div>
        <div class="userIcon">
            <icon name="grav" class="grav"></icon>
            <div class="accessToken">
                <input type="text" v-model="userAccessToken" placeholder="please input your AccessToken">
            </div>
            <div class="btnbox">
                <a href="javascript:void(0);" class="back" @click="goBack($event)">返回</a>
                <a href="javascript:void(0);" class="go" @click='login'>登录</a>
            </div>
            <p class="tips"><a href="http://cnodejs.org/api/">如何获取AccessToken？</a></p>
        </div>
        <div class="power">
            <p>Copyright © 2016-2017 IM All rights reserved.</p>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'login',
        data() {
            return {
                userAccessToken:'',
            }
        },
        methods:{
            goBack(event){

              this.$router.go(-1);
            },
            login(){
             // fd693dd6-276f-42ee-b374-0ddde37c9157
             this.$http.post('https://cnodejs.org/api/v1/accesstoken',{accesstoken:this.userAccessToken}).then(
                    (response)=>{        
                        //登录成功后所得的操作
                        if(response.status==200&&response.ok==true&&response.data.success==true){
                          alert('登录成功');
                          
                          //将登录的用户数据放入store,并且更改登录的状态
                          //1.更改登录状态
                          this.$store.commit('setLoginState',true);
                          //2.将登录用户的数据保存到store Userdata 中
                          this.$store.commit('setUserData',response.data);
                          //3保存AccessToken
                          console.log(this.userAccessToken);
                          this.$store.commit('setAccessToken',this.userAccessToken);
                          this.userAccessToken='';//清空输入区
                          this.$router.push({path:'/user'});
                        
                        }else{
                           alert("登录失败，请检查您的AccessToken"); 
                        }
                        
                    }
                ).catch((error)=>{
                    console.log("don't found your username");
                    alert("登录失败，请检查您的AccessToken或者服务器崩溃");
                });
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    * {
        padding: 0px;
        margin: 0px;

    }
    .login{
        width: 100%;
        height: 100%;
        z-index: 1000;
        background: red;
        position: absolute;
        top: 0px;
        left: 0px;
        background: url('../../assets/login.jpg');
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: 100% 100%;
    }
    .arrows{
        border-bottom: 0px solid red;
        border-top: 150px solid rgba(12, 12, 11, 0.35);
        border-left: 150px solid rgba(0,0,0,0);
        border-right: 150px solid rgba(0,0,0,0);
        width: 0px;
        height: 0px;
        display: block;
        position: absolute;
        top: 0px;
        left: 50%;
        margin-left: -150px;
        z-index: 10;
    }
    .titles{
        color: white;
        z-index: 100;
        width: 140px;
        height: 50px;
        /* background: yellow; */
        position: fixed;
        left: 50%;
        top: 30px;
        margin-left: -70px;
        text-align: center;
        line-height: 50px;

    }
    .titles>p{

        font-size: 22px;
        font-weight: bolder;
    }
    .titles>p>.gitlab{
        width: 30px;
        height: 30px;
        font-size: 22px;
        font-weight: bolder;
    }
    .userIcon{
        display: block;
        width: 100%;
        height: 150px;

        position: absolute;
        top:170px;
        left: 0px;
 
    }
    .userIcon>.grav{
        display: block;
        width: 80px;
        height: 80px;
        color: white;
        position: absolute;
        top: 20px;
        left: 50%;
        margin-left: -40px;
    }
    .accessToken{
        width: 100%;
        height: 40px;

        position: absolute;
        left: 0;
        top: 120px;
    }
    .accessToken>input{
        position: absolute;
        left: 10%;
         width: 80%;
         height: 100%;
         outline: none;
         background: rgba(255,255,255,0.8);
         border-width: 0px;
         font-size: 15px;
         border-radius: 20px;
         text-indent: 20px;
         padding-right: 5px;
         color: black;
         font-weight: bolder;


    }
    .btnbox{
      width: 100%;
      height: 50px;
 
      position: absolute;
      top: 170px;
      text-align: center;
    }
    .btnbox>a{
        display: inline-block;
        width: 80px;
        height: 30px;
        margin-top: 5px;
      
        text-decoration: none;
        vertical-align: center;
        margin-right: 10px;
        text-align: center;
        line-height: 30px;
        border-radius: 5px;
        color: white;
        font-weight: bold;

    }
    .btnbox>.back{
        background: rgba(228, 38, 38, 0.85);
    }
    .btnbox>.go{
        background: #1be41b;
    }
    .tips{
         width: 100%;
          height: 50px;
          text-align: center;
          position: absolute;
          top: 230px;

    }
    .tips>a{
        color: white;
    }
    .power{
        display: block;
        width: 100%;
        height: 30px;
        text-align: center;
        line-height: 30px;
        position: absolute;
        bottom: 10px;
        left: 0px;
    }

</style>