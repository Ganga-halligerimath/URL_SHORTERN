// import { useState } from "react";
// import axios from "../api/axios";
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

// export default function Register() {
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const naviagte = useNavigate();

//     const handleRegister = async () => {
//         try {
//             await axios.post("/auth/register", { name, email, password });
//             alert("Registration successfully");
//             naviagte("/login");

//         } catch (err) {
//             alert(err.response?.data?.message || "Register failed");

//         }
//     };

//     return (
//         <div className="auth-container">
//             <div className="auth-box">
//                 <h2>Register</h2>
//                 <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
//                 <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />

//                 <input placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
//                 <button onClick={handleRegister}>Register</button>

//                 <p className="auth-link">
//                     Already have an account?{" "}
//                     <Link to="/login">Login</Link>
//                 </p>
//             </div>
//         </div>
//     );


// }




import { useState } from "react";
import axios from "../api/axios";
import { useNavigate,Link } from "react-router-dom";

export default function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleRegister = async () => {
        try {
            //   await axios.post("/auth/register", {
            //     name,
            //     email,
            //     password,
            //   });
            await axios.post("http://localhost:5000/api/auth/register", {
                name,
                email,
                password,
            });

            alert("Registration successful");
            navigate("/login");
        } catch (err) {
            alert(err.response?.data?.message || "Register failed");
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-box">
                <h2>Register</h2>

                <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
                <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                <input
                    placeholder="Password"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button onClick={handleRegister}>Register</button>
                 <p className="auth-link">
                    Already have an account?{" "}
                   <Link to="/login">Login</Link>
            </p>
            </div>
        </div>
    );
}
