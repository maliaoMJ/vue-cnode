<template>
    <div class="content">
       <div class="markdown-body" v-html="data.content">

       </div>
    </div>
</template>

<script>
    export default {
        name: 'content',
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
    .content{
        display: block;
        width:100%;
        height:auto;


        border-bottom: 1px solid rgb(231,231,231);
        color:rgb(43,43,43);


    }
    .text{
        width:100%;

        padding-top: 5px;
        padding-left: 10px;
        padding-right: 10px;
        padding-bottom: 20px;
    }
    .text img{
        width:100%;
    }
</style>