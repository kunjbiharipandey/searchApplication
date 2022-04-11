<template>
 
<div class="main">
    <div class="group">
        <form @submit.prevent="formResetPassword">
            <h3>Forget Password</h3><hr>
 
            <div class="forms">
                <label>Email address</label><br>
                <input type="email" class="form-control form-control-lg" name="email" id="email" v-model="data.email" />
            </div>
 
           
            <button type="submit" class="reset">Reset Password</button><br><br>
         
       
 
      </form>
    </div>
 </div>
</template>
<script>

export default {
   name:'ForgetPass',
   data(){
       return{
           data:{
           email:''
          
           }
       }
 
},
   methods:{
       formResetPassword(e){
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
.group{
  border: 1px solid #fff;
  border-radius: 7px;
    width: 350px;
    height: 300px;
    margin-top:100px;
    
    font-size:20px;
    margin-left:600px;
    background:#fff;
     
}
.group h3{
    text-align:center;
}
.forms{
    padding-bottom:10px;
    padding-left:15px;
    padding-top: 26px;
    color:#2691d9;
    margin-bottom: 14px;
}
.reset{
    border:1px solid #fff;
   border-radius: 20px;
    padding-right: 76px;
    padding-left: 76px;
    padding-top: 12px;
    padding-bottom: 30px;
    font-size: 18px;
    margin-left: 15px;
    background: #2691d9;
    color:#fff;

}

.form-control-lg{
        padding: 6px 40px;
}
 @media screen and (max-width:576px){
     .group{
     width: 260px;
    height: 200px;
    margin-left: 19px;
    margin-top: 40px;
    font-size: 10px;
 }
  .form-control-lg {
    padding: 1px 3px;
}
.reset {
   
    border-radius: 20px;
    padding-right: 60px;
    padding-left: 60px;
    padding-top: 12px;
    padding-bottom: 12px;
    font-size: 10px;
    margin-left: 15px;
    
}
 

 }
</style>