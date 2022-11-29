<script>
import {store} from '/src/store.js'
import axios from 'axios'

export default {
    name: 'SelectCategory',
    data(){
        return{
            store
        }
    },
    methods:{
        selectValue: function(value){
            this.store.charactersList = []; 
            this.store.isFinished = false;

            axios.get("https://www.breakingbadapi.com/api/characters", {
                params: {
                    category: value.target.value,
                }
            })
            .then((response) => {
                this.store.charactersList = response.data;
                this.store.isFinished = true;
            })
        }
    }
}
</script>

<template>
    <section>
        <select id="selectForm" class="form-select form-select-sm w-auto" 
        aria-label="Default select example" @change="selectValue">
            <option value="" selected>Breaking Bad & Better Call Saul</option>
            <option value="Breaking Bad">Breaking Bad</option>
            <option value="Better Call Saul">Better Call Saul</option>
        </select>
    </section>
</template>

<style lang="scss" scoped>
</style>