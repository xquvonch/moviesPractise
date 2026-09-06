import { useContext } from "react";
import "./MovieListItem.css";
import { Context } from "../context";

// class MovieListItem extends Component {
// constructor(props) {
//   super(props);
//   // this.state = { favourite: false, like: false };
//   // this.onFavourite = this.onFavourite.bind(this);
// }
// onFavourite() {
//   this.setState((prevState) => ({
//     favourite: !prevState.favourite,
//   }));
// }
// onLike=()=>{
//   this.setState(({like})=>({
//     like:!like
//   }))
// }

//   render() {
//     const { name, viewers ,onDelete , onToggleProp ,favourite,like} = this.props;

//     return (
//       <li
//         className={`list-group-item d-flex justify-content-between ${favourite && "increase"}   ${like && "like"}`}
//       >

//         <span onClick={onToggleProp} className="list-group-item-label"   data-toggle='like' >{name}</span>
//         <input
//           name="viewers"
//           type="number"
//           className="list-item-group-input"
//           defaultValue={viewers}
//         />
//         <div className="align-items-center justify-content-center d-flex">
//           <button
//             type="button"
//             className="btn-cookie btn-sm"
//             onClick={onToggleProp}
//             data-toggle='favourite'

//           >
//             <i className="fa fa-cookie">🍪</i>
//           </button>
//           <button type="button" className="btn-trash btn-sm" onClick={onDelete}  >
//             <i className="fa fa-trash"></i>
//           </button>
//           <i className="fa fa-star"></i>
//         </div>
//       </li>
//     );
//   }
// }

const MovieListItem = (props) => {
  //FUNCTION COMPONENT BULGANI UCHUN PROPSNI UZIDAN INTERPOLATSIYA QILIB OLYAPMIZ
  const { name, viewers, favourite, like, id } = props;

  const { _, dispatch } = useContext(Context);
  const onDelete = () => {
    dispatch({ type: "ON_DELETE", payload: id });
  };
  const onToggleProp=(e)=>{

    const payload={
      id,
      prop: e.currentTarget.getAttribute("data-toggle"),
    }
  dispatch({type:"ON_TOGGLE_PROP" , payload})
  }

  return (
    <li
      className={`list-group-item d-flex justify-content-between 
    
    ${
      // BU YERDA AGAR FAVOURITE QIYMATI BO'LSA UNGA "INCREASE" CLASI QUSHIILADI, LIKE HAM SHUNDAY
      favourite && "increase"
    }
     ${like && "like"}`}
    >
      <span
        className="list-group-item-label"
        onClick={onToggleProp}
        data-toggle="like"
      >
        {name}
      </span>
      <input
        type="number"
        className="list-item-group-input"
        //DEFAULT VALU BERIB QUYILYAPTI
        defaultValue={viewers}
      />
      <div className="align-items-center justify-content-center d-flex">
        <button
          type="button"
          className="btn-cookie btn-sm"
          onClick={onToggleProp}
          data-toggle="favourite"
        >
          <i className="fa fa-cookie">🍪</i>
        </button>
        <button type="button" className="btn-trash btn-sm" onClick={onDelete}>
          <i className="fa fa-trash"></i>
        </button>
        <i className="fa fa-star"></i>
      </div>
    </li>
  );
};

export default MovieListItem;
