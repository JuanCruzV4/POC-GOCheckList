import React, { useState, useEffect } from 'react';

const useFetch = (url) => {

    const [info, setInfo] = useState([]);

    useEffect(() => {
        async function getInfoPoke() {
            const response = await fetch(url);
            const data = await response.json();

            setInfo(data.results);
            
        }

        getInfoPoke();
   
    }, []);

    return info

}

export default useFetch;