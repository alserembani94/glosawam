const currentYear = new Date().getFullYear();

const Footer = () => (
    <footer className="
      flex
      flex-row
      items-center
      justify-center
      px-4
      py-4
      w-full
      bg-slate-50
    ">
        <p>Glosawam &#169; {currentYear}</p>
    </footer>
);

export default Footer;