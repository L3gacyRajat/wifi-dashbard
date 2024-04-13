
import Sidebar from "./sidebar";
import Topnavbar from "./topnavbar/Topnavbar";

function RootLayout({ children }) {
  return (
    <div className="flex gap-5 bg-background-color dark:bg-lightbackground text-textcolor text-1xl dark:text-black">
      <Sidebar />
      <main className="max-full flex-1 mx-auto py-4">
        <Topnavbar />
        {children}
      </main>
    
    </div>
  );
}

export default RootLayout;

