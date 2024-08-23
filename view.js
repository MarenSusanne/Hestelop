updateView()

function updateView() {
    app.innerHTML = /*HTML*/`
    <div class="container">
        
    ${createDiv()}

   
</div>
    `
    addClass()
    startPositions()
    updatePile()
    addClick()
}

function createDiv(){
    let divs = '';
    for(let i = 0; i < 36; i++){
        divs += `<div class="boxes" id=${i + 1}>${i + 1}</div>`
    }
    return divs
}

function addClass(){
    //document.getElementById('24').classList.add("deck")
    document.getElementById('24').id = "deck"
    document.getElementById('30').id = "pile"
}

function addClick(){
    document.getElementById('deck').onclick = newCard
    document.getElementById('7').onclick = function(){
        updateSideCard(this.id)
        this.onclick = null
    }
    document.getElementById('13').onclick = function(){
        updateSideCard(this.id)
        this.onclick = null
    }
    document.getElementById('19').onclick = function(){
        updateSideCard(this.id)
        this.onclick = null
    }
    document.getElementById('25').onclick = function(){
        updateSideCard(this.id)
        this.onclick = null
    }

}

function startPositions(){
    document.getElementById('deck').innerHTML = `
    <img class="cardback" src="Bilder/${model.data.card_background}">
    `
    document.getElementById('7').innerHTML = `
    <img class="cardback" src="Bilder/${model.app.fourth_side_card}">
    `
    document.getElementById('13').innerHTML = `
    <img class="cardback" src="Bilder/${model.app.third_side_card}">
    `
    document.getElementById('19').innerHTML = `
    <img class="cardback" src="Bilder/${model.app.second_side_card}">
    `
    document.getElementById('25').innerHTML = `
    <img class="cardback" src="Bilder/${model.app.first_side_card}">
    `
    document.getElementById('32').innerHTML = `
    <img class="ace" onclick="moveAce()" src="Bilder/${model.data.aces[0].image}">
    `
    document.getElementById('33').innerHTML = `
    <img class="ace" onclick="moveAce()" src="Bilder/${model.data.aces[1].image}">
    `
    document.getElementById('34').innerHTML = `
    <img class="ace" onclick="moveAce()" src="Bilder/${model.data.aces[2].image}">
    `
    document.getElementById('35').innerHTML = `
    <img class="ace" onclick="moveAce()" src="Bilder/${model.data.aces[3].image}">
    `
    
}

function updatePile(){
    if (model.app.last_turned_card.image){
        document.getElementById('pile').innerHTML = `
    <img class="cards" src="Bilder/${model.app.last_turned_card.image}">
    `
    }
}

function moveAce(){

}

function noMoreCards(){
    document.getElementById('deck').innerHTML = `
    
    `
}
