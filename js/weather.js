let weatherHtml=document.getElementById('weather');

async function weather(){
let response = await fetch('https://www.el-tiempo.net/api/json/v2/provincias/08/municipios/08019',
);
let data = await response.json();
console.log(data);
weatherHtml.innerHTML = ('Fecha de hoy: '+data.fecha+'<br/>'+
                         'Temperatura Actual: '+data.temperatura_actual+'℃'+'<br/>'+
                         'Temperatura Mínima: '+data.temperaturas.min+'℃'+'<br/>'+
                         'Temperatura Máxima: '+data.temperaturas.max+'℃'+'<br/>'+
                          'Temporal Actual: '+data.stateSky.description+'<br/>'+
                          'Lluvia: '+data.lluvia+'%'+'<br/>'+
                          'Humedad: '+data.humedad+'%'+'<br/>'+
                          'Viento: '+data.viento+'%'+'<br/>'
                          );
}






