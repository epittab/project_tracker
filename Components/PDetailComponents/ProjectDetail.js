import React from 'react';
import Link from 'next/link';


class ProjectDetail extends React.Component {


    render(){
        
        return (
            <div>
                <div className='ProjectDetail'>
                   <div className='detail-title'>
                        <h3>Task Title: {this.props.task.taskName}</h3>
                   </div>
                    <div className='detail-content'>
                        <p>ID: {this.props.task.taskid}</p>
                        <p>Description: {this.props.task.taskDef}</p>
                        <p>Responsable: {this.props.task.taskLeader}</p>
                        
                    </div>
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

export default ProjectDetail;