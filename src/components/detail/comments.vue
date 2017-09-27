<template>
    <div class="comments">
       <div class="commentHeader">
           <p class="title">共[<span class="count">{{data.reply_count}}</span>]条回复</p>
       </div>
       <div class="commentContent">


           <div class="commentItem" v-for="(itemComment,index) in data.replies">
               <div class="top">
                   <div class="imgBox">
                           <img :src="itemComment.author.avatar_url" alt="">
                       </div>

                       <div class="text">
                           <span class="author">{{itemComment.author.loginname}}</span>
                           <span class="time">1天前</span>
                           <span class="index">#{{index+1}}楼</span>
                       </div>
               </div>
               <div class="commentMessage" id="commentMessage" >
                   <h3 class="markdown-body" v-html="itemComment.content">

                   </h3>
               </div>
               <div class="replay">
                   <div class="iconBox">
                       <icon name="thumbs-o-up" class="up"></icon><span>{{itemComment.ups.length}}</span>
                       <icon name="mail-reply"></icon>
                   </div>
               </div>
           </div>




       </div>
    </div>
</template>

<script>
    export default {
        name: 'comments',
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
    .comments{
        width:100%;
        height:auto;
        margin-bottom: 40px;
    }
    .commentHeader{
        width:100%;
        height:35px;
        line-height: 35px;
        border-bottom: 1px solid rgb(231,231,231);
        border-left: 4px solid rgb(122,188,27);
        box-sizing: border-box;
    }
    .commentHeader>p{
        font-size: 13px;
        padding-left: 10px;
        color:rgb(43,43,43);
    }
    .commentHeader>p>span{
        color:rgb(122,188,27);
        padding:0 3px;
    }
    .commentContent{
        width:100%;
        height:auto;
    }
    .commentItem{
        width:100%;
        height:auto;
        padding-bottom: 5px;
        border-bottom: 1px solid rgb(231,231,231);
        box-sizing: border-box;

    }
    .top{
        width:100%;
        height:40px;

        padding-top: 5px;
        background: white;
        box-sizing: border-box;

    }
    .imgBox{
        display: block;
        float: left;
        width:40px;
        height:30px;


    }
    .imgBox img{
        width:30px;
        height:30px;
        border-radius: 15px;
        display: block;
        margin-left: 10px;



    }
    .text>.author{
        color:rgb(110,183,25);
        padding-left: 15px;
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
    #commentMessage{
        width:100%;
        height:auto;

    }
    #commentMessage>h3{
        padding-left:40px;
        padding-right:10px;
        font-size:12px;
        line-height:14px;
        white-space:normal;
        overflow-wrap: break-word;
        color:rgb(56,68,61);
    }
    .replay{
        width:100%;
        height:20px;
        /*background:red;*/
        padding-top: 10px;

    }
    .replay>.iconBox{
        width:60px;
        height:100%;
        display: block;
        float: right;
        padding-right: 10px;

    }
    .iconBox>.up{
      padding-right: 3px;
    }
    .iconBox>span {
        vertical-align: top;
        padding-right: 10px;
    }


</style>