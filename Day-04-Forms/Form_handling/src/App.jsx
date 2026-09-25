import { useState } from "react";
import ProfileForm from "./components/Profile_form";
import DisplayProfile from "./components/displayProfile";
import "./App.css";

function App() {
  const [profiles, setProfiles] = useState([]);
  const [id, setId] = useState(0);

  const addProfile = (current) => {
    setId(id + 1);
    current = {...current, id: id + 1};
    setProfiles([...profiles, current]);
  };

  return (
    <>
      <ProfileForm addProfile={addProfile} />
      <main className="profiles-section">
        {profiles.length === 0 ? (
          <div className="empty-state">
            <h3>No profiles yet</h3>
            <p>Click "+ Profile" above to add your first one.</p>
          </div>
        ) : (
          <div className="profiles-grid">
            <DisplayProfile profileList={profiles} />
          </div>
        )}
      </main>
      
    </>
  );
}

export default App;
