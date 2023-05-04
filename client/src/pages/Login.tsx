import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useNavigate } from 'react-router-dom'
import { URLEnum } from '../RouterEnum'
// import { encrypt } from './util'

function Login() {
    
    useEffect(() => {
        console.log(navigator.userAgent);
    }, [])

    const navigate = useNavigate()

    const [remember, setRemember] = useState(false)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const userLogin = (evt:React.FormEvent) => {
        evt.preventDefault()
        // userLoginService(username, password).then( res => {
        //     console.log("Res" ,res)
        //     const message = res.data.message
        //     if ( message === "basarili giris" && res.data.token ) {
        //         // const stToken = JSON.stringify( res.data.token )
        //         const stToken = res.data.token
        //         console.log("stToken", stToken)

        //         const userRoles = getUserRolesFromJwt(stToken)
        //         console.log('userRoles::', userRoles)
        //         localStorage.setItem('username', username )
        //         localStorage.setItem('userRoles', JSON.stringify(userRoles))
                
        //         // sessionStorage.setItem('user', encrypt(stToken))
        //         sessionStorage.setItem('token', stToken)
        //         if ( remember ) {
        //             localStorage.setItem('token', stToken )
        //         }

        //         if (userRoles?.length == 1) {

        //             switch (userRoles[0]) {
        //                 case 'FARS_ADMIN':
        //                     sessionStorage.setItem('userRole', 'FARS_ADMIN')
        //                     // navigate(URLEnum.DASHBOARD_FARS_ADMIN)
        //                     break;
        //                 case 'FARS_COLLECTSTAFF':
        //                     sessionStorage.setItem('userRole', 'FARS_COLLECTSTAFF')
        //                     // navigate(URLEnum.DASHBOARD_FARS_COLLECTSTAFF)
        //                     break;
        //                 case 'FARS_DISTRIBUTIONADMIN':
        //                     sessionStorage.setItem('userRole', 'FARS_DISTRIBUTIONADMIN')
        //                     // navigate(URLEnum.DASHBOARD_FARS_DISTRIBUTIONADMIN)
        //                     break;
                    
        //                 default:
        //                     navigate(URLEnum.LOGIN)
        //                     console.log("Undefined Role")
        //                     break;
        //             }
        //         }

        //         if (userRoles!.length > 1) {
        //             // Navigate to Select Role Page
        //             navigate(URLEnum.HOME)
        //             // Set user role on Session Storage
        //         }
        //     }else {
        //         setError( message )
        //     }
        // }).catch( error => {
        //     setError( error.message )
        // })

        if ( username === 'admin' && password === '12345') {
            navigate(URLEnum.HOME)
        }
        else {
            setError('Username or password fail!');
        }
    }

    return (
        <>
            {/* <Helmet>
                <title>User Login</title>
                <meta name="description" content="User Login Page"></meta>
                <link rel="icon" href="https://ffo3gv1cf3ir.merlincdn.net/static_lib/assetsv2/common/images/favicon.ico" />
            </Helmet> */}
            <div className='row'>
                <div className='col-sm-4'></div>
                <div className='col-sm-4'>
                    <h2>User Login</h2>
    
                    { error !== '' && 
                        <div className="alert alert-danger alert-dismissible fade show" role="alert">
                        <strong>Error!</strong> { error }
                        <button onClick={() => setError('')} type="button" className="btn-close"></button>
                        </div>
                    }
    
                    <form onSubmit={userLogin}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
                        <input onChange={(evt) => setUsername(evt.target.value) }  required type="text" className="form-control" id="exampleInputEmail1" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input onChange={(evt) => setPassword(evt.target.value) } required type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3 form-check">
                        <input onClick={() => setRemember(!remember)} type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Remember</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
                <div className='col-sm-4'></div>
            </div>
        </>
    )
}

export default Login