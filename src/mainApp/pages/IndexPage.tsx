
export const IndexPage = () => {

    console.log(import.meta.env);

    return (
        <>
            <h1 className="bg-gray-800 text-center">Informacion estudiantes</h1>
            {/* Link de react router dom hacia student page */}
            <a href="">Integrante 1 </a>
            <a href="">Integrante 2 </a>
            <a href="">Integrante 3 </a>
        </>
    )
}
