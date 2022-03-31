<template>
    
<section id="forgot-box" >

        <div class="imgBx">
            <img src="../assets/paper-business-document-office.jpg" alt="" srcset="">
            
        </div>
        <div class="contentBx">
            <div class="formBx">

                <h2>Forgot Your Password?</h2>
                <p id="content-forget">To reset Your Password, enter the registered email address and we will send you password reset instructions on your email</p>
                <form action="" method="" id="forgot-form" @submit.prevent="handleSubmit">
                    <div id="forgotAlert" style="color:red;" class="inputBx" v-text="fpwdalertt"></div>
                    <div id="forgotAlert" style="color:green;" class="inputBx" v-text="fpwdalerttsuccess"></div>
                    <div class="inputBx">

                        <span>Email</span>
                        <input type="email" id="femail" name="email" placeholder="E-mail" required v-model="email">
                    </div>
                    
                    
                    
                    <div class="inputBx">
                        
                        <input type="submit" id="forgot-btn" name="" value="Reset Password">
                    </div>
                    <div class="inputBx">
                       <p><router-link to="/login" id="back-link">Back To Sign In</router-link> </p>
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
            email:'',
            fpwdalertt:'',
            fpwdalerttsuccess:''
        }
        
    },
    methods:{
        async handleSubmit(){
            
            const response = await axios.post('https://user-management-satvik.herokuapp.com/users/requestPasswordReset',{
                email:this.email,
                redirectUrl:'https://user-management-satvik.herokuapp.com/resetpassword'
                
            });
            if(response.data.status==='failed'){
                this.fpwdalertt = response.data.message;
                this.fpwdalerttsuccess=''

            }
            else if(response.data.status==='success'){
                this.fpwdalerttsuccess = response.data.message;
                 this.fpwdalertt='';

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
    color:rgb(117, 117, 117);
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-size: 18px;
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