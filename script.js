let btn=document.querySelector("#btn")
let content=document.querySelector("#content")
let voice=document.querySelector("#voice")

function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    text_speak.lang="hi-GB"
    window.speechSynthesis.speak(text_speak)
}

function wishMe(){
    let day=new Date()
    let hours= day.getHours()      
    if(hours>=0 && hours<12){
        speak("Good Morning madam")
    }
    else if(hours>=12 && hours<16){
        speak("Good Afternoon madam")
    }
}
window.addEventListener('load',()=>{
    wishMe()
})
let SpeechRecognition= window.SpeechRecognition || window.webkitSpeechRecognition
let recognition =new SpeechRecognition()
recognition.onresult=(event)=>{
     let currentIndex=event.resultIndex
     let transcript =event.results[currentIndex][0].transcript
     content.innerText=transcript
    takeCommand(transcript.toLowerCase())
}

btn.addEventListener("click",()=>{
    recognition.start()
    btn.style.display="none"
    voice.style.display="block"

})
function takeCommand(message){
     btn.style.display="flex"
     voice.style.display="none"
    if(message.includes("hello")||message.includes("hey")){
        speak("hello madam ,what can i help you?")
    }
    else if(message.includes("who are you")){
        speak("i am virtual assistant,created by Muskan Jaiswal and Meena Yadav")
    }
    else if(message.includes("open youtube")){
        speak("opening youtube...")
        window.open("https://www.youtube.com","_blank")
    }
    else if(message.includes("open google")){
        speak("opening google...")
        window.open("https://www.google.com","_blank")
    }
    else if(message.includes("Okay Bye Sim Sim")){
        speak("Bye Madam,Have a nice day")
    }
    else if(message.includes("open calculator")){
        speak("opening calculator....")
        window.open("calculator://")
    }
    else if(message.includes("open whatsapp")){
        speak("opening whatsapp ....")
        window.open("whatsapp://")
    }
    else if(message.includes("open facebook")){
        speak("opening facebook ....")
        window.open("facebook://")
    }
    else if(message.includes("open instagram")){
         speak("opening instagram....")
         window.open("instagram://")
    }
    else{
        let finalText="Sorry, I didn't understand that .I can give you information about python language." 
        speak(finalText)
        window.open('https://www.google.com/search?q=information about python language')
    }
    
}
