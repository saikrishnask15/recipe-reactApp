import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faList } from "@fortawesome/free-solid-svg-icons";
const SideBar = ({close}) => {
  return (
    <div className="sidebar" onClick={close}>
      <a className="sidebar-link active" href="/">
        <FontAwesomeIcon icon={faHome} />
        Home
      </a>
      
      <a className="sidebar-link active" href="/RecipePage">
        <FontAwesomeIcon icon={faList} />
        Recipes
      </a>
    </div>
  );
};

export default SideBar;
