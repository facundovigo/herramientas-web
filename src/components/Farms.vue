<template>
    <div >
    <div class="wrapper fadeInDown tam">
        <div id="formContent">
            <!-- Icon -->
            <div class="fadeIn first">
                <p class="labelColor">Farms</p>
            </div>
            <div class="box">
            <form action="" v-on:submit.prevent="farms(farm)">
                <div class="inputBox">
                <input type="text"  class="form-control-facu" v-model="farm" required>
                <label> Ingrese Farm a Buscar </label>
                </div>
            <input type="button" class="fadeIn first" value="Consultar" v-on:click="farms(farm)" >
            </form>
            </div>
            <div v-if="loading" >
                        <div class="spinner-border text-primary " style="height: 7rem; width: 7rem"></div>
            </div>
            <div class="result">
                <NL2br tag="p" :text="`${datos}`" class-name="foo bar" />
            </div>

        </div>
    </div>
    </div>  
</template>

<script>
import axios from 'axios';
import NL2br from 'vue-nl2br';

export default {
    components: {
        NL2br
    },
     data() {
        return {
            loading: false,
            datos: '',
            farm: null
        }
    },
    methods: {
        
        async  farms(farm) {
            this.loading = true;
            this.datos = 'Consultando datos Espere por favor'
            let self = this
            try {
            const result = await axios.get(`http://76.252.93.168:3000/farms/${farm}`)
            self.datos = result.data;
            this.loading = false;
            } catch (error) {
               this.loading = false;
               alert(error); 
            }
       }
    }
}
</script>

<style scoped>
.box .inputBox label {
position: absolute;
top: 0;
left: 0;
letter-spacing: 1px;
padding: 10px 0;
font-size: 16px;
color: #49A5E6;
pointer-events: none;
transition: 0.5s;
}

.box h2 {
margin: 0 0 30px;
padding: 0;
color: #49A5E6;
text-align: center;
}

.box .inputBox {
position: relative;
}

.box .inputBox input {
width: 100%;
padding: 10px 0;
font-size: 16px;
color: #49A5E6;
letter-spacing: 1px;
margin-bottom: 30px;
border: none;
border-bottom: 1px solid #49A5E6;
outline: none;
background: transparent;
}

.box .inputBox label {
position: absolute;
top: 0;
left: 0;
letter-spacing: 1px;
padding: 10px 0;
font-size: 16px;
color: #49A5E6;
pointer-events: none;
transition: 0.5s;
}

.box .inputBox input:focus ~ label,
.box .inputBox input:valid ~ label {
top: -18px;
left: 0;
color: #03a9f4;
font-size: 12px;
}

.box input[type="submit"] {
background: transparent;
border: none;
outline: none;
color: #fff;
background-color: #03a9f4;
padding: 10px 20px;
cursor: pointer;
border-radius: 5px;
}

.f{
    color: white;
}
.form-control-facu{
     width: 85%;
     padding: 0.7em;
     border: none;
     background: none;
     outline: 0;
     border-bottom: 1px solid #49A5E6;
     color: #fff;
     margin-bottom: 3%;
}

.result{
    /* background-color: white; */
    /* opacity: 90%; */
    color: #49A5E6;
    text-align: left;
}
    /* STRUCTURE */
    .wrapper {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        min-height: 100%;
        padding: 05px;
    }
    #formContent{
        height: auto;
        margin-top: 4%;
        background-color: rgba(0,0,0,0.5) !important;
        align-content: center;
        margin-left: 33%;
        margin-right: auto;
        min-width: 19rem;
        min-height: 39rem;
        
    }
    #formContent {
        -webkit-border-radius: 10px 10px 10px 10px;
        border-radius: 10px 10px 10px 10px;
        background: #fff;
        padding: 30px;
        width: 90%;
        max-width: 21%;
        position: relative;
        padding: 7px;
        -webkit-box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);
        box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);
        text-align: center;
    }
    input[type=button], input[type=submit], input[type=reset]  {
        background-color:rgba(73, 165, 230, 0.2);
        border: none;
        color: white;
        padding: 15px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        text-transform: uppercase;
        font-size: 13px;
        width: 85%;
        -webkit-box-shadow: 0 10px 30px 0 rgba(95,186,233,0.4);
        box-shadow: 0 10px 30px 0 rgba(95,186,233, 0.1);
        -webkit-border-radius: 5px 5px 5px 5px;
        border-radius: 5px 5px 5px 5px;
        margin: 5px 20px 40px 20px;
        -webkit-transition: all 0.3s ease-in-out;
        -moz-transition: all 0.3s ease-in-out;
        -ms-transition: all 0.3s ease-in-out;
        -o-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
    }

   
    /* ANIMATIONS */
    /* Simple CSS3 Fade-in-down Animation */
    .fadeInDown {
        -webkit-animation-name: fadeInDown;
        animation-name: fadeInDown;
        -webkit-animation-duration: 1s;
        animation-duration: 1s;
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both;
    }
    @-webkit-keyframes fadeInDown {
        0% {
            opacity: 0;
            -webkit-transform: translate3d(0, -100%, 0);
            transform: translate3d(0, -100%, 0);
        }
        100% {
            opacity: 1;
            -webkit-transform: none;
            transform: none;
        }
    }
    @keyframes fadeInDown {
        0% {
            opacity: 0;
            -webkit-transform: translate3d(0, -100%, 0);
            transform: translate3d(0, -100%, 0);
        }
        100% {
            opacity: 1;
            -webkit-transform: none;
            transform: none;
        }
    }
    /* Simple CSS3 Fade-in Animation */
    @-webkit-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
    @-moz-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
    @keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
    .fadeIn {
        opacity:0;
        -webkit-animation:fadeIn ease-in 1;
        -moz-animation:fadeIn ease-in 1;
        animation:fadeIn ease-in 1;
        -webkit-animation-fill-mode:forwards;
        -moz-animation-fill-mode:forwards;
        animation-fill-mode:forwards;
        -webkit-animation-duration:1s;
        -moz-animation-duration:1s;
        animation-duration:1s;
    }
    .fadeIn.first {
        -webkit-animation-delay: 1s;
        -moz-animation-delay: 1s;
        animation-delay: 1s;
    }
      .fadeIn.second {
        -webkit-animation-delay: 0.6s;
        -moz-animation-delay: 0.6s;
        animation-delay: 0.6s;
    }
    .fadeIn.three {
         -webkit-animation-delay: 0.8s;
        -moz-animation-delay: 0.8s;
        animation-delay: 0.8s;
    }
    .fadeIn.fourth {
        -webkit-animation-delay: 1s;
        -moz-animation-delay: 1s;
        animation-delay: 1s;
    }
    .labelColor{
        color: #49A5E6;}

    .login_btn:hover{
        color: white;
        background-color: rgb(1, 24, 41);
        opacity: 65%;
    }
</style>