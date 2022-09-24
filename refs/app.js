let app = Vue.createApp({
  data() {
    return {
      message: "hi how are u",
    };
  },
  //mounting phase
  beforeCreate(){
    console.log("beforeCreate exec");
  },
  created(){
    console.log("created exec");
  },
  beforeMount(){
    console.log("beforeMount exec");
  },
  mounted(){
    console.log("mounted exec");
    this.$refs.typeBox.focus();
  },
  //updating phase

  beforeUpdate(){
    console.log("beforeUpdate exec");
  },
  updated(){
    console.log("updated exec");
  },
  //unmonct phase

  beforeUnmount(){
    console.log("beforeUnmount Exec");

  },

  unmounted(){
    console.log("unmounted exec");
  },

  methods: {
    // setText() {
    //   console.log(this.$refs.userText.value);
    //   this.message = this.$refs.userText.value;
    // },
    // setFocus() {
    //   this.$refs.typeBox.focus();
    // },
  }
});

app.mount("#refs");

//for unmounting
 setTimeout(()=>{
    app.unmount()
 },5000)