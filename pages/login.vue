<template>
  <section
    class="flex justify-center items-center h-screen bg-bhumi-200 dark:bg-black"
  >
    <div
      class="max-w-md w-full bg-white rounded p-6 space-y-4 dark:bg-gray-800"
    >
      <div class="mb-4">
        <!-- <p class="hidden text-gray-600">Login page</p> -->
        <div v-show="modalShow" class="flex justify-between">
          <div class="text-xl font-bold dark:text-gray-50">Password Reset</div>
          <div @click="signIn">
            <svg
              class="w-6 h-6 dark:text-gray-50"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </div>
        </div>
        <h2 v-show="!modalShow" class="text-xl font-bold dark:text-gray-50">
          Sign in
        </h2>
      </div>

      <div v-show="modalShow">
        <div>
          <!-- <InputText
            type="text"
            v-model="username"
            placeholder="Enter your email address"
          /> -->
          <input type="text" class="b-input" v-model="username" />
        </div>
        <div @click="shoot_mail">
          <PrimaryBtn text="Reset" />
        </div>

        <div v-show="resetGood" class="normal-alert">
          <div>
            If this is a valid email id stored in out database, we will send a
            password reset link, check your mail inbox.
          </div>
          <div class="p-2">
            <nuxt-link
              to="/"
              class="px-4 py-2 border rounded-full font-semibold"
              >Go Back</nuxt-link
            >
          </div>
        </div>
      </div>
      <div v-show="!modalShow">
        <div>
          <input
            type="text"
            class="b-input"
            v-model="username"
            placeholder="Email / Username"
          />
        </div>
        <div>
          <input
            type="text"
            class="b-input"
            v-model="password"
            placeholder="Password"
          />
        </div>
        <div>          
          <button class="b-button" @click="check_creds">Sign in</button>
        </div>
        <div class="flex items-center justify-between mt-2">
          <div class="flex flex-row items-center">
            <input type="checkbox" class="b-checkbox" />
            <label for="comments" class="ml-2 text-sm font-normal text-gray-600"
              >Remember me</label
            >
          </div>
          <div>
            <button
              @click="resetPass"
              class="text-sm text-blue-600 hover:underline"
              href="#"
            >
              Forgot password?
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import InputText from "../components/inputType.vue";
import PrimaryBtn from "../components/btn-primary.vue";
import axios from "axios";

export default {
  name: "LoginPage",
  data() {
    return {
      username: "admin",
      password: "pass",
      modalShow: false,
      resetGood: false,
    };
  },
  methods: {
    cons() {
      console.log("putting data to console.");
      console.log(username, password);
    },
    check_creds() {
      console.log('checking creds...')
      axios
        .post(process.env.baseUrl + "accounts/login", {
          username: this.username,
          password: this.password,
        })
        .then((resp) => {
          // this.getList();
          console.log("success" + resp.data);
          if(resp.data['msg'] == 'success'){
            window.location.href = '/dashboard'
          }
          else{
            alert('Incorrect username or password.')
          }
        });
    },
    resetPass() {
      this.modalShow = true;
      this.username = "";
      this.password = "";
    },
    signIn() {
      this.modalShow = false;
      this.username = "";
      this.password = "";

      axios
        .post(process.env.baseUrl + "accounts/reset", {
          username: this.username,
        })
        .then((resp) => {
          // this.getList();
          console.log("success" + resp.data);
        });
    },
    shoot_mail() {
      console.log("reset button clicked", this.username);
      // console.log(process.env.baseUrl + "accounts/reset")
      axios
        .post(process.env.baseUrl + "accounts/reset", {
          username: this.username,
        })
        .then((resp) => {
          // this.getList();
          console.log("success" + resp.data);
        });
      this.resetGood = true;
    },
  },
  components: { InputText, PrimaryBtn },
};
</script>