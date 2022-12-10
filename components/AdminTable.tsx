import Link from "next/link";

interface AdminTableProps {
  children: JSX.Element | JSX.Element[];
}
const AdminTable = (props: AdminTableProps) => {
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full">
              {props.children}
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminTable;

interface THEADProps {
  children: JSX.Element | JSX.Element[];
}

export const THEAD = (props: THEADProps) => {  
  return (
    <thead className="bg-gray-200 border-b">
      {props.children}
    </thead>
  )
}

interface THProps {
  title: string;
}

export const TH = (props: THProps) => {
  return (
    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">{props.title}</th>
  )
}

interface TRProps {
  children: JSX.Element | JSX.Element[];
}

export const TR = (props: TRProps) => {
  return (
    <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">{props.children}</tr>
  )
}
interface TDLinkProps {
  href: string;
  children: string;
}

export const TDLink = (props: TDLinkProps) => {
  return (
    <td className="text-sm font-medium text-gray-900 w-full"><Link href={props.href} className='w-full block px-6 py-4 '>{props.children}</Link></td>
  )
}

interface TDProps {
  children: JSX.Element | JSX.Element[];
}

export const TD = (props: TDProps) => {
  return (
    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{props.children}</td>
  )
}