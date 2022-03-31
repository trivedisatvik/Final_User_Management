 <template>
     
 <section id="register-box" > 
        <div class="imgBx">
             <img src="../assets/paper-business-document-office.jpg" alt="" srcset="">
            
        </div>
        <div class="contentBx">
            <div class="formBx">
                <h2>Create Account</h2>
                <form action="" id="register-form" method="" @submit.prevent="handleSubmit">
                    
                    
                    
                                <div id="regAlert" style="color:red;" class="inputBx " v-text="alertt"></div>
                                <div id="regAlertt" style="color:green;" class="inputBx " v-text="alerttSuccess">
                       
                    </div>
                    <div class="inputBx">
                        <span>First Name</span>
                        <input type="text" id="fname" name="fname" placeholder="First Name" required v-model="first_name">
                    </div>
                    <div class="inputBx">
                        <span>Last Name</span>
                        <input type="text" id="lname" name="lname" placeholder="Last Name" required v-model="last_name">
                    </div>
                    <div class="inputBx">
                        <span>Email</span>
                        <input type="email" id="remail" name="email" placeholder="Email" required v-model="email">
                    </div>
                    <div class="inputBx">
                        <span>Password</span>
                        <input type="password" id="rpassword" name="password" placeholder="Password" required v-model="password">
                    </div>
                    <div class="inputBx">
                        <span>Confirm Password</span>
                        <input type="password" id="cpassword" name="cpassword" placeholder="Confirm Password" required v-model="password_confirm">
                    </div>
                    <div class="inputBx">
                        <div id="passError" style="color:red;" v-text="palertt"></div>
                    </div>
                    
                    <div class="inputBx">
                        
                        <input type="submit" name="" value="Sign Up" id="register-btn">
                    </div>
                    <div class="inputBx">
                       <p>Already have an account?  <router-link to="/login" id="login-link">Sign In</router-link></p>
                    </div>
                </form>
            </div>
        </div>
    </section>

 </template>
 <script>
     import axios from 'axios'
 export default {
     name:'SignUpPage',
     data(){

         return{
             first_name:'',
               last_name:'',
               email:'',
               password:'',
               password_confirm:'',
               alertt:'',
               alerttSuccess:'',
               palertt:''
       
         }

     },
     methods:{
        async handleSubmit(){
            var paswd=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
            
            if(this.password.match(paswd)){
  
    if(this.password!=this.password_confirm){
        
        
        const text = "Password did not match"
        this.alertt='';
        this.palertt=text;
        console.log(this.password);
        console.log(this.password_confirm)


    }
    else{
        
     const response=  await axios.post('http://localhost:7000/users/',{
                first_name:this.first_name,
               last_name:this.last_name,
               email:this.email,
               password:this.password,

            })
            if(response.data.status==='failed'){
                this.alertt=response.data.message;
                this.alerttSuccess='';
            }
            else if(response.data.status==='success' ){
                this.alerttSuccess = response.data.message ;
                this.alertt='';

            }
            
      // this.$router.push('/login');
    }
    
}
else{
    
    const regtext = "Password must be 8 to 15 characters long which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character ";
    this.alertt = regtext;
    this.palertt=''

}


        
            
         }
     }
     
 }
 </script>
 <style scoped>

*{
    margin :0;
    padding:0;
    box-sizing: border-box;
    font-family: 'Poppins',sans-serif;
    
}
section{
    position: relative;
    width: 100%;
    height: 100vh;
    display:flex;

}
.closebtn {
    margin-left: 15px;
    color: white;
    font-weight: bold;
    float: right;
    font-size: 22px;
    line-height: 20px;
    cursor: pointer;
    transition: 0.3s;
  }
  
  /* When moving the mouse over the close button */
  .closebtn:hover {
    color: black;
  }
section .imgBx{
    position: relative;
    width:50%;
    height: 100%;

}
section .imgBx::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background:linear-gradient(225deg,#e91e63,#03a9f4);
    z-index: 1;
    mix-blend-mode: screen;
}
section .imgBx img{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
section .contentBx{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100%;
}
section .contentBx .formBx{
    width: 50%;

}
section .contentBx .formBx h2{
    color:#607d8b;
    font-weight: 600;
    font-size: 1.5em;
    text-transform: uppercase;
    margin-bottom: 20px;
    border-bottom: 4px solid #ff4584;
    display: inline-block;
    letter-spacing: 1px;
}
section .contentBx .formBx .inputBx{
    margin-bottom: 20px;
}
section .contentBx .formBx .inputBx span{
    font-size: 16px;
    margin-bottom: 5px;
    display: inline-block;
    color: #607d8b;
    font-weight: 300;
    font-size: 16px;
    letter-spacing: 1px;
}
section .contentBx .formBx .inputBx input{
    width: 100%;
    padding:10px 20px;
    outline: none;
    font-weight: 400;
    border:1px solid #607d8b;
    font-size: 16px;
    letter-spacing: 1px;
    color: #607d8b;
    background: transparent;
    border-radius: 30px;
}
#content-forget{
    margin-bottom: 10px;
}
section .contentBx .formBx .inputBx input[type="submit"]{
    background: #ff4584;
    color: #fff;
    outline: none;
    border:none;
    font-weight: 500;
    cursor: pointer;

}
section .contentBx .formBx .inputBx input[type="submit"]:hover{
    background: #f53677;
}
section .contentBx .formBx .remember{
    margin-bottom: 10px;
    color: #607d8b;
    font-weight: 400;
    font-size: 14px;
}
#forgot-link{
    margin-left: 150px;
    color: #607d8b;
    font-weight: 400;
    font-size: 14px;

}
#forgot-link:hover{
    color: #ff4584;
}
section .contentBx .formBx .inputBx p{
    color: #607d8b;
}
section .contentBx .formBx .inputBx p a{
    color: #ff4584;
}
.alert {
    padding: 20px;
  background-color: #f44336; /* Red */
  color: white;
  margin-bottom: 15px;
  }
  
  /* The close button */
  
@media only screen and (max-width:768px){
    section .imgBx{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

    }
    section .contentBx{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        z-index: 1;
    }
    section .contentBx .formBx{
        width:100%;
        padding: 40px;
        background: rgb(255 255 255 /0.9);
        margin: 50px;
    }
}
 </style>