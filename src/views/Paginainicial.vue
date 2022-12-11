<template>
    <div id="app">
        <Teste/>
        <Sidebar/>
        <ModalInicial/>
    </div>
</template>

<script>

import Teste from '@/components/texto.vue';

import Sidebar from '@/components/Sidebar.vue';

import ModalInicial from '@/components/ModalInicial.vue';

    export default{

        data: function() {
            return{
                teste: "",
            }
        },
        
        components: {
            Teste,
            Sidebar,
            ModalInicial
        }
    }
</script>

<style>

</style>
