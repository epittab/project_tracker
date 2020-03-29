import React from 'react';
import Link from 'next/link';

import ProjectDetail from '../PDetailComponents/ProjectDetail';
import {projects_array} from '../../sample_projects';



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

        return (
            <div>
                <div className='ProjectOverview'>

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


                    `}
                    
                </style>
            </div>
            
          
        );
    }
}

export default ProjectOverview;