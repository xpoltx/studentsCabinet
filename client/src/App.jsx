import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/MainPages/Home'
import About from './pages/MainPages/About'
import Contacts from './pages/MainPages/Contacts'
import Login from './pages/MainPages/Login'
import Register from './pages/MainPages/Register'
import { ToastContainer } from 'react-toastify';
import EmailVerify from './pages/MainPages/EmailVerify'
import UserHome from './pages/CommonPages/UserHome'
import MainInfo from './pages/CommonPages/MainInfo'
import RecordBook from './pages/CommonPages/RecordBook'
import Group from './pages/CommonPages/Group'
import UserPage from './pages/CommonPages/UserInfoPage'
import CurriculumPage from './pages/StudentPages/CurriculumPage'
import DisciplinePage from './pages/CommonPages/DisciplinePage'
import ProfessorsDisciplinesPage from './pages/ProfessorPages/ProfessorsDisciplinesPage'
import UpdateDisciplinePage from './pages/ProfessorPages/UpdateDisciplinePage'
import GetRecordsPage from './pages/ProfessorPages/GetRecordsPage'
import StudentsDisciplinePage from './pages/ProfessorPages/StudentsDisciplinePage'
import RecordBookUpdPage from './pages/ProfessorPages/RecordBookUpdPage'
import SchedulePage from './pages/StudentPages/SchedulePage'

const App = () => {

  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contacts' element={<Contacts />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/email-verify' element={<EmailVerify />}></Route>
        <Route path='/user-home' element={<UserHome />}></Route>
        <Route path='/main-info' element={<MainInfo />}></Route>
        <Route path='/record-book' element={<RecordBook />}></Route>
        <Route path='/group/:groupName' element={<Group />}></Route>
        <Route path='/info/:role/:userid' element={<UserPage />}></Route>
        <Route path='/curriculum' element={<CurriculumPage />}></Route>
        <Route path='/discipline/:id' element={<DisciplinePage />}></Route>
        <Route path='/schedule' element={<SchedulePage />}></Route>
        <Route path='/disciplines' element={<ProfessorsDisciplinesPage />}></Route>
        <Route path='/discipline/upd/:id' element={<UpdateDisciplinePage />}></Route>
        <Route path='/records' element={<GetRecordsPage />}></Route>
        <Route path='/students/discipline/:id' element={<StudentsDisciplinePage />}></Route>
        <Route path='/record-book/upd/discipline/:disciplineId/student/:studentId' element={<RecordBookUpdPage />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App