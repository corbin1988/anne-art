import Link from "next/link";
import { useEffect, useState } from "react";
import AdminContainer from "../../../components/AdminContainer";
import AdminTable, { TD, TDLink, TH, THEAD, TR } from "../../../components/AdminTable";
import Button from "../../../components/Button";
import { H2 } from "../../../components/Title";
import withProtected from "../../../hooks/router";

const AdminAboutList = () => {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    setLoaded(true);
  }, [loaded])
  return (
    <AdminContainer>
      <>
        <div className="flex w-full justify-between py-2 text-black text-center min-w-full sm:px-6 lg:px-8">
        <H2 className="m-0">About</H2>
        <Button>
          <Link  href='/admin/about/create'>
            Create Year
          </Link>
        </Button>
        </div>
        <AdminTable>
          {/* Hydration error conditional that waits for page to render */}
          { loaded ? 
            <THEAD>
              <TH title='Year'/>
              <TH title=""/>
            </THEAD> : <></>
          }
          <tbody>
            <TR>
              <TDLink href="about/edit/2000">2000</TDLink>
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

export default withProtected(AdminAboutList);