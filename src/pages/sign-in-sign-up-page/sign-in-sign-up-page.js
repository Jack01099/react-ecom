import React from 'react';

import FormInput from '../../component/formInput/formInput';

import './sign-in-sign-up-page.style.scss';

class SignIn extends React.Component {
    constructor() {
        super();

        this.state = {
            username: '',
            password: '',
            email: '',
            phoneNumber: ''
        }
    
    }

    onChangehandler = (event) => {
        const { name, value } = event.target;

        this.setState({ [name]: value })
    }

    render() {
        return(
            <div className='sign-in-page'>
                <h1 className='page-title'>Sign In</h1>
                <form className='sign-in-form'>
                    <FormInput 
                        name='username' 
                        title='Username'
                        value={this.state.username} 
                        change={this.onChangehandler}
                        label='username'
                        type='text'   />
                    <FormInput 
                        name='password' 
                        title='Password'
                        value={this.state.password}
                        change={this.onChangehandler}
                        label='password' 
                        type='password'   />
                    <FormInput 
                        name='email' 
                        title='Email'
                        value={this.state.email}
                        change={this.onChangehandler}
                        label='email' 
                        type='email'   />
                    <FormInput 
                        name='phoneNumber' 
                        title='Tel'
                        value={this.state.phoneNumber}
                        change={this.onChangehandler} 
                        label='phonenumber'
                        type='tel'   />

                    <FormInput type='submit'  />
                </form>
            </div>
        );
    }

}
    


export default SignIn;