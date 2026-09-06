import  { useContext } from "react";
import "./App_info.css";
import { Context } from "../context";
// APP.JS DAN KELGAN MALUMOTLARNI , INERPOLATSIYA QILIB {EXAMPLE} , KO'RINISHDA OVOLYAPMAN
// JSX BINOAN, KETMA KETLIKKA ETIBOR BERISH KERAK, APPDA YUBORILGANDAGI KABI, OVOLISH KERAK, MALUMOTLARNI
const App_info = () => {
  const { state } = useContext(Context);
  return (
    <div className="app-info">
      <p className="fs-3 text-uppercase">
        Barcha kinolar soni:{state.data.length}
      </p>
      <p className="fs-4 text-uppercase">
        Sevimli kinolar soni:
        {state.data.filter((item) => item.favourite).length}
      </p>
      <p className="fs-4 text-uppercase">
        Yoqtirgan kinolar soni:{state.data.filter((item) => item.like).length}
      </p>
    </div>
  );
};

export default App_info;
