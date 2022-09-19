let app=Vue.createApp({
    data(){
        return{
            email:"hak@gmail.com"
        }
        
    },

    methods:{
            reset(){
                this.email=""               
            }
    }
})

app.mount('#bind')