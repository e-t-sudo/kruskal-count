    let suits = ["C", "H", "S", "D"]; //clubs, hearts, spades, diamonds (CHaSeD stack)
    let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]; //"Ace to King"
    let div = document.getElementById("cards");
    let orderedDeck = [];
    for(let i=0; i<suits.length; i++){
        for(let j=0; j<values.length; j++){
            orderedDeck.push(values[j]+","+suits[i]);
        }
    }
    let shuffledDeck = shuffleArray(orderedDeck);
    for(let i=0; i<shuffledDeck.length; i++){
        let card_name = shuffledDeck[i].split(",").join("");
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
    let jumps = {
        "1": 1,
        "2": 2,
        "3": 3,
        "4": 4,
        "5": 5,
        "6": 6,
        "7": 7,
        "8": 8,
        "9": 9,
        "10": 10,
        "11": 1,
        "12": 1,
        "13": 1
    }
    function flipPrediction(starter){
        let numericalValue = values.indexOf(shuffledDeck[starter].split(",")[0])+1;
        let jumpValue = jumps[numericalValue];
        x = jumpValue;
        while(x<=51){
            finalIndex = x;
            x = x + jumps[values.indexOf(shuffledDeck[x].split(",")[0])+1];
        }
        let predCard = shuffledDeck[finalIndex].split(",").join("");
        document.getElementById("prediction").setAttribute("href", "#"+predCard)
        return predCard;
    }
    turnCard(flipPrediction(0));
    function oddsOfSuccess(){
        let results = [];
        for(let i=0; i<10; i++){
            results.push(flipPrediction(i))
        }
        let success = 1;
        for(let i=1; i<10; i++){
            if(results[0]==results[i]) success++;
        }
        return success;
    }
    document.getElementById("odds-for-success").innerText += oddsOfSuccess()*10+"%";
    if(oddsOfSuccess()>7){
        document.getElementById("odds-for-success").style.color = "#009900";
    }else if(oddsOfSuccess()>5){
        document.getElementById("odds-for-success").style.color = "#000099";
    }else{
        document.getElementById("odds-for-success").style.color = "#ff0000";
    }
