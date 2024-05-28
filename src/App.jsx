import { useEffect, useState } from "react";
import Card from "./Components/Card";
import Clit from "./Components/Clit";
import Nav from "./Components/Nav";
import "./assets/css/components/app.css";

function App() {
  const [data, setData] = useState([]);
  const [popularTags, setPopularTags] = useState([]);
  const url = "https://api.realworld.io/api/articles";

  useEffect(() => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data.articles);
        console.log(data.articles[0]);
      });
  }, []);

  // useEffect(() => {
  //   fetch("https://api.realworld.io/api/tags")
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setPopularTags(data);
  //     });
  // }, []);

  return (
    <>
      <main>
        {/* navigation */}
        <section className="navigation-section">
          <Nav />
        </section>

        {/* body */}

        <section className="body-wrapper">
          <div className="feeds">
            {data.map((item, index) => {
              return (
                <Card
                  key={index}
                  image={item.author.image}
                  username={item.author.username}
                  date={item.createdAt}
                  title={item.title}
                  desc={item.description}
                  fav={item.favoritesCount}
                />
              );
            })}
          </div>
          <div className="tags">
            <div className="tag-wrapper">
              <p>Popular Tags</p>
              <Clit />{" "}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
