<template>
    <div class="chapterHeader">
      <div class="top">
          <div class="imgBox">
              <img :src="data.author.avatar_url" alt="">
          </div>

          <div class="text">
              <span class="author">{{data.author.loginname}}</span>
              <span class="time">{{data.last_reply_at | getTimeInfos}}</span>
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