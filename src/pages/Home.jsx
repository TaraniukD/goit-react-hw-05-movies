import { useState, useEffect } from "react";
import Notiflix from 'notiflix';
import { getPopularFilm } from "../Api/Api"

export function Home () {
//   const [ name, ] = useState('');
  const [ results, setResults ] = useState([]);
  const [ page, ] = useState(1);

  useEffect(() => {
    // if (!name) {
    //   return;
    // }

    // setLoading(true);

      const apiData = async () => {
        const { results } = await getPopularFilm(page);
        
        if (results === 0) {
        Notiflix.Notify.info('No image with that name:(');
        // setLoading(false);
        return;
      }

      setResults(     results);
      // setTotalHits(prevState => page === 1 ? totalHits - hits.length :  prevState - hits.length);
      // setLoading(false);
      };

      apiData().catch((error) => {
      Notiflix.Notify.warning(`Something went wrong! ${error}`);
    });
  }, [page])

//   const handleFormSubmit = name => {
//     setName(name);
//     setPage(1);
//   }
console.log(results);

    return (
      <main>
        <h1>Trending today</h1>
       <ul>
        <li></li>
       </ul>
      </main>
    );
  };
  