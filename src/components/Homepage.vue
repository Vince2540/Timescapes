<script>

  export default {
    data() {
      return {
          image: '../images/men-shoes.jpg',
          url: 'https://www.vuejs.org/',
          stockDetails : [
              {
                  itemNumber: 1,
                  itemName : "Phones",
                  itemPrice : 5,
                  itemQuantity : 30,
                  itemImage: '../images/rahul-chakraborty-xsGxhtAsfSA-unsplash.jpg.jpg'
              },
              {
                  itemNumber: 27466,
                  itemName : "Laptops",
                  itemPrice : 10,
                  itemQuantity : 4,
                  itemImage: '../images/kari-shea-1SAnrIxw5OY-unsplash.jpg'
              }
          ],
        }
    },

    methods() {
      
    },

    computed(){
      
    }
  }
</script>

<template>

  <v-card
    class="mx-auto"
    width="1000"
  >
    <v-carousel>
        <v-carousel-item
            src="../images/c-d-x-PDX_a_82obo-unsplash.jpg"
            cover
        ></v-carousel-item>

        <v-carousel-item
          src="../images/daniel-korpai-hbTKIbuMmBI-unsplash.jpg"
          cover
        ></v-carousel-item>

        <v-carousel-item
          src="../images/nayris-aquino-IUoeSXRyFEQ-unsplash.jpg"
          cover
        ></v-carousel-item>
      </v-carousel>
  </v-card>
  <v-spacer></v-spacer>
  
  <v-card align="center">
    <v-card-item>
      <v-card-title>Your number one suplier in all things electronic</v-card-title>
      <v-card-subtitle> New Jersey's  number 1 store for catering to all your software needs! </v-card-subtitle>
      </v-card-item>
      <v-card-text>
        TimeScapes is your go-to app for tracking and managing your tasks with ease. Stay on top of your to-do list, monitor your progress, and boost your productivity. With TimeScapes, you'll effortlessly keep track of every task you've accomplished, helping you make the most of your time and achieve your goals efficiently. Start transforming your time management today!
    </v-card-text>
  </v-card>

      <v-divider></v-divider>
      <v-divider></v-divider>
      <v-divider></v-divider>
  <h3 class="text-center">Customer Reviews</h3>
  <v-divider></v-divider>

  
    <v-col cols="12" md="10">
      <v-card align="centre"
        subtitle="Jay Garrrick"
        text="Great delivery time and i really liked their customer service!"
        title="Great services"
      ></v-card>
    </v-col>

    <v-col cols="12" md="10">
      <v-card>
        <template v-slot:title>
          I Recieved my order within less than 1 day .
        </template>
        <template v-slot:subtitle>
          Joy Stacie
        </template>
        <template v-slot:text>
          I Will be ordering again.
        </template>
      </v-card>
    </v-col>
    
    <v-col cols="12" md="10">
      <v-card>
        <v-card-item>
          <v-card-title>Wide Range of Products</v-card-title>
          <v-card-subtitle>Ezra Kamau</v-card-subtitle>
        </v-card-item>
        <v-card-text>
          I Love the variety that they offer as it really gives you a chance to gauge which product is best.
        </v-card-text>
      </v-card>
    </v-col>

</template>