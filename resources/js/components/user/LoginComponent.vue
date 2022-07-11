<template>
    <div class="row justify-content-center">
            <div class="col-md-12">
                <form class="bg-white rounded shadow-5-strong p-5">
                    <h2 class="text-center">Login</h2>
                    <!-- Email input -->
                    <div class="form-outline mb-4">
                        <label class="form-label" for="email">Email address</label>
                        <input type="email" v-model="email" id="email" class="form-control" />
                    </div>

                    <!-- Password input -->
                    <div class="form-outline mb-4">
                        <label class="form-label" for="password">Password</label>
                        <input type="password" v-model="password" id="password" class="form-control" />
                    </div>

                    <!-- 2 column grid layout for inline styling -->
                    <div class="row mb-4">
                        <div class="col d-flex justify-content-center">
                            <!-- Checkbox -->
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="form1Example3" checked />
                                <label class="form-check-label" for="form1Example3">
                                    Remember me
                                </label>
                            </div>
                        </div>

                        <div class="col text-center">
                            <!-- Simple link -->
                            <a href="#!">Forgot password?</a>
                        </div>
                    </div>

                    <!-- Submit button -->
                    <button @click.prevent="login" type="submit" class="btn btn-primary btn-block">Sign in</button>
                </form>
            </div>
        </div>
</template>

<script>
export default {
    name: "LoginComponent",

    data(){
        return{
            email: null,
            password: null,
        }
    },

    methods:{
        login(){
            axios.post('/sanctum/csrf-token')
            .then(result => {
                axios.post('/login', {email: this.email, password: this.password})
                .then(res => {
                    console.log(res)
                    console.log('login!');
                })
                .catch(error => {
                    console.log(error)
                })
            })
        }
    }
}
</script>

<style scoped>

</style>
