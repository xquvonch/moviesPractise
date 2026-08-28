import React from "react";
import MovieListItem from "../movie-list-item/MovieListItem";

// VISIBLE DATA BO'SH BOLIB QOLGANDA UNDEFINDED BUP QOLMASLIGINI OLDINI OLISH UCHUN, =[] KO'RINISHIDA YOZIB OLDIM,
const MovieList = ({ visibleData=[], onDelete, onToggleProp }) => {
  return (
    <ul className="movie-list element">
      
      {
      //AGARDA MALUMOT BUSH BUP QOLSA HATOLIK BERMASLIGI UCHUN 
      visibleData?.map((item) => {
        return (
          <MovieListItem

          // ITEM IDISI BERIB YUBORILYAPTI KEYGA
            key={item.id}
            // BU YERDA ITEMNI OCHIB BERIB YUBORYAPMAN, MOVELISTITEMGA 
            {...item}
            //ONDELETE FUNKSYASIGA CALLBACK BERILYAPTI, CALBACKGA ITEM.ID BERIB YUBORILYAPTI
            onDelete={() => {
              onDelete(item.id);
            }}
//ONTOGGLEPROP FUNKSYASIGA HAM CALLBACK BERILYAPTI,VA UNGA
//ITEM.ID
//EVENTDAGI CURRENT TARGETNI QIYMATINI ATRIBUT YORDAMIDA USHLAB OLYAPMIZ
          onToggleProp={(e)=>onToggleProp(item.id ,e.currentTarget.getAttribute('data-toggle'))}
            favourite={item.favourite}
            like={item.like}
          />
        );
      })}
    </ul>
  );
};

export default MovieList;
