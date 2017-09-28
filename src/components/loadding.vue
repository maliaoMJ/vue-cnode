<template>
    <div class="loadding">
        <div class="icon">
            <icon name="spinner" scale="2" spin></icon>
            <h6>Loadding......</h6>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'loadding',
        porps:['loadding'],
        data() {
            return {}
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
*{
    padding:0px;
    margin:0px;

}
    .loadding{
        position:fixed;
        top:0px;
        left:0px;
        width:100%;
        height:100%;
        background:rgba(0,0,0,0.8);
        z-index: 1000;
    }
    .icon{
        width:100px;
        height:50px;
        text-align: center;
        line-height:50px;
        font-size:24px;
        color:white;
        position:absolute;
        top:45%;
        left:50%;
        margin-left: -50px;
        margin-top: -50px;
    }
    .icon h6{
        font-size:20px;

    }

</style>