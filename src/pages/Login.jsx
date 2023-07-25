import React from 'react'
import Google from '../img/google.png';
import Facebook from '../img/facebook.png';
import Github from '../img/github.png';

const Login = () => {

    const handleGoogle = ()=>{
        window.open('http://localhost:5000/auth/google','_self')
    }
    const handleGithub = ()=>{
        window.open('http://localhost:5000/auth/github','_self')
    }
    const handlefacebook= ()=>{
        window.open('http://localhost:5000/auth/facebook','_self')
    }
  return (
         <>
         <div className="login">
         <h1 className="loginTitle">Choose a Login Method:</h1>
           <div className="wrapper">
            <div className="left">
                <div className="loginButton google" onClick={handleGoogle}>
                    <img src={Google} alt="" className='icon' />
                    Google
                </div>
                <div className="loginButton facebook" onClick={handlefacebook}>
                    <img src={Facebook} alt="" className='icon' />
                    Facebook
                </div>
                <div className="loginButton github" onClick={handleGithub}>
                    <img src={Github} alt="" className='icon' />
                    Github
                </div>
                 < div className="center">
                    <div className="line"/>
                    <div className="or">OR</div>
                 </div>
            </div>
            <div className="right">
                    <input type="text" placeholder='Username'/>
                    <input type="text" placeholder='Password'/>
                    <button className='submit'>LogIn</button>
            </div>
           </div>
         </div>
          
         </>
  )
}

export default Login
