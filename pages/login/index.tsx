import Button from "../../components/Button";
import Container from "../../components/Container";
import Input from "../../components/forms/Input";
import { H2 } from "../../components/Title";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useState } from "react";

const Login = () => {
  const [err, setErr] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const  submit = async (e: any) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <Container>
      <div className="w-full h-full flex flex-col justify-center">
        <section >
          <div className="p-8 mx-auto max-w-screen-md bg-white">
            <H2 className="text-center">Login</H2>
            <form action="#" className="space-y-8" onSubmit={submit}>
              <Input
                type="email"
                placeholder="you@email.com"
                label="Your Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <Input
                type="password"
                placeholder="***********"
                label="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
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