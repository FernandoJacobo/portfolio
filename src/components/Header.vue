<script setup>
const closeSidebar = () => {
    const btn = document.getElementById('btnSidebar');
    btn.click();
}
</script>

<template>
    <header>
        <nav class="p-2">
            <div class="container d-flex align-items-center justify-content-between">
                <button class="btn btn-lg btn-primary" type="button" data-bs-toggle="offcanvas"
                    data-bs-target="#sidebar" aria-controls="sidebar">
                    <i class="fa-solid fa-bars-staggered"></i>
                </button>

                <div class="logo">
                    <h6 class="fw-bold">
                        <i class="fa-solid fa-chevron-left"></i>
                        Fernando /
                        <i class="fa-solid fa-chevron-right"></i>
                    </h6>
                </div>
            </div>
        </nav>

        <div class="offcanvas offcanvas-start" data-bs-backdrop="static" tabindex="-1" id="sidebar"
            aria-labelledby="sidebarLabel">
            <div class="offcanvas-header d-flex align-items-center justify-content-between">
                <h5 class="offcanvas-title" id="sidebarLabel"></h5>

                <button type="button" id="btnSidebar" class="btn btn-lg btn-primary" data-bs-dismiss="offcanvas"
                    aria-label="Close">
                    <i class="fa-solid fa-xmark"></i>
                </button>
            </div>

            <div class="offcanvas-body align-content-center">
                <ul class="list-group">
                    <li class="list-group-item">
                        <router-link :to="{ name: 'home' }" @click="closeSidebar">
                            <i class="fa-solid fa-house"></i>
                            Inicio
                        </router-link>
                    </li>
                    <li class="list-group-item">
                        <router-link :to="{ name: 'about' }" @click="closeSidebar">
                            <i class="fa-solid fa-address-card"></i>
                            Sobre mi
                        </router-link>
                    </li>
                    <li class="list-group-item">
                        <router-link :to="{ name: 'jobs' }" @click="closeSidebar">
                            <i class="fa-solid fa-briefcase"></i>
                            Experiencia Laboral
                        </router-link>
                    </li>
                    <li class="list-group-item">
                        <router-link :to="{ name: 'technologies' }" @click="closeSidebar">
                            <i class="fa-solid fa-code"></i>
                            Tecnologías
                        </router-link>
                    </li>
                    <li class="list-group-item">
                        <router-link :to="{ name: 'contact' }" @click="closeSidebar">
                            <i class="fa-solid fa-envelope"></i>
                            Contacto
                        </router-link>
                    </li>
                </ul>
            </div>

            <div class="offcanvas-footer d-flex align-items-center justify-content-center gap-3">
                <a href="https://wa.link/9ko7d4" target="_blank">
                    <i class="fa-brands fa-whatsapp"></i>
                </a>

                <a href="https://github.com/FernandoJacobo" target="_blank">
                    <i class="fa-brands fa-square-github"></i>
                </a>

                <a href="https://www.linkedin.com/in/fernando-alvarez-jacobo/" target="_blank">
                    <i class="fa-brands fa-linkedin"></i>
                </a>
            </div>
        </div>
    </header>
</template>