import React from 'react';
import fetch from 'isomorphic-unfetch';
import ProjectSummary from './ProjectSummary';

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

    renderProjects(){
        return(
            <div>
                 <ul>
                        {this.props.projects.map(project=>
                            <li><ProjectSummary 
                                key={project.projectID}
                                projectID={project.projectID} 
                                projectOwner={project.projectOwner} 
                                projectTitle={project.projectTitle}/></li>
                            )}
                </ul>
                <style jsx>
                    {`
                    li {
                        list-style: none;
                    }
                    `}
                </style>
                

            </div>
           
        );
    }

    render(){
      
        //render method should return JSX and styling
        return(
            <div className = 'ProjectList'>
                
                <div>
                    <h1> Projects </h1>
                   
                    { this.state.isLoggedon ? this.renderProjects() : ''}

                    <button onClick={this.login}>{ this.state.isLoggedon ? `Log Off` : `Log On`}</button>
                   

                </div>
            
                <style jsx>
                    
                    {`
                        *{
                            margin: 0;
                            padding: 0;
                            box-sizing: border-box;
                        }
                        
                    `}
                </style>
            </div>
        )
    }
}

export default ProjectList;