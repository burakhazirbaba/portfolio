import burakimg from "../Img/burak.jpg";
import { FaLinkedin, FaInstagramSquare, FaTwitter } from "react-icons/fa";

const Section = () => {
  return (
    <div>
      <section className="section">
        <img className="profile-img" src={burakimg} alt="Burak's Image" />
        <div className="about">
          <h2>I'm Burak, a Frontend Developer from Istanbul</h2>
          <p>
          I was born in Istanbul in 1996. I started getting interested in technology at a young age, mainly through playing video games. This curiosity played a significant role in choosing this profession later on. My interest in technology continued throughout primary and middle school, which led me to decide to study Information Technologies in high school. During this time, I started writing HTML and CSS. After successfully completing high school, I graduated from Nişantaşı University with a degree in Computer Programming.
          </p>
          <p>
          After finishing university, I continued to improve myself and decided to become a Frontend Developer. During this process, I took an extensive frontend training for 6 months at a course called "Bilge Adam Academy." During this period, I developed numerous projects with using HTML, CSS, JavaScript and React.js library through both individual work and teamwork. Thanks to my ambitious and hardworking nature, I quickly adapted to this profession.
          </p>
          <div className="social-icons">
            <a
              href="https://www.linkedin.com/in/burak-hazirbaba"
              target="_blank"
            >
              <FaLinkedin size={25} />
            </a>
            <a href="https://www.instagram.com/burakhazirbaba" target="_blank">
              <FaInstagramSquare size={25} />
            </a>
            <a href="https://www.twitter.com" target="_blank">
              <FaTwitter size={25} />
            </a>
          </div>
        </div>
      </section>
      <div className="email-btn">
          <a href="mailto: burakhazirbaba@gmail.com">E-Mail</a>
      </div>
      <br />
      <hr />
    </div>
  );
};
export default Section;
