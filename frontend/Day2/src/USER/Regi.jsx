import './Regi.css';
const Login = () => {
  return (
    <div>
        <body>
  <div className="container">
    <input type="checkbox" id="flip"/>
    <div className="cover">
      <div className="front">
        <img src="https://images.pexels.com/photos/752525/pexels-photo-752525.jpeg?cs=srgb&dl=pexels-omar-houchaimi-752525.jpg&fm=jpg=" alt=""/>
        <div className="text">
          
        </div>
      </div>
      <div className="back">
        <img className="backImg" src="https://www.shutterstock.com/image-vector/nurse-carries-grandmother-wheelchair-old-600nw-1425535670.jpg" alt=""/>
        <div className="text">
          <span className="text-1">Complete miles of journey <br/> with one step</span>
          <span className="text-2">Lets get started</span>
        </div>
      </div>
    </div>
    <div className="forms">
        <div className="form-content">
          <div className="login-form">
            <div className="title">Register</div>
          <form action="#">
            <div className="input-boxes">
              <div className="input-box">
                <i className="fas fa-envelope"></i>
                <input type="text" placeholder="Enter your N" required/>
              </div>
              <div className="input-box">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Enter your password" required/>
              </div>
              <div className="text"><a href="#">Forgot password?</a></div>
              <div className="button input-box">
                <input type="submit" value="Sumbit"/>
              </div>
              <div className="text sign-up-text">Dont have an account? <label for="flip">Sigup now</label></div>
            </div>
        </form>
      </div>
        
    </div>
    </div>
  </div>
</body>
    </div>
  )
}

export default Login