async function Page({ params }) {
    const {id }= await params
  return (
    <div>
      <h1>Page {id}</h1>
    </div>
  );
}

export default Page