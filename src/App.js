// import React, { useState } from "react";
// import "./App.css";
// import { validateEmail } from "../src/utils";

// export default function App() {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState({ value: "", isTouched: false });
//   const [role, setRole] = useState("role");

//   const PasswordErrorMessage = () => {
//     return (
//       <p className="FieldError">password should have atleast 8 characters</p>
//     );
//   };

//   const getIsFormValid = () => {
//     return (
//       firstName &&
//       validateEmail(email) &&
//       password.value.length >= 8 &&
//       role !== "role"
//     );
//   };

//   const clearForm = () => {
//     setFirstName("");
//     setLastName("");
//     setEmail("");
//     setPassword({
//       value: "",
//       isTouched: false,
//     });
//     setRole("role");
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     alert("Account created.");
//     clearForm();
//   };
//   return (
//     <div className="APP">
//       <form onSubmit={handleSubmit}>
//         <fieldset>
//           <h2>please fill up the form</h2>
//           <div className="field">
//             <label>
//               First name <sup>*</sup>
//             </label>
//             <input
//               placeholder="First name"
//               type="text"
//               value={firstName}
//               onChange={(e) => setFirstName(e.target.value)}
//             />
//           </div>
//           <div className="field">
//             <label>last name</label>
//             <input
//               placeholder="Last name"
//               type="text"
//               value={lastName}
//               onChange={(e) => setLastName(e.target.value)}
//             />
//           </div>
//           <div className="field">
//             <label>
//               Email address <sup>*</sup>
//             </label>
//             <input
//               placeholder="Email address"
//               type="text"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>
//           <div className="field">
//             <label>
//               Password <sup>*</sup>
//             </label>
//             <input
//               type="password"
//               value={password.value}
//               onChange={(e) =>
//                 setPassword({ ...password, value: e.target.value })
//               }
//               onBlur={() => {
//                 setPassword({ ...password, isTouched: true });
//               }}
//               placeholder="Password"
//             />
//             {password.isTouched && password.value.length < 8 ? (
//               <PasswordErrorMessage />
//             ) : null}
//           </div>
//           <div className="field">
//             <label>
//               Role <sup>*</sup>
//             </label>
//             <select>
//               <option value="role">Role</option>
//               <option value="individual">Individual</option>
//               <option value="bussiness">Bussiness</option>
//               value={role}
//               onSubmit={(e) => setRole()}
//             </select>
//           </div>
//           <button type="submit" disabled={!getIsFormValid()}>
//             create account
//           </button>
//         </fieldset>
//       </form>
//     </div>
//   );
//
import React, { useState } from "react";
import "./App.css";
import { validateEmail } from "../src/utils";

export default function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({ value: "", isTouched: false });
  const [role, setRole] = useState("role");

  const PasswordErrorMessage = () => {
    return (
      <p className="FieldError">password should have atleast 8 characters</p>
    );
  };

  const getIsFormValid = () => {
    return (
      firstName &&
      validateEmail(email) &&
      password.value.length >= 8 &&
      role !== "role"
    );
  };

  const clearForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword({
      value: "",
      isTouched: false,
    });
    setRole("role");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!getIsFormValid()) {
      alert("Please fill out all required fields.");
      return;
    } else {
      alert("Account created.");
      clearForm();
      return;
    }
  };

  return (
    <div className="APP">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>please fill up the form</h2>
          <div className="field">
            <label>
              First name <sup>*</sup>
            </label>
            <input
              placeholder="First name"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="field">
            <label>last name</label>
            <input
              placeholder="Last name"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="field">
            <label>
              Email address <sup>*</sup>
            </label>
            <input
              placeholder="Email address"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="field">
            <label>
              Password <sup>*</sup>
            </label>
            <input
              type="password"
              value={password.value}
              onChange={(e) =>
                setPassword({ ...password, value: e.target.value })
              }
              onBlur={() => {
                setPassword({ ...password, isTouched: true });
              }}
              placeholder="Password"
            />
            {password.isTouched && password.value.length < 8 ? (
              <PasswordErrorMessage />
            ) : null}
          </div>
          <div className="field">
            <label>
              Role <sup>*</sup>
            </label>
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="role">Role</option>
              <option value="individual">Individual</option>
              <option value="business">Business</option>
            </select>
          </div>
          <button type="submit" onClick={getIsFormValid}>
            create account
          </button>
        </fieldset>
      </form>
    </div>
  );
}
