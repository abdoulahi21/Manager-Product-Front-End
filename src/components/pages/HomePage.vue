<template>
  <section class="hero-slider">
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
          aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
          aria-label="Slide 2"></button>
      </div>
      <div class="carousel-inner">
        <!-- First Slide -->
        <div class="carousel-item active">
          <img src="/public/images/new-balance-m1000-hb.jpg" class="d-block w-100" alt="First slide">
          <div class="carousel-caption d-none d-md-block">
            <div class="text-inner">
              <div class="row">
                <div class="col-lg-7 col-12">
                  <div class="hero-text">
                    <h1><span>UP TO 50% OFF </span>Shirt For Man</h1>
                    <div class="button">
                      <a href="#" class="btn btn-primary">Achetez Maintenant!</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Second Slide -->
        <div class="carousel-item">
          <img src="/public/images/asics-emmi-x-gel-nyc-white-huddle-yellow-hb.jpg" class="d-block w-100"
            alt="Second slide">
          <div class="carousel-caption d-none d-md-block">
            <div class="text-inner">
              <div class="row">
                <div class="col-lg-7 col-12">
                  <div class="hero-text">
                    <p>Découvrez notre nouvelle collection <br> d'accessoires élégants et modernes.</p>
                    <div class="button">
                      <a href="#" class="btn btn-primary">Achetez Maintenant!</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </section>
  <!--/ End Slider Area -->



  <!-- Start Product Area -->
  <div class="product-area section">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="section-title">
            <h2>Trending Item</h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="product-info">
            <div class="nav-main">
              <!-- Tab Nav -->
              <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item"><a class="nav-link active" data-toggle="tab" href="#man" role="tab">Man</a></li>
                <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#women" role="tab">Woman</a></li>
                <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#kids" role="tab">Kids</a></li>
                <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#accessories"
                    role="tab">Accessories</a></li>
                <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#essential" role="tab">Essential</a>
                </li>
                <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#prices" role="tab">Prices</a></li>
              </ul>
              <!--/ End Tab Nav -->
            </div>
            <div class="tab-content" id="myTabContent">
              <!-- Start Single Tab -->
              <div class="tab-pane fade show active" id="man" role="tabpanel">
                <div class="tab-single">
                  <div class="row">
                    <div class="col-xl-3 col-lg-4 col-md-4 col-12" v-for="product in products" :key="product.id">
                      <div class="single-product">
                        <div class="product-img">
                          <a href="product-details.html">
                            <img class="default-img" :src="getImageUrl(product.photo)" alt="#" style="width: 200px;">
                          </a>
                          <div class="button-head">
                            <div class="product-action">
                              <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i
                                  class=" ti-eye"></i><span>Quick Shop</span></a>
                              <a title="Wishlist" href="#"><i class=" ti-heart "></i><span>Add to
                                  Wishlist</span></a>
                              <a title="Compare" href="#"><i class="ti-bar-chart-alt"></i><span>Add to
                                  Compare</span></a>
                            </div>
                            <div class="product-action-2">
                              <button title="Add to cart" class="btn " @click.prevent="addToCart(product.id)">Add
                                to cart</button>
                            </div>
                          </div>
                        </div>
                        <div class="product-content">
                          <h3><a href="product-details.html">{{ product.nom }}</a></h3>
                          <div class="product-price">
                            <span>{{ product.prix }} Fcfa</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!--/ End Single Tab -->


              <!--/ End Single Tab -->

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End Product Area -->
</template>
<script>
import axios from 'axios';
import Swal from 'sweetalert2';

export default {
  data() {
    return {
      products: [],
      cart: []
    };
  },
  created() {
    this.fetchProducts();
    this.fetchCart();
  },
  methods: {
    getImageUrl(photo) {
      return `http://127.0.0.1:8000/storage/images/${photo}`;
    },
    async fetchProducts() {
      try {
        let response = await axios.get("http://127.0.0.1:8000/api/produit");
        this.products = response.data;
        console.log("cat:", this.products);
      } catch (error) {
        console.error(error);
      }
    },
    async addToCart(productId) {

      let url = "http://127.0.0.1:8000/api/cart/" + productId;

      try {

        let response = await axios.get(url);
        console.log(response.data);
          Swal.fire({
            title: 'Ajout',
            text: 'Produit ajouter dans le panier',
            icon: 'success',
            confirmButtonText: 'OK'
          });
      } catch (error) {
        console.error("erreur d'ajout au panier", error);
      }
    },
    async fetchCart() {
      try {
        const response = await axios.get('http://localhost:8000/api/cart');
        this.cart = response.data;
      } catch (error) {
        console.error(error);
      }
    },
  },
}


</script>

<style></style>