var app = new Vue({
    el:'#app',
    data:{
        copertine:[],
        genere: ['All'],
        selezionato:''
    },
    mounted(){
        axios
        .get('https://flynn.boolean.careers/exercises/api/array/music')
        .then(result =>{
            //QUI PUSHO GLI ELEMENTI DENTRO COPERTINA
            this.copertine = result.data.response;
            //QUI CON UN CICLO FOREACH FILTRO I GENERI MUSICALI
            this.copertine.forEach(element => {
                if(!this.genere.includes(element.genre)){
                    this.genere.push(element.genre);
                }
            });
        });
    }
});