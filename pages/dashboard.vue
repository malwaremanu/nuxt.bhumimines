<template>
  <div class="container mx-auto">
    <NavBar />

    <div class="p-2">
      <div
        class="flex justify-between items-center bg-bhumi-100 text-white p-3"
      >
        <div class="font-semibold text-bhumi-600 rounded-t-md">Lists</div>
        <div class="flex items-center gap-2">
          <span @click="fetch_list()">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
          </span>
          
          <span>
                <svg
                            class="w-6 h-6 text-bhumi-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                            ></path>
                        </svg>
          </span>          
        </div>
      </div>

      <ul class="">
        
          <li class="p-3 border border-bhumi-100 flex justify-between" v-for="(lis, index) in task_lists" :key="index">
            <div>{{ lis.items }}</div>
            <div
              class="
                border border-bhumi-400
                rounded-full
                px-1.5
                text-bhumi-600
                font-semibold
              "
            >
              15
            </div>
          </li>
      </ul>


      <div>
            <p v-if="$fetchState.pending">Fetching mountains...</p>
            <p v-else-if="$fetchState.error">An error occurred :(</p>
            <div v-else>
            <h1>Nuxt Mountains</h1>
            <ul>
               <li v-for="(mountain, index) in mountains" :key="index">
                    {{ mountain[0].title }}
               </li>               
            </ul>
            <button @click="$fetch">Refresh</button>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import NavBar from "../components/nav-bar.vue";
export default {
  name: "dashboard",
  components: { NavBar },
  data() {
    return {
      task_lists: [],
      mountains: []
    };
  },
  async fetch() {
      this.mountains = await fetch(
        'https://berowra.malwaremanu.deta.app/api/collection/xa24b0mawuhd'
      ).then(res => res.json())
      console.log('list fetch')
    },
  methods: {
    fetch_list() {
      this.task_lists = fetch(
        "https://berowra.malwaremanu.deta.app/api/collection/xa24b0mawuhd"
      ).then((res) => res.json());

      console.log(this.task_lists)
    },
  },
};
</script>