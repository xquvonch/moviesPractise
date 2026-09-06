import  { useContext, useState } from "react";
import "./SearchPanel.css";
import { Context } from "../context";
// class SearchPanel extends Component {
//   constructor(props) {
//     super(props);
//     // SHU COMPONENT UCHUN TERM YARATILYAPTI
//     this.state = { term: "" };
//   }

//   updateTermHandler = (e) => {
//   //EVENTDAN KELAYOTGAN MALUMOTNI LOWERCASE GA QILIB,
//   // term deb yaratilgan O'ZGARUVCGIGA  BERILYAPTI
//     const term = e.target.value.toLowerCase();
// // ENDI  usha uzgaruvchidagi qiymatni STATE DAGI TERMGABERYAPMIZ
//     this.setState({ term:term });
//     // BU YEDA ESA , APP.JS DAGI FUNKSYANI CHAQIRIB UNGA , TERM BERIB YUBORYAPMIZ
//     this.props.updateTermHandler(term);
//   };
//   render() {
//     return (
//       <div>
//         <input
//           type="text"
//           className="form-control search-input"
//           // SHU COMPONENTDAGI UPDATETERMHANDLER FUNKSYASI ISHLAYAPTI
//           onChange={this.updateTermHandler}
//           placeholder="Kinolarni qidirish"
//           //SHU COMPONENTDAGI TERMNI DEFAULT VALUE QILIB OLYAPTI
//           value={this.state.term}
//         />
//       </div>
//     );
//   }
// }
const SearchPanel = () => {
  const [term, setTerm] = useState("");

  const {_, dispatch} = useContext(Context)
  const updateTermHandler = (e) => {
    const term = e.target.value.toLowerCase();
    setTerm(term);
    dispatch({type:"ON_TERM", payload:term})
  };

  return (
    <div>
      <input
        type="text"
        className="form-control search-input "
        onChange={updateTermHandler}
        placeholder="Kinolarni qidirish"
        value={term}
      />
    </div>
  );
};

export default SearchPanel;
