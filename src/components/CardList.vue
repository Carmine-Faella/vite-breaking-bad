<script>

import {store} from '../store.js';
import Card from './Card.vue';

export default{
    components:{
        Card
    },
    data(){
    return{
      store
    }
  }
}

</script>

<template>

    <div class="container bg-white p-3">
        <div class="row">
            <div class="col-3" v-for="(card,index) in store.cardList" :key="index">
                
                <Card :name="card.name" :race="card.race" :image="card.card_images[0].image_url" :attribute="card.attribute"/>
                
            </div>
        </div>

    </div>

</template>

<style scoped lang="scss">

</style>