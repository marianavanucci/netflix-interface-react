import Tmdb from "../Tmdb/Tmdb";
import { useEffect } from "react";

function Base() {
  // comentario aqui escrevo const e funcoes
  useEffect(() => {
    loadAll();
  }, []);
  const loadAll = async () => {
    let list = await Tmdb.getHomeList();
    console.log(list);
  };
  return <div>oie</div>;
}

export default Base;
