let app = document.getElementById("app")
const model = {
    app: {
        last_turned_card: '',
        first_side_card: {image: "cardback.png"},
        second_side_card: {image: "cardback.png"},
        third_side_card: {image: "cardback.png"},
        fourth_side_card: {image: "cardback.png"},
    },
    inputs: {
        
    },
    data: {
        card_background: "cardback.png",
        aces: [
            { type: "p", image: "pa.png"},
            { type: "l", image: "la.png"},
            { type: "k", image: "ka.png"},
            { type: "s", image: "sa.png"},
        ],
        cards_in_deck:[
            
            { type: "k", image: "k2.png" },
            { type: "k", image: "k3.png" },
            { type: "k", image: "k4.png" },
            { type: "k", image: "k5.png" },
            { type: "k", image: "k6.png" },
            { type: "k", image: "k7.png" },
            { type: "k", image: "k8.png" },
            { type: "k", image: "k9.png" },
            { type: "k", image: "k10.png" },
            { type: "k", image: "kj.png" },
            { type: "k", image: "kq.png" },
            { type: "k", image: "kk.png" },

            { type: "l", image: "l2.png" },
            { type: "l", image: "l3.png" },
            { type: "l", image: "l4.png" },
            { type: "l", image: "l5.png" },
            { type: "l", image: "l6.png" },
            { type: "l", image: "l7.png" },
            { type: "l", image: "l8.png" },
            { type: "l", image: "l9.png" },
            { type: "l", image: "l10.png" },
            { type: "l", image: "lj.png" },
            { type: "l", image: "lq.png" },
            { type: "l", image: "lk.png" },

            { type: "p", image: "p2.png" },
            { type: "p", image: "p3.png" },
            { type: "p", image: "p4.png" },
            { type: "p", image: "p5.png" },
            { type: "p", image: "p6.png" },
            { type: "p", image: "p7.png" },
            { type: "p", image: "p8.png" },
            { type: "p", image: "p9.png" },
            { type: "p", image: "p10.png" },
            { type: "p", image: "pj.png" },
            { type: "p", image: "pq.png" },
            { type: "p", image: "pk.png" },

            { type: "s", image: "s2.png" },
            { type: "s", image: "s3.png" },
            { type: "s", image: "s4.png" },
            { type: "s", image: "s5.png" },
            { type: "s", image: "s6.png" },
            { type: "s", image: "s7.png" },
            { type: "s", image: "s8.png" },
            { type: "s", image: "s9.png" },
            { type: "s", image: "s10.png" },
            { type: "s", image: "sj.png" },
            { type: "s", image: "sq.png" },
            { name: "s", image: "sk.png" }
        ],
        cards_in_pile:[

        ],
        cards_in_side: [

        ],
        spaces: [
            spade = {
                start_pos: true, 
                first_pos: false,
                second_pos: false,
                third_pos: false,
                fourth_pos: false,
                winner_pos: false,
                amount: 0
            },
            diamond = {
                start_pos: true, 
                first_pos: false,
                second_pos: false,
                third_pos: false,
                fourth_pos: false,
                winner_pos: false,
                amount: 0
            },
            clover = {
                start_pos: true, 
                first_pos: false,
                second_pos: false,
                third_pos: false,
                fourth_pos: false,
                winner_pos: false,
                amount: 0
            },
            heart = {
                start_pos: true, 
                first_pos: false,
                second_pos: false,
                third_pos: false,
                fourth_pos: false,
                winner_pos: false,
                amount: 0
            },
        ]
    }
}