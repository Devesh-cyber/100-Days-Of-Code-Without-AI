import { useState } from "react";

function ProfileForm({addProfile}) {
    const [isActive, setIsActive] = useState(false)
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [accountType, setAccountType] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [imageURL, setImageURL] = useState('')
    const [id, setId] = useState(0)

    const handlePassword = (e) => {
        let cf = e.target.value
        setConfirmPassword(e.target.value)
        if (password !== cf) {
            let msg = "The password doesn't match the original password "
            setErrorMessage(msg) 
        } else {
            setErrorMessage('')
        } 

    }

    const student_type = 
     <div className="conditional grid">
                <div className="field full">
                    <label>College Name</label>
                    <input type="text" name="collegeName" required placeholder="Enter your college name"  />
                </div>
                <div className="field">
                    <label> Course </label>
                    <input type="text" name="course" required placeholder="Enter your course"  />
                </div>
                <div className="field">
                    <label> Year </label>
                    <select name="year" required>
                       <option value="2026">2026</option>
                        <option value="2025">2025</option>
                        <option value="2024">2024</option>
                        <option value="2023">2023</option>
                        <option value="2022">2022</option>
                        <option value="2021">2021</option>
                        <option value="2020">2020</option>
                    </select>
                </div>
    </div>

    const professional_type = 
    <div className="conditional grid">
                <div className="field full">
                    <label>Company Name</label>
                    <input type="text" name="companyName" required placeholder="Enter your company name"  />
                </div>
                <div className="field">
                    <label> Job Role </label>
                    <input type="text" name="jobRole" required placeholder="Enter job role"  />
                </div>
                <div className="field">
                    <label> Experience </label>
                    <input type="number"  name="experience" required placeholder="0"/>
                </div>
    </div>

    const handleSubmit = (e) => {
        e.preventDefault();
        let form = e.target
        let formData = new FormData(form)
        let obj = Object.fromEntries(formData)
        let skills = formData.getAll('skills')
        if (obj.password !== obj.confirmPassword){
            alert('Password Mismatched')
            return
        }
        if (skills.length < 1){
            alert('Choose atleast one skill')
            return
        }
        
        setId(id + 1)

        let idd = id + 1
        addProfile({
            'id' : idd,
            'fullName': obj.fullName,
            'email': obj.email,
            'age': obj.age,
            'gender': obj.gender,
            'country': obj.country,

            'skills': skills,

            'account_type': obj.account_type,

            'collegeName': obj.collegeName,
            'course': obj.course,
            'year': obj.year,

            'companyName': obj.companyName,
            'jobRole': obj.jobRole,
            'experience': obj.experience,

            'bio': obj.bio,

            'github': obj.github,
            'linkedln': obj.linkedln,
            'portfolio': obj.portfolio,

            'profile_image': obj.profile,


        })

        setIsActive(false)
    }

    const content = 
        <section className="Profile_Form">
            <button className="close" type='button' onClick={()=> setIsActive(false)}> X </button>
            <form onSubmit={handleSubmit}>
            <h1> Create New Profile </h1>
            <p> Fill your deatils to create a new profile </p>
                <div className="section sec-blue">
                    <h3> A. Basic Information </h3>
                    <div className="grid">
                        <div className="field">
                            <label> Full Name </label>
                            <input type="text" name='fullName' placeholder="Enter your name..." required></input>
                        </div>
                        <div className="field">
                            <label> Email </label>
                            <input type='email' name="email" placeholder="you@example.com" required></input>
                        </div>
                        <div className="field">
                            <label> Password </label>
                            <input type="password" name="password" placeholder="Enter password..." onChange={(e) => {setPassword(e.target.value)}} required></input>
                        </div>
                        <div className="field">
                            <label> Confirm Password</label>
                            <input type="password" name="confirmPassword" placeholder="Confirm Password..." onChange={(e) => {handlePassword(e)}} required></input>
                        </div>
                        <p className="error full">{errorMessage}</p>
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
                                <label className="choice"><input type="radio" name="gender" value="Male"  /> <span>Male</span></label>
                                <label className="choice"><input type="radio" name="gender" value='Female'  /> <span>Female</span></label>
                                <label className="choice"><input type="radio" name="gender" value='Other'  /> <span>Other</span></label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section sec-amber">
                    <h3> C. Skills (Select Multiple) </h3>
                    <div className="choices">
                        <label className="choice"><input type="checkbox" name='skills' value="python" /> <span>Python</span></label>
                        <label className="choice"><input type="checkbox" name='skills' value="javascript" /> <span>JavaScript</span></label>
                        <label className="choice"><input type="checkbox" name='skills' value="react" /> <span>React</span></label>
                        <label className="choice"><input type="checkbox" name='skills' value="fastAPI" /> <span>FastAPI</span></label>
                        <label className="choice"><input type="checkbox" name='skills' value="sql" /> <span>SQL</span></label>
                        <label className="choice"><input type="checkbox" name='skills' value="ml" /> <span>Machine Learning</span></label>
                    </div>
                </div>

                <div className="section sec-purple">
                    <h3> D. Account Type </h3>
                    <div className="choices two">
                        <label className="choice big">
                            <input type="radio" value='student' name="account_type" required onChange={() => setAccountType('student')}/>
                            <span><b>Student</b><small>Currently pursuing education</small></span>
                        </label>
                        <label className="choice big">
                            <input type="radio" value='professional' name="account_type" required onChange={() => setAccountType('professional')}/>
                            <span><b>Professional</b><small>Working professional</small></span>
                        </label>
                    </div>
                    {(accountType === 'student') ? student_type : null}
                    {(accountType === 'professional') ? professional_type : null}
                </div>

                <div className="section sec-pink">
                    <h3> E. About You</h3>
                    <div className="field">
                        <label> Bio </label>
                        <textarea name="bio" required placeholder="Tell us about yoyrself, your interest, goals..."></textarea>
                    </div>
                </div>
            
                <div className="section sec-sky">
                    <h3> F. Social Links </h3>
                    <div className="grid three">
                        <div className="field">
                            <label> Github </label>
                            <input type="url" name="github" placeholder="https://github.com/username" />
                        </div>
                        <div className="field">
                            <label> Linkedln </label>
                            <input type='url' name="linkedln" placeholder="https://linkedln.com/in/username" />
                        </div>
                        <div className="field">
                            <label> Portfolio </label>
                            <input type="url" name="portfolio" placeholder="https://yourportfolio.com" />
                        </div>
                    </div>
                </div>
            
                <div className="section sec-mint">
                    <h3> G. Profile Picture </h3>
                    <div className="avatar-row">
                        <div className="field">
                            <label> Image URL (Optional) </label>
                            <input type="url" name="profile" placeholder="https://example.com/your-image.jpg" onChange={(e) => setImageURL(e.target.value)} />
                        </div>
                        {(imageURL === '') ? null : <img src={imageURL} alt='pfp' />}
                    </div>
                </div>
            
                <div className="section sec-gold">
                    <h3> H. Terms </h3>
                    <label className="terms">
                        <input type="checkbox" name="terms" required /> <span>I agree  to the <a href='/'>terms and conditions</a></span>
                    </label>
                </div>

                <section className="buttons">
                    <button type="reset"> Reset </button>
                    <button type="submit"> Create Profile </button>
                </section>
            </form>


        </section>

    return (
        <>
        <header className="header-page">
            <h1> PROFILE MANAGER </h1>
            <h3> Create, Validate and Manage User Profiles </h3>
            <button onClick={() => setIsActive(true)}> + Create Profile </button>
            {(isActive) ? content : null}
        </header>
        </>
    )
}

export default ProfileForm;