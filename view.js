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
    updateAces()
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
    <img class="cardback" src="Bilder/${model.app.fourth_side_card.image}">
    `
    document.getElementById('13').innerHTML = `
    <img class="cardback" src="Bilder/${model.app.third_side_card.image}">
    `
    document.getElementById('19').innerHTML = `
    <img class="cardback" src="Bilder/${model.app.second_side_card.image}">
    `
    document.getElementById('25').innerHTML = `
    <img class="cardback" src="Bilder/${model.app.first_side_card.image}">
    `
}

function updatePile(){
    if (model.app.last_turned_card.image){
        document.getElementById('pile').innerHTML = `
    <img class="cards" src="Bilder/${model.app.last_turned_card.image}">
    `
    }
}

function updateAces(){
    switch(model.app.last_turned_card.type){
        case model.data.aces[0].type:
            model.data.spaces[0].amount++
            break
        case model.data.aces[1].type:
            model.data.spaces[1].amount++
            break
        case model.data.aces[2].type:
            model.data.spaces[2].amount++
            break
        case model.data.aces[3].type:
            model.data.spaces[3].amount++
            break
    }

    if(model.data.spaces[0].amount == 0){
        document.getElementById('32').innerHTML = `
        <img class="ace" src="Bilder/${model.data.aces[0].image}">
        `
    }else if(model.data.spaces[0].amount == 1){
        document.getElementById('26').innerHTML = `
        <img class="ace" src="Bilder/${model.data.aces[0].image}">
        `
    }else if(model.data.spaces[0].amount == 2){
        document.getElementById('20').innerHTML = `
        <img class="ace" src="Bilder/${model.data.aces[0].image}">
        `
    }else if(model.data.spaces[0].amount == 3){
        document.getElementById('14').innerHTML = `
        <img class="ace" src="Bilder/${model.data.aces[0].image}">
        `
    }else if(model.data.spaces[0].amount == 4){
        document.getElementById('8').innerHTML = `
        <img class="ace" src="Bilder/${model.data.aces[0].image}">
        `
    }else if(model.data.spaces[0].amount == 5){
        document.getElementById('2').innerHTML = `
        <img class="ace" src="Bilder/${model.data.aces[0].image}">
        `
    }

    if(model.data.spaces[1].amount == 0){
        document.getElementById('33').innerHTML = `
        <img class="ace" src="Bilder/${model.data.aces[1].image}">
        `
    }else if(model.data.spaces[1].amount == 1){
        document.getElementById('27').innerHTML = `
        <img class="ace" src="Bilder/${model.data.aces[1].image}">
        `
    }else if(model.data.spaces[1].amount == 2){
        document.getElementById('21').innerHTML = `
        <img class="ace" src="Bilder/${model.data.aces[1].image}">
        `
    }else if(model.data.spaces[1].amount == 3){
        document.getElementById('15').innerHTML = `
        <img class="ace" src="Bilder/${model.data.aces[1].image}">
        `
    }else if(model.data.spaces[1].amount == 4){
        document.getElementById('9').innerHTML = `
        <img class="ace" src="Bilder/${model.data.aces[1].image}">
        `
    }else if(model.data.spaces[1].amount == 5){
        document.getElementById('1').innerHTML = `
        <img class="ace" src="Bilder/${model.data.aces[1].image}">
        `
    }

    if(model.data.spaces[2].amount == 0){
        document.getElementById('34').innerHTML = `
        <img class="ace" src="Bilder/${model.data.aces[2].image}">
        `
    }else if(model.data.spaces[2].amount == 1){
        document.getElementById('28').innerHTML = `
        <img class="ace" src="Bilder/${model.data.aces[2].image}">
        `
    }else if(model.data.spaces[2].amount == 2){
        document.getElementById('22').innerHTML = `
        <img class="ace" src="Bilder/${model.data.aces[2].image}">
        `
    }else if(model.data.spaces[2].amount == 3){
        document.getElementById('16').innerHTML = `
        <img class="ace" src="Bilder/${model.data.aces[2].image}">
        `
    }else if(model.data.spaces[2].amount == 4){
        document.getElementById('10').innerHTML = `
        <img class="ace" src="Bilder/${model.data.aces[2].image}">
        `
    }else if(model.data.spaces[2].amount == 5){
        document.getElementById('4').innerHTML = `
        <img class="ace" src="Bilder/${model.data.aces[2].image}">
        `
    }

    if(model.data.spaces[3].amount == 0){
        document.getElementById('35').innerHTML = `
        <img class="ace" src="Bilder/${model.data.aces[3].image}">
        `
    }else if(model.data.spaces[3].amount == 1){
        document.getElementById('29').innerHTML = `
        <img class="ace" src="Bilder/${model.data.aces[3].image}">
        `
    }else if(model.data.spaces[3].amount == 2){
        document.getElementById('23').innerHTML = `
        <img class="ace" src="Bilder/${model.data.aces[3].image}">
        `
    }else if(model.data.spaces[3].amount == 3){
        document.getElementById('17').innerHTML = `
        <img class="ace" src="Bilder/${model.data.aces[3].image}">
        `
    }else if(model.data.spaces[3].amount == 4){
        document.getElementById('11').innerHTML = `
        <img class="ace" src="Bilder/${model.data.aces[3].image}">
        `
    }else if(model.data.spaces[3].amount == 5){
        document.getElementById('5').innerHTML = `
        <img class="ace" src="Bilder/${model.data.aces[3].image}">
        `
    }
}

function noMoreCards(){
    document.getElementById('deck').innerHTML = `
    
    `
}

/*function moveAce(id){
    switch(id){
        case '32':
        document.getElementById('26').innerHTML = `
    <img class="ace" onclick="moveAce(document.getElementById('26').id)" src="Bilder/${model.data.aces[0].image}">
    `
        break
        case '26':
        document.getElementById('20').innerHTML = `
    <img class="ace" onclick="moveAce(document.getElementById('20').id)" src="Bilder/${model.data.aces[0].image}">
    `
        break
        case '20':
        document.getElementById('14').innerHTML = `
    <img class="ace" onclick="moveAce(document.getElementById('14').id)" src="Bilder/${model.data.aces[0].image}">
    `
        break
        case '14':
        document.getElementById('8').innerHTML = `
    <img class="ace" onclick="moveAce(document.getElementById('8').id)" src="Bilder/${model.data.aces[0].image}">
    `
        break
        case '8':
        document.getElementById('2').innerHTML = `
    <img class="ace" onclick="moveAce(document.getElementById('2').id)" src="Bilder/${model.data.aces[0].image}">
    `
        break
    }
    document.getElementById(id).innerHTML = ``
} */