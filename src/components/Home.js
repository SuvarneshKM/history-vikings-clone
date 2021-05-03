import React, { useEffect } from 'react';
import styled from 'styled-components';
import db from '../firebase';

function Home() {

    // useEffect(()=>{
    //     db.collection("movies").onSnapshot((snapshot)=>{
    //         let tempMovies = snapshot.docs.map((doc)=>{
    //             return { id: doc.id, ...doc.data() }
    //         })
    //         console.log(tempMovies);
    //     })
    // }, [])

    return (
        <div>
            <h1>History Vikings Clone 🚀🔥</h1>
        </div>
    )
}

export default Home

