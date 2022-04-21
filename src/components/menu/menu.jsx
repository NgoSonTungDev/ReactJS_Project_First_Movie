import React from "react";
import "./menu.css";
import { Link } from "react-router-dom";

const Menu = () => {
  const changemenu =()=>{
    var menu4 = document.getElementById('menu4');
    if (menu4.style.left == "-100%"){
      menu4.style.left = "0";
    }else{
      menu4.style.left = "-100%";
    }

  }
  return (
    <div class="menu">
      <div class="menu2">
        <ul>
          <li>
            <a href="">
              <Link to="/home">HOME</Link>
            </a>
          </li>
          <li>
          
            <a href=""><Link to="/home">THỂ LOẠI</Link></a>
          </li>
          <li>

            <a href=""><Link to="/home">QUỐC GIA</Link></a>
          </li>
          <li>
            <a href=""><Link to="/home">PHIM LẺ</Link></a>
          </li>
          <li>
            <a href=""><Link to="/home">PHIM BỘ</Link></a>
          </li>
          <li>
            <a href=""><Link to="/home">PHIM CHIẾU RẠP</Link></a>
          </li>
          <li>
            <a href=""><Link to="/">ĐĂNG NHẬP</Link></a>
          </li>
        </ul>
      </div>

      <div class="box_if">
        <div class="information">
          <i class="far fa-bell"></i>
        </div>
        <div class="user">
          <i class="fas fa-caret-down"></i>
          <div class="quote">
            <div class="quote_user">
              <img
                src="https://scontent.fdad3-4.fna.fbcdn.net/v/t1.6435-9/68258670_359169968340831_5615483204795367424_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=174925&_nc_ohc=ykuRd0eti3UAX-83pXR&_nc_ht=scontent.fdad3-4.fna&oh=d91c839b607feccd3898c011a38fdeb0&oe=6189B550"
                alt=""
              />
              <div class="quote_txt">
                <h4>Ngô Sơn Tùng</h4>
                <p>Admin</p>
              </div>
            </div>
            <hr width="80%" />
            <div class="gopy">
              <i class="far fa-address-card"></i>
              <div class="gopy_txt">
                <h4>
                  <a href=""></a> Đóng Góp Ý Kiến !!!
                </h4>
              </div>
            </div>
            <hr width="80%" />
            <div class="quote_icon">
              <div class="gopy">
                <i class="fas fa-question-circle"></i>
                <div class="gopy_txt">
                  <h4>
                    <a href=""></a>Cài đặt & quyền riêng tư
                  </h4>
                </div>
              </div>
              <div class="gopy">
                <i class="fas fa-cog"></i>
                <div class="gopy_txt">
                  <h4>
                    <a href=""></a> Trợ giúp và hổ trợ
                  </h4>
                </div>
              </div>
              <div class="gopy">
                <i class="fas fa-low-vision"></i>
                <div class="gopy_txt">
                  <h4>
                    <a href=""></a> Trợ năng
                  </h4>
                </div>
              </div>
              <div class="gopy">
                <i class="fas fa-sms"></i>
                <div class="gopy_txt">
                  <h4>
                    <a href=""></a> Liên lạc hổ trợ
                  </h4>
                </div>
              </div>
              <hr width="80%" />
              <div class="qoutr_out">
                <div class="gopy">
                  <i class="fas fa-sign-out-alt"></i>
                  <div class="gopy_txt">
                    <h4>
                      <a href=""></a> Log out
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="menu3">
        <p>SonTung.movie</p>
        <img src="https://cdn-icons-png.flaticon.com/128/1828/1828859.png" alt="" onClick={changemenu} />
      </div>
      <div className="menu4" id="menu4">
        <ul>
          <li>Home</li>
          <li>Thể loại</li>
          <li>Quốc gia</li>
          <li>Phim lẻ</li>
          <li>Phim bộ</li>
          <li>Phim chiếu rạp</li>
          <li>Đăng nhập</li>
        </ul>

      </div>

    </div>
  );
};

export default Menu;
