// import { Link } from "react-router-dom";
// import { Eye } from "lucide-react";
// import codeTribe from "../../assets/codetribe-logo.jpg";
// import flowerpot from "../../assets/green-flower-pot.png";
// import "./SignUp.css";

// const SignUp = () => {
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
//                 Create an account
//               </h1>
//               <p>Start your journey to better habits today</p>
//             </div>
//             <form action="sign-up">
//               <div className="form-group">
//                 <label htmlFor="Full name">Full name</label>
//                 <input type="text" placeholder="Enter your full name" />
//               </div>
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
//               </div>
//               <button className="signup-btn">Sign up</button>
//               <p className="cont">Or continue with</p>
//               {/* <div className="google-btn">
//                 <img src="./googleicon.png" alt="googlelogo" />
//                 <p>Continue with google</p>
//               </div> */}
//               <button className="google-btn">
//                 <img src="./googleicon.png" alt="googlelogo" />
//                 Continue with google
//               </button>
//               <p className="cont-2">
//                 Already have an account?{" "}
//                 <Link to="/Login">
//                   <span>Log in</span>
//                 </Link>
//               </p>
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

// export default SignUp;

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye } from "lucide-react";
import codeTribe from "../../assets/codetribe-logo.jpg";
import flowerpot from "../../assets/green-flower-pot.png";
import "./SignUp.css";

const SignUp = () => {
  // Store what the user types
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Allows us to move to another page
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();

    // Make sure the user filled everything
    if (!name || !email || !password) {
      alert("Please fill in all fields");
      return;
    }

    // Save the user's information
    const user = {
      name: name,
      email: email,
      password: password,
    };

    localStorage.setItem("user", JSON.stringify(user));

    // Go to onboarding
    navigate("/onboarding");
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
              <h1>Create an account</h1>
              <p>Start your journey to better habits today</p>
            </div>

            <form onSubmit={handleSignUp}>
              <div className="form-group">
                <label htmlFor="Full name">Full name</label>

                <input
                  type="text"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="Email address">Email address</label>

                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>

                <div className="password-container">
                  <input
                    type="password"
                    placeholder="Create a password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />

                  <Eye className="eye-icon" />
                </div>
              </div>

              <button type="submit" className="signup-btn">
                Sign up
              </button>

              <p className="cont">Or continue with</p>

              <button type="button" className="google-btn">
                <img src="./googleicon.png" alt="googlelogo" />
                Continue with google
              </button>

              <p className="cont-2">
                Already have an account?{" "}
                <Link to="/Login">
                  <span>Log in</span>
                </Link>
              </p>
            </form>
          </div>
        </div>

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

export default SignUp;
