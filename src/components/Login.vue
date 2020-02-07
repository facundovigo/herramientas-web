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
                        <form v-on:submit.prevent>
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
                        </form>
                    </div>
                    <div class="card-footer text-center">
                        <div class="btn login_btn">
                            <button class="btn" v-on:click="login()">Ingresar</button>
                        </div>
                    </div>
                    <div class="card-footer">
                       
                    </div>
                </div>
            </div>
         </div>
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
                    if(self.users == "soptools" || self.user.password == "salchichon"){
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
    .login_btn{
        color: black;
        width: 100%;
    }
    .login_btn:hover{
        color: black;
        background-color: #1973B8;
        opacity: 60%;
    }
    
    .links{
        color: white;
    }
    .links a{
        margin-left: auto;
    }
</style>