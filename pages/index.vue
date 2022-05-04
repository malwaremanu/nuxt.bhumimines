<template>
  <div>
    <NavBar />
    <div class="bg-bhumi-50 h-screen">
      Sample content here...
    </div>
  </div>
</template>

<script>
import BtnPrimary from "../components/btn-primary.vue";
import Anchor from "../components/anchor.vue";
import NavBar from "../components/nav-bar.vue";
export default {
    name: "IndexPage",
    components: { BtnPrimary, Anchor, NavBar },
    methods : {
      check_login(){
        console.log('checking login section.')
      }
    }
};
</script>
