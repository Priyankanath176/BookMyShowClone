import React from "react";

//Components
import Poster from "../components/Poster/Poster.Component.Plays";
import PlayFilters from "../components/PlayFilters/PlayFilters.Component";

const Plays = () => {
  return (
    <>
      <div className="container mx-auto px-4 my-10">
        <div className="w-full lg:flex lg:flex-row-reverse gap-4">
          <div className="lg:w-3/4 p-4 bg-white rounded">
            <h2 className="text-2xl font-bold mb-4">Play in Guwahati</h2>
            <div className="flex flex-wrap">
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                <Poster
                  src="https://wallpapercave.com/wp/wp5765913.jpg"
                  title="Sooryavanshi"
                  subtitle="Anuradha Cineplex : Guwahati"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                <Poster
                  src="https://wallpapercave.com/wp/wp5765913.jpg"
                  title="Sooryavanshi"
                  subtitle="Anuradha Cineplex : Guwahati"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                <Poster
                  src="https://wallpapercave.com/wp/wp5765913.jpg"
                  title="Sooryavanshi"
                  subtitle="Anuradha Cineplex : Guwahati"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                <Poster
                  src="https://wallpapercave.com/wp/wp5765913.jpg"
                  title="Sooryavanshi"
                  subtitle="Anuradha Cineplex : Guwahati"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                <Poster
                  src="https://wallpapercave.com/wp/wp5765913.jpg"
                  title="Sooryavanshi"
                  subtitle="Anuradha Cineplex : Guwahati"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                <Poster
                  src="https://wallpapercave.com/wp/wp5765913.jpg"
                  title="Sooryavanshi"
                  subtitle="Anuradha Cineplex : Guwahati"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                <Poster
                  src="https://wallpapercave.com/wp/wp5765913.jpg"
                  title="Sooryavanshi"
                  subtitle="Anuradha Cineplex : Guwahati"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                <Poster
                  src="https://wallpapercave.com/wp/wp5765913.jpg"
                  title="Sooryavanshi"
                  subtitle="Anuradha Cineplex : Guwahati"
                />
              </div>
            </div>
          </div>

          <div className="lg:w-1/4 p-4 bg-white rounded">
            <h2 className="text-2xl font-bold mb-4">Filters</h2>
            <div>
              <PlayFilters
                title="Date"
                tags={["Today", "Tomorrow", "This Weekend"]}
              />
            </div>
            <div>
              <PlayFilters
                title="Language"
                tags={["English", "Hindi", "Tamil"]}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Plays;
