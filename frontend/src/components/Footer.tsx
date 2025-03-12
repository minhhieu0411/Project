const Footer = () => {
    return (
      <footer className="bg-purple-900 text-white py-8">
        <div className="container mx-auto grid md:grid-cols-3 gap-8 px-6">
          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-bold">Get In Touch!</h3>
            <p className="mt-2">
              📞 <a href="tel:8594417977" className="underline">0943167599</a>
            </p>
            <p className="mt-2">🕒 Open 24 Hours</p>
            <p className="mt-2">📍 41/76 Mai Dich, Ha Noi, Viet Nam</p>
            <p className="mt-2">✉️ <a href="mailto:admin@connectinghearts.net" className="underline">admin@connectinghearts.net</a></p>
          </div>
  
          {/* Additional Resources */}
          <div>
            <h3 className="text-lg font-bold">Additional Resources</h3>
            <p className="mt-2"><a href="#" className="underline">Privacy Policy</a></p>
            <p className="mt-2"><a href="#" className="underline">Your Privacy Choices</a></p>
            <p className="mt-2"><a href="#" className="underline">Notice at Collection</a></p>
          </div>
  
          {/* About Us */}
          <div>
            <h3 className="text-lg font-bold">About Us</h3>
            <p className="mt-2">
              We are a privately owned in-home care agency located in Northern Kentucky. 
              We offer our senior services to all of Northern KY and the greater Cincinnati area.
            </p>
          </div>
        </div>
  
        <div className="text-center mt-6 text-sm border-t border-gray-400 pt-4">
          © 2024 Connecting Hearts Home Care. All rights reserved.
        </div>
      </footer>
    );
  };
  
  export default Footer;
  