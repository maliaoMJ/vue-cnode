<template>
    <div class="detail">
        <detail-header></detail-header>
        <chapter-header :data="this.chapterData"></chapter-header>
        <detail-content  :data="this.chapterData"></detail-content>
        <comments  :data="this.chapterData"></comments>
    </div>
</template>

<script>
    import detailHeader from './detailHeader'
    import chapterHeader from './chapterHeader.vue'
    import detailContent from './content.vue'
    import comments from './comments.vue'
    export default {
        name: 'content',
        components:{
            detailHeader,
            chapterHeader,
            detailContent,
            comments,
        },

        data() {
            return {
                chapterdata:null,
            }
        },
        computed:{
          chapterData:function(){
              return this.chapterdata;
          }
        },
        methods:{

        },
        mounted(){

            this.$http.get('https://cnodejs.org/api/v1/topic/'+this.$route.params.chapterId)
                .then((response)=>{
//                    console.log(response.data.data);
                    this.chapterdata = response.data.data;
                })
                .catch((err)=>{
                    console.log('获取文章内容失败！');
                })

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
	padding: 0px;
	margin: 0px;
}
.detail{
	width: 100%;
	height: 900px;

}
</style>
