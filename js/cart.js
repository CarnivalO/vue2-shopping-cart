new Vue({
    el: "#app",
    data: {
        totalMoney: 0,
        productList: [],
        checkAllFlag:false
    },
    filters: {
        formatMoney:function(value){
            return "$ " + value.toFixed(2);
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
        },
        changeMoney: function(product,way){
            if(way > 0){
                product.productQuentity++;
            }else{
                product.productQuentity--;
                if(product.productQuentity<1){
                    product.productQuentity=1
                }
            }
        },
        selectedProduct:function(item){
            if(typeof item.checked == 'undefined'){
                //Vue.set(item,"checked",true);
                this.$set(item,"checked",true);//通过vue监听不存在的变量
            }else{
                item.checked = !item.checked;
            }
        },
        ckeckAll:function(flag){
            this.checkAllFlag = flag;
            var _this = this;
                this.productList.forEach(function(item,index){
                    if(typeof item.checked == 'undefined'){
                        _this.$set(item,"checked",_this.checkAllFlag);//通过vue监听不存在的变量
                    }else{
                        item.checked = _this.checkAllFlag;
                    }
                });
            }
    }
});
Vue.filter("money",function(value,type){
    return "$ " + value.toFixed(2)+type;
})