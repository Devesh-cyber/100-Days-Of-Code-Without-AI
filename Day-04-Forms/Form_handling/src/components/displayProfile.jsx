function displayProfile({profileList}){
    return (
        <>
        {profileList.map(p => 
        <section className="profile-card">
            <img src={profileList.profile} className="profile" alt='pfp' />
            <h3 className="fullName">{profileList.fullName}</h3>
            <span className="account_type">{profileList.account_type}</span>
            <span className="email">{profileList.email}</span>
    
        </section>
        )}
        </>
    )
}

export default displayProfile;