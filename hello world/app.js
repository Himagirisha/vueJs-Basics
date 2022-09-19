let app = Vue.createApp({
  data() {
    return {
      greeting: "hello world",
      person: {
        name: "ajay",
        age: 20,
      },
      learn: "<h1>learn vue</h1>",
      code: "code vue",
    };
  },
  methods: {
    randomOutput() {
      let rannum = Math.random();
      console.log(rannum);
      if (rannum > 0.5) {
        return this.learn;
      } else {
        return this.code;
      }
    },
    randnumDisplay() {
      let rnum = Math.random();
      return rnum;
    },
  },
});

app.mount("#first");
