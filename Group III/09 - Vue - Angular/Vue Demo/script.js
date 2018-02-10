new Vue({
    el:"#app",
    data:{
        msg:"People",
        hidden:true,
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
                name: "Rafa Nadal",
                isAvailable:true
            }            
        ]

    },
    methods:{
        toggleHidden:function(){
            this.hidden = !this.hidden;
        },
        removeChamp:function(champ){
        
            champ.isAvailable = false;
        }
    }
});