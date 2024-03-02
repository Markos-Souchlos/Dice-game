var btn = document.getElementById("btn");
var h1 = document.querySelector("h1");
var score1;
var score2;


btn.onclick = function() {
    
    do {
        score1 = Math.floor(Math.random()*6+1);
        score2 = Math.floor(Math.random()*6+1);
    } while (score1 == score2);
 
    var winner = 1;
    if (score2 > score1) {
        winner = 2;
    }

    h1.textContent = "player " + winner + " wins!";
    h1.style.display = "block";
    
    changeDice(score1,1);
    changeDice(score2,2);

    console.log(score1+ " "+score2+" winner= "+winner);
}


function changeDice(score,player) {

    var dice = "#dice"+player;
    dot1 = document.querySelector( dice + " #d1");
    dot2 = document.querySelector( dice + " #d2");
    dot3 = document.querySelector( dice + " #d3");
    dot4 = document.querySelector( dice + " #d4");
    dot5 = document.querySelector( dice + " #d5");
    dot6 = document.querySelector( dice + " #d6");
    dot7 = document.querySelector( dice + " #d7");
    

    switch (score) {
        case 1:
            dot1.style.display = "none";
            dot2.style.display = "none";
            dot3.style.display = "none";
            dot4.style.display = "none";
            dot5.style.display = "none";
            dot6.style.display = "none";
            dot7.style.display = "block";
            break;
        case 2:
            dot1.style.display = "none";
            dot2.style.display = "none";
            dot3.style.display = "block";
            dot4.style.display = "block";
            dot5.style.display = "none";
            dot6.style.display = "none";
            dot7.style.display = "none";
            break;
        case 3:
            dot1.style.display = "none";
            dot2.style.display = "none";
            dot3.style.display = "block";
            dot4.style.display = "block";
            dot5.style.display = "none";
            dot6.style.display = "none";
            dot7.style.display = "block";
            break;
        case 4:
            dot1.style.display = "block";
            dot2.style.display = "none";
            dot3.style.display = "block";
            dot4.style.display = "block";
            dot5.style.display = "none";
            dot6.style.display = "block";
            dot7.style.display = "none";
            break;
        case 5:
            dot1.style.display = "block";
            dot2.style.display = "none";
            dot3.style.display = "block";
            dot4.style.display = "block";
            dot5.style.display = "none";
            dot6.style.display = "block";
            dot7.style.display = "block";
            break;
        case 6:
            dot1.style.display = "block";
            dot2.style.display = "block";
            dot3.style.display = "block";
            dot4.style.display = "block";
            dot5.style.display = "block";
            dot6.style.display = "block";
            dot7.style.display = "none";
            break;
    }
}