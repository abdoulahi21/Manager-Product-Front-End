<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="card mx-4">
                    <div class="card-body p-4">
                        <h1 class="text-center mb-4">Login</h1>
                        <form @submit.prevent="login">
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text"><i class="fas fa-user"></i></span>
                                </div>
                                <input type="email" class="form-control" v-model="email" placeholder="Email">
                            </div>
                            <div class="input-group mb-4">
                                <div class="input-group-prepend">
                                    <span class="input-group-text"><i class="fas fa-lock"></i></span>
                                </div>
                                <input type="password" v-model="password" class="form-control" placeholder="Password">
                            </div>
                            <button type="submit" class="btn  px-4">Login</button>&nbsp;
                            <router-link to="/register" class="btn text-white">Register</router-link>

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
    name: 'LoginPage',
    data() {
        return {
            email: '',
            password: '',
        
        };
    },
    methods: {
        async login() {
            try {
                const response = await axios.post('http://127.0.0.1:8000/api/login', {
                    email: this.email,
                    password: this.password
                });
                if (response.data.code === 200) {
                    localStorage.setItem('token', response.data.token);
                   // this.$router.push('/NavBarAdmin');

                } else {
                    alert('Invalid login details');
                }
            } catch (error) {
                console.error('Login failed', error);
                alert('Login failed: ' + (error.response.data.message || 'Unknown error'));
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