let app = Vue.createApp({
  data() {
    return {
      newFruitValue: "",
      fruits: ["apple", "banana", "mango"],
    };
  },
  methods: {
    addFruit() {
      this.fruits.push(this.newFruitValue);
      //reset
      this.newFruitValue = "";
    },
    delFruit(index){
        console.log("The index is",index);
        this.fruits.splice(index,1)
      }
  },
 
});
app.mount("#fruitBucket");
