<template>
  <div>
    <div v-html="htmlContent"></div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      htmlContent: "",
    };
  },
  mounted() {
    axios
      .get("http://localhost:3000")
      .then((response) => {
        this.htmlContent = response.data;
      })
      .catch((error) => {
        console.error(error);
      });
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background: #333;
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
</style>
