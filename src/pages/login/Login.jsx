// import { Eye } from "lucide-react";
// import codeTribe from "../../assets/codetribe-logo.jpg";
// import flowerpot from "../../assets/green-flower-pot.png";
// import "./Login.css";

// const Login = () => {
//   return (
//     <div className="auth-section">
//       <div className="auth-card">
//         <div className="form-side">
//           <div className="logo">
//             <img src={codeTribe} alt="logo" />
//           </div>
//           <div>
//             <div>
//               <h1>
//                 {/* {Signup ? "Create your account" : "Welcome back!"} */}
//                 Welcome back!
//               </h1>
//               <p>Login to continue your habit journey</p>
//             </div>
//             <form action="sign-up">
//               {/* <div className="form-group">
//                 <label htmlFor="Full name">Full name</label>
//                 <input type="text" placeholder="Enter your full name" />
//               </div> */}
//               <div className="form-group">
//                 <label htmlFor="Email address">Email address</label>
//                 <input type="email" placeholder="Enter your email address" />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="password">Password</label>
//                 <div className="password-container">
//                   <input type="password" placeholder="Create a password" />
//                   <Eye className="eye-icon" />
//                 </div>
//                 <div className="login-options">
//                   <label className="remember">
//                     <input type="checkbox" />
//                     <span>Remember me</span>
//                   </label>
//                   <a href="#">Forgot password?</a>
//                 </div>
//               </div>
//               <button className="signup-btn">Log in</button>
//               <p className="cont">Or continue with</p>
//               {/* <div className="google-btn">
//                 <img src="./googleicon.png" alt="googlelogo" />
//                 <p>Continue with google</p>
//               </div> */}
//               <button className="google-btn">
//                 <img src="./googleicon.png" alt="googlelogo" />
//                 Continue with google
//               </button>
//               {/* <p className="cont-2">
//                 Already have an account? <span>Log in</span>
//               </p> */}
//             </form>
//           </div>
//         </div>
//         <div className="flower-side">
//           <div>
//             <img src={flowerpot} alt="pot" />
//           </div>
//           <h1>
//             Better habits <br />
//             starts here.
//           </h1>
//           <p>Track your progress,stay motivated and build the life you want.</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye } from "lucide-react";
import codeTribe from "../../assets/codetribe-logo.jpg";
import flowerpot from "../../assets/green-flower-pot.png";
import "./Login.css";

const Login = () => {
  // Store what the user types
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Used to move to another page
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Get the account that was saved during signup
    const savedUser = localStorage.getItem("user");

    if (!savedUser) {
      alert("No account found. Please sign up first.");
      return;
    }

    // Convert the saved information back into an object
    const user = JSON.parse(savedUser);

    // Check if email and password are correct
    if (email === user.email && password === user.password) {
      // Login successful
      navigate("/onboarding");
    } else {
      alert("Incorrect email or password.");
    }
  };

  return (
    <div className="auth-section">
      <div className="auth-card">
        <div className="form-side">
          <div className="logo">
            <img src={codeTribe} alt="logo" />
          </div>

          <div>
            <div>
              <h1>Welcome back!</h1>
              <p>Login to continue your habit journey</p>
            </div>

            <form onSubmit={handleLogin}>
              {/* Email */}
              <div className="form-group">
                <label htmlFor="Email address">Email address</label>

                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              {/* Password */}
              <div className="form-group">
                <label htmlFor="password">Password</label>

                <div className="password-container">
                  <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />

                  <Eye className="eye-icon" />
                </div>

                <div className="login-options">
                  <label className="remember">
                    {/* <input type="checkbox" /> */}
                    {/* <span>Remember me</span> */}
                  </label>

                  <a href="#">Forgot password?</a>
                </div>
              </div>

              {/* Login button */}
              <button type="submit" className="signup-btn">
                Log in
              </button>

              <p className="cont">Or continue with</p>

              <button type="button" className="google-btn">
                <img src="./googleicon.png" alt="googlelogo" />
                Continue with google
              </button>
            </form>
          </div>
        </div>

        {/* Right side */}
        <div className="flower-side">
          <div>
            <img src={flowerpot} alt="pot" />
          </div>

          <h1>
            Better habits <br />
            starts here.
          </h1>

          <p>Track your progress,stay motivated and build the life you want.</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
