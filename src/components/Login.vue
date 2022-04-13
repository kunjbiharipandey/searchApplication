<template>
  <div class="main">
    <div class="vue-template">
      <form @submit.prevent="formLogin">
        <h3>Login</h3>
        <hr />

        <div class="form-group mb-10">
          <label class="display-block mb-10">Email address</label>
          <input
            type="email"
            class="input-elements"
            name="email"
            id="email"
            v-model="data.email"
          />
        </div>

        <div class="form-group mt-20 mb-10">
          <label class="display-block mb-10">Password</label>
          <input
            type="password"
            class="input-elements"
            name="password"
            id="password"
            v-model="data.password"
          />
        </div>
        <p class="forgot-password text-right mt-20 mb-4">
          <a href="/forget-pass"> Forgot password ?</a>
        </p>
        <div  class="form-group mb-10 mt-20">
        <button type="submit" class="login">Login</button>
        </div>
        <div class="signup_link mt-20">
          Not a member? <a href="/register"> Signup</a>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      data: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    formLogin(e) {
      e.preventDefault();
      console.log(this.data);
    },
  },
};
</script>


<style>
.main {
  background: linear-gradient(120deg, #2980b9, #8e44ad);
  height: 100vh;
  overflow: hidden;
}
.mb-10{
    margin-bottom: 10px !important;
}
.mt-20{
    margin-top: 20px !important;
}
.display-block{
    display: block;
}
.vue-template {
  border: 1px solid #fff;
  width: 350px;
  height: 400px;
  margin-top: 100px;
  font-size: 20px;
  background: #fff;
  margin: 50px auto;
}
.vue-template h3 {
  text-align: center;
}

.form-group {
  padding-left: 15px;
  margin-bottom: 14px;
  color: #000;
}
.login {
      border: 1px solid #fff;
    /* border-radius: 20px; */
    padding-top: 12px;
    padding-bottom: 30px;
    font-size: 18px;
    /* margin-left: 15px; */
    background: #2691d9;
    color: #fff;
    width: 97%;
    position: relative;
}
.input-elements {
  background: #eee;
  border: 2px solid #eee;
  width: 90%;
  padding: 6px 10px;
}

.form-control {
  padding: 6px 10px;
}
.forgot-password {
  font-size: 16px;
  padding-left: 15px;
}
.forgot-password a {
  color: #2462e9;
  font-weight: 600;
  text-decoration: none;
}
.signup_link {
  font-size: 15px;
  padding-left: 15px;
  padding-top: 20px;
  padding-left: 75px;
}
.signup_link a {
  text-decoration: none;
}
.signup_link a:hover {
  text-decoration: underline;
}
@media screen and (max-width: 576px) {
  .vue-template {
    width: 278px;
    height: 277px;
    margin-left: 19px;
    margin-top: 40px;
    font-size: 10px;
  }
  .form-control {
    padding: 3px 17px;
  }
  .login {
    border-radius: 20px;
    padding-right: 95px;
    padding-left: 95px;
    padding-top: 12px;
    padding-bottom: 30px;
    font-size: 13px;
    margin-left: 15px;
  }
  .forgot-password {
    font-size: 10px;
    padding-left: 15px;
  }
  .signup_link {
    font-size: 12px;
    padding-left: 15px;
    padding-top: 32px;
    padding-left: 75px;
  }
}
</style>
 