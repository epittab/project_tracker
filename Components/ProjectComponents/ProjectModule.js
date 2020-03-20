import React from 'react';
// import uuid from 'react-uuid'
import fetch from 'isomorphic-unfetch';
import ProjectList from './ProjectList';
import ProjectTemplate from './ProjectTemplate';
import {projects_array} from '../../sample_projects';

class ProjectModule extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            isShowing: 1,
            isLoggedon: false
        }       

        this.handleClick = this.handleClick.bind(this);
       
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

    handleClick(e){
        this.setState({
            ...this.state,
            isShowing: e.target.value
        })
        console.log(e.target.value);
    }

    render(){
        console.log("rendered")
        {
            switch (this.state.isShowing) {

                case 1:

                break;
                case 2:

                break;
                default:

            }

        }
        //render method should return JSX and styling
        return(
            <div className = 'ProjectModule'>
                  
                  <div className='Proj-module-search'>
                    <h2>Search Projects</h2>
                    <input id='proj-search-input' 
                            placeholder="Search..."></input>
                  </div>

                    <div className='Proj-module-tabs'>
                        <nav>
                            <ul className='Proj-module-tabs-menu'>
                                <li value="1" onClick={this.handleClick}>New Project</li>
                                <li value="2" onClick={this.handleClick}>View/Edit Project</li>
                            </ul>
                        </nav>
                    </div>
                    
                    { this.state.isShowing === 1 ? <ProjectList projects={projects_array}/> :  <ProjectTemplate /> }

            
                <style jsx>
                    
                    {`

                        .ProjectModule {
                            background-color: rgba(0, 50, 30, .8);
                            display: flex;
                            flex-direction: column;

                            border-radius: 3px;
                            color: rgba(250, 250, 250, .9);

                            margin-top: 2rem;
                            padding: 2rem 1rem 2rem 1rem;


                           
                        }

                        .Proj-module-search {
                            display: flex;
                            flex-direction: row;

                            align-items: center;
                            justify-content: space-between;

                            
                            margin-right: 50px;
                            margin-left: 50px;
                        }


                        .Proj-module-tabs {
                            margin-top: 2rem;
                            margin-bottom: 2rem;
                        }

                        .Proj-module-tabs-menu {
                            display: flex;
                            flex-direction: row;

                            align-items: center;
                            justify-content: space-around;

                            
                            margin-right: 50px;
                            margin-left: 50px;

                            list-style: none;
                            cursor: pointer;
                        }

                        .Proj-module-tabs-menu li {
                            color: rgba(230, 230, 230, .7);
                        }

                        .Proj-module-tabs-menu li:hover {
                            color: rgba(230, 230, 230, 1);
                        }

                        #proj-search-input {
                            height: 2rem;
                            width: 300px;
                            font-size: 1.2rem;
                        }

                       
                    `}
                </style>
            </div>
        )
    }
}

export default ProjectModule;