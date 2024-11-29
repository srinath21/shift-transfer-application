import React,{useState} from 'react';
const Login=()=>{
    const [formData, setFormData] = useState({
        email: "",
        password: "",
      });
      const [error, setError] = useState("");
    
      const handleSubmit = (e) => {
        e.preventDefault(); 
        const storedEmail = sessionStorage.getItem("email");
        const storedPassword = sessionStorage.getItem("password");
        if (
          formData.email === storedEmail &&
          formData.password === storedPassword
        ) {
          console.log("Logged in");
          setError(""); 
        } else {
          setError("Invalid email or password. Please try again.");
        }
      };
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      return (
        <div>
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <div>
              <label>
                Password:
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <button type="submit">Login</button>
          </form>
        </div>
      );
    };
export default Login;