<template>
  <div class="sidebar">
  <router-link to="/home">My Profile</router-link>
  <router-link to="/editprofile"> Edit Profile</router-link>
  <router-link to="/feedback">Feedback's</router-link>
  <router-link to="/changepassword">Change Password</router-link>
  <router-link to="/deleteaccount">Delete Account</router-link>

 
 
<router-link to="/" v-on:click="LogoutUser">Logout</router-link>
</div>

<!-- Page content -->


</template>

<script>
export default {
  name:'SidebarMenu',
  methods:{
    LogoutUser:function(){
      localStorage.clear();
    }
  }
}
</script>

<style scoped>
  
.sidebar {
  margin: 0;
  padding: 0;
  width: 200px;
  background-color: #6A5ACD;
  position: fixed;
  height: 100vh;
  overflow: auto;
}

/* Sidebar links */
.sidebar a {
  display: block;
  color: white;
  padding: 20px;
  
  text-decoration: none;
}

/* Active/current link */
.sidebar a.active {
  background-color: #04AA6D;
  color: white;
}

/* Links on mouse-over */
.sidebar a:hover:not(.active) {
  background-color: #555;
  color: white;
}



/* On screens that are less than 700px wide, make the sidebar into a topbar */
@media screen and (max-width: 700px) {
  .sidebar {
    width: 100%;
    height: auto;
    position: relative;
  }
  .sidebar a {float: left;}
  div.content {margin-left: 0;}
}

/* On screens that are less than 400px, display the bar vertically, instead of horizontally */
@media screen and (max-width: 400px) {
  .sidebar a {
    text-align: center;
    float: none;
  }
}

</style>