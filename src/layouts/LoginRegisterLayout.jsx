import { Link } from "react-router-dom";
import Logo from "../utils/Logo";

export default function LoginRegisterLayout({children}) {
  return (
    // login or register form elements
    <div className="relative w-screen h-screen text-white bg-[#212121]">
        <div className="absolute top-0 p-3 w-full flex justify-between">
          {/* site logo  */}
            <Logo/>

            {/* register link  */}
            <Link to={'/register'} className="z-10">Register</Link>
        </div>
        <div className="absolute top-0 w-full h-full flex justify-center items-center">
            {children}
        </div>
    </div>
  )
}
