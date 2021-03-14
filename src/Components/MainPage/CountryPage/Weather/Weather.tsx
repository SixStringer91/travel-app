import React from 'react';
import { Result, Spin, Space, Card } from 'antd';
import css from  './Weather.module.css'

const { Meta } = Card;

const getWeather = async (lang:string,capital:string) => {  
  console.log(capital)
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${capital}&lang=${lang ==='by'?'ua': lang}&appid=08f2a575dda978b9c539199e54df03b0&units=metric`;
  const res = await fetch(url);
  const data = await res.json(); 
  return {id:`owf-${data.weather[0].id}`, descrition: data.weather[0].description, temp: data.main.temp};
}

interface IWeather {
  lang:string,
  capital: string
}
interface IWeatherData {
  id: string;
  descrition: string;
  temp : number
}

const Weather = ({lang,capital}:IWeather) => {
const [{id,descrition,temp}, setWeather] = React.useState<IWeatherData>({id:'', descrition:'',temp:0})

React.useEffect(() => {
  getWeather(lang,capital).then((data:any) => {setWeather(data)
  })
},[lang])

  return (
    <Card
    style={{ width: 240, textAlign:'center', backgroundColor:'transparent', border:'none'}}
    cover={
      <div style = {{display:'flex',justifyContent:'center'}}>
      {id ? <i style = {{fontSize: '100px',color:`${(+(id.substring(4))>=800) ? '#FFA570' : '#bde0fe'}`}}  className={`${css.weatherIcon} ${css.owf} ${css[id]}`}/> : <Spin style = {{width:'100px'}} size="large" />}
      </div>
    }
  >
    <Meta title={descrition} description={`${temp} °C`} />
  </Card>

  )
}

export default Weather