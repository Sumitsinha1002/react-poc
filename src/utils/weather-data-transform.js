export const transformData = (dailyWeather) => {
  const usefulData = [];
  console.log(dailyWeather);
  const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  dailyWeather.daily.map((weather, index)=> {
    var currentDay = weather.sunrise === dailyWeather.current.sunrise;
    usefulData[index] = {
      day: weekday[new Date(weather.dt*1000).getDay()],
      weatherType: currentDay ? dailyWeather.current.weather[0].description : weather.weather[0].description,
      icon: currentDay ? dailyWeather.current.weather[0].id : weather.weather[0].id,
      tempMax: parseInt(weather.temp.max - 273.15),
      tempMin: parseInt(weather.temp.min - 273.15),
      currentTemp:  currentDay ? parseInt(dailyWeather.current.temp - 273.15) : '',
      humidity: weather.humidity,
      todayData: currentDay,
      dayOrNight: dailyWeather.current.weather[0].icon.includes('n')?'night-':'',
      windSpeed: weather.wind_speed+' km/h'
    }
  })
  console.log(usefulData);
  return usefulData;
}