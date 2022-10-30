import React from 'react';

type setIsAuthInterface ={
    isAuth : boolean,
    setIsAuth :  React.Dispatch<React.SetStateAction<boolean>>
}

const LoginComponent = ({setIsAuth , isAuth}  :setIsAuthInterface) => {
    return (
        <div>
            <p>login</p>
        </div>
    );
};

export default LoginComponent;
