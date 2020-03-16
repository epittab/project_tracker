import React from 'react';
import Link from 'next/link';

class Nav extends React.Component{

    render(){
        //render method should return JSX
        return(
            <div className = 'Nav'>
                <ul>
                    <li><Link href='/'><a>Home</a></Link></li>
                    <li><Link href='/about'><a>About</a></Link></li>
                </ul>
            </div>
        )
    }
}

export default Nav;