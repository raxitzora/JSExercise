import { UserContext } from "./UserContext";
function Test(){

    const user = {
        name:"raxut",
        role:"dev"
    }

    return(
        <>
        <UserContext.Provider value={user}>
            <Dashboard />
        </UserContext.Provider>
        </>
    )


}
export default Test;