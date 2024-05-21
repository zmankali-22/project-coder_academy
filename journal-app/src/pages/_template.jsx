import { NavLink } from "react-router-dom";

export default function Template() {
  return (
    <div>
        <nav>
        <h1>Alex cool Journal</h1>
        <NavLink to="/">Home</NavLink> 
        <NavLink to="/create">Write a post</NavLink> 
        </nav>
        <main>
            <Outlet />
        </main>
        <footer>
            Journal footer with copywright
        </footer>
    </div>
  )
}
