import React from 'react';

class Weather extends React.Component{

    async getWeather(){

    }

    render(){
        //render method should return JSX
        return(
            <div className = 'Weather'>
                
                <div>
                    <h1> Weather </h1>
                    <p> - List types of consults</p>
                    <p> - display retrieved information graphically </p>
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