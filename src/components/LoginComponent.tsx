import React from 'react';

interface LoginComponentInterface {
    setIsAuth :  React.Dispatch<React.SetStateAction<boolean>>
}

const LoginComponent = ({setIsAuth} : LoginComponentInterface) => {
    return (
        <div>
            <button
                onClick={()=>{
                    setIsAuth(prev => !prev)
                }}
            >ok</button>
        </div>
    );
};

export default LoginComponent;
