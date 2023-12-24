x = 0
y = 0

drawed1 = ""
drawed2 = ""
drawed3 = ""

var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function setup() {
    canvas = createCanvas(900, 600)
    console.log("canvas foi criado")
}

function start() {
    document.getElementById("status").innerHTML = "O SISTEMA ESTÁ OUVINDO PODE FALAR !"
    recognition.start()
}

recognition.onresult = function (event) {
    console.log(event)
    var content = event.results[0][0].transcript
    document.getElementById("status").innerHTML = "A fala foi reconhecida como:" + content
    if (content == "algo") {
        x = Math.floor(Math.random() * 900)
        y = Math.floor(Math.random() * 600)
        document.getElementById("status").innerHTML = "Desenhando algo (irreconhecível) "
        drawed1 = "set"
    }
    if (content == "Minecraft") {
        x = Math.floor(Math.random() * 900)
        y = Math.floor(Math.random() * 600)
        document.getElementById("status").innerHTML = "Um quadrado ! "
        drawed2 = "set"
    }
    if (content == "quadrado") {
        x = Math.floor(Math.random() * 900)
        y = Math.floor(Math.random() * 600)
        document.getElementById("status").innerHTML = "Desenhando um triângulo, espera, era um quadrado ! Desculpe leve esse circulo como indenização "
        drawed3 = "set"
    }
}

function draw() {
    if (drawed1 == "set") {
        rect(x, y, x, y)
        x = Math.floor(Math.random() * 900)
        y = Math.floor(Math.random() * 600)
        rect(x, y, x, y)
        x = Math.floor(Math.random() * 900)
        y = Math.floor(Math.random() * 600)
        rect(x, y, x, y)
        x = Math.floor(Math.random() * 900)
        y = Math.floor(Math.random() * 600)
        rect(x, y, x, y)
        x = Math.floor(Math.random() * 900)
        y = Math.floor(Math.random() * 600)
        rect(x, y, x, y)
        x = Math.floor(Math.random() * 900)
        y = Math.floor(Math.random() * 600)
        rect(x, y, x, y)
        x = Math.floor(Math.random() * 900)
        y = Math.floor(Math.random() * 600)
        rect(x, y, x, y)
        x = Math.floor(Math.random() * 900)
        y = Math.floor(Math.random() * 600)
        rect(x, y, x, y)
        x = Math.floor(Math.random() * 900)
        y = Math.floor(Math.random() * 600)
        rect(x, y, x, y)
        x = Math.floor(Math.random() * 900)
        y = Math.floor(Math.random() * 600)
        rect(x, y, x, y)
        x = Math.floor(Math.random() * 900)
        y = Math.floor(Math.random() * 600)
        rect(x, y, x, y)
        x = Math.floor(Math.random() * 900)
        y = Math.floor(Math.random() * 600)
        rect(x, y, x, y)
        document.getElementById("status").innerHTML = "Desenhando algo (irreconhecível): Ok, isso concerteza superou minhas expectativas..."
        drawed1 = ""
    }
    if (drawed2 == "set") {
        rect(x, y, 40, 40)
        document.getElementById("status").innerHTML = "Um quadrado !, E magnífico concorda ? "
        drawed2 = ""
    }
    if (drawed3 == "set") {
        radius = Math.floor(Math.random() * 100)
        circle(x, y, radius)
        document.getElementById("status").innerHTML = "Desenhando um triângulo, espera, era um quadrado ! Desculpe leve esse circulo como indenização: O circulo foi desenhado"
        drawed3 = ""
    }
}