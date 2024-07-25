<template>

    <div class="container mt-5 mb-5">
        <div class="row">
            <div class="col-lg-8 col-12">
                <div class="checkout-form">
                    <h2>Make Your Checkout Here</h2>
                    <p>Please register in order to checkout more quickly</p>
                    <!-- Form -->
                    <form class="form" method="post" action="#">
                        <div class="row">
                            <div class="col-lg-6 col-md-6 col-12">
                                <div class="form-group">
                                    <label>Nom Complet<span>*</span></label>
                                    <input type="text" name="name" class="form-control" required="required">
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-12">
                                <div class="form-group">
                                    <label>Email Address<span>*</span></label>
                                    <input type="email" name="email" class="form-control" required="required">
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-12">
                                <div class="form-group">
                                    <label>Phone Number<span>*</span></label>
                                    <input type="number" name="number" class="form-control" required="required">
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-12">
                                <div class="form-group">
                                    <label>Address<span>*</span></label>
                                    <input type="text" name="address" class="form-control" required="required">
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="form-group create-account">
                                    <input id="cbox" type="checkbox">
                                    <label>Create an account?</label>
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
                                <li>Sub Total<span class="float-right">$330.00</span></li>
                                <li>(+) Shipping<span class="float-right">$10.00</span></li>
                                <li class="last">Total<span class="float-right">$340.00</span></li>
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
                            <img src="/public/images/payment-method.png" alt="Payment Methods" class="img-fluid">
                        </div>
                    </div>
                    <!--/ End Payment Method Widget -->
                    <!-- Button Widget -->
                    <div class="single-widget get-button">
                        <div class="content">
                            <div class="button">
                                <a href="#" class="btn text-white">Passer la Commande</a>
                            </div>
                        </div>
                    </div>
                    <!--/ End Button Widget -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    name: 'CheckoutPage',
    setup() {
        const order = ref({
            name: '',
            email: '',
            address: ''
        });

        const placeOrder = () => {
            fetch('/api/order', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(order.value)
            })
                .then(response => response.json())
                .then(data => {
                    if (data.message === 'Order placed successfully') {
                        alert('Order placed successfully');
                    } else {
                        alert('There was an error placing your order');
                    }
                });
        };

        return { order, placeOrder };
    }
};
</script>
