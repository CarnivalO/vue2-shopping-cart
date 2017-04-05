new Vue({
    el: '.container',
    data: {
        limitNumber: 3,
        addressList: [],
        loadFlag: true,
        currentIndex: 0,
        shippingMethod: 1,
        delFlag: false,
        modFlag:false
    },
    mounted: function () {
        this.$nextTick(function () {
            this.getAddressList();
        })
    },
    computed: {
        filteredAddress: function () {
            return this.addressList.slice(0, this.limitNumber);
        }
    },
    methods: {
        getAddressList: function () {
            var _this = this;
            axios.get("data/address.json").then(response => {
                var res = response.data;
                if (res.status == "1") {
                    _this.addressList = res.result;
                }
            });
        },
        loadAll: function (loadFlag) {
            this.loadFlag = !this.loadFlag;
            if (this.loadFlag) {
                this.limitNumber = 3;
            } else {
                this.limitNumber = this.addressList.length;
            }
        },
        setDefault: function (addressId) {
            this.addressList.forEach(function (item, index) {
                if (item.addressId == addressId) {
                    item.isDefault = true;
                } else {
                    item.isDefault = false;
                }
            });
        },
        delConfirm: function (index) {
            this.delFlag = true;
            this.currentIndex = index;
        },
        delAddress: function () {
            this.addressList.splice(this.currentIndex, 1);
            this.delFlag = false;
            //axios.get() 通过后台删除
        },
        modConfirm:function (index){
            this.modFlag = true;
            this.currentIndex = index;
        },
         modAddress: function () {
            this.addressList.splice(this.currentIndex, 1);
            this.delFlag = false;
            //axios.get() 通过后台删除
        },
    }
})