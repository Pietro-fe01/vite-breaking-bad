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
            charactersList: []
        }
    },
    created(){
        axios.get("https://www.breakingbadapi.com/api/characters").then((response) => {
            this.charactersList = response.data;
        })
        console.log(this.charactersList)
    }
}
</script>

<template>
    <section class="bg-light px-5 py-4">
        <div class="characters-found">
            <h6 class="text-white p-3">Found 62 Characters</h6>
        </div>

        <div class="characters-list row justify-content-around mt-4 mx-3">
            <CardComponent 
            v-for="character in charactersList"
            class=""
            :info="character"/>
        </div>
    </section>
</template>

<style lang="scss" scoped>
section{
    .characters-found{
        background-color: var(--bg-characters-found);
    }
}
</style>