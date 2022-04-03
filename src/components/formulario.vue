<template>
  <div id="formulario">
     <div class="estiloForm pt-4 pb-4 text-center">
      <form @submit.prevent="dadosEnviar">
          <input class="col-md-12 form-control mb-3" type="nome" name="nome" id="nome" v-model="nome" placeholder="Informe seu nome">
          <input class="col-md-5 col-sm-12 form-control float-left " type="email" name="email" id="email" v-model="email" placeholder="Informe seu Email">
          <input class="col-md-6 col-sm-12 form-control float-right mb-3 mediaMargin"  type="phone" name="telefone" id="telefone" v-model="telefone" placeholder="Telefone: (_ _)_ _">
          <textarea name="Coments" id="texto" class="col-md-12" placeholder="Escreva aqui" rows="5" v-model="texto"></textarea>
        <button class="btn btn-light">Enviar</button>
      </form>
      </div>
  </div>
</template>

<script>
import firebase from './services/firebaseConnection.js'
export default {
       name: 'Formulario',
        data(){
            return{
                nome: '',
                email: '',
                telefone: '',
                texto: '',
            }
        },
        methods:{
            async dadosEnviar(){
              await firebase.firestore().collection('dados')
             .add({
                 nome: this.nome,
                 email: this.email,
                 phone: this.telefone,
                 text: this.texto
             })
             .then(()=>{
                 this.nome = ''
                 this.email = ''
                 this.telefone = ''
                 this.texto = ''
                 alert('enviou')
             })
             .catch((Error)=>{
                 alert('deu ruim'+Error)
             })
            }
        }
}
</script>

<style scoped>
   #formulario{
       display: flex;
       flex-direction: column;
       justify-content: center;
       align-items: center;
       align-content: center;
       background: #434343;
   }
   .estiloForm{
       width: 500px;
   }
   input{
       background: #bfbfbf;
       color: white;
   }
   textarea{
       background: #bfbfbf;
   }
    @media (max-width: 768px) { 
     .estiloForm{
         width: 60%;
     }
     input{
         padding: 1;
     }
     .mediaMargin{
         margin-top: 20px;
     }
  }
</style>