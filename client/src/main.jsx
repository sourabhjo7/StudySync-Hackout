import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from "react-router-dom"
import { GoogleOAuthProvider } from '@react-oauth/google';
// const clientid = process.env.REACT_APP_SECRET_NAME;
// console.log(clientid);
console.log(import.meta.env.VITE_CLIENT_ID);
ReactDOM.createRoot(document.getElementById('root')).render(

     <BrowserRouter>
      <GoogleOAuthProvider
                clientId={import.meta.env.VITE_CLIENT_ID}>
       <App />
       </GoogleOAuthProvider>
      </BrowserRouter>
  ,
)
