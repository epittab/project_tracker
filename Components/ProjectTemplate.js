import React from 'react';
import fetch from 'isomorphic-unfetch';

class ProjectTemplate extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            projectsList: [],
            isLoggedon: false
        }       

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
       
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

    }

    handleSubmit(e){
        e.preventDefault();

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
            <div className = 'ProjectTemplate'>
                
                <div>
                    <h1> Create a Project </h1>
                  
                    <form onSubmit = {this.handleSubmit}>
                        <label className="" htmlFor="">Project Owner</label>
                        <input onChange={this.handleChange} id="" name="" value=""></input>
                        <br></br>
                        <label className="" htmlFor="">Project Title</label>
                        <input onChange={this.handleChange} id="" name="" value=""></input>
                        <br></br>
                        <label className="" htmlFor="">Project Desc</label>
                        <input onChange={this.handleChange} id="" name="" value=""></input>
                        <br></br>
                        <label className="" htmlFor="">Start Date</label>
                        <input onChange={this.handleChange} id="" name="" value=""></input>
                        <br></br>
                        <label className="" htmlFor="">Project Scope</label>
                        <input onChange={this.handleChange} id="" name="" value=""></input>
                        <br></br>

                    <button onClick={this.handleSubmit}>Create Project</button>

                    </form>

                </div>
            
                <style jsx>
                    
                    {`
                        *{
                            margin: 0;
                            padding: 0;
                            box-sizing: border-box;
                        }

                        .ProjectTemplate{

                            background-color: rgba(160, 180, 230, .8)
                        }
                    `}
                </style>
            </div>
        )
    }
}

export default ProjectTemplate;