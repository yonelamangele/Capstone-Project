<template>
    <h1> Our Products </h1>
    <card-comp>
        <template #productsSlot>
            <section>
                
                <div class="prod" v-for="product in $store.state.products" :key="product.prodID">
                    <div class="row row-cols-1 row-cols-md-2 g-4 card-proj" id="space">
                        <div class="col">
                            <div class="card">
                                <img :src="product.prodUrl" class="card-img-top" alt="">
                                <div class="card-body">
                                    <h2 class="card-title"> {{ product.prodName }} </h2>
                                    <!-- <hr> -->
                                    <p class="card-text"> R{{ product.prodAmount }} </p>
                                    <button>
                                        <router-link :to="{name:'singleProductView', params:{id:product.prodID}}" class="link-no-decoration" id="gang"> 
                                      View {{ product.prodName }} 
                                    </router-link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </template>
    </card-comp>
</template>

<script>
import CardComp from '../components/CardComp.vue'

export default {

    components: {
        CardComp
    },

    methods: {
        getProducts() {
            this.$store.dispatch('getProducts')
        }
    },
    mounted() {
        this.getProducts()
    }
}
</script>

<style scoped>
    h1 {
        text-align: center;
        font-family: "Rubik Glitch", system-ui;
    }

    .card-title {
        height: 50px;
        margin-bottom: 30px;
    }

    section  {
        display: grid;
        grid-template-columns: repeat(5,1fr);
        place-items: center;
        height: 1000px;
        margin-bottom: 60px;
    }
    img {
        height: 250px
    }

    .prod {
        height: 500px
    }

    #space {
        margin-top: 10px;
        height: 451.28;
    }

    .col {
    /* margin-top: 70px; */
        width: 242.66px;
        height: 326.61px
    }

    .card-body {
        background-color: #383838;
        color: white;
        text-align: center;
        font-family: "Rubik Glitch", system-ui;
        height: 210.8px;
    }

    #gang {
        color: #383838;
    }

    button {
        border-radius: 8px;
    }

    button:hover {
        background-color: #383838;
    }

    #gang:hover {
        color: white;
    }
</style>