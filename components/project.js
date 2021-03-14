import SectionSeparator from "./section-separator";
import Image from "next/image";

export default function Project( {project} ) {
  
  return (
    <>
      <div className="project">
        <div className="info">
          <h3>{project.title}</h3>
          <div className="spans">
            {project.tags.map(tag => <span key={tag}>{tag}. </span>)}
          </div>
          <p>
            {project.excerpt}
          </p>
          <a href={project.url}>Visit Site →</a>
        </div>
        <div className="image">
          <Image
            src={project.image}
            alt={project.title}
            width={890}
            height={650}
            layout="intrinsic"
          />
        </div>
  
        <style jsx>{`
          .project {
            display: flex;
          }
          .project h3 {
            font-size: 2.75em;
            margin-bottom: 0;
            margin-top: 0;
          }
          .project span {
            color: #c4c4c4;
          }
          .info {
            flex: 1 1 200px;
          }
          .info p {
            max-width: 28ch;
            font-size: 1.125em;
            font-weight: 600;
          }
          .image {
            max-width: 50%;
          }

          @media (max-width: 870px) {
            .project {
              display: block;
            }

            .info p {
              display: none;
            }
            .image {
            max-width: 100%;
          }
            .spans, .info {
              margin-bottom: 1em;
            }
          }
        `}</style>
      </div>
      <SectionSeparator bgColor="#c4c4c425" hrHeight="3px" />
    </>
  );
}
