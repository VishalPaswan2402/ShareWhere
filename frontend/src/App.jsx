import './App.css'
import UploadPage from './pages/UploadPage/UploadPage'
import HomePage from './pages/HomePage/HomePage'
import DownloadPage from './pages/DownloadPage/DownloadPage'
import CodePage from './pages/CodePage/CodePage'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <div id="container">
        <div className="home">
          <Routes>
            <Route path='/' element={<HomePage />}></Route>
            <Route path='/uploadFile' element={<UploadPage />}></Route>
            <Route path='/secretCodePage' element={<CodePage />}></Route>
            <Route path='/downloadFile' element={<DownloadPage />}></Route>
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
