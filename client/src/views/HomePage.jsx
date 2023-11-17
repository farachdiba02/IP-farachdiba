import Navbar from "../components/Navbar";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-4 text-center">
          Welcome to Qurizziz
        </h1>
        <h3 className="text-2xl font-bold mb-4 text-justify">Directions:</h3>
        <div className="max-w-1/2">
          <p className="text-xl text-gray-800 text-justify font-semibold max-w-1/2">
            Surah:
            {/* Gantilah bagian di bawah ini dengan instruksi permainan */}
          </p>
          <p className="text-lg text-gray-800 text-justify break-before-page">
            will generate 5 random questions from juz 30, you are asked to guess
            the name of the surah from the verse displayed, for each correct
            question, your points will increase by 20.
          </p>
        </div>
        <div className="max-w-1/2">
          <p className="text-xl text-gray-800 text-justify font-semibold max-w-1/2">
            Verse:
            {/* Gantilah bagian di bawah ini dengan instruksi permainan */}
          </p>
          <p className="text-lg text-gray-800 text-justify break-before-page">
            will generate 5 random questions from juz 26-30, you are asked to
            guess the continuation of the verse displayed, for each correct
            question, your points will increase by 20.
          </p>
        </div>
      </div>
    </>
  );
};

export default HomePage;
