var app = new Vue({
    el:'#app',
    data:{
        copertine:[]
    },
    mounted(){
        axios
        .get('https://flynn.boolean.careers/exercises/api/array/music')
        .then(result =>{
            this.copertine = result.data.response;
        });
    }
});