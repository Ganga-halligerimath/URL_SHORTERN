import { useEffect, useState } from "react";
import axios from "../api/axios";
import  "./Dashboard.css";
import {Link } from "react-router-dom"


export default function Dashboard() {
  // const [url, setUrl] = useState("");
  const [urls, setUrls] = useState([]);

  
  const fetchUrls = async () => {
    const res = await axios.get("/url/my-urls");
    setUrls(res.data.urls);
  };
  
  
  const deleteUrl= async(shortcode)=>{
    await axios.delete(`/url/deleteUrl/${shortcode}`);
    alert("URL Deleted");
    fetchUrls(); 
  };

  // const createShortUrl = async () => {
  //   if (!url) return alert("Enter URL");
  //   try{await axios.post("/url/shorten", { original_url: url });
  //   setUrl("");
  //   fetchUrls();
  // }catch(err){
  //   alert(err.response.data.message);
  //   console.error(err.response.data.message);
  // };

  // };
  const logout = () => {
   localStorage.removeItem("token");
   window.location.href = "/login";
 };

  useEffect(() => {
    fetchUrls();
  }, []);

   return (
    <div className="dashboard-container">
      {/* Header */}
      <header className="dashboard-header">
        <h1>Dashboard</h1>
       
       <div className="dashboard-actions">
        <p>
          <Link to="/shorten" className="home-link">Home</Link>
        </p>
        
        <h3><button onClick={logout} className="logout-btn">Logout</button></h3>
        </div> 
      </header>

      {/* Create URL */}
      {/* <div className="shorten-box">
        <input
          placeholder="Paste long URL here..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button onClick={createShortUrl}>Shorten</button>
      </div> */}

      {/* Table */}
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Original URL</th>
              <th>Short Code</th>
              <th>Short URL</th>
              <th>Clicks</th>
              <th>Created</th>
              <th>Created By</th>
              {/* <th><button>Delete</button></th> */}
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
  {urls.length === 0 ? (
    <tr>
      <td colSpan="6" style={{ textAlign: "center" }}>
        No URLs created yet
      </td>
    </tr>
  ) : (
    urls.map((u) => (
      <tr key={u.id}>  
        <td> 
            <a href={`http://localhost:5000/${u.short_code}`}
            target="_blank"
            rel="noreferrer"
            className="truncate"
            >
              {u.original_url}</a></td>
        
        <td>
          <a
            href={`http://localhost:5000/${u.short_code}`}
            target="_blank"
            rel="noreferrer"
          >
            {u.short_code}
          </a>
        </td>
        <td>
          <a
            href={`http://localhost:5000/${u.short_code}`}
            target="_blank"
            rel="noreferrer"
            >
            {`http://localhost:5000/${u.short_code}`}
          </a>
        </td>

        <td>{u.clicks}</td>

        <td>{new Date(u.created_at).toLocaleDateString()}</td>

        <td>{u.email}</td>

        <td>
          <button onClick={() => deleteUrl(u.short_code)}>✖</button>
        </td>
      </tr>
    ))
  )}
</tbody>

        </table>
      </div>
    </div>
  );
}