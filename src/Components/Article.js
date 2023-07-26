import programingIcon from "../Img/programing-icon.png";
import graphicDesingIcon from "../Img/graphic-design-icon.png";
import socialMediaIcon from "../Img/social-icon.png";

const Article = () => {
  return (
    <div>
      <article className="article">
        <div className="service-title">
          <h2>Services</h2>
          <p>These are just some of the services I provide</p>
        </div>
        <div className="service-icons">
          <div className="service-icon">
            <img src={programingIcon} alt="Programing Icon" />
            <h3>Web Development</h3>
            <p>
              I use HTML/CSS, JavaScript and React.js libraries to make modern
              and functional websites & apps.
            </p>
          </div>
          <div className="service-icon">
            <img src={graphicDesingIcon} alt="Graphic Design Icon" />
            <h3>Graphic Design</h3>
            <p>I use Photoshop to make logos, ad design and so on.</p>
          </div>
          <div className="service-icon">
            <img src={socialMediaIcon} alt="Social Media Icon" />
            <h3>Social Media</h3>
            <p>
              Using social media, I can help your brand reach millions around
              the world.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};
export default Article;
