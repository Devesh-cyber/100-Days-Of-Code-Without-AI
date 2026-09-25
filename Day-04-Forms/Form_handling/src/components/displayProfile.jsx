function DisplayProfile({ profileList }) {
  return (
    <>
      {profileList.map((p) => (
        <section className="profile-card" key={p.id}>
          <img src={p.profile} className="profile" alt="pfp" />
          <h3 className="fullName">{p.fullName}</h3>
          <span className="email">{p.email}</span>
          <span className="account_type">{p.accountType}</span>
          {p.accountType === "student" && (
            <>
              <span className="collegeName">{p.accountTypeData?.collegeName}</span>
              <span className="course">{p.accountTypeData?.course}</span>
              <span className="graduationYear">{p.accountTypeData?.graduationYear}</span>
              <span className="yearStudy">{p.accountTypeData?.yearStudy}</span>
            </>
          )}
          {p.accountType === "professional" && (
            <>
              <span className="companyName">{p.accountTypeData?.companyName}</span>
              <span className="jobRole">{p.accountTypeData?.jobRole}</span>
              <span className="experience">{p.accountTypeData?.experience}</span>
            </>
          )}
          <span className="bio">{p.bio}</span>
          <span className="country">{p.country}</span>
          <span className="age">{p.age}</span>
          <span className="gender">{p.gender}</span>
          <label> Skills</label>
          <span className="skills">{p.skills.map(val => <button key={val}>{val}</button>)}</span>
          <a href={p.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={p.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={p.portfolio} target="_blank" rel="noopener noreferrer">Portfolio</a>
        </section>
      ))}
    </>
  );
}

export default DisplayProfile;
