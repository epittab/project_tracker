import React from 'react';
import Link from 'next/link';

import ProjectDetail from '../PDetailComponents/ProjectDetail';
import {projects_array} from '../../sample_projects';

import CreateTask from '../TaskComponents/CreateTask';


class ProjectOverview extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isLoaded: false,
            taskList: [],
        }
        this.filteredArray = projects_array.filter((project) => project.projectID == this.props.id)
    }

    componentDidMount(){
        if (this.filteredArray.length > 0) {
            this.setState({
                isLoaded: true,
                taskList: [...this.filteredArray[0].taskList],
            })
        }
        
    }

    createList(){
        console.log(this.state.taskList)
        return (
            <div className='tasks'>
                {this.state.taskList.map((task)=>
                   < ProjectDetail id={this.props.id} task={task} />
                )}
                
            </div>
        );
    }

    render(){
        console.log(this.props.id)
        return (
            <div>
                <div className='ProjectOverview'>

                    
                    <Link href={{pathname: '/tasks', query: {id: this.props.id}}}><div id='create_task_btn'><span>+</span></div></Link>

                    

                    <div>{this.state.isLoaded ? this.createList() : <p>Loading...</p>}</div>                   

                </div>  
                <style jsx>
                    {`
                    .ProjectDetail {
                        display: flex;
                        flex-direction: column;

                        
                        margin: .5rem 3rem .5rem 3rem;

                        background-color: white;
                        border-radius: 3px;
                    }

                    .detail-title {
                        margin-left: 3rem;

                       
                    }

                    .detail-content {
                        display: flex;
                        flex-direction: row;

                        margin-left: 3rem;
                       
                    }

                    .detail-content p {
                        margin-left: 3rem;   
                    }

                    #create_task_btn {
                        height: 2rem;
                        width: 2rem;
                        border-radius: 50%;

                        background-color: rgba(230, 210, 104, .9);
                        transition: ease-in .25s;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        
                        cursor: pointer;
                    }

                    #create_task_btn:hover {
                        transition: ease-in .25s;
                        border-color: solid rgba(64, 64, 64, .4) 1px;
                        background-color: rgba(220, 180, 84, .9);
                        
                    }

                    #create_task_btn span {
                        
                        color: white;
                    
                    }

                   

                    `}
                    
                </style>
            </div>
            
          
        );
    }
}

export default ProjectOverview;