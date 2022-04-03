<template>
    <div>
      <div class="accordion1 pt-2 pb-2" @click="toggleItem">
          <button :class="{accordion:!show, ativo:show}">
              <slot name="title"></slot>
          </button>
          <div v-show="show" class="panel">
            <slot name="text"></slot>
          </div>
         
      </div>
   </div>
</template>

<script>
export default {
  data(){
         return{
           show: false
         }
     },
     methods:{
         toggleItem: function(){
             this.show = !this.show
         }
     }
}
</script>

<style scoped>

     .accordion{
    background: #707070;
    color: white;
    border: none;
    outline: none;
    padding: 10px;
    padding-left: 20px;
    font-size: 16px;
    text-align: left;
    transition: 0.4s;
    width: 100%;
    }
    .ativo{
        background: #F0F0F0;
        border: none;
        outline: none;
        padding: 10px;
        padding-left: 20px;
        font-size: 16px;
        text-align: left;
        transition: 0.4s;
        width: 100%; 
    }
    .accordion:after {
        content: '\1431'; /* Unicode character for "plus" sign (+) */
        font-size: 13px;
        font-weight: bolder;
        color: black;
        float: right;
        margin-left: 50px;
    }
    .ativo:after {
        content: "\142F"; /* Unicode character for "minus" sign (-) */
        font-size: 13px;
        color: black;
        font-weight: bolder;
        float: right;
        margin-left: 50px;
    }
    .ativo, .accordion:hover{
        background-color: #ccc;
    }
    .panel{
        padding: 0 18px;
        background-color: white;
        overflow: hidden;
    }
</style>