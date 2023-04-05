<template>
  <div class="component-wrapper">
    <Captcha @captcha-response="getResponse" />
    <!-- <div class="captcha-response">
      <h5 class="success" v-if="captchaResponse === true">success</h5>
      <h5 class="error" v-if="captchaResponse === false">error</h5>
    </div> -->
  </div>
</template>

<script>
import Captcha from "./components/Captcha.vue";

export default {
  name: "App",
  components: {
    Captcha,
  },
  data() {
    return {
      captchaResponse: "",
    };
  },
  methods: {
    getResponse(value) {
      this.captchaResponse = value;
      console.log(value);
    },
  },
};
</script>

<style scoped>
.captcha-response {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.component-wrapper {
  display: grid;
  grid-template-columns: 1fr;
  width: 320px;
}
h5 {
  margin: 0;
  padding: 0.5rem;
  background: #333;
  width: 100%;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
.success {
  color: lime;
}
.error {
  color: tomato;
}

body {
  background: #777;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  width: 100vw;
}
</style>
