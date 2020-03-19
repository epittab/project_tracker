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
            isLoaded: false,
            data: {
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
        let URL = `http://api.openweathermap.org/data/2.5/weather?zip=${this.state.zipCode},${this.state.countryCode}&appid=${APIkey}`;

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
            <div>
                <h1>{this.state.data.base}</h1>
            </div>
        )
    }
    

    render(){
        console.log("rendered")
        //render method should return JSX
        return(
            <div className = 'Weather'>
                
                <div>
                    <h1> Weather </h1>
                    <p> - List types of consults</p>
                    <p> - display retrieved information graphically </p>
                    <p> hello { this.state.isLoaded ? this.renderWidget() : this.state.data.initial} </p>

                    <br></br> 

                    <p>Choose a new zip code: </p>
                    <input name='zip'></input>

                    <br></br> 

                    <button>Submit</button>


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