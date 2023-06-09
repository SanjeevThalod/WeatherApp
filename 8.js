var w_image = document.getElementById('image');
var degree = document.getElementById('degree');
var text = document.getElementById('text');
var h_text = document.getElementById('h-text');
var w_text = document.getElementById('w-text');
var input = document.getElementById('in');
var search = document.getElementById('search');
var cimage = document.getElementById('image');
var extra_details = document.getElementById('extra-details');
var details = document.getElementById('details');

let myObj = [];

search.addEventListener('click',function(e){
    var http = new XMLHttpRequest();
    http.onreadystatechange = function(){
        if(this.readyState == 4){
            var data = JSON.parse(this.responseText);
            console.log(data);
            if(data.error != undefined){
                w_image.innerHTML = `<img src="image/error.png" alt="">`
                cimage.classList.remove('none');
                details.classList.remove('none');
                extra_details.classList.add('none');
                degree.innerText = `404`;
                text.innerText = `Location NOT Found`;
            }else{
                if(data.current.is_day == 'no'){
                    w_image.innerHTML = `<img src="image/night.png" alt="">`;
                }else if(data.current.condition.text == 'Haze'){
                    w_image.innerHTML = `<img src="image/cloudy.png" alt="">`;
                }else if(data.current.condition.text == 'Sunny'){
                    w_image.innerHTML = `<img src="image/sun.png" alt="">`;
                }else if(data.current.condition.text == 'Cloudy'){
                    w_image.innerHTML = `<img src="image/cloudy (1).png" alt="">`
                }else if(data.current.condition.text == 'Rainy'){
                    w_image.innerHTML = `<img src="image/rain.png" alt="">`;
                }else if(data.current.condition.text == 'Snow'){
                    w_image.innerHTML = `<img src="image/snow.png" alt="">`;
                }else if(data.current.condition.text == 'Mist'){
                    w_image.innerHTML = `<img src="image/fog.png" alt="">`;
                }else{
                    w_image.innerHTML = `<img src="image/cloudy.png" alt="">`;
                }
                cimage.classList.remove('none');
                details.classList.remove('none');
                extra_details.classList.remove('none');
                degree.innerText = data.current.temp_c;
                text.innerText = data.current.condition.text;
                h_text.innerText = data.current.humidity;
                w_text = data.current.wind_kph;
                console.log(data.current);
                console.log(data[1]);
                console.log(data[2]);
            }
        }
    }
    http.open('GET','https://api.weatherapi.com/v1/current.json?key=894db0d316c041789ca54654230404&q='+input.value+'&aqi=no',true);
    http.send();
});
