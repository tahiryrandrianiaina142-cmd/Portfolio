window.addEventListener("load",()=>{
    setTimeout(()=>{
        document.getElementById("loader").style.display="none";
    },4000);
});
/* ====== STARS ANIMATION ====== */
const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];
for(let i=0;i<100;i++){
    stars.push({
        x:Math.random()*canvas.width,
        y:Math.random()*canvas.height,
        size:Math.random()*2
    });
}

function animateStars(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle="white";
    stars.forEach(star=>{
        ctx.fillRect(star.x,star.y,star.size,star.size);
        star.y += 0.3;
        if(star.y > canvas.height){
            star.y = 0;
        }
    });
    requestAnimationFrame(animateStars);
}
animateStars();

/* ===== LOVE PART ===== */

let images = ["photo1.jpg","photo2.jpg","photo3.jpg"];
let index = 0;

let text = "🎂 Joyeux Anniversaire Mon Amour ❤️\n\n" +
"Andro iray manokana no nahaterahanao...\n" +
"Fa ho ahy dia andro nanombohan'ny fahagagana.\n\n" +
"Ianao no tsiky mampamirapiratra ny androko,\n" +
"Ianao no heriko rehefa reraka aho,\n" +
"Ianao no nofiko tanteraka.\n\n" +
"Raha mbola misy fiainana manaraka,\n" +
"dia mbola hifidy anao indray aho.\n\n" +
"Tiako ianao mihoatra noho ny teny,\n" +
"mihoatra noho ny fotoana,\n" +
"mihoatra noho ny zava-drehetra 💖";

let i = 0;

function startLove(){
    document.querySelector(".envelope").style.display="none";
    explodeHearts();
    let music = document.getElementById("music");
music.volume = 0;
music.play();

let fade = setInterval(()=>{
    if(music.volume < 1){
        music.volume += 0.05;
    } else {
        clearInterval(fade);
    }
},300);
    document.getElementById("slideshow").style.display="block";

    setInterval(()=>{
        index = (index+1)%images.length;
        document.getElementById("slide").src=images[index];
    },3000);

    setTimeout(typeWriter,2000);

    setTimeout(()=>{
        document.getElementById("finalPage").style.display="block";
    },15000);
}

function typeWriter(){
    if(i < text.length){
        document.getElementById("message").innerHTML += 
        text.charAt(i) === "\n" ? "<br>" : text.charAt(i);
        i++;
        setTimeout(typeWriter,50);
    }
}

function explodeHearts(){
    for(let j=0;j<40;j++){
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML="❤️";
        heart.style.left=Math.random()*100+"vw";
        document.body.appendChild(heart);
        setTimeout(()=>{heart.remove();},5000);
    }
}

function yesLove(){

    firework();

    document.body.style.background =
    "radial-gradient(circle at center, #1a1a40, #000000)";

    document.getElementById("ultimateYes").style.display="block";

    setInterval(firework,1500);

    setTimeout(()=>{
        alert("Tu viens de rendre ma vie complète ❤️💍");
    },2000);
}

/* BOUTON NON MANDOSITRA */
const noBtn = document.getElementById("noBtn");
noBtn.addEventListener("mouseover",()=>{
    noBtn.style.top = Math.random()*80+"%";
    noBtn.style.left = Math.random()*80+"%";
});

/* ===== FEU D'ARTIFICE ===== */

function firework(){
    for(let i=0;i<30;i++){
        const spark = document.createElement("div");
        spark.style.position="absolute";
        spark.style.width="5px";
        spark.style.height="5px";
        spark.style.background="hsl("+Math.random()*360+",100%,50%)";
        spark.style.left=window.innerWidth/2+"px";
        spark.style.top=window.innerHeight/2+"px";
        spark.style.borderRadius="50%";
        document.body.appendChild(spark);

        let angle=Math.random()*2*Math.PI;
        let distance=Math.random()*200;

        spark.animate([
            {transform:"translate(0,0)"},
            {transform:"translate("+
            Math.cos(angle)*distance+"px,"+
            Math.sin(angle)*distance+"px)"}
        ],{
            duration:1000,
            easing:"ease-out"
        });

        setTimeout(()=>{spark.remove();},1000);
    }
}
function createPetal(){
    const petal=document.createElement("div");
    petal.innerHTML="🌹";
    petal.style.position="absolute";
    petal.style.left=Math.random()*100+"vw";
    petal.style.top="-50px";
    petal.style.fontSize="20px";
    petal.style.animation="fall 6s linear";
    document.body.appendChild(petal);

    setTimeout(()=>{petal.remove();},6000);
}

setInterval(createPetal,800);

/* ===== COMPTE À REBOURS ===== */

let targetDate = new Date("2026-02-16 00:00:00"); // SOLOINAO daty marina

setInterval(()=>{
    let now = new Date();
    let diff = targetDate - now;

    if(diff > 0){
        let days = Math.floor(diff/(1000*60*60*24));
        let hours = Math.floor((diff/(1000*60*60))%24);
        let minutes = Math.floor((diff/(1000*60))%60);
        let seconds = Math.floor((diff/1000)%60);

        document.getElementById("countdown").innerHTML =
        "⏳ " + days+"j "+hours+"h "+minutes+"m "+seconds+"s avant ton jour magique 💖";
    } else {
        document.getElementById("countdown").innerHTML =
        "🎉 C’EST TON ANNIVERSAIRE MON AMOUR 💖";
    }
},1000);
