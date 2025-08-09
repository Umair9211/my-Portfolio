import React from "react";
import { Helmet } from "react-helmet";
import Stack from "react-bootstrap/Stack";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useState, useEffect, useContext } from "react";
import "swiper/css/pagination";
import bgColors from "../assets/js/dataArray.js";
import { boxColor } from "../assets/js/dataArray.js";
import { BackgroundContext } from "../context/BackgroundContext.jsx";
import { Pagination } from "swiper/modules";
const skills = [
  "HTML",
  "CSS",
  "JavaScript ",
  "ReactJS",
  "Bootstrap",
  "Node.js",

  "Responsive Design",
  "Networking Fundamentals",
  "Cisco Packet Tracer",
  "Subnetting & IP Addressing",
  "Wireshark",
  "Nmap",

  "Cybersecurity Basics",

  "VLAN & Routing Protocols (RIP, OSPF)",
  "DNS & DHCP Configuration",
  "Problem Solving",
  "Team Collaboration",
];

const Home = () => {
  const descriptions = {
    default:
      "Hey! I’m Umair Farooq. I’m into all things computer science — from building cool websites to setting up networks and exploring cybersecurity.<br /><br />Hover over each core skill to learn a bit more about what I do!",
    "Web Development":
      "I’m a web developer who loves turning ideas into sleek, functional websites. Front-end development is where I shine working with tools like React, Bootstrap, and more to create responsive and engaging user experiences. I’ve done several projects and I’m always learning new techniques to improve. While I’ve only scratched the surface of backend work.<br></br> I’m eager to explore more and grow into a full-stack developer.",
    "Network Engineering":
      "I’m an aspiring Network Engineer who loves diving into the backbone of how everything connects. I’ve got a strong grip on the essentials — IP addressing, subnetting, routing, switching, VLANs, DHCP, DNS, NAT, and the OSI model. I’ve worked with tools like Cisco Packet Tracer and Wireshark to simulate and troubleshoot networks.<br></br> Always down to learn more and level up my networking game.",
    "Cybersecurity Analyst":
      "I'm a rising Cybersecurity Analyst. While it's the newest of my core tech interests, I'm actively learning and gaining hands-on experience with tools like Nmap and Wireshark. I’m exploring how to secure systems, spot vulnerabilities, and understand digital threats <br></br> I’m genuinely excited to keep leveling up in this field.",
  };
  const [description, setDescription] = useState(descriptions.default);

  const [bgColor, setBgColor] = useState("");
  const handleMouseEnter = (role) => {
    document.body.style.background =
      bgColors[role.toLowerCase().split(" ")[0]] || bgColors.default;
    const navBar = document.querySelector(".navBar-main");
    const profileWrapper = document.querySelector(".profile-wrapper");
    profileWrapper.style.background = "transparent";
    if (navBar) {
      navBar.style.background =
        bgColors[role.toLowerCase().split(" ")[0]] || bgColors.default;
    }
    setDescription(descriptions[role] || descriptions.default);
  };

  const handleMouseLeave = () => {
    document.body.style.background = bgColors.default;
    const navBar = document.querySelector(".navBar-main");
    const profileWrapper = document.querySelector(".profile-wrapper");
    profileWrapper.style.background = "radial-gradient(circle, #e07a32fd 65%, transparent 40%)";
    if (navBar) {
      navBar.style.background = bgColors.default;
    }
    setDescription(descriptions.default);
  };
  const { setBg, setTheme,setBoxClr } = useContext(BackgroundContext);
  useEffect(() => {
    setTheme("default");
    setBg(bgColors.default);
    setBoxClr(boxColor.default);

  }, []);
  return (
    <>
      <title>Home | Umair's Portfolio</title>

      <section className="sec-1 pt-1">
        <div className="container">
          <div className="hero row align-items-center pt-5">
            <div className="hero-text text-lg-start text-center col-lg-6 col-12 ">
              <h1>HELLO.</h1>
              <h2>My name is Umair Farooq.</h2>
              <p>
                Web Developer, Asphiring Network enginner and Cybersecurity
                analyst
              </p>
            </div>
            <div className="hero-image-container text-center col-lg-6 col-12">
              <div className="profile-wrapper mx-auto">
                <img
                  src="img/pic.png"
                  alt="Umair Farooq"
                  className="profile-img img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="sec-2 py-5">
        <div className="container ">
          <div className="d-flex justify-content-center">
            <Swiper
              className="skills-list p-1"
              slidesPerView={6}
              spaceBetween={80}
              autoplay={{
                delay: 1000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, Pagination]}
              loop={true}
              breakpoints={{
                320: { slidesPerView: 1 },
                640: { slidesPerView: 3 },
                768: { slidesPerView: 4 },
                1024: { slidesPerView: 5 },
              }}
            >
              {skills.map((skill, index) => (
                <SwiperSlide
                  key={index}
                  className="p-2 d-flex align-items-center justify-content-center skill border rounded "
                >
                  {skill}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
      <section className="sec-3 pb-4">
        <div className="container">
          <div className="row align-items-center ">
            <div className="col-lg-6 text-center align-items-center justify-content-center col-12 order-lg-1 py-5 px-5 order-2">
              <div className="skill-container ">
                {[
                  "Web Development",
                  "Network Engineering",
                  "Cybersecurity Analyst",
                ].map((role) => (
                  <div
                    className="p-3 m-0"
                    onMouseEnter={() => handleMouseEnter(role)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div key={role} className="skill-role">
                      {role}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-6 col-12 py-5 px-5 order-lg-2 order-1">
              <h2 className="text-lg-start text-center">About Me</h2>
              <p dangerouslySetInnerHTML={{ __html: description }}></p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
