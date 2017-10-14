<template>
    <div class="home">
      <index-header @changeData="renderList"></index-header>
      <chapter-list :data="this.result" :showInfinite="show_infinite"></chapter-list>
    </div>
</template>

<script>
    import chapterList from './chapterList.vue'
    import indexHeader from './indexHeader.vue'

    export default {
        name: 'index',
        components:{
          chapterList,
          indexHeader,
     
        },
      computed:{
          result:function(){
            return this.resultData
          }
      },
      data() {
        return {
           resultData:null,
           show_infinite:true,
        }
      },
      methods:{
          renderList(data){
            let datas=JSON.parse(data);
            this.resultData=datas.data;
//            console.log(this.resultData);

          }
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home{
  width:100%;
  min-height: 40px;
  position:absolute;
  top:0px;
  left:0;
  bottom:40px;
  background: #e5e5e5;
}
</style>
