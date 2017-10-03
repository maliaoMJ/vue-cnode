<template>
    <div class="message">
       <div class="header">
             消息
       </div>
        <div class="tab">
            <div :class="[this.readActive?'tab_active_hasRead':'','hasRead']" @click="this._changeType_read">
                <router-link :to="{path:'/message/hasread'}" class="text">
                    已读
                </router-link>
            </div>
            <div class="noread" :class="[this.readActive?'':'tab_active_noRead','noread']" @click="this._changeType_noread">
                <router-link :to="{path:'/message/noread'}" class="text">
                    未读
                </router-link>
            </div>
        </div>
        <div class="messageList">

        </div>
    </div>
</template>

<script>
    export default {
        name: 'message',
        data() {
            return {
                readActive:true,
            }
        },
        methods:{

            _getMessageData(){
                this.$http.get('https://cnodejs.org/api/v1/messages?accesstoken=fd693dd6-276f-42ee-b374-0ddde37c9157')
                    .then((response)=>{
                      console.log(response.data);
                    })
                    .catch((error)=>{
                     console.log('获取用户信息失败！'+error);
                    });
            },

            _changeType_read(){

               this.readActive=true;

            },
            _changeType_noread(){
                this.readActive=false;
            }
        },
        mounted(){
            this._getMessageData();
        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    *{
        padding:0px;
        margin:0px;
    }
    .message{
        width:100%;
        height:100%;

    }
    .message>.header{
        width:100%;
        height:40px;

        text-align: center;
        line-height: 40px;
        font-size:15px;
        border-bottom: 1px solid rgb(237,237,237);
        box-sizing: border-box;

    }
    .message>.tab{
        width:100%;
        height:20px;
        text-align: center;
        border-bottom: 2px solid rgb(237,237,237);
        box-sizing: border-box;
    }
    .tab>.hasRead{
        width:50%;
        float:left;
        height:100%;
        border-right: 1px solid rgb(237,237,237);
        box-sizing:border-box;
    }
    .tab>.noread{
        width:50%;
        float: right;
        height:100%;
        border-left: 1px solid rgb(237,237,237);
        box-sizing:border-box;

    }
     .text{
        text-decoration: none;
        color:darkgray;
    }
    .tab .tab_active_hasRead{
        background:greenyellow;
        color:white;
    }
    .tab .tab_active_noRead{
        background: #ff5b6a;
        color:white;
    }
    .messageList{
        width:100%;
        height:200px;
        background:red;
    }
</style>
