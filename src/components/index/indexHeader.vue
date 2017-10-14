<template>
    <div class="header">
      <router-link :to="{path:'/home/all'}" :class="[this.typeName==='all'?'item_active':'','item']" ><span @click="changeType($event,'all')">全部</span></router-link>
      <router-link :to="{path:'/home/share'}" :class="[this.typeName==='share'?'item_active':'','item']"><span @click="changeType($event,'share')">分享</span></router-link>
      <router-link :to="{path:'/home/ask'}" :class="[this.typeName==='ask'?'item_active':'','item']"><span @click="changeType($event,'ask')">问答</span></router-link>
      <router-link :to="{path:'/home/job'}" :class="[this.typeName==='job'?'item_active':'','item']"><span @click="changeType($event,'job')">招聘</span></router-link>
      <router-link :to="{path:'/home/dev'}" :class="[this.typeName==='dev'?'item_active':'','item']"><span @click="changeType($event,'dev')">测试</span></router-link>
      <div></div>
    </div>
</template>

<script>
    //获取数据函数

    export default {
        name: 'indexHeader',
        data() {
            return {
              chapterType:'all',
            }
        },
        computed:{
          typeName:function(){
            return this.$route.params.type
          }
        },
        methods: {
          getData(type = 'all') {
            this.$http.get('https://cnodejs.org/api/v1/topics?tab=' + type + '&page=1&limit=20&mdrender=false')
              .then((response) => {
                 let data= JSON.stringify(response.data);
                 this.$emit('changeData',data);

              })
              .catch((err) => {
                console.log('初始化,获取数据失败！');
              })

          },
          changeType(event, type) {
            this.chapterType = type;
            this.getData(type);
          },

        },
        beforeCreate:function(){
//         console.log(this.$route.params.type);
        },
      created:function(){
        this.getData(this.$route.params.type);

        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  *{
    padding:0px;
    margin:0px;
  }
  .header{
    width:100%;
    position:fixed;
    top:0px;
    left:0px;
    height:40px;
    background: #434343;
    border-bottom: 1px solid rgb(54, 51, 54);
    z-index: 888;
  }
  .item{
    display: block;
    float: left;
    width:20%;
    height:100%;
    text-decoration: none;
    box-sizing: border-box;
    color:rgb(184,184,184);
  }
  .item>span{
    display: block;
    width:100%;
    height:100%;

    text-align: center;
    line-height:40px;


    font-size:13px;
  }
  .item_active{
    color: white;
    border-bottom: 3px solid rgb(137,196,34);
  }

</style>
