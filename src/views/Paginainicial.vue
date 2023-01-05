<template>
    <div id="app">
        <Teste/>
        <Sidebar/>
        <ModalInicial/>
    </div>
</template>

<script>

import Teste from '@/components/texto';

import Sidebar from '@/components/sidebar';

import ModalInicial from '@/components/ModalInicial';


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
