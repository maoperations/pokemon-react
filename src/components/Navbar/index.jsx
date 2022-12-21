const Navbar = () => {
  const link = [
    { name: "I", router: "/gen-1" },
    { name: "II", router: "/geb-2" },
    { name: "III", router: "/gen-3" },
    { name: "IV", router: "/gen-4" },
    { name: "V", router: "/gen-5" },
    { name: "VI", router: "/gen-6" },
    { name: "VII", router: "/gen-7" },
    { name: "VIII", router: "/gen-8" },
  ];
  return (
    <div className="blok">
      <h1 className="text-2xl text-purple-800 text-center font-bold mb-5">
        Select Generation
      </h1>
      <div className="table m-auto">
        <nav className="flex justify-center bg-white rounded-lg shadow-lg">
          {link.map((item, index) => (
            <a
              href={item.router}
              key={index}
              className="flex-wrap text-lg font-bold p-4 rounded-lg hover:bg-slate-100"
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};
export default Navbar;
