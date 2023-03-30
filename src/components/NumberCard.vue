<script>

import {store} from '../store.js';

export default{
    data(){
    return{
      store
    }
  },
  computed:{
    number(){
        return 'Ci sono '+ this.store.cardList.length +' carte'
    }
  }
}

</script>

<template>

    <div class="container">
        <div class="row bg-black p-3 text-white">
            <h2 v-if="this.store.cardList.length > 0">{{ number }}</h2>
        </div>
    </div>

</template>

<style scoped lang="scss">

</style>