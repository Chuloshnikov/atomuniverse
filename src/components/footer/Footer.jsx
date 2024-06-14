import FooterInput from "./FooterInput";
import FooterLogo from "./FooterLogo";


const Footer = () => {
  return (
    <footer className='mt-12 w-full bg-black p-6'>
        <div className="px-4 py-12 flex flex-col gap-6">
          <FooterLogo/>
          <FooterInput/>
        </div>
        <div className="mx-auto text-center mt-[80px]">
          <h4 className="font-bold text-2xl">ATOM UNIVERSE</h4>
          <p>&copy; 2024 All rights reserved</p>
        </div>
    </footer>
  )
}

export default Footer;