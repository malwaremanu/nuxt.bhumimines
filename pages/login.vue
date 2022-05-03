<template>
    <section class="flex justify-center items-center h-screen bg-gray-100">       
       <div class="max-w-md w-full bg-white rounded p-6 space-y-4">
            <div class="mb-4">
                <!-- <p class="hidden text-gray-600">Login page</p> -->
                <div v-if="modalShow" class="flex justify-between">
                    <div class="text-xl font-bold">Password Reset</div>
                    <div @click="signIn">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                </div>
                <h2 v-else class="text-xl font-bold">Sign in</h2>
            </div>

            <div v-if="modalShow">
                <div>
                    <input class="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600" 
                    type="text" v-model="username" placeholder="Enter your email">
                </div>
                <div>
                    <button @click="cons"
                    class="w-full py-4 bg-blue-600 mt-2 hover:bg-blue-700 rounded text-sm font-bold text-gray-50 transition duration-200 mt-2">Reset</button>
                </div>
            </div>
            <div v-else>
                <div>
                    <input class="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600" 
                    type="text" v-model="username" placeholder="Email / Username">
                </div>
                <div>
                    <input class="w-full p-4 text-sm mt-2 bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600" 
                    type="text" v-model="password" placeholder="Password">
                </div>
                <div>
                    <button @click="cons"
                    class="w-full py-4 bg-blue-600 hover:bg-blue-700 rounded text-sm font-bold text-gray-50 transition duration-200 mt-2">Sign In</button>
                </div>
                <div class="flex items-center justify-between mt-2">
                    <div class="flex flex-row items-center">
                        <input type="checkbox" class="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded">
                        <label for="comments" class="ml-2 text-sm font-normal text-gray-600">Remember me</label>
                    </div>
                    <div>
                        <button @click="resetPass" class="text-sm text-blue-600 hover:underline" href="#">Forgot password?</button>
                    </div>
                </div>
            </div>            
        </div>
    </section>  
</template>

<script>
export default {
  name: "LoginPage",
  data() {
      return {
          username : '',
          password : '',
          modalShow : false
      }
  },
  methods : {
      cons(){
          console.log(this.username, this.password)
      },
      resetPass(){
          this.modalShow = true
          this.username = ''
          this.password = ''
      },

      signIn(){
          this.modalShow = false
          this.username = ''
          this.password = ''
      }

  }      
  
};
</script>