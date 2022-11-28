<script>
    export default {
        name: 'HeaderTitle'
    }
</script>

<template>
    <div class="page-title d-flex align-items-center">
        <img class="logo" src="src/assets/logo.png" alt="breaking_bad_logo">
        <h1>Breaking Bad Api</h1>
    </div>
</template>

<style lang="scss" scoped>
    .page-title{
        .logo{
            max-width: 60px;
        }

        h1{
            color: white;
            margin-left: .3125rem;
        }
    }
</style>