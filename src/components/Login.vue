<template>
    <div class="login white">
        <h2 class="tc f1">Login</h2>
        <input type="text" name="username" v-model="input.username" placeholder="Username" />
        <input type="password" name="password" v-model="input.password" placeholder="Password" />
        <button type="button" v-on:click="login()">Login</button>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data(){
        return {
            input: {
                username: "",
                password: ""
            }
        }
    },
    methods: {
        login() {

        }
    }
}
</script>

<style scoped>
.login {
    background-color: #4286B7;
}
</style>
