import React from 'react';

type setIsAuthInterface ={
    isAuth : boolean,
    setIsAuth :  React.Dispatch<React.SetStateAction<boolean>>
}

const LoginComponent = ({setIsAuth , isAuth}  :setIsAuthInterface) => {
    return (
        <div>
            <p>login</p>
            <button
                onClick = {()=>{
                    setIsAuth(prev => !prev)
                }}
            >{!isAuth?"login":"logout"}
            </button>
        </div>
    );
};

export default LoginComponent;
