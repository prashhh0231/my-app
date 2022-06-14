import React from "react";
import "../Styles/projects.css";

const ProjectCard = (props: any) => {
  return (
    <div className="project_wrapper">
      <div className="first_div">
        <p className="project_heading">{props.title}</p>
        <p className="proj_description">{props.description}</p>
        <br />
        <a href={props.project_url} target="_blank">
          <button className="project_btn">View Project</button>
        </a>
      </div>
      <div className="second_div">
        <img
          src={props.imageUrl}
          alt={props.imageUrl}
          className="project_image"
        />
      </div>
    </div>
  );
};

const mockData = [
  {
    id: 0,
    projectImage: "https://i.ibb.co/hLnDGfx/dashboard.png",
    projectTitle: "Admin Dashboard ",
    projectDescription: `This is admin dashboard (demo project).To make this project I have use React JS and
       SASS with material UI icon and material UI table.I have used charts to show graphs. `,
    project_url: "https://my-admin-01.netlify.app/",
  },
  {
    id: 1,
    projectImage: "https://i.ibb.co/dfmD5C3/Screenshot-172.png",
    projectTitle: "Blogs UI",
    projectDescription:
      "Creating another demo project i.e Blogs UI using react js and material UI",
    project_url: "https://my-blog-002.netlify.app/",
  },
  {
    id: 2,
    projectImage: "https://i.ibb.co/Lpqv8cb/Screenshot-173.png",
    projectTitle: "My-Booking",
    projectDescription:
      "Creating Booking webapp UI with React JS and material UI :)",
    project_url: "https://my-booking.netlify.app",
  },
  {
    id: 3,
    projectImage: "https://i.ibb.co/KswXP4y/Screenshot-174.png",
    projectTitle: `Tinder Clone`,
    projectDescription: `I have created tinder clone (UI) using React JS, Tinder card and Material UI.Awsome 
    experience of while doing this project`,
    project_url: "https://tindder-app.netlify.app/",
  },
];

const Projects = () => {
  return (
    <div className="project_container">
      <p className="project_title">Projects</p>

      {mockData.map((val: any) => {
        return (
          <ProjectCard
            title={val.projectTitle}
            description={val.projectDescription}
            imageUrl={val.projectImage}
            project_url={val.project_url}
          />
        );
      })}
    </div>
  );
};

export default Projects;
