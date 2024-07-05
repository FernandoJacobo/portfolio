<script setup>
import { ref } from 'vue';

const jobs = ref([
    {
        id: '1',
        title: 'Hospital Morelos',
        from: '2017',
        to: '2018',
        description: '',
        job: 'Auxiliar de Sistemas',
    },
    {
        id: '2',
        title: 'ITTEC. Tecnología Inteligente',
        from: '2018',
        to: '2024',
        description: '',
        job: 'Jefe de Mesa de Servicio, Desarrollador'
    },
    {
        id: '3',
        title: 'Sistemas Digitales de Contabilidad y Administración Financiera',
        from: '2024',
        to: 'Actual',
        description: '',
        job: 'Programador',
    },
]);
</script>

<template>
    <section id="jobs" class="animate__animated animate__fadeIn">
        <div class="container align-content-center">
            <div class="row">
                <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item">
                            Inicio
                        </li>
                        <li class="breadcrumb-item active" aria-current="page">
                            Experiencia Laboral
                        </li>
                    </ol>
                </nav>
            </div>

            <div class="row d-flex flex-wrap align-items-center justify-content-center">
                <div class="ag-format-container">
                    <div class="ag-courses_box">
                        <div v-for="job in jobs" :key="job.id" class="ag-courses_item">
                            <div class="ag-courses-item_link">
                                <div class="ag-courses-item_bg"></div>

                                <div class="ag-courses-item_title">
                                    {{ job.title }}
                                </div>

                                <div class="ag-courses-item_date-box">
                                    <span class="ag-courses-item_date">
                                        {{ job.job }}
                                    </span>
                                </div>

                                <div class="ag-courses-item_date-box">
                                    {{ job.from }} - {{ job.to }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>