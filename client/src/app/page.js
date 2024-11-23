// "use clients";

// import Link from "next/link";

// export default function Home() {
//   return (
//     <div>
//       <div
//         className="relative bg-cover bg-center h-screen"
//         style={{
//           backgroundImage: "url('/veg.jpg')", // Replace with your image path
//         }}
//       >
//         <div className="absolute inset-0 bg-black bg-opacity-50"></div>
//         <div className="relative z-10 text-center text-white flex flex-col justify-center items-center h-full">
//           <p className="text-lg md:text-xl mb-8">
//             Experience the finest cloud kitchen in town. Fresh ingredients,
//             expert chefs, and flavors that will delight your taste buds.
//           </p>
//           <p className="text-lg md:text-2xl mt-4">
//             Delicious food delivered to your doorstep.
//           </p>
//           <div className="mt-6 space-x-4">
//             <Link href="/login">
//               <button className="bg-green-500 px-6 py-3 rounded-lg text-lg hover:bg-green-600">
//                 Login
//               </button>
//             </Link>
//             <Link href="/register">
//               <button className="bg-blue-500 px-6 py-3 rounded-lg text-lg hover:bg-blue-600">
//                 Sign up
//               </button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import Link from "next/link";

export default function Page() {
  return (
    <div
      className="relative bg-cover bg-center h-screen w-screen overflow-hidden font-sans"
      style={{ backgroundImage: "url('/veg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Navigation */}
      <nav className="relative z-10 flex justify-between items-center p-4 md:p-6">
        <h1 className="text-2xl md:text-3xl font-bold text-white">Mithosewa</h1>
        <div className="space-x-2 md:space-x-4">
          <Link href="/login">
            <button className="bg-transparent border border-white text-white px-3 py-1 md:px-4 md:py-2 text-sm md:text-base rounded hover:bg-white hover:text-black transition duration-300">
              Login
            </button>
          </Link>
          <Link href="/register">
            <button className="bg-orange-500 text-white px-3 py-1 md:px-4 md:py-2 text-sm md:text-base rounded hover:bg-orange-600 transition duration-300">
              Sign up
            </button>
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 flex flex-col justify-center items-center text-center text-white px-4 h-[calc(100vh-64px)] md:h-[calc(100vh-88px)]">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
          Experience the Finest{" "}
          <span className="text-orange-500">Cloud Kitchen</span> in Town
        </h2>
        <p className="text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 max-w-xl md:max-w-2xl">
          Mithosewa brings tasty meals from our kitchen straight to your home.
          Enjoy your favorite dishes without cooking!
        </p>
      </main>
    </div>
  );
}
