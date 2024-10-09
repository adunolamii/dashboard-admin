import Sidebar from "../Components/Sidebar"
export default function Layout({children}){
    return(
       <>
        <div>
            <Sidebar/>
            {children}
        </div>
        </>
    )
}