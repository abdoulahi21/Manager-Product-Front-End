<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="card mx-4">
                    <div class="card-body p-4">
                        <h1 class="text-center mb-4">Register</h1>
                        <form @submit.prevent="register">
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text"><i class="fas fa-user"></i></span>
                                </div>
                                <input type="text" v-model="name" class="form-control" placeholder="Name">
                            </div>
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text"><i class="fas fa-envelope"></i></span>
                                </div>
                                <input type="email" v-model="email" class="form-control" placeholder="Email">
                            </div>
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text"><i class="fas fa-phone"></i></span>
                                </div>
                                <input type="text" v-model="phone" class="form-control" placeholder="Phone">
                            </div>
                            <div class="input-group mb-4">
                                <div class="input-group-prepend">
                                    <span class="input-group-text"><i class="fas fa-lock"></i></span>
                                </div>
                                <input type="password" v-model="password" class="form-control" placeholder="Password">
                            </div>
                            <button type="submit" class="btn px-4">Register</button>&nbsp;
                            <router-link to="/login" class="btn text-white">Login</router-link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'RegisterPage',
    data() {
        return {
            name: '',
            email: '',
            phone: '',
            password: '',
        };
    },
    methods: {
        async register() {
            try {
                const response = await axios.post('http://127.0.0.1:8000/api/user', {
                    name: this.name,
                    email: this.email,
                    phone: this.phone,
                    password: this.password
                });
                if (response.data.code === 200) {
                    alert('Registration successful!');
                    this.$router.push('/login');
                } else {
                    alert('Registration failed: ' + response.data.message);
                }
            } catch (error) {
                console.error('Registration failed', error);
                alert('Registration failed: ' + (error.response.data.message || 'Unknown error'));
            }
        },
    }
};
</script>

<style scoped>
body {
    font-family: 'Roboto', sans-serif;
    background-color: #f5f5f5;
}

.card {
    border: none;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
}

.input-group-text {
    background-color: #f5f5f5;
    border: none;
    font-size: 1.2em;
}

input::placeholder {
    font-family: 'Roboto', sans-serif;
}

.container {
    margin-top: 5%;
    margin-bottom: 15%;
}
</style>
