import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import NavbarWeb from '../Navbar/NavbarWeb';
import "./productdetail.css";

const ProductDetail = () => {
  let [data,setData] = useState({});
    let id  = useParams();


useEffect(()=>{
  fetchData();
},[])

    const fetchData = async()=>{
     await fetch(`http://localhost:4000/data/`)
     .then((res)=>res.json())
     .then((d)=>{
      let temp =  d.filter((e)=>{
        if(e.id == id.id){

          setData(e);
        }
      })
    })
  }
 
  // console.log(data);
 
  return (
    <>
      <NavbarWeb/>
  <hr />
    <div className='des-box'>
      
      <div>
        <img src={data.img} alt="" />
      </div>
      <div>
        <h1>{data.name}</h1>
        <p><b>Status</b> : {data.Status}</p>
        <div className='txtboxdes'>

        <p><b>Age</b> : {data.age}</p>
        <p><b>Species</b> : {data.Species}</p>
        <p><b>Breed</b> : {data.Breed}</p>
        <p><b>Color</b> : {data.Color}</p>
        </div>

        <div>
          <p><b>About {data.name} : </b> {data.about}</p>
        </div>
        <hr />
        <div className='btn-des'>
        <Link to={`/`}  className="btnDonate" role="button">Donate Now (India Doner)</Link>
        {/* <Link to={`/`}  className="btnDonate" role="button">Donate Now (International Doner)</Link> */}
        </div>
        <hr />


      </div>
    </div>

    <hr />
    </>
  )
}

export default ProductDetail