import Trending from './Trending';
import Other from './Other';

const Home = () => {
    const title = document.querySelector("title");

    title.innerText = `Recipe Realm`; //change title

    return (
        <>
            <Trending />
            <Other />
        </>
    )
}

export default Home