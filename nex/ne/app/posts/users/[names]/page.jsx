export default async function users({params}){
    const {names} = await params;
return(
    <div>
        <h1>Names:{names}</h1>

    </div>
)

}

