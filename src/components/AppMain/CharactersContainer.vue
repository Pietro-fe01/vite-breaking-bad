<script>
import CardComponent from './CardComponent.vue'

export default{
    name: 'CharactersContainer',
    components:{
        CardComponent
    }
}
</script>

<template>
    <section class="bg-light px-5 py-4">
        <div class="characters-found">
            <h6 class="text-white p-3">Found 62 Characters</h6>
        </div>

        <div class="characters-list row justify-content-between mt-4 mx-3">
            <CardComponent/>
            <CardComponent/>
            <CardComponent/>
            <CardComponent/>
            <CardComponent/>
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