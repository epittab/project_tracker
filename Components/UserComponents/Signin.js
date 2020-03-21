import React from 'react';

class Signin extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
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
            <div className='Signin'>
                <form onSubmit={this.handleSubmit}>

                   

                    <label className='Signin-form-label' 
                            htmlFor='Signin-email'>E-Mail: </label>
                    <input id='Signin-email'
                            className='Signin-form-input' 
                            name='email' 
                            type='email'
                            value={this.state.email} 
                            onChange={this.handleChange}></input>

                 

                    <label className='Signin-form-label' 
                            htmlFor='Signin-password'>Password: </label>
                    <input id='Signin-password'
                            className='Signin-form-input' 
                            name='password'
                            type='password' 
                            value={this.state.password} 
                            onChange={this.handleChange}></input>


                    <button>Signin</button>                   
                </form>
                <style jsx>
                    {`
                    
                    `}
                </style>
            </div>
        );
    }
}


export default Signin;