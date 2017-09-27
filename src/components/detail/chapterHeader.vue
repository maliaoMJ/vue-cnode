<template>
    <div class="chapterHeader">
      <div class="top">
          <div class="imgBox">
              <img :src="data.author.avatar_url" alt="">
          </div>

          <div class="text">
              <span class="author">{{data.author.loginname}}</span>
              <span class="time">1天前</span>
              <span class="index">#楼主</span>
          </div>
      </div>
      <div class="title">
          <h3>{{data.title}}</h3>
          <span class="watch"><icon name="eye"></icon>&nbsp;<span>{{data.visit_count}}</span></span>
          <span class="comments"><icon name="comments-o"></icon>&nbsp;<span>{{data.reply_count}}</span></span>
      </div>
    </div>
</template>

<script>
    export default {
        name: 'chapterHeader',
        props:['data'],
        data() {
            return {}
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    *{
        padding:0px;
        margin:0px;
    }
    .chapterHeader{
        margin-top: 40px;
        width:100%;
        height:auto;
        background-color: #fff;

    }
    .top{
        width:100%;
        height:40px;
        border-bottom: 1px solid rgb(231,231,231);
        /*padding-left: 10px;*/
        padding-top: 5px;
        background: white;

    }
    .imgBox{
        display: block;
        float: left;
        width:30px;
        height:30px;
        padding-left: 10px;

    }
    .imgBox img{
        width:100%;
        height:100%;
        border-radius: 15px;
    }
    .text>.author{
        color:rgb(110,183,25);
        padding-left: 10px;
        font-size: 13px;
    }
    .text>.time{
        padding-left: 5px;
        color:rgb(43,43,43);
    }
    .text>.index{
        display: block;
        float: right;
        padding-right: 20px;
        color:rgb(43,43,43);
    }
    .title{
        padding-top: 20px;
        padding-bottom: 10px;
        text-align: center;
        border-bottom: 1px solid rgb(231,231,231);
        box-sizing: border-box;
    }
    .title>h3{
        padding-left: 10px;
        padding-right: 10px;
        font-size: 18px;
        /*height:40px;*/
        /*white-space: nowrap;*/
        /*text-overflow: ellipsis;*/
        /*overflow: hidden;*/
        padding-bottom: 5px;
    }
    .watch{
        padding-right: 5px;
    }
    .watch,.comments{
        color:rgb(147,147,147);
    }
    .watch>span,.comments>span{
        vertical-align: top;
    }
</style>