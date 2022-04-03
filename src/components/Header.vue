<template>
<div>
    <div id="header">
        <div class="text text-center">
          <h1 class="text-center">Aqui fica o titulo</h1>
          <a href="#carousel">&#9660;</a>
        </div>
        <div class="img">
          <transition name="slide">
             <img v-if="show == 1" src="./images/img1.jpg" alt="" height="500" width="100%"> 
          </transition>
          <transition>
             <img v-if="show == 2" src="./images/img2.jpg" alt="" height="500" width="100%"> 
          </transition>
          <transition>
             <img v-if="show == 3" src="./images/img3.jpg" alt="" height="500" width="100%"> 
          </transition>
            <div class="button d-flex justify-content-center">
                <button @click="show = 2" class="mr-5 btn" :class="{btnActive:show==2}">
                    
                </button>
                <button @click="show = 1" class="mr-5 btn" :class="{btnActive:show==1}">
                    
                </button>
                <button @click="show = 3" class="btn" :class="{btnActive:show==3}">
                    
                </button>
            </div>
        </div>

       
       
    </div>
    
 </div>   
</template>
<script>

export default {
       data(){
          return{
             show: 1
          }
       }
}
</script>

<style scoped>
    h1{
        text-align: center;
    }
    a{
      font-size: 100px;
      text-decoration: none;
      color: black;
    }
    #header{
      height: 500px;
      width: 100%;
   }
   .img{
       width: 100%;
       position: absolute;
       z-index: 2;
       top: 0;
   }
   .text{
      
      position: relative;
      z-index: 999;
   }
   .button{
       height: 50px;
       z-index: 1;
       position: relative;
       bottom: 50px;
       background: rgba(0, 0, 0, 0.4);
   }
   .btn{
       width: 50px;
       height: 50px;
       border-radius: 50px;
       background: white;
   }
   .btn:hover{
      border: 5px solid black;
   }
   .btnActive{
       border: 5px solid black;
   }
</style>