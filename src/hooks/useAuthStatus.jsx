import React, {useState,useEffect} from 'react'
import { getAuth, onAuthStateChanged } from "firebase/auth";

function useAuthStatus() {
    const [loggedIn,setLoggedIn]= useState(false)
    const [checkingStatus,setCheckingStatus]=useState(true)

useEffect(()=>{
    const auth = getAuth()
    // onAuthStateChanged = gives true or false 
    onAuthStateChanged(auth,(user)=>{
        if (user) {
            setLoggedIn(true);
          }
          setCheckingStatus(false)
    })
},[])

  return {loggedIn,checkingStatus}
}

export default useAuthStatus