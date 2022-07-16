<template>
    <div class="row justify-content-center">
        <div class="col-md-12">
            <form class="bg-white rounded shadow-5-strong p-5">
                <h2 class="text-center">Registration</h2>
                <!-- Login input -->
                <div class="form-outline mb-4">
                    <label class="form-label" for="login">Login</label>
                    <input type="text" v-model="login" id="login" class="form-control" />
                </div>

                <!-- Name input -->
                <div class="form-outline mb-4">
                    <label class="form-label" for="name">Name</label>
                    <input type="text" v-model="name" id="name" class="form-control" />
                </div>

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

                <!-- Password confirm input -->
                <div class="form-outline mb-4">
                    <label class="form-label" for="">Password confirmation</label>
                    <input type="password" v-model="password_confirmation" id="" class="form-control" />
                </div>

                <!-- 2 column grid layout for inline styling -->
                <div class="row mb-4">
                    <button @click.prevent="store" type="submit" class="btn btn-primary btn-block">Registration</button>
                </div>

            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: "RegistrationComponent",

    data(){
        return{
            login: null,
            name: null,
            email: null,
            password: null,
            password_confirmation: null,
        }
    },

    methods:{
        store(){
            axios.post('/sanctum/csrf-cookie')
            .then(response => {
                axios.post('/register', {
                    login: this.login,
                    name: this.name,
                    email: this.email,
                    password: this.password,
                    password_confirmation: this.password_confirmation,
                })
                    .then(res => {
                        console.log(res)
                        localStorage.setItem('x-csrf-token', res.config.headers['X-XSRF-TOKEN'])
                        this.$router.push({name:'user.personal'})
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
