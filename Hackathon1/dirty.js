angular.module("DirtyDoppler",[])
    .controller("DirtyController",dcontroller);

    dcontroller.$inject = ['$http'];

    function dcontroller($http){
        var dCtrl = this;

        dCtrl.greeting = " Dirty Doppler ";
        dCtrl.icon = null;

        dCtrl.getCity = function(){
          console.log("Getting your fucking weather...");
          $http.get('http://api.openweathermap.org/data/2.5/weather?q=' + dCtrl.city + '&APPID=a3112519f4fc305fbf97e9003dc0a402' + '&units=imperial')
          .then(function(response){
            console.log("response from API:", response.data);
            dCtrl.yoCity = response.data;
            dCtrl.icon = 'http://openweathermap.org/img/w/' + dCtrl.yoCity.weather[0].icon + '.png';
            dCtrl.temperature = dCtrl.yoCity.main.temp;
            dCtrl.tDescript = dCtrl.yoCity.weather[0].description;
            switch (dCtrl.yoCity.weather[0].icon) {
              case '01d' :
                  dCtrl.dirtyPhrase = '"Get off your lazy ass and go outside" -Abraham Lincoln'; //clear sky
                  break;
              case '02d' :
                  dCtrl.dirtyPhrase = '"Only a couple clouds, stop touching yourself and touch the world" -Jesus'; //few clouds
                  break;
              case '03d' :
                  dCtrl.dirtyPhrase = '"Scat is not cool, but the clouds seem to be doing it" -Hank Hill'; //scattered clouds
                  break;
              case '04d' :
                  dCtrl.dirtyPhrase = '"It is dreary outside, like your future" -Donald Trump'; //broken clouds
                  break;
              case '09d' :
                  dCtrl.dirtyPhrase = '"It is wet out, but do not be a bitch" -FEMA'; //shower rain
                  break;
              case '10d' :
                  dCtrl.dirtyPhrase = '"It is raining dicks and tits outside. Wear a raincoat" -Some girl'; //rain
                  break;
              case '11d' :
                  dCtrl.dirtyPhrase = '"Time to build an arc, bitch" -Noah'; //thunderstorm
                  break;
              case '13d' :
                  dCtrl.dirtyPhrase = '"It is mothafuckin Jon Snowing outside!" -Ned Stark'; //snow
                  break;
              case '50n' :
                  dCtrl.dirtyPhrase = '"There is a drizzle fo shizzle" -Snoop'; //mist
              default:
                  "That's not a real icon code, bitch."
                  break;
            }  //end switch statement

          }); //end then promise
    } //end getCity function
}



/// Note: API we worked with does not support "https" links -must be http, so project will not work in cloud9 but still functions in other editors