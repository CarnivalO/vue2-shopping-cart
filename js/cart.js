new Vue({
    el: "#app",
    data: {
        totalMoney: 0,
        productList: []
    },
    filters: {
        formatMoney:function(value){
            return "$" + value.toFixed(2);
        }
    },
    mounted: function () {
        this.cartView();
    },
    methods: {
        cartView: function () {
            // var _this = this;
            // axios.get("data/cart.json").then(function (res) {
            //     _this.productList = res.data.result.productList;
            //     _this.totalMoney = res.data.result.totalMoney;
            // }).catch(function (error) {
            //     console.log(error);
            // });
            axios.get("data/cart.json").then(res => {
                this.productList = res.data.result.productList;
                this.totalMoney = res.data.result.totalMoney;
            });
        }
    }
});