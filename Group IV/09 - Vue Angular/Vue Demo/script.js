new Vue({
    el:"#app",
    data:{
        msg:"Vue.js is the BEST!",
        greet:"",
        isDisplaying:false,
        champions:[
            {
                name:"Novak Djokovic",
                isAvailable:true
            },
            {
                name:"Roger Federer",
                isAvailable:true
            },
            {
                name:"Rafael Nadal",
                isAvailable:tru
            }
        ]
    },
    methods:{
        setJohn:function(){
            this.greet = " John!!"
        },
        toggleBlock:function(){
            this.isDisplaying = !this.isDisplaying;
        },
        removeChamp:function(){
            this.champions.splice(-1);
        },
        removeChamp:function(champ){
            champ.isAvailable = false;
        }
    }
});