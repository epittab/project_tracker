import React from 'react';
import Link from 'next/link';

class Nav extends React.Component{

    render(){
        //render method should return JSX
        return(
            <nav className = 'Nav'>
                <ul>
                    <li><Link href='/'><a>Home</a></Link></li>
                    <li><Link href='/projects'><a>Projects</a></Link></li>
                    <li><Link href='/about'><a>About</a></Link></li>
                </ul>
                <style jsx>
                    {`
                    *{
                        margin: 0;
                        padding: 0;
                        box-sizing: border-box;
                    }
                    .Nav {
                        background-color: rgba(200, 200, 200, 1);

                    }
                    ul {
                        display: flex;
                        flex-direction: row;
                        list-style: none;
                    }
                    a{
                        text-decoration: none;
                        color: black;
                        margin-left: 1rem;

                    }
                    `}
                </style>
            </nav>
        )
    }
}

export default Nav;