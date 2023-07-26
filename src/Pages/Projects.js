import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Project from "../Components/Project";
import projectData from "../Components/ProjectData";
import githubIcon from "../Img/github_icon.png"
import codeSandboxIcon from "../Img/codesandbox_icon.png"
import codepenIcon from "../Img/codepen_icon.png"
import netlifyIcon from "../Img/netlify_icon.png"

const Projects = () => {
  return (
    <div>
      <Header />
      <div className="projects-title">
        <h2>Projects</h2>
      </div>
      <br />
      <hr />
      <div className="projects">
        {projectData.map((project, index) => {
          return (
            <Project
              key={index}
              image={project.image}
              projectName={project.projectName}
              link={project.link}
            />
          );
        })}
      </div>
      <br />
      <br />
      <hr />
      <h2 className="for-more-title">For More</h2>
      <div className="project-sites">
      <a href="https://github.com/burakhazirbaba" target="_blank">
        <img src={githubIcon} alt="github icon"/>
        <p>github/burakhazirbaba</p>
      </a>
      <a href="https://codesandbox.io/u/burakhazirbaba" target="_blank">
        <img src={codeSandboxIcon} alt="codesandbox icon" />
        <p>codesandbox/burakhazirbaba</p>
      </a>
      <a href="https://codepen.io/burakhazirbaba" target="_blank">
        <img src={codepenIcon} alt="codepen icon" />
        <p>codepen/burakhazirbaba</p>
      </a>
      <a href="https://app.netlify.com/teams/burakhazirbaba/overview" target="_blank">
        <img src={netlifyIcon} alt="netlify icon" />
        <p>netlify/burakhazirbaba</p>
      </a>
      </div>
      <Footer />
    </div>
  );
};
export default Projects;
