import React from 'react'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import "./footer.css";

function Footer() {
  return (
    <div className = 'footer_outer_container'>
      <div className = 'footer_inner_container'>
        <div className = 'footer_icon'>
            <FacebookOutlinedIcon/>
            <InstagramIcon/>
            <YouTubeIcon/>
          </div>
          <div className='footer_data'>
            <div>
              <ul>
                <li>Audio Decription</li>
                <li>investor Realtions</li>
                <li>Legalnotice</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Help Center</li>
                <li>Jobs</li>
              </ul>
            </div>
            <ul>
              <li>Gift Cards</li>
              <li>Terms of Use</li>
              <li>Corporate Information</li>
            </ul>

          </div>
        </div>
        <div className = 'service_code'>
          <p>Service Code</p>

        </div>
        <div className='copy-write'>
          &copy; 1997-2024 Netflix, Inc.
        </div>
      </div>

    
  )
}

export default Footer
