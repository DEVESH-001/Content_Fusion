// import { Search } from "lucide-react";
// import { Input } from "postcss";
// import React from "react";

// const Header = () => {
//   return (
//     <div className="p-5 shadow-sm border-b-2 flex justify-between items-center bg-white">
//       <div className="flex gap-2 items-center p-2 border rounded-md max-w-lg bg-white">
//         <Search />
//         <input type="text" placeholder="Search..." className="outline-none " />
//       </div>
//       <div>
//         <h2 className="bg-primary p-1 rounded-full text-xs text-white px-2">
//           Join Membership @9.9/month
//         </h2>
//       </div>
//     </div>
//   );
// };

// export default Header;
"use client";

import { UserButton, useUser } from "@clerk/nextjs"; // Use the useUser hook to get user information

function Header() {
  const { isSignedIn, user } = useUser(); // Use the useUser hook

  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="text-lg font-bold">
        <span>Hello 👋🏻 {user?.firstName}</span>
      </div>

      <div className="flex items-center space-x-4">
        {isSignedIn ? (
          <div className="flex items-center space-x-2">
            {/* Wrap UserButton in a div for size control */}
            <div className="h-12 w-12 flex items-center justify-center">
              <UserButton className="h-full w-full" />
            </div>
          </div>
        ) : (
          <span className="hover:text-gray-400">User Not Logged In</span>
        )}
      </div>
    </header>
  );
}

export default Header;
