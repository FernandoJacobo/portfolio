<script setup>
import { ref } from 'vue';

const about = ref({
    description: 'Soy un desarrollador web con experiencia en el diseño, desarrollo y mantenimiento desitios web y aplicaciones web. Me especializo en crear sitios web a medida que satisfacen las necesidades específicas de mis clientes. Poseo sólidas habilidades en lenguajes de programación front-end y back-end, así como experiencia en bases de datos.',
});

const education = ref([
    {
        id: '1',
        title: 'Universidad Tecnologíca de Emiliano Zapata',
        description: 'T.S.U. En Comercio Electronico',
    },
    {
        id: '2',
        title: 'Universidad Tecnologíca de Emiliano Zapata',
        description: 'Ing. Tecnologías de la Información',
    },
]);

const skills = ref([
    'Proactividad',
    'Buena Comunicación',
    'Resolución de Problemas',
    'Trabajo en Equipo.',
    'Responsabilidad',
]);
</script>

<template>
    <section id="about" class="animate__animated animate__fadeIn">
        <div class="container align-content-center">
            <div class="row">
                <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item">
                            Inicio
                        </li>
                        <li class="breadcrumb-item active" aria-current="page">
                            Sobre mi
                        </li>
                    </ol>
                </nav>
            </div>

            <div class="row d-flex flex-wrap align-items-center justify-content-center">
                <div class="ag-format-container">
                    <div class="ag-courses_box">
                        <div class="ag-courses_item">
                            <div class="ag-courses-item_link">
                                <div class="ag-courses-item_bg"></div>

                                <div class="ag-courses-item_title">
                                    Sobre mi
                                </div>

                                <div class="ag-courses-item_date-box">
                                    <i class="fa-solid fa-quote-left p-2"></i>
                                    {{ about.description }}
                                    <i class="fa-solid fa-quote-right p-2"></i>
                                </div>
                            </div>
                        </div>

                        <div class="ag-courses_item">
                            <div class="ag-courses-item_link">
                                <div class="ag-courses-item_bg"></div>

                                <div class="ag-courses-item_title">
                                    Educación
                                </div>

                                <div class="ag-courses-item_date-box">
                                    <ul class="list-group">
                                        <li v-for="item in education" class="list-group-item">
                                            <div class="fw-bold">
                                                <i class="fa-solid fa-graduation-cap fs-6"></i>
                                                {{ item.title }}
                                            </div>
                                            <small class="fw-bold"> {{ item.description }} </small>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="ag-courses_item">
                            <div class="ag-courses-item_link">
                                <div class="ag-courses-item_bg"></div>

                                <div class="ag-courses-item_title">
                                    Habilidades
                                </div>

                                <div class="ag-courses-item_date-box">
                                    <ul class="list-group">
                                        <li v-for="item in skills" class="list-group-item fw-bold">
                                            <i class="fa-solid fa-angles-right fs-6"></i>
                                            {{ item }}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>