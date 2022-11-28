<script>
import CardComponent from './CardComponent.vue'
import axios from 'axios'

export default{
    name: 'CharactersContainer',
    components:{
        CardComponent
    },
    data(){
        return{
            charactersList: [],
            isFinished: false
        }
    },
    methods:{
    },
    created(){
        axios.get("https://www.breakingbadapi.com/api/characters").then((response) => {
            this.charactersList = response.data;
            this.isFinished = true;
        })
    },
}
</script>

<template>
    <section class="bg-light px-5 py-4">
        <div class="characters-found">
            <h6 class="text-white p-3">Found 62 Characters</h6>
        </div>

        <div v-if="this.isFinished" class="characters-list row justify-content-around mt-4 mx-3">
            <CardComponent 
            v-for="(character) in charactersList"
            :info="character" />
        </div>
        <div v-else>Generando</div>
    </section>
</template>

<style lang="scss" scoped>
section{
    .characters-found{
        background-color: var(--bg-characters-found);
    }
}
</style>