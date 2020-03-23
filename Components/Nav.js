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
                <div className='spacer'></div>
                <div className='user-content'>
                    <ul>
                        <li>User Name</li>
                        <li>Icon</li>
                    </ul>
                </div>
                <style jsx>
                    {`
                    *{
                        margin: 0;
                        padding: 0;
                        box-sizing: border-box;
                    }
                    .Nav {
                        background-color: rgba(10, 60, 20, 1);
                        height: 3rem;

                        display: flex;
                        flex-direction: row;
                       
                        align-items: center;
                        justify-content: center;


                    }
                    .spacer{
                        width: 60%;
                    }

                    .user-content{
                        color: whitesmoke;
                    }
                    ul {
                        display: flex;
                        flex-direction: row;
                        list-style: none;
                        align-items: left;
                      
                    }

                    a {
                        text-decoration: none;
                        color: rgba(240, 240, 240, .7);
                        margin-left: 1rem;
                    }

                    a:hover {
                        color: rgba(240, 240, 240, 1);
                    }


                    `}
                </style>
            </nav>
        )
    }
}

export default Nav;