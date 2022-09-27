import React, { useRef } from "react";
import './Login.css'

function Form ({ option }) {
	let email = useRef(),pass = useRef(),repeatPass = useRef()
	return (
		<form className='account-form' onSubmit={(evt) => {
			evt.preventDefault()
			// localStorage.setItem('email',['email1'])
			if(repeatPass.current.value!==''){
				// localStorage.setItem('email',[...localStorage.getItem('email'),email.current])
				// localStorage.setItem('password',[...localStorage.getItem('password',pass.current)])
				console.log('in if');
				localStorage.setItem(email.current.value,pass.current.value)
				pass.current.value = ''
				repeatPass.current.value = ''
			}
			else{
				let existingEmails = localStorage.getItem(email.current.value),existingPass = pass.current.value
				if(existingEmails===existingPass){
					window.location.replace('/astrology')
				}
				else{
					alert('Wrong Credentials Try Again ')
				}
			}
		}}>
			<div className={'account-form-fields ' + (option === 1 ? 'sign-in' : (option === 2 ? 'sign-up' : 'forgot')) }>
				<input id='email' name='email' ref={email} type='email' placeholder='E-mail' required />
				<input id='password' name='password' ref={pass} type='password' placeholder='Password' required={option === 1 || option === 2 ? true : false} disabled={option === 3 ? true : false} />
				<input id='repeat-password' name='repeat-password' ref={repeatPass} type='password' placeholder='Repeat password' required={option === 2 ? true : false} disabled={option === 1 || option === 3 ? true : false} />
			</div>
      <br/>
      <br/>
      <br/>
			<button className='btn-submit-form' type='submit'>
				{ option === 1 ? 'Sign in' : (option === 2 ? 'Sign up' : 'Reset password') }
			</button>
		</form>
	)
}

function Login () {
	const [option, setOption] = React.useState(1)
	
	return (
    <div className='main'>
    <h2 className='head'>Your daily horoscope</h2>
		<div className='container'>
			<header>
				<div className={'header-headings ' + (option === 1 ? 'sign-in' : (option === 2 ? 'sign-up' : 'forgot')) }>
					{/* <span>Sign in to your account</span>
					<span>Create an account</span>
					<span>Reset your password</span> */}
				</div>
			</header>
			<ul className='options'>
				<li className={option === 1 ? 'active' : ''} onClick={() => setOption(1)}>Sign in</li>
				<li className={option === 2 ? 'active' : ''} onClick={() => setOption(2)}>Sign up</li>
				<li className={option === 3 ? 'active' : ''} onClick={() => setOption(3)}>Forgot</li>
			</ul>
			<Form option={option} />
			{/* <footer>
				<a href='https://dribbble.com/shots/5041581-Zenbu-Sign-in-up-forgot-page' target='_blank'>Original design with animations by Zenbu</a>
			</footer> */}
		</div>
    </div>
	)
}

// ReactDOM.render(<App />, document.getElementById('app'))
export default Login