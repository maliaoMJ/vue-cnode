<template>
    <div class="send">
       <div class="header">
           <span class="text">发表文章</span>
           <!--<icon name="send" class="sendIcon"></icon>-->
       </div>
        <div class="form">
            <input type="text" placeholder="标题" class="title" v-model='title'>
            <select name="type" id="type" class="type" v-model='type'>
                <option value="noselect">----请选择文章分类----</option>
                <option value="share">分享</option>
                <option value="ask">问答</option>
                <option value="job">招聘</option>
                <option value="dev">测试 </option>
            </select>
            <textarea class="content" name="" v-model='content' placeholder="文章内容(部分支持markdown语法)" id="content" ></textarea>
            <div class="btn" @click.prevent.stop="send">提交&nbsp; <icon name="send"></icon></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'send',
        data() {
            return {
                title:'',
                content:'',
                type:'noselect',

            }
        },
        methods:{
            //提交
            send(){
              //内容检测
              //xss 做字符串处理略
                if(this.title!=''&&this.type!='noselect'&&this.content != ''){
                    //字符串检验合法TODO
                    //检查用户是否登录
                    if(this.$store.getters.getLoginState){
                      //向后台发起数据
                      
                       this.$http.post('https://cnodejs.org/api/v1/topics',{ 
                        accesstoken:this.$store.getters.getAccessToken,
                            title:this.title,
                            tab:this.type,
                            content:this.content
                        }
                        ).then(response=>{
                         //success callback
                         if(response.data.success){
                           alert('发表成功！');
                           //跳转到发表的文章详情页
                           this.$router.push({path:'/detail/'+response.data.topic_id});
                         }
                        
                       }).catch(error=>{
                        console.log('发表文章失败!'+error);
                       });


                    }else{
                        alert('发表文章，请先登录！');
                        //跳转到登录页
                        this.$router.push({path:'/login'});
                    }
                    
                 }else{
                    //字符串不合法TODO
                    alert('‘选项不能为空 TODO’');
                 }
            },
         
             
            
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
