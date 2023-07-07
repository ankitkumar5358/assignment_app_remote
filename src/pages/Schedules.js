import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Schedules.css";
const Schedules = () => {
  const navigate = useNavigate();

  const onServicesTextClick = useCallback(() => {
    navigate("/services");
  }, [navigate]);

  return (
    <div className="schedules2">
      <button className="schedules3">Schedules</button>
      <div className="rectangle-container">
        <div className="group-child6" />
        <div className="group-child7" />
        <div className="neha-bhat2">Neha Bhat</div>
        <div className="home2">Home</div>
        <div className="bookings2">Bookings</div>
        <div className="queries2">Queries</div>
        <div className="schedules4">Schedules</div>
        <div className="services6" onClick={onServicesTextClick}>
          Services
        </div>
        <img className="vector-icon36" alt="" src="/vector4.svg" />
        <div className="profile2">Profile</div>
        <div className="invite-earn2">{`Invite & Earn`}</div>
        <div className="rewards2">Rewards</div>
        <div className="logout2">Logout</div>
        <div className="group-child8" />
        <div className="group-child9" />
        <img className="vector-icon37" alt="" src="/vector.svg" />
        <img className="vector-icon38" alt="" src="/vector1.svg" />
        <img className="vector-icon39" alt="" src="/vector2.svg" />
        <img className="vector-icon40" alt="" src="/vector3.svg" />
        <img className="vector-icon41" alt="" src="/vector5.svg" />
        <img className="vector-icon42" alt="" src="/vector6.svg" />
        <img className="vector-icon43" alt="" src="/vector7.svg" />
        <img className="vector-icon44" alt="" src="/vector8.svg" />
        <img className="group-child10" alt="" src="/ellipse-7@2x.png" />
      </div>
      <div className="footer2">
        <div className="footer-inner" />
        <div className="help-center2">Help center</div>
        <div className="about-us4">About us</div>
        <div className="faqs2">FAQs</div>
        <img className="vector-icon45" alt="" src="/vector9.svg" />
        <img className="vector-icon46" alt="" src="/vector10.svg" />
        <img className="vector-icon47" alt="" src="/vector11.svg" />
        <img className="vector-icon48" alt="" src="/vector12.svg" />
        <div className="mentorbridge-all-rights-container2">
          2023 M<span className="entorbridge2">{`entorbridge. `}</span>All
          Rights Reserved.
        </div>
        <div className="contact-us2">Contact us</div>
        <div className="privacy-policy2">Privacy policy</div>
        <div className="terms-of-use2">Terms of use</div>
        <img className="vector-icon49" alt="" src="/vector13.svg" />
      </div>
      <div className="group-div">
        <div className="group-child11" />
        <div className="group-child12" />
        <div className="saturday">Saturday</div>
        <div className="unavailable">Unavailable</div>
      </div>
      <div className="rectangle-parent1">
        <div className="group-child11" />
        <div className="group-child14" />
        <div className="wednesday">Wednesday</div>
        <div className="unavailable1">Unavailable</div>
      </div>
      <div className="rectangle-parent2">
        <div className="group-child11" />
        <div className="group-child14" />
        <div className="wednesday">Sunday</div>
        <div className="unavailable1">Unavailable</div>
      </div>
      <div className="rectangle-parent3">
        <div className="group-child11" />
        <div className="group-child18" />
        <div className="thursday">Thursday</div>
        <div className="unavailable3">Unavailable</div>
      </div>
      <div className="rectangle-parent4">
        <div className="group-child11" />
        <div className="group-child20" />
        <div className="monday">Monday</div>
        <div className="unavailable4">Unavailable</div>
      </div>
      <div className="rectangle-parent5">
        <div className="group-child11" />
        <div className="group-child18" />
        <div className="friday">Friday</div>
        <div className="unavailable3">Unavailable</div>
      </div>
      <div className="rectangle-parent6">
        <div className="group-child11" />
        <div className="group-child24" />
        <div className="tuesday">Tuesday</div>
        <div className="unavailable6">Unavailable</div>
      </div>
      <div className="default">Default</div>
      <div className="iphone-14-1">
        <div className="jun">2023 Jun</div>
        <div className="sun">Sun</div>
        <div className="mon">Mon</div>
        <div className="tue">Tue</div>
        <div className="wed">Wed</div>
        <div className="thu">Thu</div>
        <div className="fri">Fri</div>
        <div className="sat">Sat</div>
        <div className="iphone-14-1-child" />
        <div className="div1">
          <p className="p">
            <span className="span">29 30 31</span>
            <span> 1 2 3 4</span>
          </p>
          <p className="p">&nbsp;</p>
          <p className="p">&nbsp;</p>
          <p className="p"> 5 6 7 8 9 10 11</p>
          <p className="p">&nbsp;</p>
          <p className="p">&nbsp;</p>
          <p className="p">12 13 14 15 16 17 18</p>
          <p className="p">&nbsp;</p>
          <p className="p">&nbsp;</p>
          <p className="p">19 20 21 22 23 24 25</p>
          <p className="p">&nbsp;</p>
          <p className="p">&nbsp;</p>
          <p className="p">
            <span>{`26          27            28            `}</span>
            <span className="span">1 2 3 4</span>
            <span className="span2">{`           `}</span>
          </p>
        </div>
        <div className="iphone-14-1-item" />
        <div className="iphone-14-1-inner" />
        <div className="ellipse-div" />
        <div className="iphone-14-1-child1" />
        <div className="iphone-14-1-child2" />
        <div className="iphone-14-1-child3" />
        <img className="vector-icon50" alt="" src="/vector19.svg" />
        <img className="vector-icon51" alt="" src="/vector20.svg" />
      </div>
      <div className="top-menu2">
        <div className="top-menu-inner" />
        <img className="logo-icon2" alt="" src="/logo1.svg" />
        <div className="about-us5">About Us</div>
        <div className="blog2">Blog</div>
        <div className="filters2">Filters</div>
        <img className="vector-icon52" alt="" src="/vector16.svg" />
        <img className="vector-icon53" alt="" src="/vector17.svg" />
      </div>
    </div>
  );
};

export default Schedules;
