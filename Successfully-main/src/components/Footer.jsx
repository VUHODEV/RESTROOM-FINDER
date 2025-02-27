import React from "react";
import kiemduyet from "../assets/images/logosalenoti.png";
import facebook from "../assets/images/fbsquare.png";
import youtube from "../assets/images/ytbsquare.png";

const footer = () => {
  return (
    <footer>
      <div className="TotalFooter">
        <ul className="Total_1">
          <h3>CÔNG TY TNHH VU HO GROUP- TP.HCM</h3>
          <li>
            <p>Giấy ĐKKD: 0317119491 - Ngày cấp: 16/10/2024</p>
          </li>
          <li>
            <p>Cơ quan cấp: Phòng Đăng ký kinh doanh Sở Kế hoạch</p>
          </li>
          <li>
            <p>
              Địa chỉ 1: 827A-829 Trường Chinh, Phường Tây Thạnh, Q. Tân Phú
            </p>
          </li>
          <li>
            <p>Địa chỉ 2: Thành phố Hồ Chí Minh</p>
          </li>
          <li>
            <a>
              <img src={kiemduyet} alt="kiemduyet" className="kiemduyet"></img>
            </a>
          </li>
        </ul>
        <ul>
          <h3>SẢN PHẨM</h3>
          <li>
            <a>
              <p>Restroom Finder - Tìm nhà vệ sinh</p>
            </a>
          </li>
          <li>
            <a>
              <p>Dự án: Hệ thống nhà vệ sinh trên quốc lộ</p>
            </a>
          </li>
          <li>
            <a>
              <p>Dự án: Hệ thống vệ sinh Restroom Finder</p>
            </a>
          </li>
        </ul>
        <ul>
          <h3>DỊCH VỤ</h3>
          <li>
            <a>
              <p>Trồng cây - Xây rừng</p>
            </a>
          </li>
          <li>
            <a>
              <p>Trẻ vùng cao - khó khăn</p>
            </a>
          </li>
          <li>
            <a>
              <p>Bữa cơm tình thương</p>
            </a>
          </li>
          <li>
            <a>
              <p>Đường phố sạch đẹp</p>
            </a>
          </li>
        </ul>
        <ul>
          <h3>LIÊN HỆ VỚI CHÚNG TÔI</h3>
          <li>
            {" "}
            <a href="tel:0932694273">
              <p>Hotline Tham gia tình nguyện: 0932.6942.73</p>
            </a>
          </li>
          <li>
            {" "}
            <a href="tel:0932694273">
              <p>Hotline Hỗ trợ: 0932.6942.73</p>
            </a>
          </li>
          <li>
            {" "}
            <a href="mailto:duyvu11092004@gmail.com">
              <p>Email: duyvu11092004@gmail.com</p>
            </a>
          </li>
          <li className="icon">
            <a href="https://www.facebook.com/hoduy.vu.72" target="_blank">
              <img src={facebook} alt="facebook"></img>
            </a>
            <a href="https://www.youtube.com/@vuhoduy9075" target="_blank">
              <img src={youtube} alt="youtube"></img>
            </a>
          </li>
        </ul>
      </div>
      <p>© 2024 VUHOGroup Việt Nam</p>
    </footer>
  );
};

export default footer;
