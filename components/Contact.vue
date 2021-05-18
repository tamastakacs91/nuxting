<template>
  <div class="d-flex flex-column">
    <div class="d-flex">
      <div @click="clicked">1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </div>
    <div>
      <v-btn @click="onLogin">Click</v-btn>
      <v-btn @click="request">Click</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },

  methods: {
    clicked() {
      console.log('clicked');
    },
    async onLogin() {
      console.log('clicked');
      const response = await this.$api.auth.login(this.email, this.password);
      console.log(response);
    },
    async request() {
      const response = await this.$api.signup.get();
      console.log(response);
    },
  },
};
</script>
