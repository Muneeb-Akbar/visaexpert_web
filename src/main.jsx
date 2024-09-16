import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import About from './components/about_us/About.jsx'
import Contact from './components/contact_us/Contact.jsx'
import Home from './components/home_page/Home';
import Service from './components/service_page/Service';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)
