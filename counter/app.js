let app = Vue.createApp({
  data() {
    return {
      counter: 40,
    };
  },
  methods: {
    increment() {
      console.log("increment executed");
      this.counter += 5;
    },
    decrement() {
      console.log("decrement executed");
      this.counter -= 5;
    },
    handleSubmit() {
      alert("login sucessfull");
    },
  },
});
app.mount("#events");
