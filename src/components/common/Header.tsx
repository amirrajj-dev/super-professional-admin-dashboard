import ThemePallette from "./ThemePallette";

const Header = ({ title }: { title: string }) => {
  return (
    <header className="capitalize flex items-center justify-between font-dana-demi z-0 flex-1 bg-base-300 py-5 px-6 md:px-20">
      <span className="text-xl md:text-2xl text-base-content">{title}</span>
      <ThemePallette/>
    </header>
  );
};

export default Header;