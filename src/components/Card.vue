<script>

import {store} from '../store.js';

export default{
    data(){
    return{
      store
    }
  },
  props:{
        name:String,
        race:String,
        image:String,
    }
}

</script>

<template>

    <div class="text-center bg-warning my-2 card-wrapper">
        <img :src="image" :alt="name" class="w-100">
        <h5 class="text-white p-3">{{ name.toUpperCase() }}</h5>
        <h5>{{ race }}</h5>
    </div>

</template>

<style scoped lang="scss">

.card-wrapper{
    min-height: 550px;
}

</style>