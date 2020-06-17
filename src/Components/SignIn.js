import React, { Component } from 'react'
import './SignIn.scss'
import Signin from '../Assets/signin.webp'
import Facebook from '../Assets/facebook.svg'
import Google from '../Assets/google.svg'
import Twitter from '../Assets/twitter.png'
import axios from 'axios';
import {NavLink} from 'react-router-dom'

class SignIn extends Component{

    constructor(props){
        super(props)
        this.Name=React.createRef()
        this.Password=React.createRef()
        this.state={
            userdata:''
        }
    }

    SignIn=async()=>{
        let data=await axios.get(`https://sheetdb.io/api/v1/oepfdihx9lope/search?Name=${this.Name.current.value}&Password=${this.Password.current.value}`)
        (data)

        if(data.data.length==0){
            this.setState({
                userdata:'User Don\'t Exist'
            })
        }
        else{
            this.props.history.push('/header')
        }
    }

    render() {
        return (
            <div className='SignIn shadow-sm'>
                <div className='container'>
                    <div className='row'>
                    <div className='col-6'>
                        <div>
                            <img src={Signin} alt='' className='imgformating'/>
                        </div>
                        <div className='gotosignuplink'>
                            <NavLink to='/'>Create an Account</NavLink>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='container'>
                            <h1 className='signinheading container'><strong>Sign In</strong></h1>
                        </div>
                        <div className='container'>
                            <div><input type='text' className='inputtextbox ' id='people' placeholder='Your Name' ref={this.Name}/></div>
                            <div><input id='filledlock' type='password' className='inputtextbox' placeholder='Password' ref={this.Password}/></div>
                            <p style={{color:'red',fontSize:'12px',marginTop:'opx'}}>{this.state.userdata}</p>
                            <div className='termsconditonsection'><input type='checkbox' className='checkbox'/><p className='termsconditions'>Remember me</p></div>
                        </div>
                        <div className='container registerbtnsec'>
                            <button className='btn btn-primary linbtnstyling' onClick={this.SignIn}>Lin</button>
                        </div>
                        <div className='linoption'>
                            <p className='linchoice'>or Lin with</p>
                            <span>
                                <img src={Facebook} alt='' className='linicons'/>
                                <img src={Twitter} alt='' className='linicons'/>
                                <img src={Google} alt='' className='linicons'/>
                            </span>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignIn