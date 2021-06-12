import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { connect } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { authUserFailure, authUserRequest, authUserSuccess } from '../../redux/actions/userActions';
import Spinner from '../Spinner/Spinner';
import { createUser, fbProvider, googleProvider, signingUser, signInWithProvider, userSignOut } from './authManager';
import './SignIn.scss';

const SignIn = ({loggedInUser, setLoggedInUser, error, setError, loading, setLoading, privateLoading}) => {
  
  const { register, handleSubmit, formState: { errors } } = useForm();

  const [showPassword, setShowPassword] = useState(false);

  const [newUser, setNewUser] = useState(false);

  const history = useHistory();
  const location = useLocation();

  const { from } = location.state || { from: { pathname: "/" } };

  const handleUser = user => {
    if(user.message){
      setError(user.message);
    }
    else{
      setLoggedInUser(user);
      history.replace(from);
    }
  }

  const handleLogout = () => {
    userSignOut()
    .then(() => setLoggedInUser({}))
  }

  const onSubmit = data => {
    const {email, password, name, confirmPassword} = data;
        if (newUser) {
            if (password === confirmPassword) {
              setLoading()
              createUser(email, password, name)
              .then(res => handleUser(res));
            }
            else{
              setError('Password Not Matched');
            }
        }
        else{
          setLoading()
          signingUser(email, password)
          .then(res => handleUser(res));
        }
  };

  const handleProvider = provider => {
    setLoading()
    signInWithProvider(provider)
    .then(res => handleUser(res))
  }

  return (
    <>
      {privateLoading?
        <Spinner />:
        <div className="login-container">
        <div className="login-from">
          {loggedInUser.email?
          <div className="text-center">
            <button onClick={handleLogout} className="logout-btn">Logout</button>
            <p className="error main-error">You are logged in right now. If you want to login from another account, please logout first.</p>
          </div>
          :<>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h2>{newUser ? "Create an account" : 'Login'}</h2>
            {newUser && <>
            <div className="create-input">
              <input className='input' autoComplete="username" type='text' {...register("name", { required: true })} id="name" placeholder="Enter your Name" />
            </div>
            {errors.name && <span className="error input-error">Name is required</span>}</>}

            <div className="create-input">
              <input className='input' autoComplete="username" type='email' {...register("email", { required: true, pattern: /\S+@\S+\.\S+/ })} id="email" placeholder="Enter your Email" />
            </div>
            {errors.email && <span className="error input-error">Email is required</span>}
            
            <div className="create-input">
              <input className="input password" autoComplete="current-password" type={showPassword?'text':'password'} {...register("password", { required: true, minLength: 6 })} id="password" placeholder="Enter Password" />
              <FontAwesomeIcon onClick={()=>setShowPassword(!showPassword)} className='eye' icon={showPassword?faEyeSlash:faEye} />
            </div>
            {errors.password && <span className="error input-error">Password required Minimum 6 Character</span>}

            {newUser && <>
              <div className="create-input">
                <input className="input password" autoComplete="current-password" type={showPassword?'text':'password'} {...register("confirmPassword", { required: true })} id="ConfirmPassword" placeholder="Confirm Password" />
                <FontAwesomeIcon onClick={()=>setShowPassword(!showPassword)} className='eye' icon={showPassword?faEyeSlash:faEye} />
              </div>
            {errors.confirmPassword && <span className="error input-error">Confirm Password is required</span>}</>}

            <div className='remember-forgot'>
                <div>
                    <input type="checkbox" id="remember"/>
                    <label htmlFor="remember">Remember Me</label>
                </div>
                { !newUser && <span className="switch-link">Forgot Password</span>}
            </div>
            <input disabled={loading} className='login-btn' type="submit" value={newUser ? 'Create Account' : 'Login'} />
            <p className='text-center error main-error'>{loading?'Loading, Please Wait...':error}</p>
            <h5 className='switch'>{newUser ? 'Already' :"Don't"} have an account ? <span onClick={()=> setNewUser(!newUser)} className="switch-link">{newUser ? 'Login' : 'Create an account'}</span></h5>
          </form>
          <h5 className='text-center'>Or</h5>
          <div className="text-center">
              <FontAwesomeIcon onClick={() =>handleProvider(fbProvider)} className='login-icon' icon={faFacebook} id='fb-icon' />
              <FontAwesomeIcon onClick={() =>handleProvider(googleProvider)} className='login-icon' icon={faGoogle} />
          </div></>}
        </div>
    </div>}
    </>
  );
};

const mapStateToProps = state => {
  const {user, error, loading, privateLoading} = state.userReducer;
  return {
      loggedInUser: user,
      error,
      loading,
      privateLoading
  } 
}

const mapDispatchToProps = dispatch => {
  return {
    setLoggedInUser: user => dispatch(authUserSuccess(user)),
    setError: error => dispatch(authUserFailure(error)),
    setLoading: () => dispatch(authUserRequest())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
