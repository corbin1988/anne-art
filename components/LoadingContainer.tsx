import Container from "./Container"
import Navbar from "./Navbar";

const LoadingContainer = () => {

  return(
   <>
   <Navbar />
    <Container> 
        <div className="flex justify-center items-center h-full">
          <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
          <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg>
          </div>
        </div>
      </Container>
   </>
  )
}

export default LoadingContainer;