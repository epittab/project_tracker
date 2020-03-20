import React from 'react';
import fetch from 'isomorphic-unfetch';

import {apiKey} from '../apikey'

class Weather extends React.Component{

    static defaultProps = {
        name: "Enrique"
    }

    constructor(props){
        super(props);

        this.state = {
            zipCode: `22602`,
            countryCode: 'us',
            units: 'imperial',
            isLoaded: false,
            data: {
                name: "",
                initial: "",
            },
        }       
     
       
    }

    
    componentDidMount(){
        //useful for Async functions 
        this.getWeather().then( ( data ) => {
            this.setState({
                ...this.state,
                isLoaded: true,
                data: data
            })
        });
        //runs after component renders
        console.log("component did mount")
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        //not in use
        console.log("component did update")
    }
    
  

    async getWeather(){
        let APIkey = apiKey.weatherApiKey;
        let URL = `http://api.openweathermap.org/data/2.5/weather?zip=${this.state.zipCode},${this.state.countryCode}&appid=${APIkey}&units=${this.state.units}`;
        try {
            const res = await fetch(URL);
            if (res.ok) {
                const data = await res.json();
                console.log(data)
                return data
            }
            throw new Error('Error Message');    
        }
        catch(err){
            console.log(err)
        }
    }

    renderWidget(){
        return(
            <div id='weather-wrapper'>
                <h3 className='weather-title'>City: {this.state.data.name}</h3>
                <p className='weather-detail'>Current Temperature: {this.state.data.main.temp} F</p>
                <p className='weather-detail'>Weather: {this.state.data.weather[0].main}</p>
                <p className='weather-detail'>Humidity: {this.state.data.main.humidity}</p>
                <p className='weather-detail'>Wind Speed: {this.state.data.wind.speed}</p>
            </div>
        )
    }
    

    render(){
        console.log("rendered")
        //render method should return JSX
        return(
            <div className = 'Weather'>
                
                <div>
                    <h2> Weather </h2>
                    <p> - List types of consults</p>
                    <p> - display retrieved information graphically </p>
                    <div> { this.state.isLoaded ? this.renderWidget() : 'Loading...' } </div>

                    <br></br> 

                    <p></p>
                    
                        <input id='zipCode-targeted'
                            
                            type = 'text'
                            name='zipCode'
                            value={this.state.zipCode}
                            ></input>
                            <br></br>
                        <button className='zipCode-btn'>Submit</button>
                
                    

                    <br></br> 

                    


                </div>

                <style jsx>
                    {`
                        *{
                            margin: 0;
                            padding: 0;
                            box-sizing: border-box;
                            font-family: sans-serif;
                        }

                        .Weather{
                            margin-top: 2rem;
                            padding-top: 1rem;
                            padding-bottom: 1rem;
                            background-color: rgba(230, 230, 230, .8);
                            box-shadow: 3px 3px 3px 3px rgba(180, 180, 180, .6), 
                                -3px -3px 3px 3px rgba(250, 250, 250, .8);
                            border-radius: 5px;
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            justify-content: center;
                        }

                        #weather-wrapper{

                        }

                        #weather-title {

                        }

                        .weather-details{

                        }

                        .zipCode-btn{

                        }

                    `}
                </style>
            </div>
        )
    }
}

export default Weather;