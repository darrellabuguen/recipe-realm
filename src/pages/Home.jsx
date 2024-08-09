import Trending from './Trending';
import Other from './Other';

const Home = () => {
    const title = document.querySelector("title");

    title.innerText = `Recipe Realm`; //change title

    return (
        <>
            <Trending />
            <h1 className='border-l-4 border-red-500 font-bold text-lg pl-2 mt-12 mb-4'>Trending Recipes</h1>
            <Trending />
            <Other />
        </>
    )
}

export default Home