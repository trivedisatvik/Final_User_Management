<template>
<SidebarMenu v-if="user"/>
<div class="bodyClass content" v-if="user">
    <div class="container">
        <div class="title">Edit Profile</div>
        <form action="" @submit.prevent="handleSubmit">
            <div class="user-details">
                <div class="input-box">
                    <span class="details">First Name</span>
                    <input type="text" placeholder="First Name"  v-model="first_name" id="fname">
                </div>
                <div class="input-box">
                    <span class="details">Last Name</span>
                    <input type="text" placeholder="Last Name" v-model="last_name">
                </div>
                <div class="input-box">
                    <span class="details">Phone Number</span>
                    <input type="text" placeholder="Phone Number" v-model="phoneNo" >
                </div>
                <div class="input-box">
                    <span class="details">Address</span>
                    <input type="text" placeholder="Address" v-model="Address" >
                </div>
                <div class="input-box">
                    <span class="details">Date Of Birth</span>
                    <input type="text" placeholder="DD/MM/YYYY" v-model="DOB">
                </div>
                <div class="input-box">
                    <span class="details">Nationality</span>
                    <input type="text" placeholder="Nationality" v-model="Nationality">
                </div>
            </div>
            <div class="gender-details">
                <input type="radio" name="gender" id="dot-1" value="Male" v-model="Gender">
                <input type="radio" name="gender" id="dot-2" value="Female" v-model="Gender">
                <input type="radio" name="gender" id="dot-3" value="Prefer Not To Say" v-model="Gender">
                <span class="gender-title">Gender</span>
                <div class="category">
                    <label for="dot-1">
                        <span class="dot one"></span>
                        <span class="gender">Male</span>

                    </label>
                    <label for="dot-2">
                        <span class="dot two"></span>
                        <span class="gender">Female</span>

                    </label>
                    <label for="dot-3">
                        <span class="dot three"></span>
                        <span class="gender">Prefer Not to say</span>

                    </label>
                </div>
            </div>
            <div class="button">
                <input type="submit" value="Update Profile">
            </div>
        </form>

    </div>
    </div>
    
</template>


<script>
import axios from 'axios'
import SidebarMenu from "@/views/Sidebar-menu.vue"
export default {
    name:'EditProfile',
    components: {
   SidebarMenu,
  
  },
    data(){
        return{
            first_name:"",
            last_name:"",
            phoneNo:"",
            Nationality:"",
            Address:"",
            DOB:"",
            Gender:"",
            user:null,
            userr:null,
        }

    },
    async created(){
    const response = await axios.get(`https://user-management-satvik.herokuapp.com/users/${localStorage.getItem('userId')}`,{
      headers:{
        Authorization:'Bearer ' + localStorage.getItem('token')
      }
    })
    this.user = response.data.user[0];
    
    this.first_name = this.user.first_name;
    this.last_name=this.user.last_name;
    this.phoneNo = this.user.phoneNo;
    this.Nationality = this.user.Nationality;
    this.Address=this.user.Address;
    this.DOB = this.user.DOB;
    this.Gender = this.user.Gender;
    

    


  },
    
    methods:{
        async handleSubmit(){
            const response = await axios.patch(`https://user-management-satvik.herokuapp.com/users/${localStorage.getItem('userId')}`,{
                 first_name:this.first_name,
            last_name:this.last_name,
            phoneNo:this.phoneNo,
            Nationality:this.Nationality,
            Address:this.Address,
            DOB:this.DOB,
            Gender:this.Gender,

            });
            console.log(response);
           this.$router.push('/home');
        }
    },
    
}
</script>
<style scoped>
div.content {
  margin-left: 200px;
  
  height: 740px;
}
*{
    margin:0;
    padding: 0;
    box-sizing: border-box;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
.bodyClass{
    display:flex;
    height:100vh;
    justify-content: center;
    align-items: center;
    padding: 10px;
    background: #f3f3f3;
    margin:0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins',sans-serif;
   
}
.container{
    max-width: 700px;
    width:100%;
    background: #fff;
    padding: 25px 30px;
    border-radius: 5px;
    box-shadow: 0 5px 10px rgba(0,0,0,0.2);

}
.container .title{
    margin-bottom:15px ;
  padding-bottom: 5px;
  border-bottom: 1px solid #e0e0e0;
  color:#353c4e;
  text-transform: uppercase;
  letter-spacing: 4px;
  font-size: 25px;
    
}
.container .title::before{
    content:'';
    position : absolute;
    height: 3px;
    
    width:50px;
    bottom: 595px;
    
    background: linear-gradient(135deg,#71b7e6,#9b59b6);
}
.container form .user-details{
    display :flex;
    flex-wrap:wrap;
    justify-content: space-between;
    margin :20px 0 12px 0;

}
form .user-details .input-box{
    margin-bottom: 15px;
    width:calc(100%/2 - 20px);

}
.user-details .input-box .details{
    display:block;
   font-weight: 500;
   margin-bottom: 5px;
}
.user-details .input-box input{
  height:45px; 
  width:100%;
  outline: none;
  border-radius: 5px;
  border: 1px solid #ccc;
  padding-left: 15px;
  font-size: 16px;

}
.user-details .input-box input:focus,
.user-details .input-box input:valid{
    border-color:#9b59b6;

}
form .gender-details .gender-title{
    font-size: 20px;
    font-weight: 500;
}
form .gender-details .category{
    display:flex;
    width:80%;
    margin:14px 0;
    justify-content: space-between;
}
form .gender-details .category label{
    display: flex;
    align-items: center;

}
form .gender-details .category .dot{
    height:15px;
    width:18px;
    background: #d9d9d9;
    border-radius: 50%;
    margin-right:10px;
    border:5px solid transparent;
    transition: all 0.3s ease;

}
#dot-1:checked ~ .category label .one,
#dot-2:checked ~ .category label .two,
#dot-3:checked ~ .category label .three{
    border-color: #d9d9d9;
    background: #9b59b6;

}
form input[type="radio"]{
    display:none;

}
form .button{
    height:45px;
    margin:45px 0;
    
}
form .button input{
    height :100%;
    width:100%;
    outline : none;
    color:#fff;
    border: none;
    font-size: 18x;
    font-weight: 800;
    border-radius: 5px;
    letter-spacing: 1px;
    cursor:pointer;

    
    background: linear-gradient(135deg,#71b7e6,#9b59b6);



}
form .button input:hover{
     background: linear-gradient(135deg,#9b59b6,#71b7e6);

}
@media (max-width:584px){
    div.content {
  margin-left: 20px;
  
  height: 740px;
}
    
    .bodyClass{
       margin-top: 100px;
       
       
    }
    .container{
    max-width: 900px;
    width:200%;
    background: #fff;
    padding: 25px 30px;
    border-radius: 5px;
    box-shadow: 0 5px 10px rgba(0,0,0,0.2);
   

}
    form .user-details .input-box{
        margin-bottom: 15px;
        width:100%;
        
        
    }
    form .gender-details .category{
        width:100%;
    }
    .conatiner form .user-details{
        max-height: 300px;
        overflow-y:scroll;
    }
    
    .user-details::-webkit-scrollbar{
        width: 0;
    }
    form .gender-details .category{
        flex-direction: column;
        
    }
}


</style>