import React from 'react'
import './App_info.css'
// APP.JS DAN KELGAN MALUMOTLARNI , INERPOLATSIYA QILIB {EXAMPLE} , KO'RINISHDA OVOLYAPMAN
// JSX BINOAN, KETMA KETLIKKA ETIBOR BERISH KERAK, APPDA YUBORILGANDAGI KABI, OVOLISH KERAK, MALUMOTLARNI
const App_info = ({allMoviesCount, allFavouriteMoviesCount , allLikeMoviesCount}) => {

 
  return (
    <div className='app-info'>
      <p className='fs-3 text-uppercase'>Barcha  kinolar soni:{allMoviesCount}</p>
      <p className='fs-4 text-uppercase'>Sevimli kinolar soni:{allFavouriteMoviesCount}</p>
      <p className='fs-4 text-uppercase'>Yoqtirgan kinolar soni:{allLikeMoviesCount}</p>
    </div>
  )
}

export default App_info
