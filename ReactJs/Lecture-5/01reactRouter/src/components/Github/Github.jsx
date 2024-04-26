import React, { useEffect,useState} from 'react';
// import { useLoaderData } from 'react-router-dom';

const Github = () => {
    //1st Method for fetching data from any api
    // const data=useLoaderData();
    

    //2nd Method for fetching data from any api
    const [data,setData]=useState([]);
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/Santosh930')
    //     .then(response=>response.json())
    //     .then(data=>{
    //         console.log(data);
    //         setData(data);
    //     })

    // },[]);

    useEffect(()=>{
      fetch('https://api.github.com/users/Santosh930')
      .then((res)=>res.json())
      .then((data)=>{
        console.log(data);
        setData(data)
      })

    },[]);
  return (
    <>
    <div className='text-center text-white bg-green-600 p-4 m-4'>Github Followers:{data.followers}</div>
    <p>Location:{data.location}</p>
    <p>Bio:{data.bio}</p>
    <img src={data.avatar_url} alt="" />

    </>
    
  )
}

export default Github;

export const githubInfoLoader=async ()=>{
    const res=await fetch('https://api.github.com/users/vishwajitku');
    return res.json();
}