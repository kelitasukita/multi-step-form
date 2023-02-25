import './index.scss';

export default function personalInfo() {
  return(
    <div className="personalInfo-container">
      <div className="title-info">
        <h1>Personal Info</h1>
        <p>Please provide your name, email address, and phone number.</p>
      </div>

      <div className="name-box">
        <label htmlFor="name">Name</label>
        <input type="text" placeholder='e.g. Stephen King'/>
      </div>
      
      <div className="email-box">
        <label htmlFor="name">Email Address</label>
        <input type="text" placeholder='e.g. stephenking@lorem.com'/>
      </div>
      <div className="phone-box">
        <label htmlFor="name">Phone Number</label>
        <input type="text" placeholder='e.g. +1 234567 890'/>
      </div>

    </div>
  )
}