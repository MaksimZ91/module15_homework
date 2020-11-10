const btnNode=document.querySelector(".btn");
const btnGeoNode=document.querySelector(".btngeo");
const inputNode=document.querySelector(".input");
const outputNode=document.querySelector(".output");
const infoNode=document.querySelector(".info");

btnNode.addEventListener('click', sendMassage);
btnGeoNode.addEventListener('click', sendGeo);

const websocket = new WebSocket('wss://echo.websocket.org/');

websocket.onmessage=(event)=>{
  if (event.data===link)return
  addMessage (event.data,true)}

let link=""
function position (position){
   link=`https://www.openstreetmap.org/#map=11/${position.coords.latitude}/${position.coords.longitude}`
   let geo=`<a href="${link}">Гео-локация</a>`
   addMessage (geo,false)
   websocket.send(link)
  }
  
websocket.onopen=infoNode.innerHTML="Соединение установлено"

function error (){
    infoNode.innerHTML="Информация о местоположении недоступна"
  }

function sendMassage (){
  if(!inputNode.value)return
  websocket.send(inputNode.value)
  addMessage(inputNode.value,false)
  inputNode.value=""
  }
  
  
function addMessage (message,isRecieved){
outputNode.innerHTML+=`<p class="${isRecieved? "recieved" : "sent"}">${message}</p>`}


function sendGeo(){
if ("geolocation" in navigator){
navigator.geolocation.getCurrentPosition(position,error)
}else{
  infoNode.innerHTML="Браузер не поддерживает геолокацию"}
}

