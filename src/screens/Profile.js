import React from "react";
import "./Profile.css";
import Nav from "../Nav";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { getAuth, signOut } from "firebase/auth";
import { firebaseApp } from "../firebase";

function Profile() {
  const user = useSelector(selectUser);
  const auth = getAuth();
  const navigate = useNavigate();
  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen_body">
        <h1>Edit Profile</h1>
        <div className="profileScreen_info">
          <img
            src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
            alt="Avatar"
          />
          <div className="profileScreen_details">
            <h2>{user.email}</h2>
            <div className="profileScreen_plans">
              <h3>Plans</h3>
              <p style={{ paddingTop: 10 }}>
                No plan required. You get Netlfix for free !!!
              </p>
              <button
                onClick={() => navigate("/")}
                className="profileScreen_gtNetflix"
              >
                Go To Netflix
              </button>
              <button
                onClick={() =>
                  signOut(auth)
                    .then(() => {})
                    .catch((error) => {
                      console.log(error);
                    })
                }
                className="profileScreen_signOut"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
