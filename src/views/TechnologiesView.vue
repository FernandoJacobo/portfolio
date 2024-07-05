<script setup>
import { ref } from 'vue';

const technologies = ref([
    {
        id: '1',
        category: 'front',
        name: 'bootstrap',
    },
    {
        id: '2',
        category: 'front',
        name: 'css',
    },
    {
        id: '3',
        category: 'front',
        name: 'html5',
    },
    {
        id: '4',
        category: 'front',
        name: 'javascript',
    },
    {
        id: '5',
        category: 'front',
        name: 'jquery',
    },
    {
        id: '6',
        category: '',
        name: 'php',
    },
    {
        id: '7',
        category: 'front',
        name: 'vue',
    },
    {
        id: '8',
        category: 'back',
        name: 'nodejs',
    },
    {
        id: '9',
        category: 'back',
        name: 'mysql',
    },
]);
</script>

<template>
    <section id="technologies" class="animate__animated animate__fadeIn">
        <div class="container align-content-center">
            <div class="row">
                <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item">
                            Inicio
                        </li>
                        <li class="breadcrumb-item active" aria-current="page">
                            Tecnologías
                        </li>
                    </ol>
                </nav>
            </div>

            <div class="row d-flex flex-wrap align-items-center justify-content-center">
                <div v-for="technology in technologies" :key="technology.id"
                    class="col-6 col-sm-6 col-md-3 mb-4 align-content-center text-center p-3 animate__animated animate__fadeIn">
                    <img :src="`assets/images/${technology.name}.svg`" :alt="technology.name" :tile="technology.name"
                        class="img-technologies">
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.img-technologies {
    width: 150px;
    height: 100px;
}

.img-technologies:hover {
    filter: grayscale(1);
    cursor: pointer;
}
</style>