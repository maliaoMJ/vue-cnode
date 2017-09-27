<template>
    <div class="detailHeader">
      <div @click="goBack($event)">
          <icon class="left" name="arrow-left"></icon>
      </div>
      <span class="detailText" >详情</span>
    </div>
</template>

<script>
    export default {
        name: 'detailHeader',
        data() {
            return {}
        },
        methods:{
            goBack(event){

              this.$router.go(-1);
            },
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
	padding: 0px;
	margin: 0px;
}
.detailHeader{
	width: 100%;
	height: 40px;
	border-bottom: 1px solid rgb(220,220,220);
	line-height: 40px;
	text-align: center;
	position: fixed;
	top: 0px;
	left: 0px;
	background: white;
    box-sizing: border-box;
}
.left{
	display:block;
	float: left;
	height: 40px;
    line-height: 40px;
	font-size: 16px;
	padding-left: 15px;
	color: rgb(110,110,110);
}
.detailText{
	font-size: 16px;
	color: rgb(32,32,32);
    margin-left: -30px;
}
</style>
