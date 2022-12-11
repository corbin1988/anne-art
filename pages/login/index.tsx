import Button from "../../components/Button";
import Container from "../../components/Container";
import Input from "../../components/forms/Input";
import { H2 } from "../../components/Title";

const Login = () => {
  return (
    <Container>
      <div className="w-full h-full flex flex-col justify-center">
        <section className="" >
          <div className="p-8 mx-auto max-w-screen-md bg-white">
            <H2 className="text-center">Login</H2>
            <form action="#" className="space-y-8">
              <Input
                type="email"
                placeholder="you@email.com"
                label="Your Email"
              />
              <Input
                type="password"
                placeholder="***********"
                label="Password"
              />
              <Button>Login</Button>
            </form>
          </div>
        </section>
      </div>
    </Container>
  )
}

export default Login;