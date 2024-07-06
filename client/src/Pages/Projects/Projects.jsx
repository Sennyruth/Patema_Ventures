import project1Img from "../../assets/project1.jpeg";
import retailImg from "../../assets/retail.jpeg";
import apartmentImg from "../../assets/apartment.jpeg";
import rennovatedImg from "../../assets/rennovated.jpeg";
import roadsImg from "../../assets/roads.jpeg";
import completeImg from "../../assets/complete.jpeg";
import "./Projects.css";
const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "katani road",
      description:"This is a project that I did for a client. It is a website that.",
      img: project1Img,
    },
    {
      id: 2,
      title: "katani road",
      description: "This is a project that I did for a client. It is a website that.",
      img: retailImg,
    },
    {
      id: 3,
      title: "katani road",
      description: "This is a project that I did for a client. It is a website that",
      img: apartmentImg,
    },
    {
      id: 4,
      title: "katani road",
      description: "This is a project that I did for a client. It is a website that",
      img: rennovatedImg,
    },
    {
      id: 5,
      title: "katani road",
      description:"This is a project that I did for a client. It is a website that",
      img: roadsImg,
    },
    {
      id: 6,
      title: "katani road",
      description: "This is a project that I did for a client. It is a website that",
      img: completeImg,
    },
  ];

  return (
    <div>
      <h2 className="projmaintitle">View Our Projects</h2>

      <div className="projects-hero"></div>

      <h3 className="projtitle">Complete Projects</h3>

      <div className="containers">
      <div className="projects-containers">
        {projects.map((project) => (
          <div className="project-container" key={project.id}>
           <div className="projects-image">
           <img
              src={project.img}
              alt=""
              />
           </div>
           
            <div className="content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
            </div>
         </div>
       
        ))}
      </div>
   
      </div>
   
    </div>
  );
}

export default Projects;
