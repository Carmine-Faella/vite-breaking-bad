<script>

import {store} from '../store.js';

export default{
    data(){
    return{
      store
    }
  }
}

</script>

<template>
    <div class="waiting bg-white" v-if="store.load">
        <h1>In attesa del caricamento...</h1>
    </div>
</template>

<style scoped lang="scss">

    .waiting{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>