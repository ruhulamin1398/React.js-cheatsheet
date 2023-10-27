import React from 'react';
import CodeBlock from '../CodeBlock';

const Context = ({title}) => {


    const userContext = `
    export const UserContext = React.createContext();
    export const UserContextProvider = ({ children }) => {
    
        const users = ['user1', 'user2', 'user3']
        return (
            <UserContext.Provider
                value={{
                    users
                }}
            >
                {children}
            </UserContext.Provider>
        )
    }`;

    const useCode= `  const  {users}  = useContext(UserContext);
    console.log(users)`
    
    return ( 
        <> 


        <h1 className='text-5xl text-center font-bold  '>{ title }</h1>
        <CodeBlock title="UserContext.jsx"  code={userContext} language='jsx'   />
        <CodeBlock title="App.jsx"  code={useCode}  language='jsx'    /> 
        </>
    );
}

export default Context;
