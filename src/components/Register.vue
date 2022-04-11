 <template>

<div class="main">
    <div class="center">
        <form @submit.prevent="formRegister">
            <h3>Register page</h3><hr>
 
            <div class="txt_field">
                <label>FullName</label><br>
                <input type="text" class="form-control form-control-lg" name="fname" id="fname" v-model="data.fname" />
            </div>
            <div class="txt_field">
                <label>Email address</label><br>
                <input type="email" class="form-control form-control-lg" name="email" id="email" v-model="data.email" />
            </div>
 
            <div class="txt_field">
                <label>Password</label><br>
                <input type="password" class="form-control form-control-lg" name="password" id="password" v-model="data.password" />
            </div>
            
            <button type="submit" class="register">Register</button><br><br>
         
 
            
 
           
 
        </form>
    </div>
    </div>
    
    
</template>
<script>

export default {
   name:'Register',
   data(){
       return{
           data:{
           fname:'',
           email:'',
           password:''
           }
       }
   },
   methods:{
       formRegister(e){
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
.center{
  border: 1px solid #fff;
  border-radius: 7px;
    width: 350px;
    height: 400px;
    margin-top:100px;
    font-size:20px;
    margin-left:600px;
    background:#fff;

     
}
.center h3{
    text-align:center;
}

 .txt_field{
    
    padding-left:15px;
  margin-bottom: 14px;
    color:#2691d9;
}
.register{
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
   margin-top: 14px;


}

.form-control{
        padding: 6px 40px;
}

 @media screen and (max-width:576px){


   .center{
     width: 278px;
    height: 277px;
    margin-left: 19px;
    margin-top: 40px;
    font-size: 10px;
 }
 .form-control {
    padding: 3px 17px;
}
.register{
   
    border-radius: 20px;
    padding-right: 95px;
    padding-left: 95px;
    padding-top: 12px;
    padding-bottom: 30px;
    font-size: 13px;
    margin-left: 15px;
    
}
 }
</style>
 