<script>
import {store} from '/src/store.js'
import CardComponent from './CardComponent.vue'

export default{
    name: 'CharactersContainer',
    components:{
        CardComponent,
    },
    data(){
        return{
            store
        }
    }
}
</script>

<template>
    <section class="bg-light px-5 py-4">
        <!-- Barra in cui viene mostrato il numero dei contatti trovati -->
        <div class="characters-found">
            <h6 v-if="store.charactersList.length === 0" class="text-white px-3">
                <div class="lds-facebook"><div></div><div></div><div></div></div>
            </h6>
            <h6 v-else class="text-white p-3">Found {{ store.charactersList.length }} Characters from {{ store.selectedValue ? store.selectedValue : 'both Breaking Bad and Better Call Saul' }}</h6>
        </div>
        <!-- Barra in cui viene mostrato il numero dei contatti trovati -->

        <!-- Qui verranno stampate le card -->
        <div v-if="this.store.isFinished" class="characters-list d-flex flex-wrap mt-4 mx-3">
            <CardComponent
            v-for="(character) in store.charactersList"
            :info="character" />
        </div>
        <!-- /Qui verranno stampate le card -->

        <!-- Finchè le card non sono generate, viene mostrato un loading -->
        <div v-else class="loading d-flex flex-column align-items-center my-5">
            <div class="lds-facebook second"><div></div><div></div><div></div></div>
            <h5 class="text-animation" data-text="Caricamento in corso...">Caricamento in corso...</h5>
        </div>
        <!-- /Finchè le card non sono generate, viene mostrato un loading -->
    </section>
</template>

<style lang="scss" scoped>
section{
    .characters-found{
        background-color: var(--bg-characters-found);
    }
}

/*--------------------------
    LOADING ANIMATION CARDS
---------------------------*/
.lds-facebook {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-facebook div {
  display: inline-block;
  position: absolute;
  left: 8px;
  width: 16px;
  background: #fff;
  animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
}
.second div{
    background: black !important;
  }
.lds-facebook div:nth-child(1) {
  left: 8px;
  animation-delay: -0.24s;
}
.lds-facebook div:nth-child(2) {
  left: 32px;
  animation-delay: -0.12s;
}
.lds-facebook div:nth-child(3) {
  left: 56px;
  animation-delay: 0;
}
@keyframes lds-facebook {
  0% {
    top: 8px;
    height: 64px;
  }
  50%, 100% {
    top: 24px;
    height: 32px;
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