<template>
    <div id="app">
        <Teste/>
        <Sidebar/>
        <ModalInicial />
    </div>
</template>

<script>

import Teste from '@/components/01 Inicio';

import Sidebar from '@/components/02 Sidebar';

import ModalInicial from '@/components/03 ModalInicial';


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
