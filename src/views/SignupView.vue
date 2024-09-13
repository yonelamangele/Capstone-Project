<template>
    <h1> Sign Up </h1>
    <div class="register">
        <div class="space">
            <input type="text" v-model="userFirstName" placeholder="Enter Name" />
            <input type="text" v-model="userEmailAdd" placeholder="Enter Email" />
            <input type="password" v-model="userPassword" placeholder="Enter Password" /> 
            <div class="signup-btn">
                <button @click="addUser()"> Sign Up </button>
            </div>
            <p>
                <router-link to="/loginView" class="gangy"> Login </router-link>
            </p>
        </div>
    </div>
</template>

<script>

import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css"; 

export default {
    name: "signupView",
    data() {
        return {
            userFirstName: '',
            userEmailAdd: '',
            userPassword: ''
        }
    },
    methods: {
        addUser() {
            const { userFirstName, userEmailAdd, userPassword } = this.$data;
    if (!userFirstName || !userEmailAdd || !userPassword) {
      toast.error("All fields are required!", {
        position: "top-center"
      });
      return;
    }
    this.$store.dispatch('addUser', { userFirstName, userEmailAdd, userPassword });
        }
    },
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
    .register {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .register input {
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

    .register .signup-btn {
        display: flex;
        justify-content: center;
    }

    .register button {
        font-family: "Rubik Glitch", system-ui;
        width: 200px;
        height: 40px;
        border: 1px solid white;
        border-radius: 30px;
        background-color: #383838;
        color: white;
        cursor: pointer;
    }

    .register button:hover {
        background-color: white;
        color: #383838;
    }

    .register p {
        margin-top: 10px;
        text-align: center;
    }

    .gangy {
        color: white;
        font-family: "Rubik Glitch", system-ui;
    }
</style>