
import React, { useState,useEffect } from 'react';


import axios from 'axios';

const useFetch = (endpoint,query) => {


    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: `https://streamlinewatch-streaming-guide.p.rapidapi.com/search${endpoint}`, delayed: true,
        params: { ...query },
        headers: {
          'X-RapidAPI-Key': '51c9eb725emsh20a38a759031fe4p17007djsn01537f5da6d3',
          'X-RapidAPI-Host': 'streamlinewatch-streaming-guide.p.rapidapi.com'
        }
      };
    
     const fetchData = async ()=> {
       setIsLoading (true);
        try {
            const response = await axios.request(options);
            setData(response.data.data);
            setIsLoading(false)

        } catch (error) {
            console.error(error);
            setError(error)
            setIsLoading(false)
        } 

        finally {
            setIsLoading(false)
        }
     }

     useEffect (()=>{
        fetchData();
     },[]);

     const refetch = () => {
        setIsLoading (true)
        fetchData();
     } ;
     
     return {data,isLoading,error,refetch}
}

export default useFetch