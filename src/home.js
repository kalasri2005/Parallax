import React, { useState } from "react";
import "./App.css";
import { Parallax } from "react-parallax";

const collegeData = {
  Mumbai: [
    {
      img: "https://etimg.etb2bimg.com/photo/103045886.cms",
      text: "IIT Bombay",
      link: "https://www.iitb.ac.in/",
    },
    {
      img: "https://images.shiksha.com/mediadata/images/1631590710phpnKQh0W_1280x960.jpg",
      text: "VJTI Mumbai",
      link: "https://vjti.ac.in/",
    },
    {
      img: "https://img.collegepravesh.com/2018/11/SPIT-Mumbai.jpg",
      text: "SPIT Mumbai",
      link: "https://www.spit.ac.in/",
    },
    {
      img: "https://bsmedia.business-standard.com/_media/bs/img/article/2021-02/26/full/20210226160425.jpg",
      text: "DJ Sanghvi Mumbai",
      link: "https://www.djsce.ac.in/",
    },
  ],
  Delhi: [
    {
      img: "https://www.sikshapedia.com/public/data/colleges/iit-delhi-new-delhi-delhi-ncr/iit-delhi-new-delhi-delhi-ncr-banner.webp",
      text: "IIT Delhi",
      link: "https://home.iitd.ac.in/",
    },
    {
      img: "https://content3.jdmagicbox.com/v2/comp/delhi/40/011p66440/catalogue/netaji-subhash-institute-of-technology-dwarka-sector-3-delhi-engineering-colleges-1ojme7f.jpg",
      text: "NSIT Delhi",
      link: "http://www.nsit.ac.in/",
    },
    {
      img: "https://images.shiksha.com/mediadata/images/1632465297phpyUzixv.jpeg",
      text: "DTU Delhi",
      link: "http://www.dtu.ac.in/",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWRRR_XwmdVawDqtiJpN9teiMAKNJ4epoY5g&s",
      text: "IIIT Delhi",
      link: "https://www.iiitd.ac.in/",
    },
  ],
  Bangalore: [
    {
      img: "https://images.indianexpress.com/2022/04/IISC-1200-1.jpeg",
      text: "IISc Bangalore",
      link: "https://www.iisc.ac.in/",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHvC1Xw52QG86VXX7hA2dy03UiukSXaj8R1g&s",
      text: "MSRIT Bangalore",
      link: "https://www.msrit.edu/",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6C9ezol-bnUx4QGEijvqDm1HDssxT8IbQ_Q&s",
      text: "RVCE Bangalore",
      link: "https://www.rvce.edu.in/",
    },
    {
      img: "https://www.mbacollegesbangalore.in/wp-content/uploads/2017/08/Nitte-Meenakshi-Institute-of-Technology-1.jpg",
      text: "NMIT Bangalore",
      link: "https://www.nmit.ac.in/",
    },
  ],
  Hyderabad: [
    {
      img: "https://ugcounselor-content.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/03/11172302/IIT-Hyderabad.jpg",
      text: "IIT Hyderabad",
      link: "https://www.iith.ac.in/",
    },
    {
      img: "https://www.bits-pilani.ac.in/wp-content/uploads/Home-image-Library.jpeg",
      text: "BITS Hyderabad",
      link: "https://www.bits-pilani.ac.in/",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwfYN6HVQijPZb6meFTtVHxvzMGOvrE3ovFw&s",
      text: "JNTU Hyderabad",
      link: "https://www.jntuh.ac.in/",
    },
    {
      img: "https://img.collegepravesh.com/2014/02/IIIT-Hyderbad.jpg",
      text: "IIIT Hyderabad",
      link: "https://www.iiit.ac.in/",
    },
  ],
  Chennai: [
    {
      img: "https://ugcounselor-content.s3.ap-south-1.amazonaws.com/wp-content/uploads/2023/12/07162420/iit-madras-campus.jpg",
      text: "IIT Madras",
      link: "https://www.iitm.ac.in/",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkZd0VdljpugzgvUMm3u9avG8tZF-ysfiLoQ&s",
      text: "Anna University,Chennai",
      link: "https://www.annauniv.edu/",
    },
    {
      img: "https://images.shiksha.com/mediadata/images/1719317026phpTmdOdl.jpeg",
      text: "SRM University,Chennai",
      link: "https://www.srmuniv.ac.in/",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8dlOpYm5O9gVfr-rLDiUMWv25IxSNQvJxYA&s",
      text: "VIT Vellore,Chennai",
      link: "https://www.vit.ac.in/",
    },
  ],
  Kolkata: [
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLy9PA6PgncxaJ5i0XLQmjEVEeE_wY7s8Wig&s",
      text: "IIT Kharagpur,Kolkata",
      link: "https://www.iitkgp.ac.in/",
    },
    {
      img: "https://cse.jadavpuruniversity.in/public/upload/1694860515.jpeg",
      text: "Jadavpur University,Kolkata",
      link: "https://www.jaduniv.edu.in/",
    },
    {
      img: "https://img.collegepravesh.com/2014/05/NIT-Durgapur.jpg",
      text: "NIT Durgapur,Kolkata",
      link: "https://www.nitrkl.ac.in/",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWOVA6jfAO75uL5HlOluVE5Zg-oBhWyZzNew&s",
      text: "IIEST Shibpur,Kolkata",
      link: "https://www.iiests.ac.in/",
    },
  ],
  Vijayawada: [
    
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD6mk08vXp_TiO-Wo6hv6wchYgzbhT40T3-Q&s",
      text: "VIT-AP",
      link: "https://vitap.ac.in/",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBEFDnIRGUDm2dIvZwj0zaKZkVLxTRgj2KWw&s",
      text: "SRM-AP",
      link: "https://srmap.edu.in/",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpsa3Pfhm56h049uPZVGwtEm8p3vsP_5vnDg&s",
      text: "KL University",
      link: "https://www.kluniversity.in/",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrJbS_ynedI8lt25tMo43c-oz3n79PrOIbiA&s",
      text: "Velagapudi Ramakrishna Siddhartha Engineering College",
      link: "https://www.vrsiddhartha.ac.in/",
    },
    {
      img: "https://www.pvpsiddhartha.ac.in/new_images/pvpsit.jpg",
      text: "PVP Siddhartha Institute of Technology",
      link: "https://www.pvpsiddhartha.ac.in/",
    },
  ],
};

const Home = () => {
  const [parallaxData, setParallaxData] = useState(collegeData.Mumbai);

  const handleCityClick = (city) => {
    setParallaxData(collegeData[city]);
  };

  return (
    <div className="home">
      <h1 className="title">Top colleges in top cities of India</h1>
      <h2 className="subtitle">Website built using Parallax effect!</h2>

      {/* City Buttons */}
      <div className="city-buttons">
        {Object.keys(collegeData).map((city, index) => (
          <button
            key={index}
            className="city-button"
            onClick={() => handleCityClick(city)}
          >
            {city}
          </button>
        ))}
      </div>

      {/* Parallax Section */}
      <div className="container">
        {parallaxData.map((item, index) => (
          <Parallax
            key={index}
            bgImage={item.img}
            strength={500}
            blur={{ min: -20, max: 20 }}
            className="parallax-section"
          >
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="overlay"
            >
              <div className="parallax-content">{item.text}</div>
            </a>
          </Parallax>
        ))}
      </div>

      <h2 className="footer-text">Thank You!</h2>
    </div>
  );
};

export default Home;
