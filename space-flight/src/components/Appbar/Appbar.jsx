import React from "react";
import "./Appbar.module.css";
import SearchIcon from '@mui/icons-material/Search';

function AppBar (props) {

  function filtro(event){
    if (event.target.value === "asc"){
      props.handleSortAsc();
    } else {
      props.handleSortDsc();
    }
  }

    return(
        <section className="container-top">
    <div className="searching">
      <input onChange={props.buscaNoticias} type="text" className="txtFind" placeholder="Search..."/>
      <span className='search-icon'><SearchIcon/></span>
    </div>
    <div className='filter'>
    <select onChange={filtro}  className='filter_select' name="select" >
        <option className="sort" value="valor1">Sort</option>
        <option value="dsc">Mais Novas</option>
        <option value="asc" >Mais Antigas</option>
    </select>
    </div>
  </section>
    )
}

export default AppBar;
