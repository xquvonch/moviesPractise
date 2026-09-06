import { useContext, useState } from "react";
import { Context } from "../context";

const MovieAddForm = ({ addForm }) => {
  const [state, setState] = useState({ name: "", views: "" });

  const {dispatch} = useContext(Context);
  const onChangeHandlerInput = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const addFormHandler = (e) => {
    e.preventDefault();
    if (state.name === "" || state.viewers === "") {
      alert("Maydonlar bo'sh esmaligiga ishonch hosil qiling");
      return;
    }
    const data = { name: state.name, viewers: Number(state.views) };
    dispatch({ type: "ADD_FORM", payload: data });
    setState({ name: "", views: "" });
  };
  return (
    <div className="movies-add-from element">
      <h3>Yangi kino qo'shish</h3>

      <form className="add-form d-flex" onSubmit={addFormHandler}>
        <input
          name="name"
          type="text"
          value={state.name}
          className="form-control new-post-label me-2"
          placeholder="Qanday kino?"
          onChange={onChangeHandlerInput}
        />
        <input
          value={state.views}
          name="views"
          type="number"
          className="form-control new-post-label me-2 "
          placeholder="Nechi marotaba ko'rilgan"
          onChange={onChangeHandlerInput}
        />
        <button className="btn btn-outline-dark" type="submit">
          {" "}
          Qo'shish
        </button>
      </form>
    </div>
  );
};

// class MovieAddForm extends Component {
//   constructor(props) {
//     super(props);

//     //CLASS COMPONENT UCHUN STATE YARATIB OLINYAPTI
//     // ADD FUNKSIYASI CUHUN
//     this.state = {
//       name: "",
//       views: "",
//     };

//   }

//   //BU YERDA BITTA, FUNKSYA IKKITA FUNKSIYA UCHUN ISHLAYAPTI,
//   //  INPUTDAGI MALUMOTLARI OVOLISH UCHUN ISHLAYAPTI
//   onChangeHandler = (e) => {
//     //EVENTNI OVOLYAPMIZ
//     this.setState({
//       //BU YERDA e.target.name ,
//       //BIRMARTA INPUTNAME DAGI
//       //NAME QIYMAT BN,IKKINCHI MARTA VIEWS QIYMAT BILAN KELYAPTI,
//       //VA UNGA EVENT.TARGET.VALUE YANI , INPUTGA YOZILGAN QIYMAT BERILYAPTI
//       [e.target.name]: e.target.value,
//     });
//   };

//   addForm = (e) => {
//     // EVENT NI PREVDEFAULT QILYAPMIZ
//     e.preventDefault();

//     // APPDAN KELAYOTGAN addForm FUNKSYASIGA QIYMAT BERIB YUBORILYAPTI
//     this.props.addForm({
//       //SHU COMPONENTDAGI STATENING NAME VA VIEWS QIYMATLARINI BERIB YUBORYAPMAN
//       name: this.state.name,
//       viewers: this.state.views,
//     });
//     // VA MALUMOT KETGANDAN KEYIN, INPUTLAR BUSHATIB QUYILYAPTI
//     this.setState({
//       name: "",
//       views: "",
//     });
//   };

//   render() {
//     //THIS.STATE DAN DESTRUPTIZATSIYA QILIB NAME VA VIEWS NI OVOLYAPMAN
//     const { name, views } = this.state;

// }

export default MovieAddForm;
