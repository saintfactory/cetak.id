<template>
  <div class="dashboard-partnership">
    <div class="mw9 center ph0-ns">
      <div class="cf ph0-ns">
        <div class="fl w-100 w-20-ns pa2" id="side">
          <div class="h5"></div>
        </div>
        <div class="fl w-100 w-80-ns pa3" id="content">
          <div class="flex flex-column">
            <div class="w-100-ns pa1 mb3">
              <span class="fr">
                <a class="ph3" href>
                  <i class="fas fa-bell"></i>
                </a>
                partnership name
                <a class="ph2" href>
                  <i class="fas fa-sort-down"></i>
                </a>
              </span>
            </div>
            <div class="bg-white w-100-ns pa3" id="content-main">
              <div class="measure">
                <table class="">
                    <tr>
                        <td><span class="fl">Profile Tempat</span></td>
                    </tr>
                    <tr>
                        <label for="name" class="fl f6 b db mb2"> Name <span class="normal black-60">(optional)</span></label>
                        <input id="name" class="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc"/>
                    </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DashboardPartnership",
  props: {
    title: String
  },
  data() {
    return {
      authenticated: false,
      mockAccount: {
        email: "test",
        password: "123"
      }
    };
  },
  mounted() {
    if (!this.authenticated) {
      this.$router.replace({ name: "dashboard-partnership" });
    }
  },
  methods: {
    setAuthenticated(status) {
      this.authenticated = status;
    },
    logout() {
      this.authenticated = false;
    }
  }
};
</script>

<style scoped>
#side {
  background-color: #4286b7;
  position: fixed;
  height: 100vh;
}
#content {
  background-color: #eef6f7;
  float: right;
  min-height: 100vh;
}
#content-main {
  padding: 10px;
  min-height: 80vh;
}
.fas {
  color: #4286b7;
}
span {
  font-size: 14px;
}
</style>
