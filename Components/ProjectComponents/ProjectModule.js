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
       
        //render method should return JSX and styling
        return(
            <div className = 'ProjectModule'>
                  
                  <div className='Proj-module-search'>
                    <h2>Search Projects</h2>
                    <div className='Proj-module-search-bar'>
                        <input id='proj-search-input' 
                            placeholder="Search..."></input>
                        <div id='search-btn'>S</div>
                    </div>
                    
                  </div>

                    <div className='Proj-module-tabs'>
                        <nav>
                            <ul className='Proj-module-tabs-menu'>
                                <li value="2" onClick={this.handleClick}>New Project</li>
                                <li value="1" onClick={this.handleClick}>View/Edit Project</li>
                            </ul>
                        </nav>
                    </div>
                    
                    <div className='Proj-module-content'>
                    { this.state.isShowing === 1 ? <ProjectList projects={projects_array}/> :  <ProjectTemplate /> }
                    </div>
                    

            
                <style jsx>
                    
                    {`

                        .ProjectModule {
                            
                            display: flex;
                            flex-direction: column;
                            align-items: center;

                            border-radius: 3px;
                            color: rgba(250, 250, 250, .9);

                            margin-top: .5rem;
                            

                            width: 100%;

                           
                        }

                        .Proj-module-search {
                            background-color: rgba(0, 50, 30, .8);

                            display: flex;
                            flex-direction: row;

                            align-items: center;
                            justify-content: space-between;

                            height: 4rem;
                            width: 100%;
                            
                          
                            
                            margin-bottom: .5rem;
                        }

                        .Proj-module-search h2 {
                            padding-left: 3rem;
                            padding-right: 3rem;
                        }

                        .Proj-module-search-bar {
                            display: flex;
                            flex-direction: row;
                            align-items: center;
                            justify-content: center;
                            margin-right: 3rem;
                        }

                        .Proj-module-search-bar input {
                            height: 2rem;
                        }

                        .Proj-module-search-bar div {
                            margin-left: .2rem;
                            border-radius: 3px;
                            height: 2.3rem;
                            width: 2.3rem;
                            text-align: center;
                            line-height: 2.3;
                            cursor: pointer;

                            color: rgba(0, 50, 30, .8);
                            background-color: rgba(250, 250, 250, .9);
                        }

                        .Proj-module-tabs {
                            width: 100%;
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
                            color: rgba(0, 50, 30, .8);
                        }

                        .Proj-module-tabs-menu li:hover {
                            color: rgba(230, 230, 230, 1);
                        }

                        #proj-search-input {
                            height: 2rem;
                            width: 300px;
                            font-size: 1.2rem;
                        }

                        .Proj-module-content {
                            width: 90%;
                            height: 600px;
                            color: rgba(0, 50, 30, .8);

                            display: flex;
                            flex-direction: column;

                            align-items: center;
                            justify-content: center;


                        }

                       
                    `}
                </style>
            </div>
        )
    }
}

export default ProjectModule;