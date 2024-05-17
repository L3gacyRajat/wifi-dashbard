import Sidebar from "./sidebar";
import Topnavbar from "./topnavbar/Topnavbar";

function RootLayout({ children }) {
  return (
    // <div className="flex gap-5 bg-background-color dark:bg-lightmodebg text-textcolor text-1xl dark:text-black">
    //   <Sidebar />
    //   <main className="max-full flex-1 mx-auto py-4">
    //     <Topnavbar />
    //     {children}
    //   </main>

    // </div>
    <div className="flex gap-5 bg-background-color dark:bg-lightmodebg text-textcolor text-1xl dark:text-black">
      <Sidebar />
      <div className="flex-1 transform -translate-x-0 border-[#343B4F] overflow-y-auto">
        <Topnavbar />
        <main className="max-full mx-auto py-4">{children}</main>
      </div>
    </div>
  );
}

export default RootLayout;
