<script setup>
const date = new Date();
const year = date.getFullYear();
</script>

<template>
    <footer>
        <div class="d-flex align-items-center justify-content-center">
            <span>
                <i class="fa-solid fa-copyright me-2"></i>
                {{ year }}
                Todos los derechos reservados.
            </span>
        </div>
    </footer>
</template>