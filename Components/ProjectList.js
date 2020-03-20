import React from 'react';
import fetch from 'isomorphic-unfetch';

class ProjectList extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            projectsList: [],
            isLoggedon: false
        }       

        this.login = this.login.bind(this)
       
    }

    
    componentDidMount(){
        //useful for Async functions 

        
        //runs after component renders
        console.log("component did mount")
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        //not in use
        console.log("component did update")
    }

    login(){
        if (this.state.isLoggedon) {
            this.setState({
                ...this.state,
                isLoggedon: false
            })
        } else {
            this.setState({
                ...this.state,
                isLoggedon: true
            })
        }
    }    

    render(){
        console.log("rendered")
        //render method should return JSX and styling
        return(
            <div className = 'ProjectList'>
                
                <div>
                    <h1> Projects </h1>
                    <p> You have { this.state.isLoggedon ? `${this.props.projects.length} project(s)` : 'No Projects'} </p>
                    
                    <button onClick={this.login}>{ this.state.isLoggedon ? `Log Off` : `Log On`}</button>
                   


                </div>
            
                <style jsx>
                    
                    {`
                        *{
                            margin: 0;
                            padding: 0;
                            box-sizing: border-box;
                        }

                        .ProjectList{
                            background-color: rgba(160, 180, 230, .8)
                        }
                    `}
                </style>
            </div>
        )
    }
}

export default ProjectList;