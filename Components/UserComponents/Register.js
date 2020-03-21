import React from 'react';

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


    handleSubmit(e){
        e.preventDefault();
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