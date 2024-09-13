<template>
    <h1> Login </h1>
    <div class="signup">
        <div class="space">
            <input type="text" v-model="userEmailAdd" placeholder="Enter Email" />
            <input type="password" v-model="userPassword" placeholder="Enter Password" /> 
            <div class="signup-btn">
                <button @click="loginUser()"> Login </button>
            </div>
            <p>
                    <router-link to="/signupView" class="gangy"> Sign Up </router-link>
            </p>
        </div>
    </div>
</template>

<script>

export default {
    name: "loginView",
    data() {
        return {
            userEmailAdd: '',
            userPassword: ''
        }
    },
    methods: {
        loginUser() {
            this.$store.dispatch('loginUser', { userEmailAdd:this.userEmailAdd, userPassword:this.userPassword})
        }
    }
}
</script>

<style scoped>

h1 {
    text-align: center;
    font-family: "Rubik Glitch", system-ui;
}

.space {
    margin-top: 22px;
    padding: 2em;
    background-color: #383838;
    border-radius: 8ch;
    width: 30%;
}

    .signup {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .signup input {
        font-family: "Rubik Glitch", system-ui;
        width: 200px;
        height: 40px;
        padding-left: 20px;
        display: block;
        margin-bottom: 30px;
        margin-right: auto;
        margin-left: auto;
        /* border: 1px solid lime; */
        border-radius: 8px;
    }

    .signup .signup-btn {
        display: flex;
        justify-content: center;
    }

    .signup button {
        font-family: "Rubik Glitch", system-ui;
        width: 200px;
        height: 40px;
        border: 1px solid white;
        border-radius: 30px;
        background-color: #383838;
        color: white;
        cursor: pointer;
    }

    .signup button:hover {
        background-color: white;
        color: #383838;
    }

    .signup p {
        margin-top: 10px;
        text-align: center;
    }

    .gangy {
        color: white;
        font-family: "Rubik Glitch", system-ui;
    }
</style>
































































<!-- <template>
    <div class="container" id="container">
        <div class="sign-up">
            <form>
                <h1> Create Account </h1>
                <div class="icons">
                    <a href="#" class="icon"><i class="fa-brands fa-facebook"></i></a>
                    <a href="#" class="icon"><i class="fa-brands fa-instagram"></i></a>
                    <a href="#" class="icon"><i class="fa-brands fa-google"></i></a>
                    <a href="#" class="icon"><i class="fa-brands fa-github"></i></a>
                </div>
                <span> or use email for registration </span>
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button> Sign Up </button>
            </form>
        </div>          
        <div class="sign-in">
            <form>
                <h1> Sign In </h1>
                <div class="icons">
                    <a href="#" class="icon"><i class="fa-brands fa-facebook"></i></a>
                    <a href="#" class="icon"><i class="fa-brands fa-instagram"></i></a>
                    <a href="#" class="icon"><i class="fa-brands fa-google"></i></a>
                    <a href="#" class="icon"><i class="fa-brands fa-github"></i></a>
                </div>
                <span> or use email password </span>
                <input type="text" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <a href="#"> forgot password </a>
                <button> Sign In </button>
            </form>
        </div>
        <div class="toogle-container">
            <div class="toogle">
                <div class="toogle-panel toogle-left">
                    <h1> Welcome User! </h1>
                    <p> If you already have an account </p>
                    <button class="hidden" id="login" > Sign In </button>
                </div>
                <div class="toogle-panel toogle-right">
                    <h1> Hello, User! </h1>
                    <p> If you don't have an account </p>
                    <button class="hidden" id="signup"> Sign Up </button>
                </div>
            </div>
        </div>          
    </div>
</template>

<script>
export default {
  name: 'loginView',
  mounted() {
    const container = document.getElementById('container');
    const registerbtn = document.getElementById('register');
    const loginbtn = document.getElementById('login');

    if (container && registerbtn && loginbtn) {
        registerbtn.addEventListener('click', () => {
        container.classList.add('active');
      });

      loginbtn.addEventListener('click', () => {
        container.classList.remove('active');
      });
    }
  }
};
</script>

<style scoped>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        height: 100vh;
    }

    .container {
        font-family: "Rubik Glitch", system-ui;
        background-color: white;
        color: #383838;
        border-radius: 150px;
        box-shadow: 0 5px 15px red;
        position: relative;
        overflow: hidden;
        width: 768px;
        max-width: 100%;
        min-height: 480px
    }

    .container p {
        font-size: 14px;
        line-height: 20px;
        letter-spacing: 0.3px;
        margin: 20px 0;
    }

    .container span {
        font-size: 12px;
    }

    .container a {
        color: #383838;
        font-size: 13px;
        text-decoration: none;
        margin: 15px 0 10px;
    }

    .container button {
        background-color: #383838;
        color: white;
        padding: 10px 45px;
        border: 1px solid transparent;
        border-radius: 8px;
        font-weight: 600;
        letter-spacing: 0.5px;
        text-transform: uppercase;
        margin-top: 10px;
        cursor: pointer;
    }

    .container button.hidden {
        background-color: transparent;
        border-color: white;
    }

    .container form {
        background-color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 0 40px;
        height: 100%;
    }

    .container input {
        background-color: #eeeeee;
        border: none;
        margin: 8px 0;
        padding: 10px 15px;
        font-size: 13px;
        border-radius: 8px;
        width: 80%;
        outline: none;
    }

    .sign-up, .sign-in {
        position: absolute;
        top: 0;
        height: 100%;
        transition: all 0.6s ease-in-out;
    }

    .sign-in {
        left: 0;
        width: 50%;
        z-index: 2
    }

    .container.active .sign-in {
        transform: translateX(100%);
    }

    .sign-up {
        left: 0;
        width: 50%;
        z-index: 1;
        opacity: 0;
    }

    .container.active .sign-up {
        transform: translateX(100%);
        opacity: 1;
        z-index: 5;
        animation: move 0.6s;
    }

    @keyframes move {
        0%, 49.99% {
            opacity: 0;
            z-index: 1;
        } 
        50%, 100% {
            opacity: 1;
            z-index: 5;
        } 
    }

    .icons {
        margin: 20px 0;
    }

    .icons a {
        border: 1px solid #383838;
        border-radius: 20%;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        margin: 0 3px;
        width: 40px;
        height: 40px;
    }

    .toogle-container {
        position: absolute;
        top: 0;
        left: 50%;
        width: 50%;
        height: 100%;
        overflow: hidden;
        border-radius: 150px;
        z-index: 1000;
        transition: all 0.6s ease-in-out;
    }

    .container.active .toogle-container {
        transform: rotateX(-100%);
        border-radius: 150px;
    }

    .toogle {
        background-color: #383838;
        height: 100%;
        color: white;
        position: relative;
        left: -100%;
        width: 200%;
        transform: translateX(0);
        transition: all 0.6s ease-in-out;
    }

    .container.active .toogle {
        transform:rotateX(50%)
    }

    .toogle-panel {
        position: absolute;
        width: 50%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 0 30px;
        text-align: center;
        top: 0;
        transform: translateX(0);
        transition: all 0.6s ease-in-out;
    }

    .toogle-left {
        transform: translateX(-200%);
    }

    .container.active .toogle-left {
        transform: translateX(0);
    }

    .toogle-right {
        right: 0;
        transform: translateX(0);
    }

    .container.active .toogle-right {
        transform: translateX(200%);
    }
</style> -->