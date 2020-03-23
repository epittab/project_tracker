import React from 'react';
import Head from 'next/head';
import Nav from './Nav.js';


class Layout extends React.Component{
    constructor(props) {
        super(props);

    }

    render(){
        return(
            <div className = 'Layout'>
                <Head>
                    <title>Sofo</title>
                </Head>
                <Nav />
                {this.props.children}
            <style jsx>
                {`
                *{
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                    font-family: sans-serif;
                    background-color: rgba(230, 230, 230, .8);
                }
              
                `}
            </style>
            </div>
           
        );
    }

}

export default Layout;