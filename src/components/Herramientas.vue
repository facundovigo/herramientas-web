<template>
    <div>
        <Name></Name>
        <div class="contenedor">
                <LegajoPC></LegajoPC>
                <Farms></Farms>
                <userInfo></userInfo>
                <PcInfo></PcInfo>
         </div>
             <footer class="foot"> 
                 <img  class="fot" src="../assets/foot6.png">  
            </footer>
    </div>    
    
</template>

<script>
    import Name from '../components/Name'
    import LegajoPC from '../components/LegajoiPC'
    import Farms from '../components/Farms'
    import UserInfo from '../components/userInfo'
    import PcInfo from '../components/PcInfo'
export default {
    components: {
        LegajoPC,
        Name,
        Farms,
        UserInfo,
        PcInfo
    }
}
</script>

<style scoped>
    .contenedor{
        width: 90%;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
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

