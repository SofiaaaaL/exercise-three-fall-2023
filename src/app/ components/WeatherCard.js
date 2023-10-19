"use-client"
import styles from "./WeatherCard.module.css";
import WeatherIcon from "./WeatherIcon";

const WeatherCard = ({
    cityName,
    cloudiness,
    currentTemperature,
    highTemperature,
    huimidity,
    lowTemperature,
    weatherType,
    windSpeed,
    
}) => (
    <div className={styles.WeatherCardWrapper} style={{ backgroundColor: `rgba(0,0,0,0.${cloudiness})` }}>
        
        <div className = {styles.WeatherCardImage}>
            <WeatherIcon weatherType={weatherType}/>
        </div>
        
        <div className={styles.WeatherCardContent}>
            <h2>{cityName}</h2>
            <p>Current Temperature: {currentTemperature}</p>
            <div className={styles.WeatherCardDetails}>
                <p>Weather Type: {weatherType}</p>
                <p>Highest Temperature: {highTemperature}</p>
                <p>Lowest Temperature: {lowTemperature}</p>
                <p>Cloudiness: {cloudiness}</p>
                <p>Humidity: {huimidity}</p>
                <p>Wind Speed: {windSpeed}</p>
            </div>
        </div>
    </div>
)

export default WeatherCard;