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
     <>
                <label>College Name</label>
                <input type="text" name="collegeName" required placeholder="Enter your college name"  />
                <label> Course </label>
                <input type="text" name="course" required placeholder="Enter your course"  />
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
    </>

    const professional_type = 
    <>
                <label>Company Name</label>
                <input type="text" name="companyName" required placeholder="Enter your company name"  />
                <label> Job Role </label>
                <input type="text" name="jobRole" required placeholder="Enter job role"  />
                <label> Experience </label>
                <input type="number"  name="experience" required placeholder="0"/>
    </>

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
            <h1> Create New Profile </h1>
            <p> Fill your deatils to create a new profile </p>
            <form onSubmit={handleSubmit}>
                <h3> A. Basic Information </h3>
                <label> Full Name </label>
                <input type="text" name='fullName' placeholder="Enter your name..." required></input>
                <label> Email </label>
                <input type='email' name="email" placeholder="you@example.com" required></input>
                <label> Password </label>
                <input type="password" name="password" placeholder="Enter password..." onChange={(e) => {setPassword(e.target.value)}} required></input>
                <label> Confirm Password</label>
                <input type="password" name="confirmPassword" placeholder="Confirm Password..." onChange={(e) => {handlePassword(e)}} required></input>
                <p className="error">{errorMessage}</p>

                <h3> B. personal Information</h3>
                <label>Age</label>
                <input type="number" name="age" placeholder="18" required></input>
                <label>Gender</label>
                <input type="radio" name="gender" value="Male"  /> Male
                <input type="radio" name="gender" value='Female'  /> Female
                <input type="radio" name="gender" value='Other'  />  Other
                <label> Country </label>
                <select name="country" required>
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                    <option value="China">China</option>
                </select>

                <h3> C. Skills (Select Multiple) </h3>
                <input type="checkbox" name='skills' value="python" /> Python
                <input type="checkbox" name='skills' value="javascript" /> JavaScript
                <input type="checkbox" name='skills' value="react" /> React
                <input type="checkbox" name='skills' value="fastAPI" /> FastAPI
                <input type="checkbox" name='skills' value="sql" /> SQL
                <input type="checkbox" name='skills' value="ml" /> Machine Learning

                <h3> D. Account Type </h3>
                <input type="radio" value='student' name="account_type" required onChange={() => setAccountType('student')}/> Student
                {(accountType === 'student') ? student_type : null}

                <input type="radio" value='professional' name="account_type" required onChange={() => setAccountType('professional')}/> Professional
                {(accountType === 'professional') ? professional_type : null}

                <h3> E. About You</h3>
                <label> Bio </label>
                <textarea name="bio" required placeholder="Tell us about yoyrself, your interest, goals..."></textarea>
            
                <h3> F. Social Links </h3>
                <label> Github </label>
                <input type="url" name="github" placeholder="https://github.com/username" />
                <label> Linkedln </label>
                <input type='url' name="linkedln" placeholder="https://linkedln.com/in/username" />
                <label> Portfolio </label>
                <input type="url" name="portfolio" placeholder="https://yourportfolio.com" />
            
                <h3> G. Profile Picture </h3>
                <label> Image URL (Optional) </label>
                <input type="url" name="profile" placeholder="https://example.com/your-image.jpg" onChange={(e) => setImageURL(e.target.value)} />
                {(imageURL === '') ? null : <img src={imageURL} alt='pfp' />}
            
                <h3> H. Terms </h3>
                <input type="checkbox" name="terms" required /> I agree  to the <a href='/'>terms and conditions</a>

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