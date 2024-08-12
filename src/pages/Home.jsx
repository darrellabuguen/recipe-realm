import Trending from './Trending';
import Other from './Other';

const Home = () => {
    const title = document.querySelector("title");

    title.innerText = `Recipe Realm`; //change title

    return (
        <>
            <Trending />
            <h1 className='font-bold text-lg mt-12 mb-4'
                style={{
                    fontFamily: "Libre Baskerville, serif",
                }}
            >Trending Recipes</h1>
            <Trending />
            <Other />
        </>
    )
}

export default Home