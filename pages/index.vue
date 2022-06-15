<template>
  <div class="container mx-auto h-screen bg-slate-200 p-4">
    <div class="font-semibold text-center">mTasks v1.1</div>

    <NuxtLink to="/login">
      <BtnPrimary text="login"></BtnPrimary>
    </NuxtLink>

     <NuxtLink to="/dashboard">
      <BtnPrimary text="Dashboard"></BtnPrimary>
    </NuxtLink>
  </div>
</template>

<script>
import BtnPrimary from "../components/btn-primary.vue";
import BtnPrimaryVue from "../components/btn-primary.vue";
export default {
  name: "IndexPage",
  components: { BtnPrimary, BtnPrimaryVue },
  methods: {
    check_login() {
      console.log("checking login section.");
    },
  },
};
</script>
