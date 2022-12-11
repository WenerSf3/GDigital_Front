<template>
    <div id="app">
        <Teste/>
        <Sidebar/>
    </div>
</template>

<script>

import Teste from '@/components/texto.vue';
import Sidebar from '@/components/Sidebar.vue';

    export default{

        data: function() {
            return{
                teste: "",
            }
        },
        
        components: {
            Teste,
            Sidebar
        }
    }
</script>

<style>
    
</style>
