import  { useContext, useEffect, useState } from "react";
import AppInfo from "../app-info/App_info";
import AppFilter from "../app-filter/AppFilter";
import SearchPanel from "../searchPanel/SearchPanel";
import "./App.css";
import MovieList from "../movie-list/MovieList";

import MovieAddForm from "../movie-add-form/MovieAddForm";
import { Context } from "../context";
// //CLAS COMPONENT YASALISHI , REACT.COMPONENTDAN MEROS OLINYAPTI
// class App extends Component {
//   //CONSTRUCTOR CHAQIRILIB , UNGA PROPS BERIB YUBORILYAPTI
//   constructor(props) {
//     //OBJECTLARDA , AGAR MEROS OLINSA, BOLA OBJECT SUPERCONSTRUCTOR ISHLATIKISHI SHART
//     super(props);
//     //THIS STATE
//     this.state = {
//     data: [
//   {
//     name: "Empire of Osman",
//     viewers: 998,
//     favourite: true,
//     id: 1,
//     like: false,
//   },
//   {
//     name: "Osman",
//     viewers: 343,
//     favourite: false,
//     id: 2,
//     like: false,
//   },
//   {
//     name: "Icarde",
//     viewers: 123,
//     favourite: true,
//     id: 3,
//     like: true,
//   },
//   {
//     name: "Avengers: Endgame",
//     viewers: 1542,
//     favourite: true,
//     id: 4,
//     like: true,
//   },
//   {
//     name: "Avengers: Infinity War",
//     viewers: 1876,
//     favourite: true,
//     id: 5,
//     like: true,
//   },
//   {
//     name: "Spider-Man: No Way Home",
//     viewers: 2134,
//     favourite: true,
//     id: 6,
//     like: true,
//   },
//   {
//     name: "The Dark Knight",
//     viewers: 1654,
//     favourite: false,
//     id: 7,
//     like: true,
//   },
//   {
//     name: "Interstellar",
//     viewers: 1432,
//     favourite: true,
//     id: 8,
//     like: true,
//   },
//   {
//     name: "Inception",
//     viewers: 1298,
//     favourite: false,
//     id: 9,
//     like: false,
//   },
//   {
//     name: "Titanic",
//     viewers: 2345,
//     favourite: true,
//     id: 10,
//     like: true,
//   },
//   {
//     name: "The Wolf of Wall Street",
//     viewers: 987,
//     favourite: false,
//     id: 11,
//     like: true,
//   },
//   {
//     name: "Joker",
//     viewers: 1789,
//     favourite: true,
//     id: 12,
//     like: true,
//   },
//   {
//     name: "Gladiator",
//     viewers: 876,
//     favourite: false,
//     id: 13,
//     like: false,
//   },
//   {
//     name: "The Lord of the Rings",
//     viewers: 1987,
//     favourite: true,
//     id: 14,
//     like: true,
//   },
//   {
//     name: "Harry Potter",
//     viewers: 2456,
//     favourite: true,
//     id: 15,
//     like: true,
//   },
//   {
//     name: "Fast & Furious",
//     viewers: 1123,
//     favourite: false,
//     id: 16,
//     like: false,
//   },
//   {
//     name: "Iron Man",
//     viewers: 1567,
//     favourite: true,
//     id: 17,
//     like: true,
//   },
//   {
//     name: "Thor: Ragnarok",
//     viewers: 1345,
//     favourite: false,
//     id: 18,
//     like: true,
//   },
//   {
//     name: "Black Panther",
//     viewers: 1678,
//     favourite: true,
//     id: 19,
//     like: false,
//   },
//   {
//     name: "Doctor Strange",
//     viewers: 1456,
//     favourite: false,
//     id: 20,
//     like: true,
//   },
// ],
//       //TERM
//       term: "",
//       filter:"popular"
//     };
//   }
//   //ONDELETE FUNKSYASI ID QABUL QILMOQDA
//   onDelete = (id) => {
//     //DATANI MUTABLE QILIB UZGARTIRB BULMAYDI , SHU SABAB SETSTATE DAN FOYDALANYAPMIZ
//     this.setState(({ data }) => {
//       //  MUTABLE
//       // const index = data.findIndex((item) => item.id !== id);
//       // data.splice(index,1)

//       //IMMUTABLE

//       //REACTDA HAR QANDAY HOLATDA ARRAYLARNI, MALUMOTLARI TOG'RIDAN TO'G'RI UZGARTIRIB BULMAYDI,SHUNING UCHUN
//       //  YANGI ARR YASAB , UNGA MALUMOTNI OVOLAMIZ,
//       const newArr = data.filter((item) => item.id !== id);
//       //DATAGA  YANGI ARRAYIMIZNI BERIB YUBORYAPMIZ
//       return { data: newArr };
//     });
//   };
//   //ADDFORM FUNKSYASI,ITEM QABUL QILYAPTI
//   addForm = (item) => {
//     const newItem = {
//       name: item.name,
//       viewers: item.viewers,
//       id: uuidv4(),
//       like: false,
//       favourite: true,
//     };
//     // BU YERDA DATANI INTERPOLATSIYA YORDAMIDA {data} KO'RINISHIDA OVOLYAPMIZ,
//     this.setState(({ data }) => ({
//       //...data -> BU YERDA SPREAD OPERATORIDAN FOYDALANDIK, YANI DATANI OCHIB, UNGA NEW ITEMNI BERIB YUBORIDK
//       data: [...data, newItem],
//     }));
//   };

//   // BU YERDA FUNKSIYA IKKITA FUNSKYA KABI ISHLAYAPTI
//   onToggleProp = (id, prop) => {
//     this.setState(({ data }) => {
//       //IMMUTABLE YANI YANGI ARRAY YASAN UNGA MALUMOTNI OVOLISH
//       const newArr = data.map((item) => {
//         if (item.id === id) {
//           //IF UCHUN RETURN
//           return { ...item, [prop]: !item[prop] };
//         }
//         //MAP UCHUN RETURN
//         return item;
//       });
//       //THIS STATE UCHUN RETURN
//       return {
//         //IMMUTABLE
//         data: newArr,
//       };
//     });
//   };
//   //QIDIRUV FUNKSYASI, DATANI VA TERMNI QABUL QILIB OLYAPTI
//   searchHandler = (arr, term) => {
//     // HECH QANDAY QIDIRUV BAJARILMSA, YANI TERM BUSH BULSA DATANI UZI EKRANDA KURINIB TURADI
//     if (term.length === 0) {
//       return arr;
//     }
//     // AGAR TERMGA QIYMET KELSA, U ARRNI TERM BUYICHA FILTR QILIB OLADI
//     return arr.filter((item) => item.name.toLowerCase().indexOf(term) > -1);
//   };
//   // BU YERDA SEARCH PANELDA KELAYOTDAN TERMNI , DATA MIZDAGI TERMGA BERIB YUBORYAPMIZ,
//   // BU BIR XIL SO'Z BULGANI UCHUN {term} KO'RINISHDA HAM YOZSAK BULARDI
//   updateTermHandler = (term) => this.setState({ term: term });
//   //CLASS COMPONENTDA RETURNNI RENDER ICHIGA YOZISH SHART

//   updateFilterHandler=(filter)=>this.setState({filter:filter})

//   filterHandler = (arr, filter) => {
//     switch (filter) {
//       case "popular":
//         return arr.filter((item) => item.like);
//       case "mostViewers":
//         return arr.filter((item) => item.viewers > 800);

//       default:
//         return arr;
//     }
//   };

//   render() {
//     //CLASS COMPONENTDA HAR BIR UZGARUVCHILARNI RENDER ICHIGZ YOZISH KERAK, FUNKSYALARNI RENDERDAN TASHQARIGA

//     //THIS.STATE DAN DATA VA TERMNI OVOLYAPMAN
//     const { data, term , filter} = this.state,
//       allMoviesCount = data.length,
//       allFavouriteMoviesCount = data.filter((item) => item.favourite).length,
//       allLikeMoviesCount = data.filter((item) => item.like).length,
//       //SEARCH HANDLERGA IKKITA MALUMOT BERILADI, 1.ARR 2.TERM
//       visibleData = this.filterHandler(this.searchHandler(data, term), filter)
//     if (this.state.data.length === 0) {
//       console.log("aaa");
//     }
//     return (
//       <div className="app font-monospace">
//         <div className="content">
//           <AppInfo
//             //APP INFOGA QIYMATLARI BERIB YUBORISH
//             allMoviesCount={allMoviesCount}
//             allFavouriteMoviesCount={allFavouriteMoviesCount}
//             allLikeMoviesCount={allLikeMoviesCount}
//           />
//           <div className="search-panel">
//             <SearchPanel
//               //CLASS LARDA FUNKSYALARNI HAM QIYMATLARI HAM BERIB YUBORISHDA THIS KALIT SO'ZI ISHLATILADI,
//               updateTermHandler={this.updateTermHandler}
//             />
//             <AppFilter  filter={filter}  updateFilterHandler={this.updateFilterHandler} />
//           </div>

//           <MovieList
//             visibleData={visibleData}
//             onDelete={this.onDelete}
//             onToggleProp={this.onToggleProp}
//           />
//           <MovieAddForm addForm={this.addForm} />
//         </div>
//       </div>
//     );
//   }
// }

// // APP COMPONENTINI EXPORT DEFAULT QILYAPMAN,

// export default App;
// //REACT DA BITTA FAYL ICHIDA FAQAT BIR MARTA EXPORT DEFAULT ISHLATISH MUMKIN, BUT
// // EXPORTNI XOXLAGANCHA ISHLATISH MUMKIN

const App = () => {

  const [loading, setLoading] = useState(false);

  const { dispatch } = useContext(Context);

  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/todos?_start=0&_limit=6")
      .then((response) => response.json())
      .then((json) => {
        // console.log(json);
        const newArr = json.map((item) => ({
          name: item.title,
          id: item.id,
          viewers: 1000,
          like: false,
          favourite: false,
        }));
        dispatch({ type: "GET_DATA", payload: newArr });
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [dispatch]);

  return (
    <div className="app font-monospace">
      <div className="content">
        <AppInfo />
        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>
        {loading && "Loading..."}
        <MovieList />

        <MovieAddForm />
      </div>
    </div>
  );
};

export default App;
//REACT DA BITTA FAYL ICHIDA FAQAT BIR MARTA EXPORT DEFAULT ISHLATISH MUMKIN, BUT
// EXPORTNI XOXLAGANCHA ISHLATISH MUMKIN

// const arr = [
//   {
//     name: "Empire of Osman",
//     viewers: 998,
//     favourite: true,
//     id: 1,
//     like: false,
//   },
//   {
//     name: "Osman",
//     viewers: 343,
//     favourite: false,
//     id: 2,
//     like: false,
//   },
//   {
//     name: "Icarde",
//     viewers: 123,
//     favourite: true,
//     id: 3,
//     like: true,
//   },
//   {
//     name: "Avengers: Endgame",
//     viewers: 1542,
//     favourite: true,
//     id: 4,
//     like: true,
//   },
//   {
//     name: "Avengers: Infinity War",
//     viewers: 1876,
//     favourite: true,
//     id: 5,
//     like: true,
//   },
//   {
//     name: "Spider-Man: No Way Home",
//     viewers: 2134,
//     favourite: true,
//     id: 6,
//     like: true,
//   },
//   {
//     name: "The Dark Knight",
//     viewers: 1654,
//     favourite: false,
//     id: 7,
//     like: true,
//   },
//   {
//     name: "Interstellar",
//     viewers: 1432,
//     favourite: true,
//     id: 8,
//     like: true,
//   },
//   {
//     name: "Inception",
//     viewers: 1298,
//     favourite: false,
//     id: 9,
//     like: false,
//   },
//   {
//     name: "Titanic",
//     viewers: 2345,
//     favourite: true,
//     id: 10,
//     like: true,
//   },
//   {
//     name: "The Wolf of Wall Street",
//     viewers: 987,
//     favourite: false,
//     id: 11,
//     like: true,
//   },
//   {
//     name: "Joker",
//     viewers: 1789,
//     favourite: true,
//     id: 12,
//     like: true,
//   },
//   {
//     name: "Gladiator",
//     viewers: 876,
//     favourite: false,
//     id: 13,
//     like: false,
//   },
//   {
//     name: "The Lord of the Rings",
//     viewers: 1987,
//     favourite: true,
//     id: 14,
//     like: true,
//   },
//   {
//     name: "Harry Potter",
//     viewers: 2456,
//     favourite: true,
//     id: 15,
//     like: true,
//   },
//   {
//     name: "Fast & Furious",
//     viewers: 1123,
//     favourite: false,
//     id: 16,
//     like: false,
//   },
//   {
//     name: "Iron Man",
//     viewers: 1567,
//     favourite: true,
//     id: 17,
//     like: true,
//   },
//   {
//     name: "Thor: Ragnarok",
//     viewers: 1345,
//     favourite: false,
//     id: 18,
//     like: true,
//   },
//   {
//     name: "Black Panther",
//     viewers: 1678,
//     favourite: true,
//     id: 19,
//     like: false,
//   },
//   {
//     name: "Doctor Strange",
//     viewers: 1456,
//     favourite: false,
//     id: 20,
//     like: true,
//   },
// ];
