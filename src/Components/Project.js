import { FaLink } from "react-icons/fa";

const Project = (props) => {
  return (
    <div className="project">
      <img src={props.image} alt="image" />
      <h3>{props.projectName}</h3>
      <h3>
        <a href={props.link} target="_blank">
          Go to project <FaLink />
        </a>
      </h3>
    </div>
  );
};

export default Project;
