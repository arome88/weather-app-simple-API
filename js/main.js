document.querySelector('button').addEventListener('click', getTemperature);

    function getTemperature() {
          let city = document.getElementById('city').value;
          let state = document.getElementById('state').value;
        const url = (`https://api.weatherbit.io/v2.0/current?city=${city}&state=${state}&key=9877b787eec0403bb7ae761fd4dc5f2b&include=minutely`)
        fetch (url)
            .then(res => res.json()) //response to JSON?
            .then(data => {
                console.log(data.data[0].app_temp);
                let celsius = data.data[0].app_temp;
                let fahrenheit = (celsius * 1.8) + 32;
                document.querySelector('h2').innerText = `${fahrenheit}°F`;

                console.log(data)
            })

            .catch(err => {
                console.log('error ${err}')
            })
    }

  
