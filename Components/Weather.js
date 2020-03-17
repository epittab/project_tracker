import React from 'react';
import fetch from 'isomorphic-unfetch';


class Weather extends React.Component{

    static defaultProps = {
        name: "Enrique"
    }

    constructor(props){
        super(props);

    }

    
    async getWeather(){
        let APIkey = `47223e8adfa0691808af2ddf8d58fed3`;
        let zipCode = `22602`;
        let countryCode = `us`;
        let URL = `http://api.openweathermap.org/data/2.5/weather?zip=${zipCode},${countryCode}&appid=${APIkey}`;

        try {
            const res = await fetch(URL);
            if (res.ok) {
                const data = await res.json();
                console.log(data)
                return {weat: data.coord}
            }
            throw new Error('Error Message');    
        }
        catch(err){
            console.log(err)
        }
    }

    render(){
        //render method should return JSX
        return(
            <div className = 'Weather'>
                
                <div>
                    <h1> Weather </h1>
                    <p> - List types of consults</p>
                    <p> - display retrieved information graphically </p>
                   
                    <p> {console.log(this.getWeather())} </p>
                </div>

                <style jsx>
                    {`
                        *{
                            margin: 0;
                            padding: 0;
                            box-sizing: border-box;
                        }

                        .Weather{
                            background-color: rgba(160, 180, 230, .8)
                        }
                    `}
                </style>
            </div>
        )
    }
}

export default Weather;