import Nav from "../../../components/Nav";
import HomeWelcoming from "../../../components/client/home-components/HomeWelcoming";

const ClientHome = () => {
    return (
        <>
            <Nav />
            <section id="client-home">
                <HomeWelcoming />
            </section>
        </>
    )
}

export default ClientHome;