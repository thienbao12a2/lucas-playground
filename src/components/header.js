import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { auth, db, logout } from "../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";

function Header() {
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    if (loading) return;
    //if (!user) return navigate("/");
    fetchUserName();
  }, [user, loading]);

  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
    } catch (err) {
      console.error(err);
      //alert("An error occured while fetching user data");
    }
  };

  return (
    <div className="container-fluid">
      <div className="row upper-bar"></div>
      <div className="row header">
        <div className="col-9 mt-3">
          <Link to="/">
            <h1>
              <strong>Lucas's</strong> <span>Play Ground</span>
            </h1>
          </Link>
        </div>

        <div className="col-3 mt-1 loginlink">
          {user ? (
            <button className="dashboard__btn" onClick={logout}>
              {" "}
              Logout
            </button>
          ) : (
            ""
          )}

          <Link to={!user ? "/login" : ""}> {!user ? "Login /" : ""}</Link>
          <Link to={!user ? "/register-user" : ""}>
            {" "}
            {!user ? " Register" : ""}
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Header;
