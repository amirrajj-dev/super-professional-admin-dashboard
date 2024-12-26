const Header = ({ title } : {title : string}) => {
    return (
      <header className="capitalize font-dana-demi z-0 flex-1 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-5 px-6 md:px-20 text-white text-xl md:text-2xl">
        {title}
      </header>
    );
  };
  
  export default Header;  