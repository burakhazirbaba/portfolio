import Header from "../Components/Header";
import Footer from "../Components/Footer";
import reactRouterImg from "../Img/reactrouterlogo.jpg";
import reduxImg from "../Img/reduxlogo.png";
import semanticImg from "../Img/htmlsemantic.jpg";
import mediumImg from "../Img/mediumlogo.png";

const Blog = () => {
  return (
    <div>
      <Header />
      <h2 className="blog-title">Blog</h2>
      <br />
      <hr />
      <div className="blog">
        <img src={reactRouterImg} alt="router logo" />
        <h3>React Router Nedir ve Nasıl Kullanılır?</h3>
        <p>
          Merhaba, bu makalemizde sizlerle React Router konusunu ele alacağız.
          React Router, React uygulamalarında URL’leri yönlendirmek ve farklı
          sayfalar arasında geçiş yapmak için kullanılan popüler bir
          kütüphanedir. Bu kütüphane, single-page uygulamalar (SPA) için uygun
          bir şekilde tasarlanmıştır ve kullanıcı deneyimini geliştirmeye
          yardımcı olur. Bu makalede, React Router’ın temellerini ve nasıl
          kullanılacağını anlatacağım.
        </p>
        <a
          href="https://medium.com/@burakhazirbaba/react-router-nedir-ve-nas%C4%B1l-kullan%C4%B1l%C4%B1r-7c6825e4f6a1"
          target="_blank"
        >
          click to read more
        </a>
      </div>
      <div className="blog">
        <img src={reduxImg} alt="router logo" />
        <h3>Redux Toolkit Nedir ve Nasıl Kullanılır?</h3>
        <p>
          Merhaba arkadaşlar, bu makalemizde Redux Toolkit hakkında konuşacağız.
          Redux Toolkit, Redux’u daha basit ve verimli bir şekilde kullanmayı
          sağlayan bir kütüphanedir. Redux, durum yönetimi için kullanılan
          popüler bir JavaScript kütüphanesidir, ancak yapılandırması ve
          kullanımı zaman zaman karmaşık olabilir. Redux Toolkit, Redux ile
          ilgili sık karşılaşılan sorunları gidermeye ve daha iyi bir
          geliştirici deneyimi sunmaya odaklanır. Bu makalede, Redux Toolkit’in
          temellerini ve nasıl kullanılacağını açıklayacağım.
        </p>
        <a
          href="https://medium.com/@burakhazirbaba/redux-toolkit-nedir-ve-nas%C4%B1l-kullan%C4%B1l%C4%B1r-17fcb2b758b8"
          target="_blank"
        >
          click to read more
        </a>
      </div>
      <div className="blog">
        <img src={semanticImg} alt="html semantic image" />
        <h3>
          HTML Semantik Etiketler ile Web Sayfalarını Anlamlı Hale Getirme
        </h3>
        <p>
          Semantik etiketler, HTML5 ile gelen özel işaretleme etiketleridir.
          “Semantik” terimi, etiketlerin anlam ve içerikle ilgili olduğu
          anlamına gelir. Yani, semantik etiketler kullanılarak bir web
          sayfasının içeriği daha anlamlı ve yapılandırılmış hale getirilir. Bu
          sayede tarayıcılar, ekran okuyucular ve arama motorları, sayfanın
          içeriğini daha iyi anlayabilir ve kullanıcılara daha iyi bir deneyim
          sunar. İş hayatında da diğer yazılımcılar tarafından kodun daha iyi
          anlaşılmasına yardımcı olur.
        </p>
        <a
          href="https://medium.com/@burakhazirbaba/redux-toolkit-nedir-ve-nas%C4%B1l-kullan%C4%B1l%C4%B1r-17fcb2b758b8"
          target="_blank"
        >
          click to read more
        </a>
      </div>
      <hr />
      <div className="medium-link">
        <a href="https://medium.com/@burakhazirbaba" target="_blank">
          <img src={mediumImg} alt="medium logo" />
          <p>medium.com/burakhazirbaba</p>
        </a>
      </div>
      <Footer />
    </div>
  );
};
export default Blog;
