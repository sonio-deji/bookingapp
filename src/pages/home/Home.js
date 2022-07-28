import './home.css';
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/NavBar';
import Featured from '../../components/featured/Featured';
import PropertyList  from '../../components/propertylist/PropertyList';
import FeaturedProperties  from '../../components/featuredProperties/FeaturedProperties';
import MailList  from '../../components/maillist/MailList';
import Footer from '../../components/footer/Footer';



const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <div className="homecontainer">
                <Featured />
                <h1 className="hometitle">Browse by property type</h1>
                <PropertyList />
                <h1 className="hometitle">Homes guests love</h1>
                <FeaturedProperties />
                <MailList />
                <Footer />
            </div>
        </div>
    );
}

export default Home;
