import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import "./App.css";
import { auth, db, logout } from "./firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import Header from "./components/header";

function Dashboard() {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };
  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
    fetchUserName();
  }, [user, loading]);
  return (
    <div>
      <Header />

      <h1 className="mt-4">Membership Area</h1>

      <div className="pricing-wrapper clearfix">
        <div className="pricing-table">
          <h3 className="pricing-title">Basico</h3>
          <div className="price">
            $60<sup>/ monthly</sup>
          </div>

          <ul className="table-list">
            <li>5 events</li>
          </ul>

          <div className="table-buy">
            <p>
              $60<sup>/ monthly</sup>
            </p>
            <a href="#" className="pricing-action">
              Subscribe
            </a>
          </div>
        </div>

        <div className="pricing-table recommended">
          <h3 className="pricing-title">Premium</h3>
          <div className="price">
            $100<sup>/ monthly</sup>
          </div>

          <ul className="table-list">
            <li>9 events</li>
          </ul>

          <div className="table-buy">
            <p>
              $100<sup>/ monthly</sup>
            </p>
            <a href="#" className="pricing-action">
              Subscribe
            </a>
          </div>
        </div>

        <div className="pricing-table">
          <h3 className="pricing-title">Ultimate</h3>
          <div className="price">
            $200<sup>/ monthly</sup>
          </div>

          <ul className="table-list">
            <li>12 events</li>
          </ul>

          <div className="table-buy">
            <p>
              $200<sup>/ monthly</sup>
            </p>
            <a href="#" className="pricing-action">
              Subscribe
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
