function login() {
    let u = document.getElementById("user").value;
    let p = document.getElementById("pass").value;

    if(u === "admin" && p === "1234") {
        window.location = "dashboard.html";
    } else {
        alert("Wrong login");
    }
}

function go(page) {
    window.location = page;
}

/* 🤖 AI RESPONSE (simple) */
function send() {
    let msg = document.getElementById("msg").value;
    let chat = document.getElementById("chatBox");

    chat.innerHTML += "<p><b>You:</b> "+msg+"</p>";

    let reply = getAI(msg);

    chat.innerHTML += "<p><b>Bot:</b> "+reply+"</p>";
}

/* 🧠 Fake AI Logic */
function getAI(msg) {
    msg = msg.toLowerCase();

    if(msg.includes("attendance")) return "Your attendance is 85%";
    if(msg.includes("marks")) return "Your marks are good 👍";
    if(msg.includes("hello")) return "Hello 👋 how can I help?";
    
    return "I am your Smart Assistant 🤖";
}

/* 🎤 VOICE INPUT */
function voice() {
    let recognition = new webkitSpeechRecognition();
    recognition.start();

    recognition.onresult = function(e) {
        let text = e.results[0][0].transcript;
        document.getElementById("msg").value = text;
    }
}
async function getAI(msg) {
    let res = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer YOUR_API_KEY"
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{role:"user",content:msg}]
        })
    });

    let data = await res.json();
    return data.choices[0].message.content;
}
function show(type) {
    let box = document.getElementById("details");

    if(type === "attendance") {
        box.innerHTML = "<h2>Attendance</h2><p>85%</p>";
    }

    else if(type === "progress") {
        box.innerHTML = "<h2>Progress</h2><p>Good 👍</p>";
    }

    else if(type === "marks") {
        box.innerHTML = "<h2>Marks</h2><p>DMGT:80 DLCO:75 DTI:90</p>";
    }
}
function go(page) {
    window.location.href = page;
}