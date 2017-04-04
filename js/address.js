new Vue({
    el:'.container',
    data:{
        limitNumber:3,        
        addressList:[],
        loadFlag:true
    },
    mounted:function(){
        this.$nextTick(function(){
            this.getAddressList();
        })
    },
     computed:{
        filteredAddress:function(){
            return this.addressList.slice(0,this.limitNumber);
        }
    },
    methods:{
        getAddressList:function(){
            var _this = this;
             axios.get("data/address.json").then(response => {
                var res = response.data;
               if(res.status == "1"){
                   _this.addressList = res.result;
               }
            });
        },
        loadAll:function(loadFlag){
            this.loadFlag = !this.loadFlag;
            if(this.loadFlag){
            this.limitNumber = 3;
        }else{
            this.limitNumber = this.addressList.length;
            }
        }
    }
})
