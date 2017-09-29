<template>
    <div class="send">
       <div class="header">
           <span class="text">发表文章</span>
           <!--<icon name="send" class="sendIcon"></icon>-->
       </div>
        <div class="form">
            <input type="text" placeholder="标题" class="title">
            <select name="type" id="type" class="type">
                <option value="category">----请选择文章分类----</option>
                <option value="share">分享</option>
                <option value="ask">问答</option>
                <option value="job">招聘</option>
                <option value="dev">测试 </option>
            </select>
            <textarea class="content" name="" placeholder="文章内容(部分支持markdown语法)" id="content" ></textarea>
            <div class="btn">提交&nbsp; <icon name="send"></icon></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'send',
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
    .send{
        /*background:red;*/
        width:100%;
        height:100%;
    }
    .header{
        /*background:yellow;*/
        height:40px;
        width:100%;
        text-align: center;
        line-height: 40px;
        border-bottom: 1px solid rgb(228,228,228);
        box-sizing: border-box;

    }
    .header>.text{
        font-size: 16px;

    }
    /*.header>.sendIcon{*/
        /*display: block;*/
        /*float: right;*/
        /*height:100%;*/
        /*padding-right: 20px;*/
        /*color:rgb(117,193,26);*/
    /*}*/
    .form{
        display: block;
        width:100%;
        height:auto;

    }
    .form > .title{
        display: block;
        width:100%;
        height:35px;
        line-height:35px;
        border-width: 0;
        outline: none;
        font-size: 12px;
        padding-left:10px;
        border-bottom: 1px solid rgb(228,228,228);
        box-sizing: border-box;
    }
    .form>.type{
        display: block;
        width:100%;
        height:35px;
        line-height:35px;
        border-width: 0;
        outline: none;
        padding-left:10px;
        border-radius: 0;
        background:white;
        border-bottom: 1px solid rgb(228,228,228);
        box-sizing: border-box;
        font-size: 12px;
    }
    .form>.content{
        display: block;
        width:100%;
        height:350px;
        border-width: 0;
        outline: none;
        padding-left:10px;
        border-radius: 0;
        background:white;
        border-bottom: 1px solid rgb(228,228,228);
        box-sizing: border-box;
        padding-top: 5px;
        font-size: 12px;
    }
    .btn{
        margin-top: 40px;
        text-align: center;
        display: block;
        width:100%;
        height:35px;
        line-height:35px;
        font-size: 16px;
        padding-left:10px;
        border-bottom: 1px solid rgb(228,228,228);
        border-top:  1px solid rgb(228,228,228);
        box-sizing: border-box;
        background:rgb(117,193,26);
        color:white;

    }

</style>
