import FooterLogo from "./FooterLogo";


const Footer = () => {
  return (
    <footer className='mt-12 w-full bg-black p-6'>
        <div className="px-4 py-12">
          <FooterLogo/>
          
        </div>
        <div className="mx-auto text-center">
          <h4 className="font-bold text-2xl">ATOM UNIVERSE</h4>
          <p>&copy; 2024 All rights reserved</p>
        </div>
    </footer>
  )
}

export default Footer;