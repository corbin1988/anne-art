import Button from "../../components/Button";
import Container from "../../components/Container";
import Input from "../../components/forms/Input";
import Textfield from "../../components/forms/textfield";
import Navbar from "../../components/Navbar";
import { H2 } from "../../components/Title";

const Contact = () => {
  return(
   <>
    <Navbar />
    <Container>
      <section >
        <div className="py-8 px-4 mx-auto max-w-screen-md">
          <H2 className="text-center">Contact Us</H2>
          <p className="mb-8  font-light text-center sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
          <form action="#" className="space-y-8">
            <Input
              type="email"
              placeholder="you@email.com"
              label="Your Email"
            />
            <Input
              type="text"
              placeholder="Let us know how we can help you"
              label="Subject"
            />
            <Textfield
              id="message"
              rows={6}
              placeholder="Leave a comment..."
              label="Your message"
            />
            <Button>Send message</Button>
          </form>
        </div>
      </section>
    </Container>
   </>
  )
}

export default Contact;