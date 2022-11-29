<script>
import {store} from '/src/store.js'
import axios from 'axios'
import SelectCategory from './SelectCategory.vue';
import CharactersContainer from './CharactersContainer.vue';

export default {
    components: {
        SelectCategory,
        CharactersContainer
    },
    data(){
        return {
            store
        }
    },
    created(){
        axios.get("https://www.breakingbadapi.com/api/characters")
        .then((response) => {
            this.store.charactersList = response.data;
            this.store.isFinished = true;
        })
    },
}
</script>

<template>
    <main class="container">
        <!-- Prima sezione -->
        <SelectCategory
        class="m-3" />
        <!-- /Prima sezione -->

        <!-- Seconda sezione -->
        <CharactersContainer/>
        <!-- /Seconda sezione -->
    </main>
</template>

<style lang="scss" scoped>
</style>