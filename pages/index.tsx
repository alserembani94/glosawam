import Button from 'components/forms/Button'
import Input from 'components/forms/Input'
import Default from 'components/layouts/default'
import type { NextPage } from 'next'
import { FaBookReader } from 'react-icons/fa';
import { IconContext } from 'react-icons';

const Home: NextPage = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('submit');
  };

  return (
    <Default
      className="flex flex-col items-center justify-center"
      title="Glosawam - Aplikasi Pencarian Istilah"
      description="Glosawam adalah aplikasi yang dapat membantu anda mencari istilah yang anda inginkan."
      image="https://glosawam.com/static/images/logo.png"
    >
      <IconContext.Provider value={{ color: '#4C1D95', size: '6rem' }}>
        <FaBookReader className='mb-4' />
      </IconContext.Provider>
      <h1>Selamat datang ke Glosawam!</h1>
      <p>Mulakan pencarian istilah</p>
      <form className="flex flex-col gap-4 w-full max-w-xl items-center mt-8" onSubmit={handleSubmit}>
        <Input type="text" placeholder="Cari istilah" className="w-full text-center" />
        <Button type="submit">Cari</Button>
      </form>
    </Default>
  )
};

export default Home;
