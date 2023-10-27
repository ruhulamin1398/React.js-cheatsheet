import { useEffect,useState } from "react";
 

const Users = () =>{
    const  [users , setUsers] = useState([]);
    const  [hi , setHi] = useState(0);


    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      // Make an API call when the component mounts
      fetch('https://reqres.in/api/users') // Replace with your API endpoint
        .then((response) => response.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        })
        .catch((error) => {
          setError(error);
          setLoading(false);
        });
    }, []); // The empty dependency array means this effect runs once when the component mounts
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>Error: {error.message}</div>;
    }
  



    // useEffect(
    //     ()=>{
    //         fetch('https://reqres.in/api/users')
    //         .then((response)=>response.json())
    //         .then((data)=>{
    //             setUsers(data)
    //             console.log(users)
    //         })
           
    //     },
    //     [  ]
    // )
    return (
        <>
        
        <button
        
        onClick={()=>{
            setHi(hi+1)
        }}
        >hi
        
        {hi}
        </button>




        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
        
        </>
    )
}
export default Users;




 

