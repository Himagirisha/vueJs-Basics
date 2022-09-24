let app = Vue.createApp({
  data() {
    return {
      name: "",
    };
  },
  computed: {
    computename() {
        console.log("computename is executed");
      if (this.name === "") {
        return "";
      }
      return this.name + " " + "g";
    },
  },

  methods: {
    setName() {
        console.log("setName is executed");
      if (this.name === "") {
        return "";
      }
      return this.name + " " + "g";
    },

  },
});

app.mount("#bind");
