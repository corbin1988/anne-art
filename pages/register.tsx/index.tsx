import { useState } from "react";
import Button from "../../components/Button";
import Container from "../../components/Container";
import Input from "../../components/forms/Input";
import { H2 } from "../../components/Title";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore"; 
import { auth, db } from '../../firebase'

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const submit = async (e: any) => {
    setLoading(true);
    e.preventDefault();

    try {
      //Create user
      const res = await createUserWithEmailAndPassword(auth, email, password);

      try {
        //Update profile
        await updateProfile(res.user, {
          displayName: name
        });
        //create user on firestore
        await setDoc(doc(db, "users", res.user.uid), {
          uid: res.user.uid,
          displayName: name,
          email,
        });
        // navigate("/");
      } catch (err) {
        console.log(err);
        setError(true);
        setLoading(false);
      }
    } catch (err) {
      setError(true);
      setLoading(false);
    }
  };

  return (
    <Container>
      <div className="w-full h-full flex flex-col justify-center">
        <section className="" >
          <div className="p-8 mx-auto max-w-screen-md bg-white">
            <H2 className="text-center">Register</H2>
            <form action="#" className="space-y-8" onSubmit={submit}>
            <Input
                type="text"
                placeholder="Jane Doe"
                label="Your Name"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
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
              <Input
                type="password"
                placeholder="***********"
                label="Password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
              />
              <Button>Register</Button>
            </form>
          </div>
        </section>
      </div>
    </Container>
  )
}

export default Register;