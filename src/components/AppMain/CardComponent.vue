<script>
export default{
    name: 'CardComponent'
}
</script>

<template>
    <div class="character-card text-center pb-5">
        <div class="character__image p-3">
            <div class="box"></div>
        </div>
        <h4 class="character__name text-white my-3">Walter White</h4>
        <div class="text-muted">
            <div class="character__category">Breaking Bad</div>
            <small class="character__status pb-3">Presumed dead</small>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .character-card{
        width: calc(100% / 5 - 20px);
        background-color: var(--card-bg-color);
        .box{
            width: 100%;
            height: 250px;
            background-color: red;
        }

        .character__category{
            font-size: 1.25rem;
        }
    }
</style>