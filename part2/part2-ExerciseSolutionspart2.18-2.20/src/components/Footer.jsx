export default function Footer()  {
    
    return (
      <div className="footer">
        <div className="footer-info">
          <ul> 
            <li className="footer-ul-header">About Us</li>
            <li className="logo-footer">Countria</li>           
            <li><a href="https://blog.weather.us/" target="_blank" rel="noopener noreferrer">Blog</a></li>
            <li><a href="https://www.google.com" target="_blank" rel="noopener noreferrer">Ask a question</a></li>
            <li><a href="https://praedictix.com/meteorologists/" target="_blank" rel="noopener noreferrer">Meet experts</a></li>
          </ul>

          <ul>
            <li className="footer-ul-header">Maps</li>
            <li><a href="https://openweathermap.org/api" target="_blank" rel="noopener noreferrer">Forecast APIs</a></li>
            <li><a href="https://www.google.com/maps/d/u/0/viewer?mid=1hjs3mIoZBblBP_CvxiP4w38STiY&hl=en_US&ll=15.792914338408416%2C34.569168&z=2" target="_blank" rel="noopener noreferrer"> Weather Maps</a></li>
            <li><a href="https://www.meteomatics.com/en/technology/" target="_blank" rel="noopener noreferrer">Our technology</a></li>
          </ul>


          <ul>
            <li className="footer-ul-header">Terms & Conditions</li>
            <li><a href="http://" target="_blank" rel="noopener noreferrer">Subscription</a></li>
            <li><a href="http://" target="_blank" rel="noopener noreferrer">Privacy</a></li>
            <li><a href="http://" target="_blank" rel="noopener noreferrer">Policies</a></li>
          </ul>
        </div>
        <h6>All rights reserved &copy;{new Date().getFullYear()} | Developer : Gbenga Oluwadahunsi</h6> 
      </div>
    )
  }