import { H4 } from "./Title";
import Link from 'next/link';

const Navbar = () => {

  return (
    <div className='shadow justify-center'>
      <H4 className="text-center pt-6">Anne Hurst Chisholm</H4>
      <div className="flex justify-center">
        <ul className="flex pb-5 w-64 pt-2 justify-between">
          <li className="mr-6">
            <Link className="font-semibold hover:text-gray-900 underline" href="#">Active</Link>
          </li>
          <li className="mr-6">
            <Link className="text-gray-500 font-semibold hover:text-gray-900" href="#">Link</Link>
          </li>
          <li >
            <Link className="text-gray-500 font-semibold hover:text-gray-900" href="#">Link</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;