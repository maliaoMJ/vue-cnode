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
            <div class="tipMessage" v-show="this.tipShow">
                <p><icon name="envelope-o" class="icon"></icon></p>
                <p class="texts">{{tipMessage}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'message',
        data() {
            return {
                readActive:true,
                hasReadMessage:[],
                hasNoReadMessage:[],
                tipMessage:'',
                tipShow:true,
            }
        },
        methods:{

            _getMessageData(){
              
                this.$http.get('https://cnodejs.org/api/v1/messages?accesstoken=fd693dd6-276f-42ee-b374-0ddde37c9157')
                    .then((response)=>{
                      console.log(response.data);
                      this.hasReadMessage = response.data.data.has_read_messages;
                      
                      this.hasNoReadMessage = response.data.data.hasnot_read_messages;


                    })
                    .catch((error)=>{
                     console.log('获取用户信息失败！'+error);
                    });
           
            },

            _changeType_read(){

               this.readActive=true;
           
               if(this.hasReadMessage.length===0){
                 
                 this.tipMessage='暂无已读信息！'
               }
          

            },
            _changeType_noread(){
                this.readActive=false;
                if(this.hasNoReadMessage.length===0){
             
                 this.tipMessage='暂无未读信息！'
               }
            }
        },
        mounted(){
            this._getMessageData();
            if(this.hasReadMessage.length===0){
                 
                 this.tipMessage='暂无已读信息！';
                 this.tipShow = true;
               }else{
                //有已读信息TODO
                this.tipShow = false;
               }
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
        background:#040800;

       
    }
    .tab .tab_active_noRead{
        background:#040800;
     
    }
    .messageList{
        width:100%;
        height:200px;
      

    }
    .tipMessage{
        width: 100%;
        height: 150px;
        background: #eee;
        text-align: center;
        padding-top: 50px;
     

    }
    .tipMessage>p>.icon{
        display: block;
        width: 60px;
        height: 60px;
        color: gray;
        position: absolute;
        top: 180px;
        left: 50%;
        margin-left: -30px;


    }
    .tipMessage>.texts{
     
        font-size: 14px;
        
    }
</style>
