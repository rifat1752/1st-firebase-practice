import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from "../../Firbase/Firebase.init";
import { useState } from "react";



const Login = () => {
    const [user, setUser] = useState(null);
    const auth= getAuth(app);
 
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGithubSignIn= ()=>{
        signInWithPopup(auth, githubProvider)
        .then(result=>{
            const user = result.user;
            console.log(user);
            setUser(user)
        })
        .catch(error=>{
            console.log("github is not sign in")
            console.log(error.message)
        })
    }
    const handleGoogleSignIn =()=>{
        signInWithPopup(auth,googleProvider)
        .then(result =>{
            const user = result.user;
            console.log(user);
            setUser(user)
        })
        .catch(error=>{
            console.log('error', error.message)
        })
    }
    const handleSignOut =()=>{
        signOut(auth)
        .then((result)=>{
            console.log(result)
           setUser(null);
        })
        .catch((error)=>{
        console.log(error);
        })
    }
    return (
        
        <div>
            {/* user?logout:sign in */}
            {user?
            <button onClick={handleSignOut}>Sign Out</button>: 
            <div>
                <button onClick={handleGoogleSignIn}>Google Login</button>
            <button onClick={handleGithubSignIn}>Github Login</button>
            </div>
            }
           {
            user &&  <div>
            <h3>user :{user.displayName}</h3>
            <h5>Email: <span>{user.email}</span></h5>
            <p>Image:             </p>
            <img src={user.photoURL} alt="" />
        </div>
           }
        </div>
    );
};

export default Login;