<template>
  <div class="site-wrapper">
    <form>
      <span class="captcha"> EBLU </span>
      <input id="captcha" type="text" placeholder="Enter Above Word" />
      <input type="submit" value="submit" />
    </form>

    <a href="#" id="bot">View as bot</a>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
.page-wrapper {
  padding: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

body {
  background: #335778;
}

form {
  width: 320px;
  border: 1px solid #fafafa;
  padding: 5rem;
  background: #fafafa;
  color: #444;
  border-radius: 3px;
  display: inline-block;
  margin-top: 30%;
}

.captcha {
  padding-left: 2em;
  text-align: center;
  display: block;
  margin-bottom: 0.5em;
  font-size: 2em;
  letter-spacing: 8px;
}
.captcha::first-letter {
  position: relative;
  margin-right: -3.6em;
}

input[type="text"] {
  display: block;
  width: 100%;
  margin-bottom: 1em;
  border-radius: 4px;
  border: 1px solid #aaa;
  padding: 5px;
}

input[type="submit"] {
  background: #364d8f;
  color: #fff;
  border: none;
  border-radius: 3px;
  padding: 5px 10px;
}

.notice {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  background: #fafafa;
  font-size: 1.4em;
  text-align: center;
  padding: 0.5em;
  color: #328580;
  font-weight: 700;
}

#bot {
  color: inherit;
  text-decoration: none;
  background: #fafafa;
  border-radius: 3px;
  display: block;
  margin: 5em auto 0;
  width: 120px;
  padding: 5px 10px;
  text-align: center;
}
</style>
