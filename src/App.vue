<script setup>
import Header from '@/components/Header';
import Footer from '@/components/Footer';
</script>

<template>
    <Header />

    <main>
        <router-view />
    </main>

    <Footer />
</template>