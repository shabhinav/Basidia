import React,{Component} from 'react';
import './SignUp.scss'
import Signup from '../Assets/signup.webp'
import axios from 'axios'
import {NavLink} from 'react-router-dom'


class SignUp extends Component{

    constructor(props){
        super(props)
        this.Name=React.createRef()
        this.Email=React.createRef()
        this.Password=React.createRef()
        this.ConfirmedPassword=React.createRef()
    }
    state={
        incorrectData:true,
        submitData:false
    }


    onSubmitData=async()=>{
            if(this.state.submitData){
                if(this.Password.current.value===this.ConfirmedPassword.current.value){
                    let data=await axios.post(`https://sheetdb.io/api/v1/oepfdihx9lope`,{
                        "data":[{
                         Name:this.Name.current.value,
                         Email:this.Email.current.value,
                         Password:this.Password.current.value,
                        }]
                     })
                     console.log(data)
                      this.setState({
                         incorrectData:'Incorrect Password'
                     })

                     this.props.history.push('/header')
                }
            }
    }

    submit=async()=>{
        this.setState({
            submitData:true
        })
    }

    render() {
        let confirmsubmit
        if(!this.state.submitData){
            confirmsubmit='Agree all terms and condotions'
        }
        return (
            <div className='SignUp shadow-sm'>
                <div className='container'>
                    <div className='row'>
                    <div className='col-6'>
                        <div className='container'>
                            <h1 className='signupheading container'><strong>Sign up</strong></h1>
                        </div>
                        <div className='container'>
                            <div><input type='text' className='inputtextbox ' id='people' placeholder='Your Name' ref={this.Name}/></div>
                            <div><input type='email'  className='inputtextbox' id='email'  placeholder='Your Email' ref={this.Email}/></div>
                            <div><input id='filledlock' type='password' className='inputtextbox' placeholder='Password' ref={this.Password}/></div>
                            <div><input id='outlinelock' type='password' className='inputtextbox' placeholder='Repeat Your Password' ref={this.ConfirmedPassword}/></div>
                            <p style={{color:'red',fontSize:'10px',marginTop:'5px'}}>{this.state.incorrectData}</p>
                            <div className='termsconditonsection'><input type='checkbox' className='checkbox' onChange={this.submit}/><p className='termsconditions'>I agree all statements in <a href='/'>terms of services</a></p></div>
                            <p style={{color:'red',fontSize:'10px'}}>{confirmsubmit}</p>
                        </div>
                        <div className='container registerbtnsec'>
                            <button className='btn btn-primary registerbtnstyling' onClick={this.onSubmitData}>Register</button>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div>
                            <img src={Signup} alt='' className='imgformating'/>
                        </div>
                        <div className='gotosigninlink'>
                            <NavLink to='/signin'>I am already member</NavLink>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignUp;