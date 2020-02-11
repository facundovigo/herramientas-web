<template>
    <div>
        <Name></Name>
        <div class="container">
            <div class="d-flex ">
                <div class="card">
                    <div class="card-header text-center">
                        <h3>Herramientas</h3>
                    </div>
                    <div class="card-body">
                        <form v-on:submit.prevent="login()">
                            <div class="input-group form-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text"><i class="fas fa-user"></i></span>
                                </div>
                                <input type="text" class="form-control" placeholder="usuario" v-model="user.users" required>
                            </div>
                            <div class="input-group form-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text"><i class="fas fa-key"></i></span>
                                </div>
                                <input type="password" class="form-control" placeholder="contraseña" v-model="user.password" required>
                            </div>
                            <div class=" login_btn">
                            <button class=" login_bbva" v-on:click="login()" v-on:keyup.enter="submit">Ingresar</button>
                        </div>
                        </form>
                    </div>
                    <div class="card-footer">
                    </div>
                </div>
            </div>
         </div>
          <footer class="foot"> 
                 <img  class="fot" src="../assets/foot6.png">  
            </footer>
    </div>
</template>

<script>
import Name from "./Name"
export default {
            name: 'Login',
            components: {Name},
            data(){
                return {
                    user: {
                        users: "",
                        password: ""
                    }
                }
            },
            methods: {
                login(){
                    var self = this;
                    if(self.users == "cau" || self.user.password == "soporte"){
                        this.$router.push('/herramientas');
                    }else{
                        alert("usuario incorrecto")
                    }
                }
            }
}
</script>

<style >
    .container{
        margin-left: 5%;
        padding-left: 15%;
        margin-top: 4%;        
    }
    .card{
        background-color: rgba(0,0,0,0.5) !important;
    }
    .card-header h3{
        color: white;
    }
    .input-group-prepend span{
        width: auto;
        background-color: #49A5E6;
        color: black;
        border:0 !important;
    }
    .login_bbva{
        border: none;
        border-radius: 4px;
        background-color: #1973B8;
        height: 35px;
        width: 250px;
        color: white;
       
        
    }
        .login_bbva:hover{
        color: black;
    
    
    } 
    .links{
        color: white;
    }
    .links a{
        margin-left: auto;
    }
      .foot{
        margin-left: 80%;
    }
    .fot {
    width: 90%;
    height: 70%;
    margin: 0 auto;
    display: block;
    position: relative;
    }
</style>