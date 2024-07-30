import "../styles/heroSection.css";
import biryani from '../assests/biryani.jpg';
import burger from '../assests/burger.jpg';
import ramen from '../assests/ramen.jpg';
import egg from '../assests/egg.jpg';
import roti from '../assests/roti.jpg';
import salad from '../assests/salad.jpg';
import pasta from '../assests/pasta.jpg';
import CustomImage from "./customImage";

const HeroSection = () => {
    const images = [
        biryani,
        burger,
        ramen,
        egg,
        roti,
        salad,
        pasta,
        egg,
        ramen
    ]
  return (
    <div className="section hero">
      <div className="col typography">
        <h1 className="title">What Are We About</h1>
        <p className="info">
          FoodiesHub is a place where you can please your soul and tummy with
          delicious food recepies of all cuisine. And our service is absolutely free. So start exploring now.
        </p>
        <button className="btn">Explore Now</button>
      </div>
      <div className="col gallery">
        {images.map((img,key)=>
           <CustomImage imgSrc={img} key={key}/>
           )}

      </div>
    </div>
  );
};

export default HeroSection;
