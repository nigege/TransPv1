<template>
  <div>
    <!--$route.params是固定写法-->
    管理员编号是{{ id }}
  </div>
</template>

<script>
export default {
  props: ['id'],
  name: "Manager",
  beforeRouteEnter: (to, from, next) => {
    console.log("进入管理员页面");
    next(vm => {
      vm.getData();
    });
  },
  beforeRouteLeave: (to, from, next) => {
    console.log("离开管理员页面");
    next();
  },
  methods: {
    getData: function () {
      this.axios({
        method: 'get',
        url: 'http://localhost:8080/data.json',
      }).then(function (repos) {
        console.log(repos);
      }).catch(function (error) {
        console.log(error);
      });
    }
  }
}
</script>

<style scoped>

</style>