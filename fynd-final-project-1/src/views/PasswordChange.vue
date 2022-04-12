<template>
   
    <section id="forget-box" > 
        <div class="imgBx">
             <img src="../assets/paper-business-document-office.jpg" alt="" srcset="">
            
        </div>
        <div class="contentBx">
            <div class="formBx">
                <h2>Reset Password</h2>
                <form action="" id="forget-form" method="" @submit.prevent="handleSubmit">
                    
                    
                    
                                <div id="regAlert" style="color:red;" class="inputBx " v-text="alertt"></div>
                                <div id="regAlertt" style="color:green;" class="inputBx " v-text="alerttSuccess">
                       
                    </div>
                    
                    <div class="inputBx">
                        <span>New Password</span>
                        <input type="password" id="new-rpassword" name="new-password" placeholder="New Password" required v-model="npwd">
                         <span class="eye">
                       <img src="../assets/eye-regular.svg" alt="" srcset=""  id="eye1" @click="toggle1">
                       </span>

                    </div>
                    <div class="inputBx">
                        <span>Confirm Password</span>
                        <input type="password" id="new-cpassword" name="new-cpassword" placeholder="Confirm Password" required v-model="cnpwd">
                        <span class="eye">
                       <img src="../assets/eye-regular.svg" alt="" srcset=""  id="eye2" @click="toggle2">
                       </span>
                    </div>
                   <div class="inputBx">
                        <div id="passError" style="color:red;" v-text="palertt"></div>
                    </div>
                    
                    <div class="inputBx">
                        
                        <input type="submit" name="" value="Reset Password" id="reset-btn">
                    </div>
                    <div class="inputBx">
                        
                        <input type="button" v-on:click="loginSubmit()" name="" value="Login" id="login-btn" style="display:none">
                    </div>
                  
                </form>
            </div>
        </div>
    </section>


</template>

<script>
import axios from 'axios'
export default {
    name:'ForgetPassword',
    data(){
        return{
            npwd:'',
            cnpwd:'',
            alertt:'',
            alerttSuccess:'',
            palertt:'',
            state1:false,
            state2:false,
        }
    },
    methods:{
        async handleSubmit(){
            var paswd=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
            
            if(this.npwd.match(paswd)){
  
    if(this.npwd!=this.cnpwd){
        
        
        const text = "Password did not match"
        this.alertt='';
        this.palertt=text;
        


    }
    else{
        
        const curl = window.location.href
        const splitURL=curl.toString().split("/");
        
        
     const response=  await axios.post('https://user-management-satvik.herokuapp.com/users/resetPassword',{
                userId:splitURL[4],
                resetString:splitURL[5],
                newPassword:this.npwd,

            })
            if(response.data.status==='failed'){
                this.alertt=response.data.message;
                this.alerttSuccess='';
            }
            else if(response.data.status==='Success' ){
                this.alerttSuccess = response.data.message ;
                this.alertt='';
                const loginBtn = document.getElementById("login-btn")
                loginBtn.style.display="";

            }
            console.log(response.data.status);
            console.log(response.data.message);
       // this.$router.push('/login');
    }
    
}
else{
    
    const regtext = "Password must be 8 to 15 characters long which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character ";
    this.alertt = regtext;
    this.palertt=''

}


        
            
         },
         loginSubmit(){
             this.$router.push('/')
         },
         toggle1(){
             if(this.state1){
                 document.getElementById("new-rpassword").setAttribute("type","password");
                 this.state1=false;
             }
             else{
                 document.getElementById("new-rpassword").setAttribute("type","text");
                 this.state1=true;
             }

         },
         toggle2(){
             if(this.state2){
                 document.getElementById("new-cpassword").setAttribute("type","password");
                 this.state2=false;
             }
             else{
                 document.getElementById("new-cpassword").setAttribute("type","text");
                 this.state2=true;
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
.eye{
    width:15px;
    position: absolute;
   
    transform: translate(-150%,60%);
    
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
section .contentBx .formBx .inputBx input[type="button"]{
    background: #ff4584;
    color: #fff;
    outline: none;
    border:none;
    font-weight: 500;
    cursor: pointer;

}
section .contentBx .formBx .inputBx input[type="button"]:hover{
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