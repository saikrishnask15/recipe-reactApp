import CheifCard from "./cheifCard";
import "../styles/chiefSection.css";
import img1 from '../assests/topChiefs/img_1.jpg';
import img2 from '../assests/topChiefs/img_2.jpg';
import img3 from "../assests/topChiefs/img_3.jpg";
import img4 from "../assests/topChiefs/img_4.jpg";
import img5 from "../assests/topChiefs/img_5.jpg";
import img6 from "../assests/topChiefs/img_6.jpg";

const ChefSection = () => {
  const chiefs = [
    {
      name: "Juan Carios",
      img: img1,
      recipesCount: "10",
      cuisine: "Mexican",
    },
    {
      name: "John Doe",
      img: img2,
      recipesCount: "05",
      cuisine: "Japanese",
    },
    {
      name: "Erich Maria",
      img: img3,
      recipesCount: "13",
      cuisine: "Italian",
    },
    {
      name: "Chris Brown",
      img: img4,
      recipesCount: "08",
      cuisine: "American",
    },
    {
      name: "Blake Lively",
      img: img5,
      recipesCount: "09",
      cuisine: "French",
    },
    {
      name: "Ben Affleck",
      img: img6,
      recipesCount: "04",
      cuisine: "Indian",
    },
  ];
  return (
    <div className="section chiefs">
      <h1 className="title">Our Top Chiefs</h1>
      <div className="top-chiefs-ctn">
        {chiefs.map((value, key) => (
          <CheifCard chiefs={value} key={key} />
        ))}
      </div>
    </div>
  );
};

export default ChefSection;
