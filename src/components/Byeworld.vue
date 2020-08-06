<template>
  <div>
    Bye Bye world

    <span ref="floatwindow">{{ count }}</span>
    <button @click="openWindow">Click</button>
  </div>
</template>

<script>
export default {
  name: 'Byeworld',
  data: () => ({
    count: 1,
  }),
  methods: {
    increase() {
      this.count += 1;
    },
  },
  created() {
    alert('Hello');
  },
};
</script>

<style scoped>
div {
  background-color: red;
}
</style>
