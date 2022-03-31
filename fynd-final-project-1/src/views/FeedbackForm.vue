<template>
<SidebarMenu v-if="user"/>
<div class="content">
<div class="bodyClasss" v-if="user">
    <div class="container">
        <div class="content">
            <div class="left-side">
                <div class="address details">
                  <img src="../assets/AdD.svg" alt="" srcset="" width="30px">
                        
                        <div class="text-one">Shopsense Retail Technologies Pvt. Ltd.,</div>
                        <div class="text-one">1st Floor, Wework Vijay Diamond,</div>
                        <div class="text-one">Kondivita, Andheri East,</div>
                        <div class="text-one">Mumbai, Maharashtra 400069</div>

                   
                </div>
            <div class="phone details">
                     <img src="../assets/phone-solid.svg" alt="" srcset="" width="30px">
                        
                        <div class="text-one">+91 - 9876543210</div>
                        <div class="text-one">+91 - 9988776655</div>

                       
                        
                    
                </div>
                <div class="email details">
                    <img src="../assets/envelope-solid.svg" alt="" srcset="" width="30px">     
                    
                       
                        <div class="text-one">support@fynd.academy</div>
                   
                </div>
            </div>
            <div class="right-side">
                <div class="topic-text">Send us a message</div>
                <div id="regAlertt" style="color:green;margin-bottom:10px;"  v-text="alerttSuccess"></div>
                <p>Got a question Or having any issues? Do not hesitate to contact us directly. We will respond to you as soon as possible </p>


           
            <form action="" @submit.prevent="handleSubmit">
                <div class="input-box">
                    <input type="text" placeholder="Enter your name" v-model="userName">
                </div>
                <div class="input-box">
                    <input type="email" placeholder="Enter your email" v-model="userEmail">
                </div>
                <div class="input-box message-box">
                   <textarea v-model="userMessage"></textarea>
                </div>
                <div class="button">
                    <input type="submit" value="Send Response">
                </div>
            </form>
             </div>

            </div>
        </div>
    </div>
    </div>
</template>
<script>
import axios from 'axios'
import SidebarMenu from "@/views/Sidebar-menu.vue"
export default {
    name:'FeedbackForm',
     components: {
   SidebarMenu,
  
  },
    data(){
        return{
            userEmail:"",
            userName:"",
            userMessage:"",
            user:null,
            alerttSuccess:""
        }
    },
    async created(){
    const response = await axios.get(`https://user-management-satvik.herokuapp.com/users/${localStorage.getItem('userId')}`,{
      headers:{
        Authorization:'Bearer ' + localStorage.getItem('token')
      }
    })
    this.user=response.data
    

    },
    methods:{
        async handleSubmit(){
            const response = await axios.post(`https://user-management-satvik.herokuapp.com/users/feedback/${localStorage.getItem('userId')}`,{
                userName:this.userName,
                userEmail:this.userEmail,
                userMessage:this.userMessage,

            });
           if(response.data.status==='success' ){
               
                this.alerttSuccess = response.data.message ;
                
                }
            console.log(response);
          
        }


    }

}
</script>
<style scoped>
div.content {
  margin-left: 120px;
  
  
  
}

*{
    margin:0;
    padding: 0;
    box-sizing: border-box;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
.bodyClasss{
    min-height: 100vh;
    width:100%;
    background:#f3f3f3;
    display:flex;
    align-items: center;
    justify-content: center;
}
.container{
    width:80%;
    background: #fff;
    border-radius: 6px;
    padding: 30px 60px 40px 0px;
    
    box-shadow: 0 5px 10px rgba(0,0,0,0.2);
}
#regAlertt{
font-size: 20px;
font-weight: 600;
}
.container .content{
    display: flex;
    align-items: center;
    
    justify-content: space-between;
}
.container .content .left-side{
    width : 25%;
    height : 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top:15px ;
    

}
.content .left-side .details{
    margin:14px;
    text-align: center;
}
.content .left-side .details i{
    font-size:30px;
    color:#3e2093;
    margin-bottom: 10px;
}
.content .left-side ::before{
    content: '';
    position: absolute;
    height: 70%;
    width: 2px;
    right:-15px;
    top:50%;
    transform: translateY(-50%);
    background:#afafb6 ;
}
.content .left-side .details .topic{
    font-size: 18px;
    font-weight: 500;
}
.content .left-side .details .text-one,
.content .left-side .details .text-two{
    font-size:14px;
    color:#afafb6;
    margin-top:5px ;


}

.container .content .right-side{
    width:75%;
    margin-left: 75px;


}
.content .right-side .topic-text{
    font-size: 28px;
    font-weight: 600;
    color:#3e2093;
    margin-bottom:13px ;

}
.right-side .input-box{
    height:50px;
    width:100%;
    margin: 18px 0;

}
.right-side .input-box input,
.right-side .input-box textarea{
    height:100%;
    width:100%;
   
    font-size: 16px;
    

    background:#F0F1F8 ;
    border-radius: 6px;
    padding: 0 15px;
     resize: none;

}

.right-side .message-box{
    min-height: 110px;
    margin-top: 6px;
   

}
.right-side .button {
    display:inline-block;

    margin-top:6px;
}

.right-side .button input[type="submit"]{
    color:#fff;
    font-size: 18px;
    outline: none;
    border:none;
    padding: 8px 16px;
    border-radius: 6px;

    background: #3e2093;
    cursor: pointer;
    transition: all 0.3s ease;

}
.button input[type="submit"]:hover{
background: #5029bc;


}
@media (max-width:950px){
   .container{
    width:90%;
   
  
    padding: 30px 35px 40px 35px;
   
} 
}
@media (max-width:820px){
   .container{
   margin: 40px 0;
   height: 100%;

   
}
.container .content{
    flex-direction: column-reverse;
    align-items: center;
} 
.container .content .left-side{
    width:100%;
    flex-direction: row;
    margin-top: 40px;
    justify-content: center;
     align-items: center;
    flex-wrap: wrap;

}
.container .content .left-side::before{
    display: none;
}
.container .content .right-side{
    width:100%;
    margin-left: 0;
}
}

</style>