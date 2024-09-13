<template>
    <card-comp :product="product" id="productsview">
        <template #productSlot>
            <section>
                <!-- <a :href="" class="btn btn-primary" target="_blank"> View More </a> -->
                <h1> Product Info </h1>

                <div class="card mb-3" style="max-width: 1000px;">
                    <div class="row g-0">
                      <div class="col-md-4">
                        <img :src="product?.prodUrl" class="img-fluid rounded-start" alt="" id="hori">
                      </div>
                      <div class="col-md-8">
                        <div class="card-body" id="hei">
                          <h2 class="card-title"> {{ product?.prodName }} </h2>
                          <p class="card-text"> {{ product?.prodDescription }} </p>
                          <div class="sizes">
                              <form class="form">
                                  <div class="select-size">
                                      <h5> Frame sizes: </h5>
                                      <label for="sm">
                                          <input type="radio" name="size" id="sm">
                                          <span> SM </span>
                                      </label>
                                      <label for="m">
                                          <input type="radio" name="size" id="m">
                                          <span> MD </span>
                                      </label>
                                      <label for="lg">
                                          <input type="radio" name="size" id="lg">
                                          <span> LG </span>
                                      </label>
                                      <label for="xl">
                                          <input type="radio" name="size" id="xl">
                                          <span> XL </span>
                                      </label>
                                      <label for="xxl">
                                          <input type="radio" name="size" id="xxl">
                                          <span> XXL </span>
                                      </label>
                                  </div>
                              </form>
                          </div>
                  
                          <div class="colors">
                              <form class="form">
                                  <div class="select-color">
                                      <h5> Frame colours: </h5>
                                      <label for="red">
                                          <input type="radio" name="color" id="red">
                                          <span class="color-1"></span>
                                      </label>
                                      <label for="green">
                                          <input type="radio" name="color" id="green">
                                          <span class="color-2"></span>
                                      </label>
                                      <label for="blue">
                                          <input type="radio" name="color" id="blue">
                                          <span class="color-3"></span>
                                      </label>
                                      <label for="yellow">
                                          <input type="radio" name="color" id="yellow">
                                          <span class="color-4"></span>
                                      </label>
                                  </div>
                              </form>
                          </div>
                  
                          <div class="quantity">
                              <div class="select-quantity">
                                  <h5> Quantity: </h5>
                                  <input type="number" name="quantity" min="1" value="1">
                              </div>
                          </div>
                          
                          <button @click="getProduct" class="pur"> Purchase </button>

                          <p>
                            <router-link to="/cartView" class="gangy"> View Your Cart </router-link>
                        </p>
                        </div>
                    </div>
                </div>
                <button class="cart"> View Your Cart </button>
            </div>
            </section>
        </template>
    </card-comp>
</template>

<script>

import CardComp from '../components/CardComp.vue';

export default {

 components: {
     CardComp
 },
 
 methods: {
    getProduct() {
        this.$store.dispatch('getProduct', this.$route.params.id)
    }
 },
 computed: {
    product(){
        return this.$store.state.product
    }
 },
 mounted() {
    this.getProduct()
 }
}
</script>

<style>

h1 {
    text-align: center;
    font-family: "Rubik Glitch", system-ui;
    margin-bottom: 50px;
}

section {
    margin-bottom: 100px;
    align-content: center;
}

.card {
    width: 825px;
    margin: auto;
    background-color: #383838;
}

.card-body {
        background-color: #383838;
        color: white;
        text-align: center;
        /* font-family: "Rubik Glitch", system-ui; */
}

    #hori {
        width: 275px;
        height: 400px;
        border-radius: 3px;
    }

    #hei {
        place-content: center;
        width: 550px;
        height: 400px;
        border-radius: 3px;
    }

    .sizes {
        margin-top: 20px;
    }

    .select-size {
        display: flex;
        margin-bottom: 8px;
    }

    h5 {
        width: 200px;
        margin-right: 30px
    }

    label {
        display: flex;
        align-items: center;
    }

    .select-size label input {
        display: none;
    }

    span {
        line-height: 25px;
        display: inline-block;
        margin-right: 15px;
        cursor: pointer;
    }

    .select-size label input:checked + span {
        font-weight: 600;
        color: #383838;
        background-color: white;
        border-radius: 5rem;
        padding: 5px;
    }

    .colours {
        margin-top: 20px;
    }

    .select-color {
        display: flex;
        margin-bottom: 8px;
    }

    /* .select-color h5 {
        width: 70px;
        margin-right: 30px
    } */

    .select-color label {
        display: flex;
        align-items: center;
    }

    .select-color input {
        display: none;
    }

    .select-color span {
        display: inline-block;
        height: 20px;
        width: 20px;
        border-radius: 50%;
        margin-right: 15px;
        cursor: pointer;
    }

    .color-1 {
       background-color: red; 
    }
    .color-2 {
       background-color: green; 
    }
    .color-3 {
       background-color: blue; 
    }
    .color-4 {
       background-color: yellow; 
    }

    .select-color label input:checked + span {
        transform: scale(.7);
        box-shadow: 0 0 0 5px white;
    }

    .quantity {
        margin-bottom: 30px
    }

    .select-quantity {
        display: flex;
        align-items: center;
    }

    .select-quantity input {
        border: 0;
        outline: 0;
        padding: 2px 2px 2px 15px;
        border-radius: 12px;
        width: 100px;
    }

    .pur {
        margin-bottom: 20px;
    }

    .gangy {
        color: white;
        font-family: "Rubik Glitch", system-ui;
        text-decoration: none;
    }

 
    /* .cart {
        ;
    } */
</style>