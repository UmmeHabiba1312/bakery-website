import Image from "next/image";
import { FaStar } from "react-icons/fa";
import About from "./about/page";
import Contact from "./contact/page";



export default function Home() {
  return (
   <main>
    <div className="hero">
    <Image
    className="heroImg"
    height={500}
    width={500}
    src="/bakery2.jpg"
    alt="heroimg"/>
    <div className="heropara text-2xl white">Welcom To Bread Bakery</div>
    </div>
    <div className="product">
      <h2 className="prohead">Our Products</h2>
      <div className="herocard">
        <div className="card1">
        <div className="card">
          <Image
          className="cardImg"
          height={400}         
           src="/card1.png"
          width={350}
          alt="card1"/>
        </div>
        <div className="cardcont">
      <p>White Flour Bread</p>
      <div className="content">
      <div>
        <FaStar className="star" />
      <FaStar className="star" />
      <FaStar className="star" />
      <FaStar className="star" />
      <FaStar className="star" />
      </div>
        <p>$24.90</p>
      </div>
      </div>
        </div>


        <div className="card1">
        <div className="card">
          <Image
          className="cardImg"
          height={400}         
           src="/card2.png"
          width={350}
          alt="card1"/>
        </div>
        <div className="cardcont">
      <p>Whole Meal Bread</p>
      <div className="content">
      <div>
        <FaStar className="star" />
      <FaStar className="star" />
      <FaStar className="star" />
      <FaStar className="star" />
      <FaStar className="star" />
      </div>
        <p>$24.90</p>
      </div>
      </div>
        </div>



        <div className="card1">
        <div className="card">
          <Image
          className="cardImg"
          height={400}         
           src="/card3.png"
          width={350}
          alt="card1"/>
        </div>
        <div className="cardcont">
      <p>Bread From Spelled Flour</p>
      <div className="content">
      <div>
        <FaStar className="star" />
      <FaStar className="star" />
      <FaStar className="star" />
      <FaStar className="star" />
      <FaStar className="star" />
      </div>
        <p>$24.90</p>
      </div>
      </div>
        </div>




        <div className="card1">
        <div className="card">
          <Image
          className="cardImg"
          height={400}         
           src="/card4.png"
          width={350}
          alt="card1"/>
        </div>
        <div className="cardcont">
      <p>Selection Of Bread And Roll</p>
      <div className="content">
      <div>
        <FaStar className="star" />
      <FaStar className="star" />
      <FaStar className="star" />
      <FaStar className="star" />
      <FaStar className="star" />
      </div>
        <p>$24.90</p>
      </div>
      </div>
        </div>





      </div>
    </div>
    <About/>
    <Contact/>
   </main>
  );
}
