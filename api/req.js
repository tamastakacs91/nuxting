export const requests = {
  getOne() {
    console.log('bejön ide');
    return this.$api.get('/people/v1');
  },
  getTwo() {
    return this.$api.get('/people/v2');
  },
};
