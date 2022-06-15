<template>
  <div class="container mx-auto h-screen bg-bhumi-100">
    <div class="flex items-center gap-2 p-3 bg-bhumi-600 text-white">
      <NuxtLink to="/dashboard">
        <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
                ></path>
        </svg>
      </NuxtLink>      
      <div class="font-semibold text-center">Settings</div>
    </div>

    <div>

    </div>

    <!-- <NuxtLink to="/dashboard">
      <BtnPrimary text="Dashboard"></BtnPrimary>
    </NuxtLink> -->


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
