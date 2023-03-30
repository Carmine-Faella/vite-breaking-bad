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

    <div class="container">
        <div class="row col-2 mb-5" >
            <div></div>

            <select>
                <option disabled value="">Please select one</option>
                <option v-for="races in store.cardList">{{ races.race }}</option>
            </select>

        </div>
    </div>

</template>

<style scoped lang="scss">

</style>