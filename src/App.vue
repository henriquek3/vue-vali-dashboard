<template>
    <body class="app sidebar-mini">
    <!-- Navbar-->
    <Header></Header>
    <!-- Sidebar menu-->
    <div class="app-sidebar__overlay" data-toggle="sidebar"></div>
    <Sidebar></Sidebar>
    <router-view/>
    </body>
</template>

<script>
    // @ is an alias to /src
    import Sidebar from '@/components/template/Sidebar.vue';
    import Header from "./components/template/Header";

    export default {
        name: 'Home',
        components: {
            Sidebar,
            Header
        },
        mounted() {
            require('vali-admin/docs/js/main');
        }
    }
</script>

<style lang="scss">
    @import "./components/sass/app";
</style>
