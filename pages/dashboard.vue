<template>
    <div class="container mx-auto ">
        <NavBar />
        <div class="bg-bhumi-50">
            This is dashboard here.
        </div>        
    </div>
</template>

<script>
import NavBar from "../components/nav-bar.vue";
export default {
    name: "dashboard",
    components: { NavBar }
}
</script>