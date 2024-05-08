

function verClima(){

    fetch('https://www.meteosource.com/api/v1/free/point?place_id=punta-arenas&sections=daily&language=en&units=metric&key=0k7jt70yydsqsggjxqo9yz1o01070256eh9zua44').then(response => response.json())
    .then(data => {
      // Manejamos los datos recibidos


      RenderizarData(data.daily.data)

    })
    .catch(error => {

      console.error('Error al obtener usuarios:', error);

    });

}




function RenderizarData(datlins){

    const Diar = {
        "psbl_rain" : ["images/rain.png","Lluvioso"],
        "partly_sunny" : ["images/mist.png","Parcialmente soleado"],
        "mostly_cloudy" : ["images/clouds.png","Mayormente nubleado"],
        "rain_shower" : ["images/drizzle.png","LLuvia torrencial"],
        "light_rain" : ["images/rain.png","LLuvia"],
        "cloudy" : ["images/cloudy.png","Nublado"],
        "mostly_sunny" : ["images/mostlysunny.png","Mayormente soleado"]
    }
    

    datlins.forEach(dia => {

        console.log(dia)

        const UserDiv = document.createElement('div');

        UserDiv.className = 'cardDisplayableClimat';

        UserDiv.innerHTML = `

        <h2>${dia.day}</h2>
        <img src=${Diar[dia.weather][0]} alt=${Diar[dia.weather][1]} width="200" height="200">
        <h2>${Diar[dia.weather][1]}</h2>
        <h2>${dia.all_day.temperature} °C</h2>
        <p>Min ${dia.all_day.temperature_min} °C</p>
        <p>Max ${dia.all_day.temperature_max} °C</p>
        `;



        document.getElementById('ConsultaClima').appendChild(UserDiv)
    });
}




$(document).ready(function(){

    verClima();


    $('#Formerlor').submit(function(){




        if ($('#Name').val()!="" && $('#Mald').val()!="" && $('#NumTel').val()!="" && $('#Citi').val()!="" && $('#Corsultar').val()!=""){
            alert('REGISTRO INGRESADO CORRECTAMENTE!.')
        }else{
            event.preventDefault();

            alert('RELLENAR TODOS LOS CAMPOS CORRECTAMENTE.')



        }


    })

})


