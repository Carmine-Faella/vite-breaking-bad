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
        types:String,
        image:String
    }
}

</script>

<template>

    <div class="bg-warning">
        <h5 class="text-white">{{ name.toUpperCase() }}</h5>
        <h5>{{ types }}</h5>
    </div>

</template>

<style scoped lang="scss">

</style>