<template>
  <div id="app">
    <router-view></router-view>
    <div class="footer">
      <index-footer></index-footer>
    </div>
  </div>
</template>

<script>
import footer from './components/footer'
export default {
  name: 'app',
  methods:{
  },
  components:{
   indexFooter:footer
  }
}
</script>

<style scoped>
  *{
    padding:0px;
    margin:0px;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    position:absolute;
    top:0px;
    left:0px;
    width:100%;
    height:100%;

  }
  .footer{
    position:fixed;
    bottom:0px;
    left:0px;
    width:100%;
    height:40px;

  }


</style>
