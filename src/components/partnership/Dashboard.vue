<template>
    <div class="dashboard-partnership">
        <h1>{{ title }}</h1>
        <p>Welcome fellas!</p>
        <router-view @authenticated="setAuthenticated" />
    </div>
</template>

<script>
export default {
    name: 'DashboardPartnership',
    props : {
        title: String
    },
    data() {
        return {
            authenticated: false,
            mockAccount: {
                email: "test",
                password: "123"
            }
        }
    },
    mounted() {
        if(!this.authenticated){
            this.$router.replace({ name: "dashboard-partnership" })
        }
    },
    methods: {
        setAuthenticated(status) {
            this.authenticated = status
        },
        logout() {
            this.authenticated = false
        }
    }
}
</script>

<style scoped>

</style>
