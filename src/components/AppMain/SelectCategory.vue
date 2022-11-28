<script>
export default {
    name: 'SelectCategory'
}
</script>

<template>
    <section>
        <select class="form-select form-select-sm w-auto" aria-label="Default select example">
            <option hidden selected disabled>Select category</option>
            <option value="1">Breaking Bad</option>
            <option value="2">Breaking Bad, Better Call Saul</option>
            <option value="3">Better Call Saul</option>
        </select>
    </section>
</template>

<style lang="scss" scoped>
</style>