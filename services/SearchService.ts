import {getWindow} from "./BrowserService";

export const validateAndExecuteSearch = (input: any) => {
    try {
        if (!input) {
            throw "Please insert a valid city name and search again."
        } else {
            searchWeatherByLocation(input)
        }
    } catch (err) {
        alert(err);
        console.log(err);
    }
}

export const searchWeatherByLocation = (input: string) => {
    const windowLocation = getWindow().location;
    windowLocation.assign('/weather/' + input);
}