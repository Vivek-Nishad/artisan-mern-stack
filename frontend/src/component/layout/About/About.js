import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import Footer from "../Footer/Footer.js"; //

// // import Carousel from 'react-material-ui-carousel'
// // import { Paper, Button } from '@mui/materia'

// // import logo from 'C:\Users\RNBD\Downloads';

// import Slider from 'react-animated-slider';
// import 'react-animated-slider/build/horizontal.css';

import img1 from "../../../assets/1.jpg";
import img2 from "../../../assets/2.jpg";
import img3 from "../../../assets/3.jpg";
import deepika from "../../../assets/deepika.jpg";
import himanshu from "../../../assets/himanshu.jpg";
import Rishita from "../../../assets/Rishita.jpg";
import shweta from "../../../assets/shweta.jpg";

import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import { MdKeyboardArrowUp } from "react-icons/md";

function About() {
  return (
    <div className="aboutSection">
      <div className="aboutCarousel">
        <Slider autoplay="1000">
          <div className="aboutCarouselDiv">
            <img src={img1} className="aboutCarouselImg" />
          </div>
          <div className="aboutCarouselDiv">
            <img src={img2} className="aboutCarouselImg" />
          </div>
          <div className="aboutCarouselDiv">
            <img src={img3} className="aboutCarouselImg" />
          </div>
        </Slider>
      </div>
      {/* <div className="aboutSectionGradient"></div> */}

      <div className="aboutSectionContainer">
        <Typography component="h1">Our Team</Typography>

        <div className="aboutCard">
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src={deepika}
              alt="Founder"
            />
            <Typography>Deepika</Typography>

            <span>Developer</span>
          </div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              // src="https://res.cloudinary.com/tripleayt/image/upload/v1631555947/products/jpyibarlaxawvcvqjv5b.png"
              src={Rishita}
              alt="Founder"
            />
            <Typography>Rishita</Typography>

            <span>Developer</span>
          </div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src={shweta}
              alt="Founder"
            />
            <Typography>Shweta</Typography>

            <span>Developer</span>
          </div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src={himanshu}
              alt="Founder"
            />
            <Typography>Himanshu</Typography>

            <span>Developer</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

// // import logo from "./logo.svg";
// import img1 from '../../../assets/1.jpg';
// import img2 from "../../../assets/2.jpg";
// import img3 from "../../../assets/3.jpg";
// // import "./App.css";

// // import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// // import { Carousel } from "react-responsive-carousel";

// import Slider from "react-animated-slider";
// import "react-animated-slider/build/horizontal.css";

// function About() {

//   return (
//     <div className="App">

//       <Slider autoplay="1000">
//         <div>
//           <img src={img1} />
//         </div>
//         <div>
//           <img src={img2} />
//         </div>
//         <div>
//           <img src={img3} />
//         </div>
//       </Slider>
//     </div>
//   );
// }

// export default About;
