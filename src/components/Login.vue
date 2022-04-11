<template>
<div class="main">
    <div class="vue-template">
        <form @submit.prevent="formLogin">
            <h3>Login</h3><hr>
 
            <div class="form-group">
                <label>Email address</label><br>
                <input type="email" class="form-control form-control-lg" name="email" id="email" v-model="data.email" />
            </div>
 
            <div class="form-group">
                <label>Password</label><br>
                <input type="password" class="form-control form-control-lg" name="password" id="password" v-model="data.password" />
            </div>
            <p class="forgot-password text-right mt-2 mb-4">
              <a href="/forget-pass">  Forgot password ?</a>
            </p>
            <button type="submit" class="login">Login</button><br><br>
          <div class="signup_link">
        Not a member? <a href="/register" > Signup</a>
        </div>
 
            
 
           
 
        </form>
    </div>
    </div>
    
</template>
<script>

export default {
   name:'Login',
   data(){
       return{
           data:{
           email:'',
           password:''
           }
       }
   },
   methods:{
       formLogin(e){
         e.preventDefault();
             console.log(this.data);
       }
   }
   
 
}
</script>


<style>
.main{
    background:linear-gradient(120deg,#2980b9, #8e44ad);
      height:100vh;
  overflow: hidden;
}
.vue-template{
  border: 1px solid #fff;
  border-radius: 7px;
    width: 350px;
    height: 400px;
    margin-top:100px;
    font-size:20px;
    margin-left:600px;
    background:#fff;
     
}
.vue-template h3{
    text-align:center;
}

 .form-group{
    
    padding-left:15px;
  margin-bottom: 14px;
    color:#2691d9;
}
.login{
    border:1px solid #fff;
   border-radius: 20px;
    padding-right: 113px;
    padding-left: 113px;
    padding-top: 12px;
    padding-bottom: 30px;
    font-size: 18px;
    margin-left: 15px;
    background: #2691d9;
    color:#fff;

}

.form-control{
        padding: 6px 40px;
}
.forgot-password{
    font-size:16px;
    padding-left: 15px;
   
    
}
.forgot-password a{
    color: #a6a6a6;
    
    text-decoration:none;
}
.forgot-password a:hover{
    
    
    text-decoration:underline;
}
.signup_link{
    font-size: 15px;
    padding-left: 15px;
    padding-top: 20px;
  
    padding-left: 75px;
}
.signup_link a{
    text-decoration:none;
}
.signup_link a:hover{
    text-decoration:underline;
}
 @media screen and (max-width:576px){
     .vue-template{
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
 