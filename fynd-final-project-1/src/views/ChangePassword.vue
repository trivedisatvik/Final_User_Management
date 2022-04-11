<template>
<div>
<SidebarMenu v-if="user"/>
<div class="content">
<div class="bodyClass" v-if="user">
    <div class="wrapper">
        <h2>Change Password</h2>
        <div id="loginAlert" style="color:red;" class="inputBx " v-text="loginalertt"></div>
             <div id="regAlertt" style="color:green;" class="inputBx " v-text="alerttSuccess">
                       
                    </div>
        <form action="" @submit.prevent="handleSubmit">
            <div class="input-box">
                <input type="password"  placeholder="Current Password" required v-model="oldpwd">
                 <span class="eye">
                       <img src="../assets/eye-regular.svg" alt="" srcset=""  id="eye1" @click="toggle">
                       </span>
                
            </div>
            <div class="input-box">
                <input type="password"  placeholder="New Password" required v-model="password">
                 <span class="eye">
                       <img src="../assets/eye-regular.svg" alt="" srcset=""  id="eye1" @click="toggle1">
                       </span>

            </div>
            <div class="input-box">
                <input type="password"  placeholder="Confirm Password" required v-model="cpwd">
                  <span class="eye">
                       <img src="../assets/eye-regular.svg" alt="" srcset=""  id="eye1" @click="toggle2">
                       </span>

            </div>
            <div class="">
                        <div id="passError" style="color:red;" v-text="palertt"></div>
                    </div>
            <div class="input-box button">
                <input type="submit"  value="Change Password">

            </div>
        </form>
    </div>
    </div>
    </div>
    </div>
</template>
<script>
import axios from 'axios'
import SidebarMenu from "@/views/Sidebar-menu.vue"
export default {
    name:'ChangePassword',
     components: {
   SidebarMenu,
  
  },
  data(){
      return{
          oldpwd:"",
          password:"",
          cpwd:"",
          user:null,
          loginalertt:"",
          alerttSuccess:"",
          palertt:"",
          state:false,
          state1:false,
          state2:false
      }
  },
   async created(){
    const response = await axios.get(`https://user-management-satvik.herokuapp.com/users/${localStorage.getItem('userId')}`,{
      headers:{
        Authorization:'Bearer ' + localStorage.getItem('token')
      }
    })
    this.user = response.data;
   },
   methods:{
       async handleSubmit(){
           var paswd=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
           if(this.password.match(paswd)){
               if(this.password!=this.cpwd){

                   this .palertt="Password did not match"
                   this.loginalertt = "";
                this.alerttSuccess=""


               }
               else{
                    const response = await axios.post(`https://user-management-satvik.herokuapp.com/users/changepwd/${localStorage.getItem('userId')}`,{
                oldpwd:this.oldpwd,
                password:this.password,
            });
           
            
            
            if(response.data.status==='failed'){
                this.loginalertt = response.data.message;
                this.alerttSuccess=""
                this .palertt=""

            }
            else{
                this.alerttSuccess = response.data.message ;
                this.loginalertt="";
                this .palertt="";

                
            }

               }
           }
           else{
                const regtext = "Password must be 8 to 15 characters long which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character ";
                 this.loginalertt = regtext;
                this.palertt='';
                this.alerttSuccess="";
           }

           
            

        },
         toggle(){
             if(this.state){
                 document.getElementById("cupassword").setAttribute("type","password");
                 this.state=false;
             }
             else{
                 document.getElementById("cupassword").setAttribute("type","text");
                 this.state=true;
             }

         },
        toggle1(){
             if(this.state1){
                 document.getElementById("rpassword").setAttribute("type","password");
                 this.state1=false;
             }
             else{
                 document.getElementById("rpassword").setAttribute("type","text");
                 this.state1=true;
             }

         },
         toggle2(){
             if(this.state2){
                 document.getElementById("cpassword").setAttribute("type","password");
                 this.state2=false;
             }
             else{
                 document.getElementById("cpassword").setAttribute("type","text");
                 this.state2=true;
             }

         }

   }

}
</script>
<style scoped>
*{
    margin:0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins',sans-serif;
}
div.content {
  margin-left: 120px;
  
  
}
.bodyClass{
    min-height: 100vh;
    display: flex;
    align-items: center;
     background: #f3f3f3;
    justify-content: center;
}
.wrapper{
    position:relative;
    max-width:430px;
    background: #fff;
   
    border-radius: 6px;
    width:100%;
    box-shadow: 0 5px 10px rgba(0,0,0,0.2);

}
#loginAlert{
    margin-top: 5px;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    padding-top: 10px;
    padding-left: 34px;
    padding-right: 34px;
    padding-bottom: 0px;
    font-size: 20px;
    font-weight: 600;

}
 #regAlertt{
     margin-top: 5px;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    padding-top: 10px;
    padding-left: 34px;
    padding-right: 34px;
    padding-bottom: 0px;
    font-size: 20px;
    font-weight: 600;
    
 }
 #passError{
      margin-top: 5px;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    
    padding-left: 30px;
    padding-right: 34px;
    padding-bottom: 0px;
    font-size: 20px;
    font-weight: 600;

 }
.wrapper h2{
    position: relative;
    font-size: 25px;
    font-weight: 600;
    color:#fff;
     font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
       background: #4070f4;
     height: 80px;
     padding:25px;
     margin: 0px;

}
.wrapper h2::before{
    content:'';
    position: absolute;
    left:0;
    bottom: 0;
    height: 3px;
    width: 28px;
    border-radius: 12px;
    background: #4070f4;

}
.wrapper form{
    margin-top:25px;
     padding-left:34px;
     padding-right:34px ;
     padding-bottom:10px ;

}
.wrapper form .input-box{
    height: 52px;
    margin:18px 0;
    
}
form .input-box input{
    height: 100%;
    width:100%;
    outline: none;
    padding:0 15px;
    border:1.5px solid #C7BeBE;
    font-size: 17px;
    
    font-weight: 400;
    color:#333;
    border-bottom-width:2.5px ;
    border-radius: 6px;
    transition: all 0.3s ease;
}
.input-box input:focus,
.input-box input:valid{
    border-color: #4070f4;

}
.input-box.button input{
    color: #fff;
    letter-spacing: 1px;
    background: #4070f4;
    border: none;
    cursor:pointer;
     font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;

}
.input-box.button input:hover{
    background: #0e4bf1;
}
.eye{
    width:15px;
    position: absolute;
   
    transform: translate(-150%,90%);
    
}
@media (max-width:584px){
    div.content {
  margin: 10px 10px;
  
  
}
.bodyClass{
    margin: 0px;
    min-height: 30vh;

}
.wrapper{
    margin:0px;
}
.wrapper h2{
    padding:20px;
}

}
</style>