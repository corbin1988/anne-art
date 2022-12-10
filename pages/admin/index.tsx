import Link from "next/link";
import { useEffect, useState } from "react";
import AdminContainer from "../../components/AdminContainer";
import AdminTable, { TD, TDLink, TH, THEAD, TR } from "../../components/AdminTable";
import Button from "../../components/Button";
import { H2 } from "../../components/Title";

const Admin = () => {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    setLoaded(true);
  }, [loaded])
  
  return (
    <AdminContainer>
      <>
        <div className="flex w-full justify-between py-2 text-black text-center min-w-full sm:px-6 lg:px-8">
        <H2 className="m-0">Art</H2>
        <Button>Post Painting</Button>
        </div>
        <AdminTable>
          {/* Hydration error conditional that waits for page to render */}
          { loaded ? 
            <THEAD>
              <TH title='Painting title'/>
              <TH title=""/>
            </THEAD> : <></>
          }
          <tbody>
            <TR>
              <TDLink href="/">A painting title</TDLink>
              <TD>
                <Button className="mr-2">Update</Button>
                <Button>Delete</Button>
              </TD>
            </TR>
          </tbody>
        </AdminTable>
      </>
    </AdminContainer>
  )
}

export default Admin;