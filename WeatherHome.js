

/*import 'bootstrap/dist/css/bootstrap.min.css';*/

import './Weather.css'
import React, { useState } from 'react';

import axios from 'axios';




const WeatherHome = ({img}) => { 

  

 const [myimg , setmyimg] =useState([{
 mist : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhXDVPVbHfc5F_m0IjJnMTdUQ0I40JVR02WEXdIOjWrzZGdIhikSUM2uG2XsvqOp76zoU&usqp=CAU",
 clearsky : "https://c8.alamy.com/comp/2CFD3T8/simple-useful-bright-sun-and-cloud-logo-a-clear-sky-icon-design-vector-graphic-concept-illustrations-2CFD3T8.jpg",
 haze : "https://cdn-icons-png.flaticon.com/512/1779/1779862.png",
 smoke: "https://images.creativefabrica.com/products/previews/2023/10/31/zvNAvSlH9/2XWs34uZNLY1KR0XCjkQTJ1AIvC-mobile.jpg",
 brokencloud : "https://static.thenounproject.com/png/3267952-200.png",
 NotF: "https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg"
                                                                          }])

  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('');
  const [apiKey] = useState('8bf647380175d67439e93ef59b2e26f6');



  const getWeatherData = async () => {   
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
      );
      setWeatherData(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }

    setCity("")
  };


    return (
    <div className='Background'>
       <div className='secondDiv'>  
      <h2 style={{color: "white", marginLeft:"70px"}} >My Weather App</h2>

      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={getWeatherData}>FIND</button>

  

      { weatherData && (              
        <div>
          
          <h3>{weatherData.name}</h3>
       <div className='Temp' > <p >Temperature: {((weatherData.main.temp)-273.15).toFixed(2)} °C</p>
       <p>Weather Type: {weatherData.weather[0].description}</p> </div>

<div className='ImgandWeatherType' >  

  
  {myimg.map((myimg)=>(



<> {



     weatherData.weather[0].description == "mist" ? 
     <> <p className='WeatherPosition'>  </p> <img src={myimg.mist} alt={"MIST"} 
      ></img>  </> :
    weatherData.weather[0].description == "clear sky" ? 
     <> <p className='WeatherPosition' >  </p> <img src={myimg.clearsky} alt={"CLEAR SKY"} 
      ></img>  </> : 
    weatherData.weather[0].description == "haze" ?
     <> <p className='WeatherPosition' >   </p> <img src={myimg.haze} alt={"HAZE"} 
     ></img>  </>:
    weatherData.weather[0].description == "broken clouds" ?
     <><p className='WeatherPosition' >  </p> <img src={myimg.brokencloud} alt={"BROKEN CLOUD"} 
     ></img>   </> : 
   weatherData.weather[0].description == "smoke" ?
    <><p className='WeatherPosition' > </p> <img src={myimg.smoke} alt={"SMOLE"} 
    ></img> </> : <p className='WeatherPosition'> <img src={myimg.NotF} alt={"NOTHING FOUND"}></img>  </p>
   
    
    }   </> 

))}


</div>

    </div>  )} 

     </div>

     </div>
  );
};

   
export default WeatherHome;