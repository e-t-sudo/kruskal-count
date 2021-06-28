    let suits = ["C", "H", "S", "D"]; //clubs, hearts, spades, diamonds (CHaSeD stack)
    let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]; //"Ace to King"
    let div = document.getElementById("cards");
    let orderedDeck = [];
    for(let i=0; i<suits.length; i++){
        for(let j=0; j<values.length; j++){
            orderedDeck.push(values[j]+suits[i]);
        }
    }
    let shuffledDeck = shuffleArray(orderedDeck);
    for(let i=0; i<shuffledDeck.length; i++){
        let card_name = shuffledDeck[i];
        let card_img = "./cards/"+card_name+".png";
        let funName = "turnCard(\""+card_name+"\")";
        div.innerHTML += "<div onClick="+funName+" id="+card_name+" back = '1' class='card'>"+card_name+"</div>";
        div.lastChild.innerHTML = "<img class='card' src='./cards/back.png'>";
    }
    function turnCard(card){
        let clicked = document.getElementById(card);
        if(clicked.getAttribute("back")=='1'){
            clicked.innerHTML = "<img src='./cards/"+card+".png' class='card'>";
            clicked.setAttribute("back", "0");
        }else{
            clicked.innerHTML = "<img src='./cards/back.png' class='card'>";
            clicked.setAttribute("back", "1")
        }
    }
    function shuffleArray(array) {
        let curId = array.length;
        while (0 !== curId) {
            let randId = Math.floor(Math.random() * curId);
            curId -= 1;
            let tmp = array[curId];
            array[curId] = array[randId];
            array[randId] = tmp;
        }
        return array;
    }
