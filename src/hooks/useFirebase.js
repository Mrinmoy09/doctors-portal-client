import { useEffect, useState } from "react";
import intializeFirebase from "../pages/Login/firebase/firebase.init";
import { getAuth, GoogleAuthProvider , updateProfile, signInWithPopup,createUserWithEmailAndPassword ,signOut,onAuthStateChanged,signInWithEmailAndPassword,getIdToken} from "firebase/auth";

intializeFirebase();

const useFirebase = () => {
    const [user,setUser] = useState({});
    const [isLoading,setIsLoading] = useState(true);
    const [authError,setAuthError] = useState('');
    const [admin,setAdmin] = useState('')
    const [token,setToken] = useState('')
    
    const googleProvider = new GoogleAuthProvider();

    const auth = getAuth();

    const registerUser = (email,name,password,history) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password )
            .then((userCredential) => {
              // Signed in 
              
              setAuthError('');
              const newUser = {email , displayName:name}
              setUser(newUser);
              // save user
              saveUser(email,name ,'POST')
              // send name to firebase
              updateProfile(auth.currentUser, {
                displayName: name
              }).then(() => {
                // Profile updated!
                // ...
              }).catch((error) => {
                // An error occurred
                // ...
              });
              history.replace('/');
              // ...
            })
            .catch((error) => {
              setAuthError(error.message)
            })
            .finally(()=>setIsLoading(false))
    }

    const loginUser = (email,password , location , history) => {
      setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password )
          .then((userCredential) => {
            // Signed in 
            const destination = location?.state?.from || '/';
            history.replace(destination)
            setAuthError('');
            // const destination = location?.state?.from || '/';
            // history.replace(destination);
            // ...
          })
          .catch((error) => {
            setAuthError(error.message)
          })
          .finally(()=>setIsLoading(false))
            }
          
      const signInWithGoogle = (location,history) => {
            signInWithPopup(auth, googleProvider)
            .then((result) => {
              const user = result.user;
              saveUser(user.email,user.displayName,'PUT');
              // This gives you a Google Access Token. You can use it to access the Google API.
             const destination = location?.state?.from || '/';
             history.replace(destination)
             
             setAuthError('');
              // ...
            }).catch((error) => {
              // Handle Errors here.
             setAuthError(error.message)
            }).finally(()=>setIsLoading(false));
           }
         
            // observe user state
          useEffect(()=>{
                const unsubscribe = onAuthStateChanged(auth, (user) => {
                    if (user) {


                      setUser(user)
                      getIdToken(user).then(idToken=>{
                        setToken(idToken)
                      })
                      // ...
                    } else {
                      // User is signed out
                      setUser({})
                    }
                    setIsLoading(false)
                  });
                  return () => unsubscribe;
            },[])

          useEffect(()=>{
            fetch(`https://lit-caverns-99762.herokuapp.com/users/${user.email}`)
            .then(res=>res.json())
            .then((data)=>setAdmin(data.admin))
          },[user.email])
          
            const logOut = () => {
                signOut(auth).then(()=>{

                }).finally(()=>setIsLoading(false))
            }

            const saveUser = (email,displayName,method)=>{
               const user = {email,displayName} ;
               fetch('https://lit-caverns-99762.herokuapp.com/users',{
                 method:method,
                 headers: {
                  'content-type':'application/json'
                },
                body:JSON.stringify(user)
              }
               ).then()
                
            }
          
            return{
                user,
                admin,
                token,
                setIsLoading,
                isLoading,
                registerUser,
                loginUser,
                logOut,authError,signInWithGoogle
            }
}       

export default useFirebase;