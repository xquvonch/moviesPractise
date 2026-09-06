import React, { useContext } from "react";
import MovieListItem from "../movie-list-item/MovieListItem";
import { Context } from "../context";
import { filterHandler, searchHandler } from "../utilities/Data";

// VISIBLE DATA BO'SH BOLIB QOLGANDA UNDEFINDED BUP QOLMASLIGINI OLDINI OLISH UCHUN, =[] KO'RINISHIDA YOZIB OLDIM,
const MovieList = ({onToggleProp }) => {
  const { state} = useContext(Context);

  const data = filterHandler(
    searchHandler(state.data, state.term),
    state.filter,
  );

  return (
    <ul className="movie-list element">
      {
        //AGARDA MALUMOT BUSH BUP QOLSA HATOLIK BERMASLIGI UCHUN
        data?.map((item) => {
          return (
            <MovieListItem
              // ITEM IDISI BERIB YUBORILYAPTI KEYGA
              key={item.id}
              // BU YERDA ITEMNI OCHIB BERIB YUBORYAPMAN, MOVELISTITEMGA
              {...item}
              //ONDELETE FUNKSYASIGA CALLBACK BERILYAPTI, CALBACKGA ITEM.ID BERIB YUBORILYAPTI
             
              //ONTOGGLEPROP FUNKSYASIGA HAM CALLBACK BERILYAPTI,VA UNGA
              //ITEM.ID
              //EVENTDAGI CURRENT TARGETNI QIYMATINI ATRIBUT YORDAMIDA USHLAB OLYAPMIZ
              onToggleProp={(e) =>
                onToggleProp(
                  item.id,
                  e.currentTarget.getAttribute("data-toggle"),
                )
              }
            
            />
          );
        })
      }
    </ul>
  );
};

export default MovieList;
