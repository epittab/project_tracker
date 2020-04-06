import React from 'react';
import fetch from 'isomorphic-unfetch';

class Register extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            user_name: '',
            email: '',
            password:''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }


    handleSubmit = async (e) => {
        e.preventDefault();

        //create obj for HTTP submission
        let obj = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            user_name: this.state.user_name,
            email: this.state.email,
            password: this.state.password
        } 

        //submit with async http call
        try{
            let data = await fetch('http://localhost:4000/api/user', {
                method: 'POST',
                headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json;charset=UTF-8'
                    },
                body: JSON.stringify(obj),
            })
            if (data.ok) {
                let jsonData = await data.json()
                console.log(jsonData)
                return jsonData 
            } 
            throw new Error('Error Message: ')
            }
        catch(err){
            console.log(`You have an error with code: ${err}`)
        }

        //resetting State values to zero
        

        this.setState({
            first_name: '',
            last_name: '',
            user_name: '',
            email: '',
            password:''  
        }) 

        } 

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        });
    }


    render(){
        return(
            <div className='Register'>
                <form onSubmit={this.handleSubmit}>

                    <label className='Register-form-label' 
                            htmlFor='Register-fname'>First Name: </label>
                    <input id='Register-fname'
                            className='Register-form-input' 
                            name='first_name' 
                            type='text'
                            value={this.state.first_name} 
                            onChange={this.handleChange}></input>

                    <label className='Register-form-label' 
                            htmlFor='Register-lname'>Last Name: </label>
                    <input id='Register-lname'
                            className='Register-form-input' 
                            name='last_name' 
                            type='text'
                            value={this.state.last_name} 
                            onChange={this.handleChange}></input>

                    <label className='Register-form-label' 
                            htmlFor='Register-email'>E-Mail: </label>
                    <input id='Register-email'
                            className='Register-form-input' 
                            name='email' 
                            type='email'
                            value={this.state.email} 
                            onChange={this.handleChange}></input>

                    <label className='Register-form-label' 
                            htmlFor='Register-user-name'>User Name: </label>
                    <input id='Register-user-name'
                            className='Register-form-input' 
                            name='user_name' 
                            type='text'
                            value={this.state.user_name} 
                            onChange={this.handleChange}></input>

                    <label className='Register-form-label' 
                            htmlFor='Register-password'>Password: </label>
                    <input id='Register-password'
                            className='Register-form-input' 
                            name='password'
                            type='password' 
                            value={this.state.password} 
                            onChange={this.handleChange}></input>


                    <button>Register</button>                   
                </form>
                <style jsx>
                    {`
                    
                    `}
                </style>
            </div>
        );
    }
}


export default Register;