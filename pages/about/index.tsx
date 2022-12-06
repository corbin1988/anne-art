import Container from "../../components/Container";
import Navbar from "../../components/Navbar";
import { H3, H4, H5 } from "../../components/Title";

const about = {
  description: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>',
  timeline: [
    {
      year: 2000,
      content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p><p>Duis aute irure dolor in reprehenderit in voluptate</p><p>Excepteur sint occaecat cupidatat non proident</p>'
    },
    {
      year: 2001,
      content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p><p>Duis aute irure dolor in reprehenderit in voluptate</p><p>Excepteur sint occaecat cupidatat non proident</p>'
    },
    {
      year: 2002,
      content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p><p>Duis aute irure dolor in reprehenderit in voluptate</p><p>Excepteur sint occaecat cupidatat non proident</p>'
    },
    {
      year: 2003,
      content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p><p>Duis aute irure dolor in reprehenderit in voluptate</p><p>Excepteur sint occaecat cupidatat non proident</p>'
    }
  ]
};

const About = () => {
  return(
   <>
    <Navbar />
    <Container>
      <div className="p-8">
        <div className="mb-4">
          <H3>Description</H3>
          <div dangerouslySetInnerHTML={{ __html: about.description}}></div>
        </div>
        <div>
          <H3 className="mb-4">Timeline</H3>
          { about.timeline. map((date, i) => 
            <div className="mb-4" key={i}>
              <H4>{date.year}</H4>
              <div dangerouslySetInnerHTML={{ __html: date.content}}></div>
            </div>
          ) }
        </div>
      </div>
    </Container>
   </>
  )
}

export default About;