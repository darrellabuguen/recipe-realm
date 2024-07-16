import Search from '../components/Search';
import Trending from './Trending';
import Other from './Other';

const Home = () => {
    const title = document.querySelector("title");

    title.innerText = `Recipe Realm`; //change title

    return (
        <>
            <Search />
            <Trending />
            <Other />
        </>
    )
}

export default Home