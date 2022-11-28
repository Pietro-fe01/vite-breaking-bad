<script>
export default {
    name: 'SelectCategory',
    data(){
        return{
        }
    },
    methods: {
        selectValue: function(){
            const select = document.getElementById("selectForm")
            console.log(select.value)
        }
    },
    mounted(){
    }
}
</script>

<template>
    <section>
        <select id="selectForm" class="form-select form-select-sm w-auto" 
        aria-label="Default select example" @click="selectValue">
            <option hidden selected disabled>Select category</option>
            <option value="Breaking Bad">Breaking Bad</option>
            <option value="Breaking Bad, Better Call Saul">Breaking Bad, Better Call Saul</option>
            <option value="Better Call Saul">Better Call Saul</option>
        </select>
    </section>
</template>

<style lang="scss" scoped>
</style>