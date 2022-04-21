import "./login.css";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Menu from "../../components/menu/menu";
import videobg1 from "./video1.mp4";
import videobg2 from "./video2.mp4";
import { Button, Modal } from 'semantic-ui-react'



const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [openDialog, setOpenDialog] = useState(false);
  const [message, setMessage] = useState("");
  const history = useHistory();

  const handleChange = (e, field) => {
    if (field === "email") {
      setUsername(e.target.value);
    }
    if (field == "password") {
      setPassword(e.target.value);
    }
  };


  const account = { username: "admin", password: "admin123" };

  const onLogin = () => { 
    logintrue();
    loginFailse();  
  };

  const logintrue= () => {
    if (username === account.username && password === account.password) {
      // setOpenDialog(true);
      // setMessage("Đăng nhập thành công !!!");
      history.push("/home");
    }else if (username !== account.username || password !== account.password){
      setOpenDialog(true);
      setMessage("Sai user or password !!!");
    }
  }
  const loginFailse= () => {
    if (username === "" || password === "") {
      setOpenDialog(true);
      setMessage("Không được để trống user or password !!!");
    }
  }


  // let checkInfo = true;
  // if (!username || !password) checkInfo = true;
  // if (username && password) checkInfo = false;
  
  const moveToSignup =()=>{
    var login1 = document.getElementById('login')
    var signup1 = document.getElementById('signup')
    signup1.style.transform = "rotateY(0deg)";
    login1.style.transform = "rotateY(-180deg)";
  }
  const moveToLogin =()=>{
    var login1 = document.getElementById('login')
    var signup1 = document.getElementById('signup')
    signup1.style.transform = "rotateY(180deg)";
    login1.style.transform = "rotateY(0deg)";
  }
  const vuive = ()=>{
    alert('Quên thì đừng đăng nhập !!!')
  }
  

  return (
    <div className="container3">
      <Menu />
      <div className="container-login">
        <div className="container-video1">
          <video autoPlay loop muted>
            <source src={videobg1} />
          </video>
        </div>
        <div className="contenr-login">
          <div className="form">
            <div className="login-form" id='login'>
              <div class="title">Login</div>
              <form action="#">
                <div class="input-boxes">
                  <div class="input-box">
                    <i class="fas fa-envelope"></i>
                    <input
                      type="text"
                      value={username}
                      onChange={(e) => handleChange(e, "email")}
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div class="input-box">
                    <i class="fas fa-lock"></i>
                    <input
                      // name="input password"
                      type="password"
                      value={password}
                      onChange={(e) => handleChange(e, "password")}
                      placeholder="Enter your password"
                      required
                    />
                  </div>
                  <div class="text">
                    <a href="#" onClick={vuive}>Forgot password?</a>
                  </div>
                  <button onClick={onLogin} 
                  // disabled={checkInfo}
                   >Submit</button>
                  <div class="text sign-up-text">
                    Don't have an account? <label for="flip" onClick={moveToSignup}>Sigup now</label>
                  </div>
                </div>
              </form>
            </div>

            <div class="signup-form" id='signup'>
              <div class="title">Signup</div>
              <form action="#">
                <div class="input-boxes">
                  <div class="input-box">
                    <i class="fas fa-user"></i>
                    <input type="text" placeholder="Enter your name"
                    //  required 
                     />
                  </div>
                  <div class="input-box">
                    <i class="fas fa-envelope"></i>
                    <input
                      type="text"
                      placeholder="Enter your email"
                      // required
                    />
                  </div>
                  <div class="input-box">
                    <i class="fas fa-lock"></i>
                    <input
                      type="password"
                      placeholder="Enter your password"
                      // required
                    />
                  </div>
                  <button>Submit</button>
                  <div class="text sign-up-text">
                    Already have an account? <label for="flip" onClick={moveToLogin}>Login now</label>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="container-video2">
          <video autoPlay loop muted>
            <source src={videobg2} />
          </video>
        </div>
        <Modal
        onClose={() => setOpenDialog(false)}
        onOpen={() => setOpenDialog(true)}
        open={openDialog}
        size="mini"
      >
        <Modal.Header>
          <h4 className="txt-check">Thông báo</h4>
        </Modal.Header>
        <Modal.Content image>
          <p>{message}</p>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={() => setOpenDialog(false)}>Đóng</Button>
        </Modal.Actions>
      </Modal>
      </div>
    </div>
  );
};
export default Login;
