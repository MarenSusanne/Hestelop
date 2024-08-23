let app = document.getElementById("app")
const model = {
    app: {
        last_turned_card: '',
        first_side_card: "cardback.png",
        second_side_card: "cardback.png",
        third_side_card: "cardback.png",
        fourth_side_card: "cardback.png",
    },
    inputs: {
        
    },
    data: {
        card_background: "cardback.png",
        aces: [
            { name: "ka", image: "ka.png"},
            { name: "la", image: "la.png"},
            { name: "pa", image: "pa.png"},
            { name: "sa", image: "sa.png"},
        ],
        cards_in_deck:[
            
            { type: "k2", image: "k2.png" },
            { type: "k3", image: "k3.png" },
            { type: "k4", image: "k4.png" },
            { type: "k5", image: "k5.png" },
            { type: "k6", image: "k6.png" },
            { type: "k7", image: "k7.png" },
            { type: "k8", image: "k8.png" },
            { type: "k9", image: "k9.png" },
            { type: "k10", image: "k10.png" },
            { type: "kj", image: "kj.png" },
            { type: "kq", image: "kq.png" },
            { type: "kk", image: "kk.png" },

            { type: "l2", image: "l2.png" },
            { type: "l3", image: "l3.png" },
            { type: "l4", image: "l4.png" },
            { type: "l5", image: "l5.png" },
            { type: "l6", image: "l6.png" },
            { type: "l7", image: "l7.png" },
            { type: "l8", image: "l8.png" },
            { type: "l9", image: "l9.png" },
            { type: "l10", image: "l10.png" },
            { type: "lj", image: "lj.png" },
            { type: "lq", image: "lq.png" },
            { type: "lk", image: "lk.png" },

            { type: "p2", image: "p2.png" },
            { type: "p3", image: "p3.png" },
            { type: "p4", image: "p4.png" },
            { type: "p5", image: "p5.png" },
            { type: "p6", image: "p6.png" },
            { type: "p7", image: "p7.png" },
            { type: "p8", image: "p8.png" },
            { type: "p9", image: "p9.png" },
            { type: "p10", image: "p10.png" },
            { type: "pj", image: "pj.png" },
            { type: "pq", image: "pq.png" },
            { type: "pk", image: "pk.png" },

            { type: "s2", image: "s2.png" },
            { type: "s3", image: "s3.png" },
            { type: "s4", image: "s4.png" },
            { type: "s5", image: "s5.png" },
            { type: "s6", image: "s6.png" },
            { type: "s7", image: "s7.png" },
            { type: "s8", image: "s8.png" },
            { type: "s9", image: "s9.png" },
            { type: "s10", image: "s10.png" },
            { type: "sj", image: "sj.png" },
            { type: "sq", image: "sq.png" },
            { name: "sk", image: "sk.png" }
        ],
        cards_in_pile:[

        ],
        cards_in_side: [

        ]
    }
}