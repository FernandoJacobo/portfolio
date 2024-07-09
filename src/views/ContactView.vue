<template>
    <section id="contact" class="animate__animated animate__fadeIn">
        <div class="container align-content-center">
            <div class="row">
                <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <router-link :to="{ name: 'home' }" class="breadcrumb-item">
                            Inicio
                        </router-link>
                        <li class="breadcrumb-item active" aria-current="page">
                            Información de Contacto
                        </li>
                    </ol>
                </nav>
            </div>

            <div class="row d-flex flex-wrap align-items-center justify-content-center">
                <div class="ag-format-container">
                    <div class="ag-courses_box">
                        <div class="ag-courses_item">
                            <a href="mailto:fernandojacobo54@gmail.com" target="_blank" class="ag-courses-item_link">
                                <div class="ag-courses-item_bg"></div>

                                <div class="ag-courses-item_title">
                                    <i class="fa-solid fa-at"></i>
                                    Correo
                                </div>

                                <div class="ag-courses-item_date-box fw-bold">
                                    fernandojacobo54@gmail.com
                                </div>
                            </a>
                        </div>

                        <div class="ag-courses_item">
                            <a href="https://wa.link/9ko7d4" target="_blank" class="ag-courses-item_link">
                                <div class="ag-courses-item_bg bg-"></div>

                                <div class="ag-courses-item_title">
                                    <i class="fa-brands fa-whatsapp"></i>
                                    Teléfono
                                </div>

                                <div class="ag-courses-item_date-box fw-bold">
                                    777 835 01 14
                                </div>
                            </a>
                        </div>

                        <div class="ag-courses_item">
                            <a href="https://www.linkedin.com/in/fernando-alvarez-jacobo/" target="_blank" class="ag-courses-item_link">
                                <div class="ag-courses-item_bg bg-"></div>

                                <div class="ag-courses-item_title">
                                    <i class="fa-brands fa-linkedin"></i>
                                    Linkedin
                                </div>

                                <div class="ag-courses-item_date-box fw-bold">
                                    linkedin.com/fernando-alvarez-jacobo
                                </div>
                            </a>
                        </div>

                        <div class="ag-courses_item">
                            <a href="https://github.com/FernandoJacobo" target="_blank" class="ag-courses-item_link">
                                <div class="ag-courses-item_bg bg-"></div>

                                <div class="ag-courses-item_title">
                                    <i class="fa-brands fa-square-github"></i>
                                    Github
                                </div>

                                <div class="ag-courses-item_date-box fw-bold">
                                    github.com/FernandoJacobo
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>