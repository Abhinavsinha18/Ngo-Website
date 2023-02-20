import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Home.css";
import NavbarWeb from "../Navbar/NavbarWeb";
import dog1 from "../../img/dog1.jpg";
import Dog2 from "../../img/Dog2.jpg";
import Dog3 from "../../img/Dog3.jpg";
import Dog4 from "../../img/Dog4.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  const [data,setData] = useState([]);
  // const data = [
  //   {
  //     "id" : 1,
  //     "img": dog1,
  //     "name": "Browny",
  //     "Status" : "Undergoing Treatment",
  //     "Species" : "Dog",
  //     "Breed" : "Indie",
  //     "Color" : "Brown",
  //     "age":"1 Year",
  //     "about":
  //       "Browny has become another victim of brutality. This 2-month-old was found on the streets of Mumbai with horrific bites on his tiny body, even his private parts were not spared. Please help this little boy by donating towards his treatment.",
  //   },
  //   {  "id":2,
  //     "img": Dog2,
  //     "name": "Lily",
  //     "about":
  //       "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam eius eveniet cupiditate fugiat modi repellendus earum labore dolorem quas officia.",
  //   },
  //   { 
  //     "id":3,
  //     "img": Dog3,
  //     "name": "Lily",
  //     "about":
  //       "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam eius eveniet cupiditate fugiat modi repellendus earum labore dolorem quas officia.",
  //   },
  //   {  
  //     "id": 4,
  //     "img": Dog4,
  //     "name": "Lily",
  //     "about":
  //       "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam eius eveniet cupiditate fugiat modi repellendus earum labore dolorem quas officia.",
  //   },
  // ];

useEffect(()=>{
   fetchData();
},[])

const fetchData = async()=>{
  await fetch('http://localhost:4000/data').then((res)=>res.json())
  .then((d)=>{
    setData(d);
  })
}

  
  const bgimg = [
    {
      img: "https://www.humanesociety.org/sites/default/files/2022-09/stray-cat-579765.jpg",
      h1: "Do You Care?",
      p: "We do..",
      p2: "pets are our link to paradise.",
    },
    {
      img: "https://pet-rescue.cmsmasters.net/wp-content/uploads/2015/01/bg-6.jpg",
      h1: "Don't let them suffer",
      p: "Homeless.",
      p2: "Open your heart and home to a friend for life",
    },
    {
      img: "https://pet-rescue.cmsmasters.net/wp-content/uploads/2015/01/bg-2.jpg",
      h1: "Save a life",
      p: "And make you life better.",
      p2: "Money can buy you a fine pet, but only love can make him wag his tail.",
    },
  ];

  const bgfun = () => {};

  bgfun();

  return (
    <>
      <Carousel>
        {bgimg.map((e, i) => {
          return (
            <Carousel.Item key={i + 1}>
              <div
                className="homecs"
                style={{
                  backgroundImage: `url(${e.img})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                <NavbarWeb />
                <div className="hmText">
                  <h1>{e.h1}</h1>
                  <p>{e.p}</p>
                </div>
              </div>
              <div className="text2hm">
                <p>{e.p2}</p>
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>




      <div className="secdivhm">
        <div > 
          <h2>People For Animals</h2>
          <p>
            Animal welfare is not just about animals. It is about us. Our living
            conditions, our children, our earth. Cruelty to animals has a
            significant and irreversible impact on peaceful societies, human
            health, the economy, and the environment. People for Animals, PFA,
            is India's largest Non-Governmental Animal Welfare Organization with
            a nationwide network of 26 hospitals, 165 units, 60 mobile units,
            and 2.5 Lakh members. We work to rescue and rehabilitate sick and
            needy animals. We set up and run shelters, ambulance services,
            sterilization programs, treatment camps and disaster rescue missions
            for animals. We conduct education programs in schools, fight cases
            in court, and lobby on animal issues in parliament.
          </p>
        </div>

        <div>
          <img
            src="http://www.peopleforanimalsindia.org/uploads/page/166236331962288087.jpg"
            alt=""
          />
        </div>
      </div>


{/* ______________________________________________________ */}

<div className="petsslide">
 <h1>Donate Now</h1>
<Carousel className="crsl">
        {data.map((e, i) => {
          return (
            <Carousel.Item key={i + 1}>
              <div
                className="bgdonate"
                style={{
                  backgroundImage: `url(${e.img})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >

                <div className="txttwo">
                  <h3><span>Name : </span>{e.name}</h3>
                  <h3><span>Status : </span>{e.Status}</h3>
                 
                </div>
                  <Link to={`/product/${e.id}`}  className="btnDonate" role="button">Donate Now</Link>
              
             
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>

</div>

    </>
  );
};

export default Home;
