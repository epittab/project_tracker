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
                    *{
                        margin: 0;
                        padding: 0;
                        box-sizing: border-box;
                    }
                    div, ul {
                        
                        width: 100%;
                    }
                    li {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        
                        list-style: none;
                        width: 100%;
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
                <div className='Project-table'>
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

                        .ProjectList {
                            display: flex;
                            flex-direct: column;
                            align-items: center;
                            justify-content: center;
                            
                            width: 100%;
                        }

                        .Project-table {
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            justify-content: center;
                            width: 100%;
                        }

                        button {
                            height: 3rem;
                            width: 150px;
                            border-radius: 3px;
                            font-size: 1.2rem;

                            background-color: orange;
                        }
                        
                    `}
                </style>
            </div>
        )
    }
}

export default ProjectList;