function DisplayProfile({ profileList , handleDelete}) {
  return (
    <div className="profiles-grid">
      {profileList.map((p) => (
        <section className="profile-card" key={p.id}>

          {/* Header */}
          <div className="profile-header">

            <img
              src={p.profile_image}
              className="profile"
              alt="Profile"
            />

            <div className="profile-heading">
              <h3 className="fullName">{p.fullName}</h3>
              <span className="email">{p.email}</span>

              <span className="account_type">
                {p.accountType}
              </span>
            </div>

            <button className='delete-btn' onClick={() => handleDelete(p.id)}>
              🗑
            </button>

          </div>


          {/* Account Information */}
          <div className="account-info">

            {p.accountType === "student" && (
              <>
                <div className="institution">
                  <span className="info-icon">🎓</span>
                  <span>{p.accountTypeData?.collegeName}</span>
                </div>

                <div className="education-line">
                  <span>{p.accountTypeData?.course}</span>
                  <span>•</span>
                  <span>{p.accountTypeData?.yearStudy} Year</span>
                  <span>•</span>
                  <span>
                    Graduating {p.accountTypeData?.graduationYear}
                  </span>
                </div>
              </>
            )}

            {p.accountType === "professional" && (
              <>
                <div className="institution">
                  <span className="info-icon">🏢</span>
                  <span>{p.accountTypeData?.companyName}</span>
                </div>

                <div className="education-line">
                  <span>{p.accountTypeData?.jobRole}</span>
                  <span>💼</span>
                  <span>
                    {p.accountTypeData?.experience} Years Experience
                  </span>
                </div>
              </>
            )}

          </div>


          {/* Bio */}
          <p className="bio">
            {p.bio}
          </p>


          {/* Personal Metadata */}
          <div className="profile-meta">

            <span>
              <span className="meta-icon">📍</span>
              {p.country}
            </span>

            <span>
              <span className="meta-icon">🎂</span>
              {p.age}
            </span>

            <span>
              <span className="meta-icon">👤</span>
              {p.gender}
            </span>

          </div>


          {/* Skills */}
          <div className="skills-section">

            <div className="skills-header">
              <span className="skills-title">
                <span>⚙</span>
                Skills
              </span>

              <span className="skills-count">
                +{p.skills.length}
              </span>
            </div>

            <div className="skills">
              {p.skills.map((val) => (
                <button key={val} type="button">
                  {val}
                </button>
              ))}
            </div>

          </div>


          {/* Social Links */}
          <div className="social-links">

            {p.github && (
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
              >
               🐱 GitHub
              </a>
            )}

            {p.linkedin && (
              <a
                href={p.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
               🔗 LinkedIn
              </a>
            )}

            {p.portfolio && (
              <a
                href={p.portfolio}
                target="_blank"
                rel="noopener noreferrer"
              >
               🌐 Portfolio
              </a>
            )}

          </div>

        </section>
      ))}
    </div>
  );
}

export default DisplayProfile;