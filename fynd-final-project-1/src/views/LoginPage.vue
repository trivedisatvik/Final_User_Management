<template>
     <section id="login-box">
        <div class="imgBx">
            <img src="../assets/paper-business-document-office.jpg" alt="" srcset="">
            
        </div>
        <div class="contentBx">
            <div class="formBx">
                <h2>Login</h2>
                <form action="" id="login-form" method="" @submit.prevent="handleSubmit"> 
                     <div id="loginAlert" style="color:red;" class="inputBx " v-text="loginalertt"></div>
                    <div class="inputBx">
                        <span>Email</span>
                        <input type="email" name="email" id="email" placeholder="E-mail" required v-model="email">
                    </div>
                    <div class="inputBx">
                        <span>Password</span>
                        <input type="password" name="password" id="password" placeholder="Password" required v-model="password">
                          <span class="eye">
                       <img src="../assets/eye-regular.svg" alt="" srcset=""  id="eye1" @click="toggle1">
                       </span>
                    </div>
                    <div class="remember">
                        <!-- <label><input type="checkbox" name="rem" id="customCheck" >Remember me</label> -->
                        <router-link to="/forgetpwd" id="forgot-link">Forgot Password?</router-link>
                    </div>
                    <div class="inputBx">
                        
                        <input type="submit" id="login-btn" name="" value="Sign In">
                    </div>
                    <div class="inputBx">
                       <p>Don't have an account?  <router-link to="/signup" id="register-link">SignUp</router-link></p>
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>
<script>
import axios from 'axios'
export default {
    name:'LoginPage',
    data(){
        return {
            email:'',
            password:'',
            loginalertt:'',
            state1:false,
            }
    },
    methods:{
        async handleSubmit(){
            const response = await axios.post('https://user-management-satvik.herokuapp.com/users/login',{
                email:this.email,
                password:this.password
            });
           
            
            
            if(response.data.status==='failed'){
                this.loginalertt = response.data.message;

            }
            else{
                localStorage.setItem('token',response.data.token);
            localStorage.setItem('userId',response.data.user[0]._id)
            this.$router.push('/home');
            }
            

        },
        toggle1(){
            
             if(this.state1){
                 document.getElementById("password").setAttribute("type","password");
                 this.state1=false;
             }
             else{
                 document.getElementById("password").setAttribute("type","text");
                 this.state1=true;
             }

         },
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
.eye{
    width:15px;
    position: absolute;
   
    transform: translate(-150%,60%);
    
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
    margin-left: 250px;
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