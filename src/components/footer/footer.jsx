import React from "react";
import "./footer.css";

const anhiconne =  ['https://cdn-icons-png.flaticon.com/128/2111/2111463.png','https://cdn-icons-png.flaticon.com/128/1384/1384053.png','https://cdn-icons-png.flaticon.com/128/1384/1384060.png','https://cdn-icons-png.flaticon.com/128/2111/2111450.png','https://stc-zaloprofile.zdn.vn/pc/v1/images/zalo_sharelogo.png']

const Footer = () => {
  return (
    <div className="footer-bottom">
      <div className="footer1">
        <h4>PHIM Mới</h4>
        <ul>
          <li>Phim chiếu rạp</li>
          <li>Phim lẻ</li>
          <li>Phim bộ</li>
          <li>Phim hành động</li>
        </ul>
      </div>
      <div className="footer1">
        <h4>PHIM Hay</h4>
        <ul>
          <li>Phim Mỹ</li>
          <li>Phim Hàn Quốc</li>
          <li>Phim Việt Nam</li>
          <li>Phim Trung Quốc</li>
          <li>Phim Thái Lan</li>
        </ul>
      </div>
      <div className="footer1">
        <h4>Liên hệ</h4> <br />
        <div className="icon-img">
          <a href="https://www.instagram.com/stung.0309/" target='_blank'><img src={anhiconne[0]} alt="" /> </a>
          <a href="https://www.facebook.com/sontung0309/" target='_blank'><img src={anhiconne[1]} alt="" /> </a>  
          <a href="https://www.youtube.com/" target='_blank'><img src={anhiconne[2]} alt="" /> </a>         
          <a href="https://www.youtube.com/" target='_blank'><img src={anhiconne[3]} alt="" /> </a>         
          <a href="https://www.youtube.com/" target='_blank'><img src={anhiconne[4]} alt="" /> </a>         
        </div>
      </div>
      <i>Design by Son Tung</i>
    </div>
  );
};

export default Footer;
