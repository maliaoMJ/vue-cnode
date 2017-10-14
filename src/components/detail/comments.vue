<template>
    <div class="comments">
        <div class="commentHeader">
           <p class="title">共[<span class="count">{{data.reply_count}}</span>]条回复
               <span class="create_reply" @click="createReplay">新建评论</span></p>

       </div>
        <div class="commentReply" v-show="repayPanle">
            <textarea type="text" placeholder="" v-model="context"></textarea>
            <span class="text_tips no" @click="createReplay">返回</span>
            <span class="text_tips yes" @click="submitComment" >确定</span>
        </div>
        <div class="commentContent">


           <div class="commentItem" v-for="(itemComment,index) in data.replies">
               <div class="top">
                   <div class="imgBox">
                           <img :src="itemComment.author.avatar_url" alt="">
                       </div>

                       <div class="text">
                           <span class="author">{{itemComment.author.loginname}}</span>
                           <span class="time">{{itemComment.create_at | getTimeInfos}}</span>
                           <span class="index">#{{index+1}}楼</span>
                       </div>
               </div>
               <div class="commentMessage" id="commentMessage" >
                   <h3 class="markdown-body" v-html="itemComment.content">

                   </h3>
               </div>
               <div class="replay">
                   <div class="iconBox">
                       <span @click="Toups(itemComment.reply_id)"><icon name="thumbs-o-up" class="up"></icon><span>{{itemComment.ups.length}}</span></span>
                       <span @click="createReplayOne(itemComment.reply_id)"><icon name="mail-reply" ></icon></span>
                   </div>
               </div>
           </div>




       </div>
        <div class="replayToOne" v-show="Toonepanel">
            <div class="commentReplyOne" >
                <textarea type="text" placeholder="" v-model="TooneText"></textarea>
                <span class="text_tips no" @click="createReplayOne">返回</span>
                <span class="text_tips yes" @click="submitCommentOne()" >确定</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'comments',
        props:['data'],
        data() {
            return {
                repayPanle:false,
                context:'您的评论。。。',
                Toonepanel:false,
                TooneText:'回复内容。。。',
                userid:'',
            }
        },
        created(){
            console.log(this.data);
        },
        methods:{
            createReplay(){
                if(this.$store.getters.getAccessToken===''){
                    alert('如果要想评论，请您先登录！');
//                     // fd693dd6-276f-42ee-b374-0ddde37c9157
                    this.$router.push({path:'/login'});
                }else{
                    this.repayPanle = !this.repayPanle;
                }
            },
            createReplayOne(id){
                console.log(id);
                this.userid = id;
                if(this.$store.getters.getAccessToken===''){
                    alert('如果要想评论，请您先登录！');
//                     // fd693dd6-276f-42ee-b374-0ddde37c9157
                    this.$router.push({path:'/login'});
                }else{
                    this.Toonepanel = !this.Toonepanel;
                }
            },
//            https://cnodejs.org/api/v1
            //check context 略
            submitComment(){
                this.$http.post(`https://cnodejs.org/api/v1/topic/${this.$route.params.chapterId}/replies`,
                    {
                        accesstoken:this.$store.getters.getAccessToken,
                        content:this.context
                    }
                )
                    .then((response)=>{
                       alert('评论成功！');
                        this.createReplay();


                    })
                    .catch((error)=>{
                     console.log('评论失败！');
                });
            },
            submitCommentOne(){
                this.$http.post(`https://cnodejs.org/api/v1/topic/${this.$route.params.chapterId}/replies`,
                    {
                        accesstoken:this.$store.getters.getAccessToken,
                        content:this.TooneText,
                        reply_id:this.userid
                    }
                )
                    .then((response)=>{
                        alert('回复评论成功！');
                        this.createReplayOne(this.userid)
                    })
                    .catch((error)=>{
                        console.log('评论失败！');
                    });
            },
            Toups(id){
                this.userid=id;

                if(this.$store.getters.getAccessToken===''){
                    alert('如果要想点赞，请您先登录！');
//                     // fd693dd6-276f-42ee-b374-0ddde37c9157
                    this.$router.push({path:'/login'});
                }else{

                    this.$http.post(`https://cnodejs.org/api/v1/reply/${this.userid}/ups`,{accesstoken:this.$store.getters.getAccessToken}).then((response)=>{
                
                        if(response.data.success===true){
                            if(response.data.action==='down'){
                                alert('取消点赞成功！');
                            }else{
                                alert('点赞成功！');
                            }
                        }
                    }).catch((error)=>{
                        console.log('点赞失败！');
                    });
                }


            }
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
    .comments{
        width:100%;
        height:auto;
        margin-bottom: 40px;
    }
    .commentReplyOne{
        position: absolute;
        top:80px;
        width:100%;
        height:200px;
    }
    .commentReplyOne>textarea{
        display: block;
        width:100%;
        height:170px;
        background:rgba(255,255,255,0.5);
        outline: none;
        box-sizing: border-box;
        border-width:0px;
        padding-left: 20px;
        padding-top: 5px;
    }
    .commentReplyOne .text_tips{
        display: block;
        float:left;
        width:50%;
        background:orange;
        text-align: center;
        line-height:30px;
        height:30px;
        color:white;
        font-size: 14px;
    }
    .commentReplyOne>.no{
        background:#91c53d;
    }
    .commentReplyOne>.yes{
        background: #ef2525;
    }
    .commentReply{
        width:100%;
        height:110px;

    }
    .commentReply>textarea{
        display: block;
        width:100%;
        height:80px;
        background:rgba(255,255,255,0.5);
        outline: none;
        box-sizing: border-box;
        border-width:0px;
        padding-left: 20px;
        padding-top: 5px;

    }
    .commentReply>.text_tips{
        display: block;
        float:left;
        width:50%;
        background:orange;
        text-align: center;
        line-height:30px;
        height:30px;
        color:white;
        font-size: 14px;
    }
    .commentReply>.no{
        background:#91c53d;
    }
    .commentReply>.yes{
        background: #ef2525;
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
    .commentHeader>p>.create_reply{
        padding-left: 200px;

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
    .replayToOne{
        width:100%;
        height:100%;
        background:rgba(0,0,0,0.8);
        position:fixed;
        bottom:0px;
        left:0px;
        z-index: 1000;
    }


</style>