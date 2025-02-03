import './App.css'
import UploadPage from './pages/UploadPage/UploadPage'
import HomePage from './pages/HomePage/HomePage'
import DownloadPage from './pages/DownloadPage/DownloadPage'
import CodePage from './pages/CodePage/CodePage'
import Footer from './components/Footer/Footer'
import { Route, Router, Routes } from 'react-router-dom'
import Logo from './components/Logo/Logo'
import ErrorPage from './pages/ErrorPage/ErrorPage'

function App() {

  return (
    <>
      <div id="container">
        <div className="home">
          <Logo />
          <Routes>
            <Route path='/' element={<HomePage />}></Route>
            <Route path='/uploadFile' element={<UploadPage />}></Route>
            <Route path='/secretCodePage' element={<CodePage />}></Route>
            <Route path='/downloadFile' element={<DownloadPage />}></Route>
            <Route path='*' element={<ErrorPage />}></Route>
          </Routes>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
