import React, { useState } from 'react';
import Input from '../Login/components/Input';
import Item from '../Login/components/Item';
import Title from '../Login/components/Title';
import ErrorNotification from '../commons/ErrorNotification';
import Button from '../commons/RegularButton';
import { Navigate, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(theme => ({
    backdrop: {
      zIndex: 2,
      color: '#fff',
    },
}));

const CreateUser = () => {

    const classes = useStyles();

    const [ username, setUsername ] = useState('');
    const [ firstName, setFirstName ] = useState('');
    const [ lastName, setLastName ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ passwordAgain, setPasswordAgain ] = useState('');

    const [ isLoading, setIsLoading ] = useState(false);
    const [ created, setCreated ] = useState(false)

    const [ errors, setErrors ] = useState({
        usernameError: false,
        firstNameError: false,
        lastNameError: false,
        passwordError: false,
        passwordAgainError: false
    })

    function handleChange(name, value) {
        switch(name) {
            case 'username':
                if(value < 1) {
                    setErrors({ ...errors, usernameError: true })
                } else {
                    setErrors({ ...errors, usernameError: false })
                    setUsername(value)
                }
                break;
            case 'firstName':
                if(value < 1) {
                    setErrors({ ...errors, firstNameError: true })
                } else {
                    setErrors({ ...errors, firstNameError: false })
                    setFirstName(value)
                }
                break;
            case 'lastName':
                if(value < 1) {
                    setErrors({ ...errors, lastNameError: true })
                } else {
                    setErrors({ ...errors, lastNameError: false })
                    setLastName(value)
                }
                break;
            case 'password':
                if(value < 1) {
                    setErrors({ ...errors, passwordError: true })
                } else {
                    setErrors({ ...errors, passwordError: false })
                    setPassword(value)
                }
                break;
            case 'passwordAgain':
                if(password.length < 6) {
                    setErrors({ ...errors, passwordError: true })
                } else if( password === value ) {
                    setErrors({ ...errors, passwordError: false,
                                 passwordAgainError: false })
                    setPasswordAgain(value)
                } else {
                    setErrors({ ...errors, passwordError: false, 
                                    passwordAgainError: true })
                }
                break;
            default:
                console.log('no hay valores.')
        }
    }

    let params =
        errors.usernameError === false &&
        errors.firstNameError === false &&
        errors.lastNameError === false &&
        errors.passwordError === false &&
        errors.passwordAgainError === false &&
        username.length > 1 &&
        firstName.length > 1 &&
        lastName.length > 1 &&
        password.length > 5 &&
        password === passwordAgain
    ;

    function handleSubmit() {
        setIsLoading(true)
        let account = { username, firstName, lastName, password }
        if(account) {
            let ac = JSON.stringify(account)
            localStorage.setItem('account', ac)
            fetch('http://127.0.0.1:8000/user',{
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    userId:null,
                    userName:lastName,
                    password:password,
                })
            })
            .then(res=>res.json())
            .then((result)=>{
               if(result === "El correo ya se encuentra registrado"){
                    
               }
            },
            (error)=>{
                alert('Failed');
            })
            setTimeout(() => setCreated(true), 2000)
        }
    }

    let open = true;

    let screenWidth = window.innerWidth;

    return (
        <>

        { created && <Navigate to='/home' /> }

            <div className='CreateUserContainer'>
               
                <div className='BackgroundWeb' />

                { screenWidth < 1030 && <Title text='Registrar' /> }

                <div className='createUserContent'>
                    
                    <div className='formCreateUser'>

                    { screenWidth > 1030 && <Title text='Registrar' /> }

                        <Item text='Nombre' />
                        <Input 
                            attribute={{
                                name: 'username',
                                inputType: 'text',
                                ph: ''
                            }}
                            handleChange={handleChange}
                            param={errors.usernameError}
                        />
                        { errors.usernameError && 
                            <ErrorNotification text='Required.' /> }

                        <Item text='Apellido' />
                        <Input 
                            attribute={{
                                name: 'firstName',
                                inputType: 'text',
                                ph: ''
                            }}
                            handleChange={handleChange}
                            param={errors.firstNameError}
                        />
                        { errors.firstNameError && 
                            <ErrorNotification text='Required.' /> }

                        <Item text='Correo Electronico' />
                        <Input 
                            attribute={{
                                name: 'lastName',
                                inputType: 'text',
                                ph: ''
                            }}
                            handleChange={handleChange}
                            param={errors.lastNameError}
                        />
                        { errors.lastNameError && 
                            <ErrorNotification text='Required.' /> }

                        <Item text='Password' />
                        <Input 
                            attribute={{
                                name: 'password',
                                inputType: 'password',
                                ph: ''
                            }}
                            handleChange={handleChange}
                            param={errors.passwordError}
                        />
                        { errors.passwordError && 
                            <ErrorNotification text='min. 6 characters' /> }

                        <Item text='Confirmar password' />
                        <Input 
                            attribute={{
                                name: 'passwordAgain',
                                inputType: 'password',
                                ph: ''
                            }}
                            handleChange={handleChange}
                            param={errors.passwordAgainError}
                        />
                        { errors.passwordAgainError && 
                            <ErrorNotification text="Password don't match" /> }

                        <Button 
                            text='Guardar'
                            handleOnClick={handleSubmit}
                            param={params}
                        />

                        <div 
                        style={{ display: 'flex', 
                        justifyContent: 'center',
                        alignItems: 'center' 
                        }}>
                            <Link 
                            to='/login'
                            style={{ color: '#734488' }}
                            >
                                <Item 
                                text='Volver pagina login' />
                            </Link>
                        </div>
                    </div>

                    { isLoading &&
                        <Backdrop open={open} className={classes.backdrop}>
                            <CircularProgress color="inherit" />
                        </Backdrop>
                    }

                </div>
            </div>
        </>
    )
};

export default CreateUser;