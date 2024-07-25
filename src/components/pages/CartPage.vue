<!-- src/components/Cart.vue -->
<template>

	<!-- Shopping Cart -->
	<div class="shopping-cart section">
		<div class="container">
			<div class="row">
				<div class="col-12">
					<!-- Shopping Summery -->
					<table class="table shopping-summery">
						<thead>
							<tr class="main-hading">
								<th>PRODUCT</th>
								<th>NAME</th>
								<th class="text-center">UNIT PRICE</th>
								<th class="text-center">QUANTITY</th>
								<th class="text-center">TOTAL</th>
								<th class="text-center"><i class="ti-trash remove-icon"></i></th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="item in cart" :key="item.id">
								<td><img :src="getImageUrl(item.product.photo)" alt=""></td>
								<td>{{ item.product.nom }}</td>
								<td>{{ item.product.prix }}</td>
								<td><input type="number" v-model="item.quantity" name="quantity"
										class="quantity form-control input-number" value="1" min="1" max="100" /></td>
								<td>{{ calculprix(item) }} Fcfa</td>
								<td>
									<button @click="removeFromCart(item.id)"><i
											class="ti-trash remove-icon red"></i></button>
								</td>
								<td></td>
							</tr>
						</tbody>
					</table>
					<!--/ End Shopping Summery -->
				</div>
			</div>
			<div class="row">
				<div class="col-12">
					<!-- Total Amount -->
					<div class="total-amount">
						<div class="row">
							<div class="col-lg-8 col-md-5 col-12">
								<div class="left">
									<div class="coupon">
										<form action="#" target="_blank">
											<input name="Coupon" placeholder="Enter Your Coupon">
											<button class="btn">Apply</button>
										</form>
									</div>
									<div class="checkbox">
										<label class="checkbox-inline" for="2"><input name="news" id="2"
												type="checkbox"> Shipping (+10$)</label>
									</div>
								</div>
							</div>
							<div class="col-lg-4 col-md-7 col-12">
								<div class="right">
									<ul>
										<li class="last">Total à payé<span>{{ cartTotal }} Fcfa</span></li>
									</ul>
									<div class="button5">
										<button type="button" class="btn btn-primary" data-toggle="modal"
											data-target="#checkoutModal">
											Checkout
										</button>
										<a href="/" class="btn">Continue shopping</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<!--/ End Total Amount -->
				</div>
			</div>
		</div>
	</div>
	<!--/ End Shopping Cart -->

	<!-- Button to trigger modal -->


	<!-- Modal -->
	<div class="modal fade" id="checkoutModal" tabindex="-1" role="dialog" aria-labelledby="checkoutModalLabel"
		aria-hidden="true">
		<div class="modal-dialog modal-lg" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="modal-body">
					<div class="container mt-3 mb-3">
						<div class="row">
							<div class="col-lg-8 col-12">
								<div class="checkout-form">
									<p>Please register in order to checkout more quickly</p>
									<!-- Form -->
									<form class="form" @submit.prevent="addCommande">
										<div class="row">
											<div class="col-lg-6 col-md-6 col-12">
												<div class="form-group">
													<label>Nom Complet<span>*</span></label>
													<input type="text" name="name" v-model="order.nomcomplet"
														class="form-control" required="required">
												</div>
											</div>
											<div class="col-lg-6 col-md-6 col-12">
												<div class="form-group">
													<label>Email Address<span>*</span></label>
													<input type="email" name="email" v-model="order.email"
														class="form-control">
												</div>
											</div>
											<div class="col-lg-6 col-md-6 col-12">
												<div class="form-group">
													<label>Phone Number<span>*</span></label>
													<input type="number" v-model="order.numeroTelephone"
														class="form-control">
												</div>
											</div>
											<div class="col-lg-6 col-md-6 col-12">
												<div class="form-group">
													<label>Address<span>*</span></label>
													<input type="text" name="address" v-model="order.adresse"
														class="form-control">
												</div>
											</div>
											<div class="col-12">
												<div class="form-group create-account">
													<input id="cbox" type="checkbox">
													<label>Create an account?</label>
												</div>
											</div>
										</div>
										<div class="single-widget get-button">
											<div class="content">
												<div class="button">
													<button type="submit" class="btn text-white">Passer la
														Commande</button>
												</div>
											</div>
										</div>
									</form>
									<!--/ End Form -->
								</div>
							</div>
							<div class="col-lg-4 col-12">
								<div class="order-details">
									<!-- Order Widget -->
									<div class="single-widget">
										<h2>CART TOTALS</h2>
										<div class="content">
											<ul class="list-unstyled">

												<li class="last">Total<span class="float-right">{{ cartTotal }}</span>
												</li>
											</ul>
										</div>
									</div>
									<!--/ End Order Widget -->
									<!-- Order Widget -->
									<div class="single-widget">
										<h2>Payments</h2>
										<div class="content">
											<div class="checkbox">
												<label class="checkbox-inline" for="1">
													<input name="payment" id="1" type="checkbox"> Check Payments
												</label>
												<label class="checkbox-inline" for="2">
													<input name="payment" id="2" type="checkbox"> Cash On Delivery
												</label>
												<label class="checkbox-inline" for="3">
													<input name="payment" id="3" type="checkbox"> PayPal
												</label>
											</div>
										</div>
									</div>
									<!--/ End Order Widget -->
									<!-- Payment Method Widget -->
									<div class="single-widget payement">
										<div class="content">
											<img src="/public/images/payment-method.png" alt="Payment Methods"
												class="img-fluid">
										</div>
									</div>
									<!--/ End Payment Method Widget -->
									<!-- Button Widget -->

									<!--/ End Button Widget -->
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
import axios from 'axios';
import Swal from 'sweetalert2';
export default {
	name: 'CartPage',
	data() {
		return {
			order: {
				nomcomplet: '',
				adresse: '',
				email: '',
				numeroTelephone: '',
				total_price: 0
			},
			cart: [],
			products: [],
			carts: {
				quantity: 0,
			}
		};
	},
	computed: {
		cartTotal() {
			return this.cart.reduce((total, item) => total + item.product.prix * item.quantity, 0);
		}
	},
	created() {
		this.fetchCart();
		this.fetchProducts();
	},

	methods: {

		fetchCart() {
			this.$axios.get('http://127.0.0.1:8000/api/cart')
				.then(response => {
					this.cart = response.data;
				})
				.catch(error => {
					console.error(error);
				});
		},
		calculprix(cart) {
			if (cart && cart.product) {
				return cart.quantity * cart.product.prix;
			}
			return 0;
		},
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
		async removeFromCart(index) {
			axios.delete(`http://127.0.0.1:8000/api/cart/delete/${index}`)
				.then(() => {
					this.fetchCart();	
				},
				//window.location.reload()
				)
				.catch(error => {
					console.error(error);
				});
		},
		async addCommande() {
			let formData = new FormData();
			try {

				this.order.total_price = this.cartTotal;


				formData.append("nomcomplet", this.order.nomcomplet);
				formData.append("email", this.order.email);
				formData.append("adresse", this.order.adresse);
				formData.append("numeroTelephone", this.order.numeroTelephone);
				formData.append("total_price", this.order.total_price);


				let response = await axios.post('http://127.0.0.1:8000/api/order', formData);
				console.log(response);
				Swal.fire({
					title: 'Ajout',
					text: 'Votre commande a été passe avec succée',
					icon: 'success',
					confirmButtonText: 'OK'
				});
			} catch (error) {
				console.error(error);
			}
		},
	},
};
</script>
