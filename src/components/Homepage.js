import {FaGithub, FaLinkedin, FaFilePdf} from "react-icons/fa"

const Homepage = () => {
    return (
      <>
      <section className="homepage">
        <div className="overlay">
        <h1>Landrell Williams</h1>
        <p>Full Stack Web Developer</p>
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/landrell-williams-a9bb447a/" target="_blank" rel="noopenner noreferrer"><FaLinkedin/></a>
            </li>
            <li>
              <a href="https://github.com/ldw5" target="_blank" rel="noopenner noreferrer"><FaGithub/></a>
            </li>
            <li>
              <a href="LDW_Resume.pdf" target="_blank" rel="noopenner noreferrer"><FaFilePdf/></a>
            </li>
          </ul>
        </div>
      </section>   
      </>
    );
  }
  export default Homepage;