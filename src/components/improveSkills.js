import ramen from "../assests/ramen.jpg";
const ImproveSkills = () => {
    const list=[
        "Learn new recepies",
        "Experiment with food",
        "Write your own recepies",
        "Know nutrition facts",
        "Get cooking tips",
        "Get ranked"
    ]
  return (
    <div className="section improve-skills">
      <div className="col img">
        <img src={ramen} alt="" />
      </div>
      <div className="col typography">
        <h1 className="title">Improve Your Culinary Skills</h1>
        {list.map((list,key)=>(
            <p className="skill-item" key={key}>{list}</p>
        ))}
        <button className="btn">Signup now</button>
      </div>
    </div>
  );
};

export default ImproveSkills;
