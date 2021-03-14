import Project from "./project";
// import projects from "../data/projects-list"



export default function ProjectSection({projects}) {
  
  return (
    <div>
      <h4>Projects</h4>
      {projects.map(project => <Project project={project} key={project.title} />) }
      <style jsx>{`
        h4 {
          font-size: 1.125em;
          color: #c4c4c4;
          margin-bottom: 4.5em;
        }
        
        `}</style>
    </div>
  )
}