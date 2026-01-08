import { useEffect, useState } from "react";
import axios from "../api/axios";
import  "./Shorten.css";
// import Dashboard from "./DashBoard";
import {Link } from "react-router-dom"

export default function Main() {
  const [url, setUrl] = useState("");
  var [orgUrl, setOrgUrl] = useState("");
  const [shortUrl,setShortUrl]= useState("")
  // const navigate= useNavigate()



  
  const createShortUrl = async () => {
  if (!url) return alert("Enter URL");

  try {
    const res = await axios.post("/url/shorten", {
      original_url: url
    });
    const shortCode = res.data.data.short_code;
    const orgUrl = res.data.data.original_url;
    setShortUrl(`http://localhost:5000/${shortCode}`);
    setOrgUrl(orgUrl);
    setUrl('');

  } catch (err) {
 
      alert(err.response?.data?.message || "Error");
    
  }

  };
  const logout = () => {
   localStorage.removeItem("token");
   window.location.href = "/login";
 };

   return (
    <div className="shorten-container">
      {/* Header */}
      <header className="shorten-header">
        <h1>URL Shortener</h1>
       
        <div className="shorten-mid">
        <p>
          <Link to="/shorten">Home</Link>
        </p><p>
          <Link to="/dashboard">Dashboard</Link>
        </p>
        <h3><button onClick={logout} className="logout-btn">Logout</button></h3>
        </div>
      </header>

      {/* Create URL */}
      <div className="shorten-box">
        <input
          placeholder="Paste long URL here..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button onClick={createShortUrl}>Shorten</button>
      </div>
      
    <div className="shortened-url-container">
      {/* Header */}
      
      <header className="shortened-url-header">
        <h2>URLs</h2>
        
      </header>
      </div>
        <br></br>
      <div className="shortened-url-textArea">
        <textarea readOnly value={"Original URL: "+orgUrl + "\nShortened URL: "+shortUrl} placeholder="short url will appear here"></textarea>
      </div>
      </div>
  );

}