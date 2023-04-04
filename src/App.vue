<template>
  <!-- <Captcha /> -->
  <TestRequestData />
</template>

<script>
import TestRequestData from "./components/TestRequestData.vue";
// import Captcha from "./components/Captcha.vue";

export default {
  name: "App",
  components: {
    TestRequestData,
    // Captcha,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.form-control {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
}
form {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 4rem;
  background: beige;
}
.captcha,
#captcha,
input {
  padding: 1rem;
}
body {
  background: #333;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  height: 100vh;
  width: 100vw;
}
</style>
