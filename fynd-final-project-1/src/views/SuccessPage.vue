<template>
<div class="bodyClass">
    <div class="popup center">
        <div class="icon">
            <img src="../assets/icons8-check-mark-button-96.png" alt="" srcset="">
        </div>
        <div class="title">
            Email Verified Successfully!!
        </div>
        <div class="description">
            Congratulations!!! Now you are all set to Login,
            Click Here to Login!!!
        </div>
        <div class="login-btn">
            <button id="login-popup-btn" v-on:click="SubmitHandler()">
                Log In
            </button>
        </div>
    </div>
    </div>

</template>
<script>
export default {
    name:'SuccessPage',
    methods:{
    SubmitHandler(){
        this.$router.push('/')
    }
    }
}
</script>
<style scoped>
.bodyClass{
    background: #ddd;
    font-family: "Raleway";


}
.center{
    position: absolute;
    top: 50%;
    left:50%;
    transform: translate(-50%,-50%);
}
.popup{
    width:350px;
    height:330px;
    padding:30px 20px;
    background: #f5f5f5;
    border-radius: 10px;
    box-sizing: border-box;
    z-index: 2;
    text-align: center;

}

.popup .title{
    margin:5px 0px;
    font-size: 30px;
    font-weight: 600;
}
.popup .description{
    color:#222;
    font-size: 15px;
    padding: 5px;



}
.popup .login-btn{
    margin-top:15px;

}
.popup .login-btn button{
    padding:10px 20px;
    background: #111;
    color:#f5f5f5;
    border:2px solid #111;
    font-size: 16px;
    font-weight: 600;
    outline: none;
    border-radius: 10px;
    transition: all 300ms ease-in-out;
    cursor: pointer;
}
.popup .login-btn button:hover{
    color:#111;
    background: #f5f5f5;
}
</style>