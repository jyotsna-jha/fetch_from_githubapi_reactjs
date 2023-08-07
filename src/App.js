import logo from './logo.svg';
import './App.css';
import { useState,useEffect} from 'react';

function GithubUser({name,followers,avatar}){
  return(
    <div>
      <h1>{name}</h1>
      <p>{followers}</p>
      <img src={avatar} height={150} alt={name}/>
    </div>
  );
}

function App() {
  const[data,setData]=useState(null);
  const[error,setError]=useState(null);
  const[loading,setloading]=useState(false);
  useEffect(()=>{
    setloading(true);
    //It sets the loading state to true to indicate that data is being fetched.
    fetch(
      `https://api.github.com/users/Shakshi-03`
    )
    .then((response)=>response.json())
    .then(setData)
    .then(()=> setloading(false)) //After fetching, it sets loading back to false.
    .catch((setError));
  },[]);
 if(loading) return <h1>Loading....</h1>
 if(error)
 return<pre>{JSON.stringify(error)}</pre>
 if(!data) return null;
 return(
<GithubUser
name={data.name}
followers={data.followers}
avatar={data.avatar_url}
/>
)
}

export default App;
