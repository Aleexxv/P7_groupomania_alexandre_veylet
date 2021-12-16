<template>
    <div class="content">
        <div>
            <h1 v-if="error.statusCode === 404">Malheureusement cette page n'existe pas 😥</h1>
            <h1 v-else>Nous avons rencontré un problème technique. Veuillez nous excuser pour le désagrément occasionné 😒</h1>
            <button class="button"><NuxtLink to="/">Je retourne sur la page d'accueil.</NuxtLink></button>
        </div>
    </div>
</template>

<script>

    export default {
        props: ['error'],
        layout: 'error' 
    }

</script>

.<style lang="scss" scoped>

    .content {
        background: var(--bg);
        color: var(--color);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        height: 100vh;
        text-align: center;
        div{
            position: relative;
            top: 40%;
        }

        h1{
            margin: 4rem 0;
            padding: 2rem;
        }

        .button{
            transform: translate(0, 0);
            left: 0;
        }
    }
</style>