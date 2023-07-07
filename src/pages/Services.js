import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Services.css";
const Services = () => {
  const navigate = useNavigate();

  const onRectangle6Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="services3">
      <div className="services4">Services</div>
      <div className="rectangle-group">
        <div className="group-child1" />
        <div className="group-child2" />
        <div className="neha-bhat1">Neha Bhat</div>
        <div className="home1">Home</div>
        <div className="bookings1">Bookings</div>
        <div className="queries1">Queries</div>
        <div className="schedules1">Schedules</div>
        <div className="profile1">Profile</div>
        <div className="invite-earn1">{`Invite & Earn`}</div>
        <div className="rewards1">Rewards</div>
        <div className="logout1">Logout</div>
        <div className="group-child3" />
        <div className="group-child4" />
        <img className="vector-icon18" alt="" src="/vector.svg" />
        <img className="vector-icon19" alt="" src="/vector1.svg" />
        <img className="vector-icon20" alt="" src="/vector2.svg" />
        <img className="vector-icon21" alt="" src="/vector3.svg" />
        <div className="services5">Services</div>
        <img className="vector-icon22" alt="" src="/vector4.svg" />
        <img className="vector-icon23" alt="" src="/vector5.svg" />
        <img className="vector-icon24" alt="" src="/vector6.svg" />
        <img className="vector-icon25" alt="" src="/vector7.svg" />
        <img className="vector-icon26" alt="" src="/vector8.svg" />
        <img className="group-child5" alt="" src="/ellipse-7@2x.png" />
      </div>
      <div className="footer1">
        <div className="footer-item" />
        <div className="help-center1">Help center</div>
        <div className="about-us2">About us</div>
        <div className="faqs1">FAQs</div>
        <img className="vector-icon27" alt="" src="/vector9.svg" />
        <img className="vector-icon28" alt="" src="/vector10.svg" />
        <img className="vector-icon29" alt="" src="/vector11.svg" />
        <img className="vector-icon30" alt="" src="/vector12.svg" />
        <div className="mentorbridge-all-rights-container1">
          2023 M<span className="entorbridge1">{`entorbridge. `}</span>All
          Rights Reserved.
        </div>
        <div className="contact-us1">Contact us</div>
        <div className="privacy-policy1">Privacy policy</div>
        <div className="terms-of-use1">Terms of use</div>
        <img className="vector-icon31" alt="" src="/vector13.svg" />
      </div>
      <div className="services-child" />
      <div className="create-a-11">Create a 1:1 Service</div>
      <div className="services-item" />
      <div className="services-inner" />
      <div className="services-child1" />
      <div className="services-child2" onClick={onRectangle6Click} />
      <div className="call1">1:1 Call</div>
      <div className="text-query">Text Query</div>
      <div className="webinar">Webinar</div>
      <img className="vector-icon32" alt="" src="/vector18.svg" />
      <img className="vector-icon33" alt="" src="/vector14.svg" />
      <div className="add-service">Add service</div>
      <div className="add1">{`Add `}</div>
      <img
        className="woman-making-a-video-call1"
        alt=""
        src="/woman-making-a-video-call1@2x.png"
      />
      <div className="top-menu1">
        <div className="top-menu-item" />
        <img className="logo-icon1" alt="" src="/logo.svg" />
        <div className="about-us3">About Us</div>
        <div className="blog1">Blog</div>
        <div className="filters1">Filters</div>
        <img className="vector-icon34" alt="" src="/vector16.svg" />
        <img className="vector-icon35" alt="" src="/vector17.svg" />
      </div>
    </div>
  );
};

export default Services;
