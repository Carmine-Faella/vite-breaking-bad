<script>

import {store} from '../store.js';

export default{
    data(){
    return{
      store
    }
  },
  methods: {
            reset() {
                this.store.selected = '';
                this.$emit('doSelect');
            }
        }
}

</script>

<template>

    <div class="container">
        <div class="row col-2 mb-5" >

            <select v-model="store.selected" @change="$emit('doSelect')">
                <option @click="reset">Seleziona l'Archetypo</option>
                <option v-for="achetype in store.acheType">{{ achetype.archetype_name}}</option>
            </select>

        </div>

    </div>

</template>

<style scoped lang="scss">

</style>