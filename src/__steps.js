/** 
 *      ---------------------------
 *              INITIAL SETUP
 *      ---------------------------
 1. visit firebase
 2.create project
 3.register app(create config)
 4.install firebase
 5.add config file in your project
 6.config file

           -----------------------------
                 SETUP INTEGRATION
           -----------------------------
 7.got ot Docs> Build > Authentication > Web > Get Started
 8.export app from the firebase.config.js file: export default app
 9.login.jsx :  import getAuth from firebase/auth
10.create const auth = getAuth(app)
11. import google auth provider and create a new provider
12. use signInWithPopUp and pass auth and provider
13.Active signIn method (google,facebook, github)
--------------
more auth provider

14. active the auth provider(create app, provide redirect url, client id, client secret)

**/ 