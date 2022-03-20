import React, { useState } from 'react';
import { Navigate, Link } from 'react-router-dom';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Title from './components/Title';
import Input from './components/Input';
import Item from './components/Item';
import Button from '../commons/RegularButton';
import ModalError from '../commons/ModalError';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  backdrop: {
    zIndex: 2,
    color: '#08eeff',
  },
}));

let localstorageData = localStorage.getItem('account')

let lsd = JSON.parse(localstorageData)

const Login = () => {

    const classes = useStyles();

    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ isLogin, setIsLogin ] = useState(false);
    const [ isLoading, setIsLoading ] = useState(false);
    const [ hasErrors, setHasErrors ] = useState(false);

    const open = true;

    const [ errors, setErrors ] = useState({
        usernameError: false,
        passwordError: false
    })

    function handleChange(name, value) {
        switch(name) {
            case 'username':
                setErrors({ usernameError: false, passwordError: false });
                setHasErrors(false);
                setUsername(value);
                break;
            case 'password':
                setErrors({ usernameError: false, passwordError: false });
                setHasErrors(false);
                setPassword(value);
                break;
            default: 
            console.log('no hay valores')
        }
    }

    function showErrors() {
        setHasErrors(true);
        setErrors({ usernameError: true, passwordError: true })
    }

    function stopIsLoading() {
        setIsLoading(false);
        showErrors();
    }

    function ifMatch(user, pass) {
        if(user === 'mati' && pass === '123456' ||
            user === lsd.username && 
            pass === lsd.password ) {
            let ac = {user, pass, firstName: 'Mati'}
            let account = JSON.stringify(ac)
            localStorage.setItem('account', account)
            setTimeout(() => setIsLogin(true), 2000)
        } else {
           setTimeout(() => stopIsLoading(), 2000)
        }
    }

    function handleOnClick() {
        setIsLoading(true);
        let login = { username, password }
        if(login) {
            ifMatch(username, password)
        }
    }

    function clearErrorModal() {
        setHasErrors(false);
        setErrors({ usernameError: false, passwordError: false })
    }

    let params = 
        errors.usernameError === false &&
        errors.passwordError === false
    ;

    return (
        <>

        { isLogin && <Navigate  to='/home' /> }

            <div className='LoginContainer'>
                <div className='LoginContent'>
                    <div className='Login'>
                        <div className='LoginHigher' />
                        <div className='LoginLower'>
                            <Title text='Bienvenidos' />

                            { hasErrors &&
                                <ModalError
                                    title='A ocurrido un error!'
                                    text="Usuario o password no existe."
                                    handleOnClick={clearErrorModal}
                                />
                            }
                                
                                <div className='ItemUserLogin'>
                                    <Item text='Usuario' />
                                    <Input
                                        attribute={{
                                            name: 'user',
                                            inputType: 'text',
                                            ph: 'Ingrese correo'
                                        }}
                                        handleChange={handleChange}
                                        param={errors.usernameError}
                                    />
                                </div>
                                <div className='ItemPasswordLogin'>
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
                                </div>

                                <Button 
                                    text='Iniciar Sesion'
                                    handleOnClick={handleOnClick}
                                    param={params}
                                />

                                <div 
                                style={{ display: 'flex', 
                                justifyContent: 'center',
                                alignItems: 'center' 
                                }}>
                                    <Link 
                                    to='/createUser'
                                    
                                    style={{ color: '#ff9b2f' }}

                                    >
                                        <Item text='Crear una cuenta:Registrar' />
                                    </Link>
                                </div>

                            { isLoading &&
                                <Backdrop open={open} className={classes.backdrop}>
                                    <CircularProgress color="inherit" />
                                </Backdrop>
                            }
                          
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Login;