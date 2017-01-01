var app = new Vue({
    el: '#app',
    data:{
        intVal:'',
    },
    methods:{
        ValidateNumber: function(){
            this.intVal = this.intVal.replace(/[^\d\+\-\*\/\.\(\)%]/gi,'');
        },
        onEnter: function(){
            try{
                this.intVal = eval(this.intVal);
            }catch(e){
                alert("請輸入正確的數學運算式")
            }
        },
        onSpace:function(){
             this.intVal = '';
             console.log("隱藏");
        }
    },
    mounted:function(){
        this.$refs.input.focus();
    }

})