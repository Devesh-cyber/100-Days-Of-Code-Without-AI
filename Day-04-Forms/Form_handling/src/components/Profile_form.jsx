import { useState } from "react";

function ProfileForm({ addProfile }) {
  const [isActive, setIsActive] = useState(false);
  const [accountType, setAccountType] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [imageURL, setImageURL] = useState("");

  const student_type = (
    <div className="conditional grid">
      <div className="field full">
        <label>College Name</label>
        <input
          type="text"
          name="collegeName"
          required
          placeholder="Enter your college name"
        />
      </div>
      <div className="field">
        <label> Course </label>
        <input
          type="text"
          name="course"
          required
          placeholder="Enter your course"
        />
      </div>
      <div className="field">
        <label> Expected Graduation Year </label>
        <select name="graduationYear" required>
          <option value="2026">2026</option>
          <option value="2027">2027</option>
          <option value="2028">2028</option>
          <option value="2029">2029</option>
          <option value="2030">2030</option>
        </select>
      </div>
      <div className="field">
        <label> Year of study </label>
        <select name="yearStudy" required>
          <option value="1st">1st Year</option>
          <option value="2nd">2nd Year</option>
          <option value="3rd">3rd Year</option>
          <option value="4th">4th Year</option>
        </select>
      </div>
    </div>
  );

  const professional_type = (
    <div className="conditional grid">
      <div className="field full">
        <label>Company Name</label>
        <input
          type="text"
          name="companyName"
          required
          placeholder="Enter your company name"
        />
      </div>
      <div className="field">
        <label> Job Role </label>
        <input
          type="text"
          name="jobRole"
          required
          placeholder="Enter job role"
        />
      </div>
      <div className="field">
        <label> Experience </label>
        <input type="number" name="experience" required placeholder="0" />
      </div>
    </div>
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    let form = e.target;
    let formData = new FormData(form);
    let obj = Object.fromEntries(formData);
    let skills = formData.getAll("skills");

    if (skills.length < 1) {
      alert("Choose atleast one skill");
      return;
    }

   let accountTypedata = undefined

    if (obj.accountType === 'student'){
      accountTypedata = {
        'collegeName': obj.collegeName,
        'course': obj.course,
        'yearStudy': obj.yearStudy,
        'graduationYear': obj.graduationYear,
      }
    } else if (obj.accountType === 'professional') {
      accountTypedata = {
        'companyName': obj.companyName,
        'jobRole': obj.jobRole,
        'experience': obj.experience,
      }
    }

    addProfile({
      'fullName': obj.fullName,
      'email': obj.email,
      'age': obj.age,
      'gender': obj.gender,
      'country': obj.country,

      'skills': skills,

      'accountType': obj.accountType,

      'accountTypeData': accountTypedata,

      'bio': obj.bio,

      'github': obj.github,
      'linkedin': obj.linkedin,
      'portfolio': obj.portfolio,

      'profile_image': obj.profile,
    });

    setIsActive(false);
    setAccountType("")
    setImageURL("")
  };

  const content = (
    <section className="Profile_Form">
      <button
        className="close"
        type="button"
        onClick={() => {setIsActive(false);setAccountType("");setImageURL("")}}
      >
        {" "}
        X{" "}
      </button>
      <form onSubmit={handleSubmit}>
        <h1> Create New Profile </h1>
        <p> Fill your deatils to create a new profile </p>
        <div className="section sec-blue">
          <h3> A. Basic Information </h3>
          <div className="grid">
            <div className="field">
              <label> Full Name </label>
              <input
                type="text"
                name="fullName"
                placeholder="Enter your name..."
                required
              ></input>
            </div>
            <div className="field">
              <label> Email </label>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                required
              ></input>
            </div>
          </div>
        </div>

        <div className="section sec-green">
          <h3> B. personal Information</h3>
          <div className="grid">
            <div className="field">
              <label>Age</label>
              <input type="number" name="age" placeholder="18" required></input>
            </div>
            <div className="field">
              <label> Country </label>
              <select name="country" required>
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="China">China</option>
              </select>
            </div>
            <div className="field full">
              <label>Gender</label>
              <div className="choices">
                <label className="choice">
                  <input type="radio" name="gender" value="Male" />{" "}
                  <span>Male</span>
                </label>
                <label className="choice">
                  <input type="radio" name="gender" value="Female" />{" "}
                  <span>Female</span>
                </label>
                <label className="choice">
                  <input type="radio" name="gender" value="Other" />{" "}
                  <span>Other</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="section sec-amber">
          <h3> C. Skills (Select Multiple) </h3>
          <div className="choices">
            <label className="choice">
              <input type="checkbox" name="skills" value="python" />{" "}
              <span>Python</span>
            </label>
            <label className="choice">
              <input type="checkbox" name="skills" value="javascript" />{" "}
              <span>JavaScript</span>
            </label>
            <label className="choice">
              <input type="checkbox" name="skills" value="react" />{" "}
              <span>React</span>
            </label>
            <label className="choice">
              <input type="checkbox" name="skills" value="fastAPI" />{" "}
              <span>FastAPI</span>
            </label>
            <label className="choice">
              <input type="checkbox" name="skills" value="sql" />{" "}
              <span>SQL</span>
            </label>
            <label className="choice">
              <input type="checkbox" name="skills" value="ml" />{" "}
              <span>Machine Learning</span>
            </label>
          </div>
        </div>

        <div className="section sec-purple">
          <h3> D. Account Type </h3>
          <div className="choices two">
            <label className="choice big">
              <input
                type="radio"
                value="student"
                name="accountType"
                required
                onChange={() => setAccountType("student")}
              />
              <span>
                <b>Student</b>
                <small>Currently pursuing education</small>
              </span>
            </label>
            <label className="choice big">
              <input
                type="radio"
                value="professional"
                name="accountType"
                required
                onChange={() => setAccountType("professional")}
              />
              <span>
                <b>Professional</b>
                <small>Working professional</small>
              </span>
            </label>
          </div>
          {accountType === "student" ? student_type : null}
          {accountType === "professional" ? professional_type : null}
        </div>

        <div className="section sec-pink">
          <h3> E. About You</h3>
          <div className="field">
            <label> Bio </label>
            <textarea
              name="bio"
              required
              placeholder="Tell us about yoyrself, your interest, goals..."
            ></textarea>
          </div>
        </div>

        <div className="section sec-sky">
          <h3> F. Social Links </h3>
          <div className="grid three">
            <div className="field">
              <label> Github </label>
              <input
                type="url"
                name="github"
                placeholder="https://github.com/username"
              />
            </div>
            <div className="field">
              <label> LinkedIn </label>
              <input
                type="url"
                name="linkedin"
                placeholder="https://linkedin.com/in/username"
              />
            </div>
            <div className="field">
              <label> Portfolio </label>
              <input
                type="url"
                name="portfolio"
                placeholder="https://yourportfolio.com"
              />
            </div>
          </div>
        </div>

        <div className="section sec-mint">
          <h3> G. Profile Picture </h3>
          <div className="avatar-row">
            <div className="field">
              <label> Image URL (Optional) </label>
              <input
                type="url"
                name="profile"
                placeholder="https://example.com/your-image.jpg"
                onChange={(e) => setImageURL(e.target.value)}
              />
            </div>
            {imageURL === "" ? null : <img src={imageURL} alt="pfp" />}
          </div>
        </div>

        <div className="section sec-gold">
          <h3> H. Terms </h3>
          <label className="terms">
            <input type="checkbox" 
            name="terms" 
            required 
            onInvalid={(e) => { e.target.setCustomValidity("Please accept the terms and conditions.")}}
            onChange={(e) => {e.target.setCustomValidity("");}} 
    />{" "}
            <span>
              I agree to the <a href="/">terms and conditions</a>
            </span>
          </label>
        </div>

        <section className="buttons">
          <button type="reset"> Reset </button>
          <button type="submit"> Create Profile </button>
        </section>
      </form>
    </section>
  );

  return (
    <>
      <header className="topbar">
        <div className="topbar-text">
          <h1> PROFILE MANAGER </h1>
          <h3> Create, Validate and Manage User Profiles </h3>
        </div>
        <button className="topbar-cta" onClick={() => setIsActive(true)}> + Create Profile </button>
      </header>
      {isActive ? content : null}
    </>
  );
}

export default ProfileForm;