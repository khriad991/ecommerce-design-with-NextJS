import SearchBar from "@/components/home/SearchBar";
import NavBar from "@/components/home/NavBar";

export default function Home() {
  return (
   <main >
        <SearchBar/>
       <div className='w-screen h-screen bg-gray'>
           <NavBar/>
       </div>
   </main>
  )
}
