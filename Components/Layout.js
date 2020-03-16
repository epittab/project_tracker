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
                    <title>Stoiflo</title>
                </Head>
                <Nav />
                {this.props.children}
            </div>
        );
    }

}

export default Layout;