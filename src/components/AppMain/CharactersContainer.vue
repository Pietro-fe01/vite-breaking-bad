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
        <div v-if="this.isFinished" class="characters-list d-flex flex-wrap mt-4 mx-3">
            <CardComponent
            v-for="(character) in charactersList"
            :info="character" />
        </div>
        <div v-else class="loading d-flex flex-column align-items-center my-5">
            <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            <h5 class="text-animation" data-text="Caricamento in corso...">Caricamento in corso...</h5>
        </div>
    </section>
</template>

<style lang="scss" scoped>
section{
    .characters-found{
        background-color: var(--bg-characters-found);
    }
}

/*----------------------
    LOADING ANIMATION
----------------------*/
.lds-spinner {
    color: official;
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
}
.lds-spinner div {
    transform-origin: 40px 40px;
    animation: lds-spinner 1.2s linear infinite;
}
.lds-spinner div:after {
    content: " ";
    display: block;
    position: absolute;
    top: 3px;
    left: 37px;
    width: 6px;
    height: 18px;
    border-radius: 20%;
    background: black;
}
.lds-spinner div:nth-child(1) {
    transform: rotate(0deg);
    animation-delay: -1.1s;
}
.lds-spinner div:nth-child(2) {
    transform: rotate(30deg);
    animation-delay: -1s;
}
.lds-spinner div:nth-child(3) {
    transform: rotate(60deg);
    animation-delay: -0.9s;
}
.lds-spinner div:nth-child(4) {
    transform: rotate(90deg);
    animation-delay: -0.8s;
}
.lds-spinner div:nth-child(5) {
    transform: rotate(120deg);
    animation-delay: -0.7s;
}
.lds-spinner div:nth-child(6) {
    transform: rotate(150deg);
    animation-delay: -0.6s;
}
.lds-spinner div:nth-child(7) {
    transform: rotate(180deg);
    animation-delay: -0.5s;
}
.lds-spinner div:nth-child(8) {
    transform: rotate(210deg);
    animation-delay: -0.4s;
}
.lds-spinner div:nth-child(9) {
    transform: rotate(240deg);
    animation-delay: -0.3s;
}
.lds-spinner div:nth-child(10) {
    transform: rotate(270deg);
    animation-delay: -0.2s;
}
.lds-spinner div:nth-child(11) {
    transform: rotate(300deg);
    animation-delay: -0.1s;
}
.lds-spinner div:nth-child(12) {
    transform: rotate(330deg);
    animation-delay: 0s;
}
@keyframes lds-spinner {
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}

/*----------------------
    TEXT ANIMATION
----------------------*/
.text-animation {
    position: relative;
    font-size: 1.875rem;
    font-weight: 400;
    color: black;
    -webkit-text-stroke: 2px black;
}
.text-animation::before {
    position: absolute;
    content: attr(data-text);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: white;
    -webkit-text-stroke: 0px white;
    overflow: hidden;
    animation: loading 2s linear;
}
@keyframes loading {
    0% { width: 0; }
    20% { width: 45%; }
    70% { width: 75%; }
    80% { width: 85%; }
    100% { width: 100%; }
}
</style>