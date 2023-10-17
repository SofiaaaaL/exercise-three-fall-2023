'use-client';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBolt,
    faCloud,
    faUmbrella,
    faSnowflake,
    faSun,
} from "@fortawesome/free-solid-svg-icons"

const WeatherIcon = ({weatherType}) => {
    switch (weatherType) {
        case "Clouds":
            return <FontAwesomeIcon icon={faCloud} />;
        case "Drizzle":
        case "Rain":
            return <FontAwesomeIcon icon={faUmbrella} />;
        case "Snow":
            return <FontAwesomeIcon icon={faSnowflake} />;
        case "Clear":
            return <FontAwesomeIcon icon={faSun} />;
        default:
            return <FontAwesomeIcon icon={faCloud} />;
    }
}

export default WeatherIcon;
