import React from 'react';
// import uuid from 'react-uuid'
import fetch from 'isomorphic-unfetch';

class ProjectTemplate extends React.Component{

    constructor(props){
        super(props);

        this.state = {
                projectID: '',
                projectOwner: '',
                projectTitle: '',
                projectDesc: '',
                startDate: '',
                projectScope: '',
                createdOn: '',
            isLoggedon: false
        }       

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
       
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

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit(e){
        e.preventDefault();

        const createdDate = new Date();

        console.log(createdDate);

        const obj = {
                projectID: '1',
                projectOwner: this.state.projectOwner,
                projectTitle: this.state.projectTitle,
                projectDesc: this.state.projectDesc,
                startDate: this.state.startDate,
                projectScope: this.state.projectScope,
                createdOn: createdDate,
        }

        console.log(obj);

        /*
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
        */
    }    

    render(){
        console.log("rendered")
        //render method should return JSX and styling
        return(
            <div className = 'ProjectTemplate'>
                
               
                    <h1> Create a Project </h1>
                  
                    <form onSubmit = {this.handleSubmit}>
                        <label className="proj-details-class" htmlFor="new_proj_owner">Project Owner</label>
                        <input onChange={this.handleChange} 
                                id="new_proj_owner" 
                                name="projectOwner" 
                                value={this.state.projectOwner} 
                                type='text'></input>
                        <br></br>
                        <label className="proj-details-class" htmlFor="new_proj_title">Project Title</label>
                        <input onChange={this.handleChange} 
                                id="new_proj_title" 
                                name="projectTitle" 
                                value={this.state.projectTitle} 
                                type='text'></input>
                        <br></br>
                        <label className="proj-details-class" htmlFor="new_proj_desc">Project Desc</label>
                        <input onChange={this.handleChange} 
                                id="new_proj_desc" 
                                name="projectDesc" 
                                value={this.state.projectDesc} 
                                type='text'></input>
                        <br></br>
                        <label className="proj-details-class" htmlFor="new_proj_start_Date">Start Date</label>
                        <input onChange={this.handleChange} 
                                id="new_proj_start_Date" 
                                name="startDate" 
                                value={this.state.startDate} 
                                type='text'></input>
                        <br></br>
                        <label className="proj-details-class" htmlFor="new_proj_scope">Project Scope</label>
                        <input onChange={this.handleChange} 
                                id="new_proj_scope" 
                                name="projectScope" 
                                value={this.state.projectScope} 
                                type='text'></input>
                        <br></br>

                    <button className="proj-btn-class" onClick={this.handleSubmit}>Create Project</button>

                    </form>

               
            
                <style jsx>
                    
                    {`

                        .ProjectTemplate {
                            background-color: rgba(0, 50, 30, .8);
                            display: flex;
                            flex-direction: column;

                            border-radius: 3px;
                            color: rgba(250, 250, 250, .9);

                            margin-top: 2rem;
                            padding: 2rem 1rem 2rem 1rem;


                           
                        }

                        .proj-details-class {
                            font-size: 1.2rem;
                            margin-right: 2rem;
                        }

                        .proj-btn-class {
                            
                            margin-top: 1rem;
                            
                            height: 2rem;

                            
                            padding-left: 2rem;
                            padding-right: 2rem;
                            border-radius: 25px;
                            
                            font-size: 1.2rem;
                            background-color: orange;
                            border: none;
                            
                        }
                    `}
                </style>
            </div>
        )
    }
}

export default ProjectTemplate;