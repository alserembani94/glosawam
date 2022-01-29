import Default from "components/layouts/default";
import { IconContext } from "react-icons";
import { FaBookReader } from "react-icons/fa";

const getStaticProps = async () => {
  return {
    props: {
      },
  };
};

const Tentang = () => {
  return (
    <Default
      className="flex-col"
      title="Tentang Glosawam"
      description="Glosawam adalah aplikasi yang dapat membantu anda mencari istilah yang anda inginkan."
      image="https://glosawam.com/static/images/logo.png"
    >
      <IconContext.Provider value={{ color: '#4C1D95', size: '6rem' }}>
        <FaBookReader className='mb-4' />
      </IconContext.Provider>
      <h1>Tentang Glosawam</h1>
      <p>
        Glosawam adalah sebuah aplikasi yang dibuat untuk membantu
        pencarian istilah yang anda inginkan.
      </p>
      <p>
        Glosawam dibuat dengan menggunakan Next.js dan Tailwind CSS.
      </p>
      <p>
        Glosawam dibuat oleh <a href="https://atifaiman.dev" target="_blank" rel="noreferrer noopener">Atif Aiman al-Serembani</a>
      </p>
    </Default>
  );
};

export default Tentang;