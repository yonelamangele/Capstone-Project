import { createStore } from 'vuex'
import axios from 'axios'
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
/* eslint-disable */
import { useCookies } from 'vue-cookies'
import router from '@/router';


axios.defaults.withCredentials = true
axios.defaults.headers = $cookies.get('token')


// const apiURL = 'http://localhost:8080/users/'

export default createStore({
  state: {
    products: null,
    product: null
  },
  
  mutations: {
    setProducts(state,payload) {
      state.products = payload
    },
    setProduct(state,payload) {
      state.product = payload
    }
  },
  
  actions: {
    async getProducts({commit}) {
      let {data} = await axios.get('http://localhost:2006/products')
      console.log(data);
      commit('setProducts', data)
    },
    async getProduct({commit}, id) {
      let {data} = await axios.get(`http://localhost:2006/products/${id}`)
      console.log(data);
      commit('setProduct', data)
    },

    async addUser({commit}, info) {
      try {
        let { data } = await axios.post(`http://localhost:2006/users/signup`, info);
        if (data) {
          toast("Signed Up!", {
            theme: "auto",
            type: "default",
            position: "top-center",
            dangerouslyHTMLString: true
          });
        }
      } catch (error) {
        console.error(error);
        toast.error("Sign up failed. Please try again.", {
          position: "top-center"
        });
      }
    },

    async addToCart({commit}, fruit_id){
      let {data} = await axios.post('http://localhost:5003/fruit/cart', {id: fruit_id})
      console.log(data);
    },
    
    // async logInUser({commit}, info) {
    //   let {data} = await axios.post(`http://localhost:2006/users/login`, info)
    //   console.log(data);
    //   $cookies.set('token', data.token)
    //   if(data.message) {
    //     toast("Logged In!", {
    //       "theme": "auto",
    //       "type": "default",
    //       "position": "top-center",
    //       "dangerouslyHTMLString": true
    //     })
    //     await router.push('/')
    //     location.reload()
    //   }
    // },

    async loginUser({commit}, userEmailAdd, userPassword){
       
        let {data} = await axios.post(`http://localhost:2006/users/login`, userEmailAdd, userPassword)
        console.log(data);
        $cookies.set('token', data.token)
        
        if(data.message) {
          toast("Logged In!", {
            "theme": "auto",
            "type": "default",
            "position": "top-center",
            "dangerouslyHTMLString": true
          })
          await router.push('/')
          location.reload()
        }
      
    }
    
  },
  
  getters: {
  },
  
  modules: {
  }
})
