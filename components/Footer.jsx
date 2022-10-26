const Footer = () => {
  return (
    <div className="w-full bg-gray-200 pt-32">
      <div className="wrapper grid gap-6 xl:grid-cols-2 pb-8">
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl">Get our newsletter</h3>
          <p className="max-w-[500px] font-light">
            Keep up with the ever-changing world of medical science with new and
            emerging developments in health.
          </p>
          <div className="flex items-center gap-3">
            <input
              className="focus:outline-none py-2 rounded-full px-4 border"
              type="text"
              placeholder="Enter your email"
            />
            <button className="py-2">SUBSCRIBE</button>
          </div>
          <p className="font-light">Your privacy is important to us</p>
        </div>
        <div className="px-4">
          <ul className="flex flex-col gap-4 font-bold color-black text-sm mt-6">
            <li>
              <a className="hover:text-indigo-600" href="#">
                About Us
              </a>
            </li>
            <li>
              <a className="hover:text-indigo-600" href="#">
                Contact Us
              </a>
            </li>
            <li>
              <a className="hover:text-indigo-600" href="#">
                Terms of Use
              </a>
            </li>
            <li>
              <a className="hover:text-indigo-600" href="#">
                Privacy Policy
              </a>
            </li>
            <li>
              <a className="hover:text-indigo-600" href="#">
                Privacy Settings
              </a>
            </li>
          </ul>
          <p className="text-sm  mt-6">
            © 2004-2022 Healthline Media UK Ltd, Brighton, UK, a Red Ventures
            Company. All rights reserved. MNT is the registered trade mark of
            Healthline Media. Any medical information published on this website
            is not intended as a substitute for informed medical advice and you
            should not take any action before consulting with a healthcare
            professional. See additional information.
          </p>
        </div>
      </div>
      <div className="bg-gray-900 py-8">
        <div className="wrapper text-gray-300">
          <ul className="flex gap-4 font-light color-black text-sm mt-6">
            <li>
              <a className="hover:text-indigo-600 underline" href="#">
                About Us
              </a>
            </li>
            <li>
              <a className="hover:text-indigo-600 underline" href="#">
                Contact Us
              </a>
            </li>
            <li>
              <a className="hover:text-indigo-600 underline" href="#">
                Terms of Use
              </a>
            </li>
            <li>
              <a className="hover:text-indigo-600 underline" href="#">
                Privacy Policy
              </a>
            </li>
            <li>
              <a className="hover:text-indigo-600 underline" href="#">
                Privacy Settings
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
