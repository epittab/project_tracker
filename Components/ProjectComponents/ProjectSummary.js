import React from 'react';
import Link from 'next/link'


class ProjectSummary extends React.Component{

    render(){
        return(
            <div className='ProjectSummary'>

                <p><strong>Project:</strong> {this.props.projectID}</p>
                <p>Project Owner: {this.props.projectOwner}</p>
                <p>Project Title: {this.props.projectTitle}</p>
                <Link href = {{pathname: '/project', query: {id: this.props.projectID}}}><a>View</a></Link>


                <style jsx>
                {`
                    .ProjectSummary {
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        justify-content: center;

                        height: 2rem;
                        width: 90%;
                        margin-top: 1rem;
                        margin-bottom: 1rem;

                        background-color: rgba(0, 50, 30, .8);
                        color: whitesmoke;

                        box-shadow: 3px 3px 3px 3px rgba(15, 75, 10, .4), 
                            -3px -3px 3px 3px rgba(60, 120, 50, .3);
                        border-radius: 3px;
                    }

                    .ProjectSummary:hover {
                        background-color: rgba(35, 95, 35, .4);
                        cursor: pointer;
                        box-shadow: 3px 3px 3px 3px rgba(15, 75, 10, .4), 
                        -3px -3px 3px 3px rgba(60, 120, 50, .3);
                    }

                    p { 
                        width: 25%;
                    }

                    a{
                        text-decoration: none;
                        color: whitesmoke;
                    }
                `}
                </style>
            </div>

           
        );
    }
}

export default ProjectSummary;