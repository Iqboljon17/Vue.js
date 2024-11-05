const app = Vue.createApp({
    data() {
        return {
            title: "Fuck of",
            index: 0,
            products: [
                {
                  name: "title 1",
                  price: "20$" 
                },

                {
                    name: "title 2",
                    price: "30$" 

                },
                {
                    name: "title 3",
                    price: "60$" 

                }
            ]
        }

    },
})
app.mount("#app")

