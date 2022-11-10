import React from 'react';
import { useEffect, useState } from "react";
import axios from "axios";
import Modal from "../src/components/Modal/Modal.jsx";
import ButtonCarregar from "../src/components/Buttons/ButtonCarregar.jsx";
import "./App.css";
import Appbar from './components/Appbar/Appbar.jsx';
import Header from './components/Header/Header.jsx';


export default function App() {
  const [news, setNews] = useState([]);
  const [search, setSearch] = useState([]);
  const [counting, setCounting] = useState(10);

  useEffect(function () {
    axios
      .get(`https://api.spaceflightnewsapi.net/v3/articles?_limit=200`)
      .then(function (response) {
        setNews(response.data);
        setSearch(response.data);
      });
  }, []);

  function handleSortAsc() {
    const sortedDataAsc = [...news].sort((a,b) => {
      return a.publishedAt > b.publishedAt ? 1 : -1
    })
      setNews(sortedDataAsc)
  }

  function handleSortDsc() {
    const sortedDataDsc = [...news].sort((a,b) => {
      return b.publishedAt > a.publishedAt  ? 1 : -1
    })
      setNews(sortedDataDsc)
  }

  function handleChange({target}) {
    if(!target.value.toLowerCase()){
      setNews(search);
      return;
    }

    const findNews = news.filter((news) => news.title.toLowerCase().includes(target.value.toLowerCase()))
    setNews(findNews);
    }

    const carregarMais = () => {
      setCounting((valorAnterior) => valorAnterior + 10)
    }

  return (
    <>
    <Appbar handleSortAsc={handleSortAsc} handleSortDsc={handleSortDsc} findNews={handleChange}/>
    <Header/>
      {news.sort((a, b) => {
          if (a > b) {
            return 1;
          }
        })
        .slice(0, counting)
        .map(function (news, key) {
          return (
            <section key={key} className="theNews">
              <div className="theNewsImage">
                <img src={news.imageUrl} />
              </div>
              <div className="theNewsInfo">
                <h1>{news.title}</h1>
                <p>{news.publishedAt.substring(0, 10)}</p>
                <p>{news.summary}</p>
                <Modal
                  data={news.publishedAt.substring(0, 10)}
                  titles={news.title}
                  resume={news.summary}
                  site={news.url}
                  img={news.imageUrl}
                />
              </div>
            </section>
          );
        })}

        <ButtonCarregar carregarMais={carregarMais}/>
        
    </>
  );
}
