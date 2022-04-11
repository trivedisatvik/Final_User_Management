<template>
<div>
    <SidebarMenu v-if="user"/>
<div class="content">
<div class="bodyClass" v-if="user">
    <div class="wrapper">
        <h2>Delete Account Permanently</h2>
        <h3>Please Enter Your Password To Continue...</h3>
        <div id="loginAlert" style="color:red;" class="inputBx " v-text="loginalertt"></div>
        
             
        <form action="" @submit.prevent="handleSubmit">
            <div class="input-box">
                <input type="password"  placeholder="Current Password" required v-model="oldpwd" id="password">
                <span class="eye">
                       <img src="../assets/eye-regular.svg" alt="" srcset=""  id="eye1" @click="toggle">
                       </span>
                
            </div>
            
            <div class="input-box button">
                <input type="submit"  value="Delete Account">

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
    name:'DeleteAccount',
     components: {
   SidebarMenu,
  
  },
  data(){
      return{
          oldpwd:"",
          user:null,
          loginalertt:"",
           state:false
          
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
          
            const response = await axios.post(`https://user-management-satvik.herokuapp.com/users/checkpwd/${localStorage.getItem('userId')}`,{
                oldpwd:this.oldpwd,
                
            });
           
            
            
            if(response.data.status==='failed'){

                this.loginalertt = response.data.message;
                

            }
            else{
                this.loginalertt = "";
              
               const nresponse = await axios.delete(`https://user-management-satvik.herokuapp.com/users/${localStorage.getItem('userId')}`)
               

               if(nresponse.data.status==='success'){
                   localStorage.clear();
                   this.$router.push('/');
               }

                
            }
            

        },
          toggle(){
             if(this.state){
                 document.getElementById("password").setAttribute("type","password");
                 this.state=false;
             }
             else{
                 document.getElementById("password").setAttribute("type","text");
                 this.state=true;
             }

         },

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
.wrapper h2{
   position: relative;
    font-size: 25px;
    font-weight: 600;
    color:#fff;
     font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
       background: #8968CD;
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
.eye{
    width:15px;
    position: absolute;
   
    transform: translate(-150%,90%);
    
}
.wrapper h3{
    margin-top:10px ;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    padding-right: 34px;
    padding-left: 34px;
   
}
.wrapper form{
    margin-top:25px ;
    padding-right: 34px;
    padding-left: 34px;
    padding-bottom: 34px;

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
    border-color: #5D478B;

}
.input-box.button input{
    color: #fff;
    letter-spacing: 1px;
    background: #8968CD;
    border: none;
    cursor:pointer;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;

}
.input-box.button input:hover{
    background: #5D478B;
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