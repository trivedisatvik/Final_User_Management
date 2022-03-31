<template>
  <div class="home">
    <SidebarMenu v-if="user"/>
   
  <div class="content" v-if="user">
    <div class="bodyClass">
    
    <div class="wrapper">

    <div class="left">
       
    
      <img src="../assets/FyndLogo.png" alt="user" srcset="" width="150">
      <h3>Fynd Academy</h3>
      <p>support@fynd.com</p>



    </div>
    <div class="right">
      <div class="info">
        <h3>My Profile</h3>
        <div class="info_data">
          <div class="data">
            <h4>First Name</h4>
            <p>{{user.first_name}}</p>
          </div>
          <div class="data">
            <h4>Last Name</h4>
            <p>{{user.last_name}}</p>

          </div>

        
        </div>
        <div class="info_data">
          <div class="data">
            <h4>Email</h4>
            <p>{{user.email}}</p>
          </div>
          <div class="data">
            <h4>Date Of Birth</h4>
            <p>{{user.DOB}}</p>

          </div>

        
        </div>
        <div class="info_data">
          <div class="data">
            <h4>Gender</h4>
            <p>{{user.Gender}}</p>
          </div>
          <div class="data">
            <h4>Nationality</h4>
            <p>{{user.Nationality}}</p>

          </div>

        
        </div>
      </div>
      <div class="contact-info">
        <h3>Contact Info</h3>
        <div class="contact_data">
          <div class="data">
            <h4>Mobile No</h4>
            <p>{{user.phoneNo}}</p>
          </div>
          <div class="data">
            <h4>Address</h4>
            <p>{{user.Address}}</p>

          </div>
          
        
        </div>
      </div>
      
    </div>
     
   </div>

  </div>
  </div>
 
    
    
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
import SidebarMenu from "@/views/Sidebar-menu.vue"



export default {
  
  name: 'HomeView',
  components: {
   SidebarMenu,
   
  
  },
  data(){
    return {
      user:null,
      userr:null
    }
  },
 async created(){
    const response = await axios.get(`https://user-management-satvik.herokuapp.com/users/${localStorage.getItem('userId')}`,{
      headers:{
        Authorization:'Bearer ' + localStorage.getItem('token')
      }
    })
    this.user = response.data.user[0];
   
    


  }
}
</script>
<style scoped>
div.content {
  margin-left: 200px;
   background: #f3f3f3;
  height: 740px;
}
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
  list-style: none;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
.bodyClass{
  background: #f3f3f3;

}
.wrapper{
  position: absolute;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
  width:750px;
 
  display: flex;
  box-shadow: 0 1px 20px 0 rgba(69,90,100,0.08);
}
.wrapper .left{
  width:35%;
  background: linear-gradient(to right,#01a9ac,#662d91);
  padding:30px 25px;
  border-top-left-radius: 5px;
  border-bottom-left-radius:5px ;
  text-align: center;
  color: #fff;

}
.wrapper .left img{
  margin-bottom: 15px;
  border-radius: 50px;
}
.wrapper .left h3{
  margin-bottom: 10px;
  font-size: 25px;
}
.wrapper .left p{
  font-size:15px;
}
.wrapper .right{
  width:65%;
  background: #fff;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  padding:30px 25px;
}
.wrapper .right .info,
.wrapper .right .contact-info
{
margin-bottom:25px;
}
.wrapper .right .info h3,
.wrapper .right .contact-info h3{
  margin-bottom:15px ;
  padding-bottom: 5px;
  border-bottom: 1px solid #e0e0e0;
  color:#353c4e;
  text-transform: uppercase;
  letter-spacing: 4px;
  font-size: 25px;
}
.wrapper .right .info_data,
.wrapper .right .contact_data{
  display: flex;
  justify-content: space-between;
}
.wrapper .right .info_data .data,
.wrapper .right .contact_data .data{
  width:70%;
}
.wrapper .right .info_data .data h4,
.wrapper .right .contact_data .data h4{
  color: #353c4e;
  margin-bottom: 5px;
  font-size:20px;
  

}
.wrapper .right .info_data .data p,
.wrapper .right .contact_data .data p{
  font-size: 17px;
  color: #919aa3;
  margin-bottom: 10px;
  font-weight: 600;


}
@media (max-width:584px){
  .wrapper{
    width:500px;
    flex-direction: column;
    margin-top:300px;
    
    align-items: center;
  }
  .wrapper .right .info_data,
.wrapper .right .contact_data{
  flex-direction: column;

  
}
.wrapper .left{
  width:100vw;
}

}
</style>
