const btnNode = document.querySelector(".btn")
const outputWindowNode=document.querySelector(".outputwindow")
const outputCoords=document.querySelector(".outputcoords")

btnNode.addEventListener('click', useRequest)

function useRequest () {

  outputWindowNode.innerHTML=`Размер экрана составляет ${window.screen.width} px  в ширину и  ${window.screen.height} px в высоту`
   if ("geolocation" in navigator){
   navigator.geolocation.getCurrentPosition(position,error)
  }else{
    outputCoords.innerHTML="Браузер не поддерживает геолокацию"
  }
  function position (position){
    outputCoords.innerHTML=`Ваше местоположение: широта - ${position.coords.latitude}°, долгота - ${position.coords.longitude}°`
  }

  function error (){
    outputCoords.innerHTML=`Информация о местоположении недоступна`
  }
}

