let app = Vue.createApp({
  data() {
    return {
      counter: 40,
    };
  },
  computed:{
      dcounter(){
        return this.counter*2
      }
  },
  watch:{
    counter(value){
      if (value>50){
        setTimeout(()=>{
          this.counter=0
        },3000)
      }
    }

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
