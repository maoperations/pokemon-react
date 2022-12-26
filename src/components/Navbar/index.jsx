import { useHistory } from "react-router-dom";

const Navbar = () => {
  const router = useHistory();

  const link = [
    { name: "I", router: "/gen-i" },
    { name: "II", router: "/gen-ii" },
    { name: "III", router: "/gen-iii" },
    { name: "IV", router: "/gen-iv" },
    { name: "V", router: "/gen-v" },
    { name: "VI", router: "/gen-vi" },
    { name: "VII", router: "/gen-vii" },
    { name: "VIII", router: "/gen-viii" },
  ];

  return (
    <div>
      <p className="text-2xl text-purple-800 text-center font-bold mb-5">
        Select Generation
      </p>

      <div className="flex items-center justify-center">
        <div className="flex bg-white rounded-lg shadow-lg">
          {link.map((item, index) => (
            <p
              key={index}
              onClick={() => router.push(item.router)}
              className="text-lg font-bold px-3 py-3 rounded-lg hover:bg-slate-100 cursor-pointer"
            >
              {item.name}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Navbar;
