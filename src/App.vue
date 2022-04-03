<template>
  <div id="app">
    <Header/>
    <Slide/>
    <Centro/>
    <Acordeao/>
    <Formulario/>
    <footer class="text-center text-white pt-2 pb-2">
       Lorem ipsum 
    </footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Slide from './components/slider.vue'
import Centro from './components/centro.vue'
import Acordeao from './components/accordion.vue'
import Formulario from './components/formulario.vue' 

export default {
  components:{
    Header,
    Slide,
    Centro,
    Acordeao,
    Formulario
  }
}
</script>

<style scoped>
 #app{
   overflow-x: hidden;
 }
 footer{
   background: #313131;
 }
</style>
