<template>
    <div class="footer ">
        <router-link :to="{path:'home'}"  :class="[tabName==='home'?'item_active':'','item']">
          <div class="index">
           <icon name="home"></icon>
            <p>首页</p>
          </div>
        </router-link>
      <router-link :to="{path:'send'}" :class="[tabName==='send'?'item_active':'','item']">
        <div class="send">
          <icon name="send-o"></icon>
          <p>发表</p>
        </div>
      </router-link>
      <router-link :to="{path:'message'}" :class="[tabName==='message'?'item_active':'','item']">
        <div class="message">
          <icon name="envelope-o"></icon>

          <p>消息</p>
        </div>
      </router-link>
      <router-link :to="{path:'user'}" :class="[tabName==='user'?'item_active':'','item']">
        <div class="user">
          <icon name="user-circle-o"></icon>
          <p>我的</p>
        </div>
      </router-link>

    </div>
</template>

<script>
    export default {
        name: 'footer',
      computed:{
          tabName:function(){
            return this.$route.name
          }
      },
        data() {
            return {

            }
        },

      components:{

      },
      beforeMount:function(){
//        alert(this.$route.params);
//        console.log(this.$route.name);
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
  *{
    paddiing:0px;
    margin:0px;
    font-size:10px;
  }
  .footer{
    width:100%;
    height:100%;
    background:white;
    color:white;
    position:absolute;
    left:0px;
    bottom:0px;
    z-index:777;

  }
  .item{
    display: block;
    float: left;
    width:25%;
    text-align: center;
    text-decoration:none;
    color: rgb(65,65,65);
    padding-top: 3px;

  }
  .item icon,.item p{
    font-size:12px;
  }
  .item_active{
    color:rgb(137,196,34);
  }

</style>
