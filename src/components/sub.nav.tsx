import { NavLink } from "react-router-dom";
import cn from "classnames";



export function SubNav() {
  

  return (
    <div className="border-b border-[#3f3f41] bg-[#000000]">
      <div className="px-4">
        <nav className="flex gap-6">
          {[
            { name: "Vaults", path: "/vaults" },
            { name: "Rewards", path: "/rewards" },
            { name: "Portfolio", path: "/portfolio" },
          ].map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={cn(
                "py-4 text-sm font-medium border-b-2 transition-colors",
                // pathname === item.path
                //   ? "border-[#f28f38] text-white"
                //   : "border-transparent text-[#61646b] hover:text-white"
              )}
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  );
}
