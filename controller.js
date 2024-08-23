function random(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}

function newCard(){
    if(model.data.cards_in_deck.length > 0){
        let turnedCard = random(0,model.data.cards_in_deck.length)
            model.app.last_turned_card = model.data.cards_in_deck[turnedCard]
            model.data.cards_in_pile.push(model.data.cards_in_deck[turnedCard])
            model.data.cards_in_deck.splice(turnedCard, 1)
            updateView()
    }else{
        noMoreCards()
    }
    
    
}

function updateSideCard(id){
    
    switch(id){
        case '7':
            model.app.fourth_side_card = model.data.cards_in_deck[random(0,model.data.cards_in_deck.length)]
            
            break
        case '13':
            model.app.third_side_card = model.data.cards_in_deck[random(0,model.data.cards_in_deck.length)]
            
            break
        case '19':
            model.app.second_side_card = model.data.cards_in_deck[random(0,model.data.cards_in_deck.length)]
            
            break
        case '25':
            model.app.first_side_card = model.data.cards_in_deck[random(0,model.data.cards_in_deck.length)]
            
            break
    }
    updateView()
}

