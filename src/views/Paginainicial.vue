<template>
    <div id="app">
        <input type="text" v-model="teste">
        <br>
        <h3>{{ teste }}</h3>
    </div>
</template>

<script>

export default{
    
    data: function(){
        return{
            teste : '',
        }
    }
}
</script>