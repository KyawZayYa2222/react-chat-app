import LoginRegisterLayout from "../layouts/LoginRegisterLayout";
import Button from "../utils/Button";

export default function Login() {
  return (
    <>
    {/* layout  */}
    <LoginRegisterLayout>
        {/* login form */}
        <form>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          {/* <button type="submit">Login</button> */}
          <Button type="submit" name="Login"/>
        </form>
    </LoginRegisterLayout>
    </>
  )
}
