import React from 'react';
// import 'assets/js/script.js';



function Register() {
  return (  
      <form action="#" className="form">
        <h1 className="text-center">Astrologer Registration</h1>
        {/* Progress bar */}
        <div className="progressbar">
          <div className="progress" id="progress"></div>
          <div
            className="progress-step progress-step-active"
            data-title="Registraion"
          ></div>
          <div className="progress-step" data-title="Basic Info"></div>
          <div className="progress-step" data-title="Experience"></div>
          <div className="progress-step" data-title="Complete"></div>
        </div>
        {/* Steps */}
        <div className="form-step form-step-active">
          <div className="input-group">
          <h3 className="akashform">Name</h3>
           {/* <label for="username">Name </label> */}
            <input type="text" name="username" id="username" placeholder="Enter your name" />
          </div>
        <div className="input-group">
          <h4 className="akashform">Email</h4>
            <input type="text" name="position" id="position" placeholder="Enter your email" />
          </div>
          <div className="input-group">
              {/* <label for="position">Gender</label> */}
              <h3 className="akashform">Gender</h3>
              <select id="gender" name="gender" className="akash" required>
                  <option value="" disabled selected>Select your gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
              </select>
            {/* <input type="text" name="position" id="position" placeholder="Position" /> */}
            </div> 
                     <div className="input-group">
                        <h3 className="akashform">Address</h3>
              {/* <label for="position">Address</label> */}
              <input type="text" name="position" id="position" placeholder="Enter Your Complete Address" />
            </div>
            <div className="input-group">
              <h3 className="akashform">Date of Birth</h3>
              {/* <label for="dob">Date of Birth</label> */}
            <input type="date" name="dob" id="dob" placeholder="Date Of Birth"/>
              {/* <label for="position">Position</label>
              <input type="text" name="position" id="position" placeholder="Position" /> */}
            </div>
          <div className="">

            <a href="#" className="btn btn-next width-50 ml-auto">Next</a>

          </div>

        </div>

        <div className="form-step">
          <h3 className="lantitle akashform">Languages Spoken</h3>
          <div className="input-group" style={{display:"flex"}}>
            {/* <label for="phone">Phone</label> */}
         
            {/* <label for="languages">Select Languages</label> */}
            <input type="checkbox" id="english" name="languages" value="English"/> English
            <input type="checkbox" id="hindi" name="languages" value="Hindi"/> Hindi
            <input type="checkbox" id="spanish" name="languages" value="Spanish"/> Bangla
            <input type="checkbox" id="french" name="languages" value="French"/> Gujarati
            <input type="checkbox" id="german" name="languages" value="German"/> kannada
            <input type="checkbox" id="mandarin" name="languages" value="Mandarin"/> Marathi
            <input type="checkbox" id="arabic" name="languages" value="Arabic"/> Tamil
            <input type="checkbox" id="bengali" name="languages" value="Bengali"/> Telugu
            <input type="checkbox" id="otherLanguage" name="languages" value="Other"/> Other
          </div>
          <h3 className="akashform">Expertise in Astrology</h3>
          <div className="input-group" style={{display:"flex"}}>
          
            <input type="checkbox" id="Vedic" name="languages" value="English"/> Vedic
            <input type="checkbox" id="Tarot" name="languages" value="Hindi"/> Tarot
            <input type="checkbox" id="Numberlogy" name="languages" value="Spanish"/> Numberlogy
            <input type="checkbox" id="Vastu" name="languages" value="French"/> Vastu
            <input type="checkbox" id="other" name="languages" value="Other"/> Other
          </div>
          <div className="btns-group">
            <a href="#" className="btn btn-prev">Previous</a>
            <a href="#" className="btn btn-next">Next</a>
          </div>
        </div>
        <div className="form-step">
          <div className="input-group">
            <h3 className="akashform">Experience in YEAR</h3>
            {/* <label for="dob">Experience in Year</label> */}
            <input type="number" name="ID" id="ID" placeholder="Year" />
          </div>
          <div className="input-group">
            <h3 className="akashform">Experience in Month</h3>
          {/* <label for="ID">Experience in Month</label> */}
            <input type="number" name="ID" id="ID" placeholder="Month"/>
          </div>
          <div className="input-group">
            <h3 className="akashform">Is Astrology your Family Occupation</h3>
            <select id="gender" name="gender" className="akash" required>
              {/* <option value="" disabled selected>Select Device Type</option> */}
              <option value="Male">Yes</option>
              <option value="Female">No</option>     
            </select>
          </div>
        <div className="input-group">
          <h3 className="akashform">Are you on Android or IOS ?</h3>
          <select id="gender" name="gender" className="akash" required>
            <option value="" disabled selected>Select Device Type</option>
            <option value="Male">Android</option>
            <option value="Female">IOS</option>
            <option value="Female">Windos</option>
            <option value="Other">Other</option>
          </select>
        </div>
         <div className="input-group">
            <h3 className="akashform">Are you on any other platforms?</h3>
            <select id="gender" name="gender" className="akash" required>  
              <option value="Male">Yes</option>
              <option value="Female">No</option>         
            </select>
          </div>
          <div className="btns-group">
            <a href="#" className="btn btn-prev">Previous</a>
            <a href="#" className="btn btn-next">Next</a>
          </div>
        </div>
          <div className="form-step">
            <div className="input-group">
              <h3 className="akashform">Profile Image</h3>
              {/* <label for="profileImage">Upload Profile Image</label> */}
              <input type="file" id="profileImage" name="profileImage" accept=".jpg,.jpeg,.png,.gif" required/>
            </div>
    
            <div className="input-group">
              <h3 className="akashform">Government Identity Proof</h3>
              {/* <label for="identityProof">Upload Identity Proof</label> */}
              <input type="file" id="identityProof" name="identityProof" accept=".pdf,.jpg,.jpeg,.png" required/>
            </div>
          </div>
        <div className="input-group">
          <h3 className="akashform">Terms and Conditions</h3>
          <p style={{textAlign: "justify"}}>I hereby declare that the information provided is accurate to the best of my knowledge.<br/>
            I agree to abide by the code of ethics and professional conduct as stipulated by the governing body/organization.
            I consent to the use of my personal information for the purposes of registration and service provision.</p>
           <div className="">
           
            <p style={{textAlign: "left"}}>I agree to the Terms and Conditions  
              <input type="checkbox" className="imp" id="terms" name="terms" required/> </p>.
           </div>
        </div>
        <div className="btns-group">
          <a href="#" className="btn btn-prev">Previous</a>
          <input type="submit" value="Submit" className="btn" style={{fontSize: "16px"}}/>
        </div>
      
    </form> 
  )
}
  
export default Register;