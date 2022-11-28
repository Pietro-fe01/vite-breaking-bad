<script>
export default{
    name: 'CardComponent',
    components:{
    },
    props: {
        info: Object,
    }
}
</script>

<template>
    <div class="character-card text-center pb-4 mb-4">
        <div class="character__image p-3">
            <img class="w-100" :src="info.img" :alt="`${info.name}-image`">
        </div>
        <h4 class="character__name text-white my-3">{{info.name}}</h4>
        <div class="text-muted">
            <div class="character__category">{{info.category}}</div>
            <small class="character__status pb-3">{{info.status}}d</small>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .character-card{
        width: 100%;
        margin-right: 5px;
        margin-left: 5px;
        background-color: var(--card-bg-color);

        &:nth-child(5n){
            margin-right: 0;
        }
        .character__category{
            font-size: 1.25rem;
        }
        @media screen and (min-width: 768px){
            width: calc(100% / 2 - 10px);
        }
        @media screen and (min-width: 992px){
            width: calc(100% / 3 - 10px);
        }
        @media screen and (min-width: 1200px){
            width: calc(100% / 4 - 10px);
        }
        @media screen and (min-width: 1400px){
            width: calc(100% / 5 - 10px);
        }
    }
</style>