class Player {
    constructor(){

    }
    getCount(){
        var pc=database.ref("playerCount")
        pc.on("value",function(data){
            playerCount=data.val();
        })

    }
    updateCount(count){
        database.ref("/").update({
        playerCount:count

        })

        
        
    }
    update(name){
        var playerIndex="player" + playerCount
        database.ref(playerIndex).set({
            name:name
        })

    }
}