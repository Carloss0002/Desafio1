<template>
    <div id="Accordion" class="pb-5 pt-5">
      
        <div class="size" v-for="components in detalhes" :key="components.id">
        <Base>
          <template v-slot:title class="accordion ">{{components.title}}</template>
          <template v-slot:text class="panel">
            <h1>{{components.title}}</h1>  
            <img :src="components.url" alt="">  
            <span>{{components.text}}</span>
           </template>
        </Base>
        </div>
  
    </div>
</template>

<script>
import Base from './baseAccordion.vue'
export default {
    components:{
        Base
    },
    data(){
        return{
            detalhes:[
                {
                    id: 1,
                    title: 'Lorem Ipsum',
                    url: 'https://picsum.photos/id/1/100/100',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lobortis ultrices feugiat. Aenean malesuada vel tellus et bibendum. Donec nibh nunc, condimentum eu varius nec, pretium vel dolor'
                },
                {
                    id: 2,
                    title: 'Lorem Ipsum',
                    url: 'https://picsum.photos/id/1/100/100',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lobortis ultrices feugiat. Aenean malesuada vel tellus et bibendum. Donec nibh nunc, condimentum eu varius nec, pretium vel dolor'
                },
                {
                    id: 3,
                    title: 'Lorem Ipsum',
                    url: 'https://picsum.photos/id/1/100/100',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lobortis ultrices feugiat. Aenean malesuada vel tellus et bibendum. Donec nibh nunc, condimentum eu varius nec, pretium vel dolor'
                },
                {
                    id: 4,
                    title: 'Lorem Ipsum',
                    url: 'https://picsum.photos/id/1/100/100',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lobortis ultrices feugiat. Aenean malesuada vel tellus et bibendum. Donec nibh nunc, condimentum eu varius nec, pretium vel dolor'
                },
                {
                    id: 5,
                    title:   'Lorem Ipsum',
                    url: 'https://picsum.photos/id/1/100/100',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lobortis ultrices feugiat. Aenean malesuada vel tellus et bibendum. Donec nibh nunc, condimentum eu varius nec, pretium vel dolor'
                }
            ]
        }
    }
}
</script>

<style scoped>
   #Accordion{
       display: flex;
       flex-direction: column;
       justify-content: center;
       align-items: center;
       background: #bfbfbf;
   }
   .accordion{
       background: #707070;
       color: white;
   }
   .size{
       width: 500px;
   }
    @media (max-width: 768px) { 
   .size{
       width: 60%;
   }
  }
</style>