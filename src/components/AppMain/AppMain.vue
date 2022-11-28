<script>
import SelectCategory from './SelectCategory.vue';
import CharactersContainer from './CharactersContainer.vue';

export default {
    components: {
        SelectCategory,
        CharactersContainer
    }
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