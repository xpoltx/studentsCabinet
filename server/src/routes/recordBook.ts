import { Router } from "express"
import { createManyRecords, crRecord, delRecordBook, delStudentRecordBook, getDebts, getDiscpRecBook, getRec, getStudentRecord, getStudentsRecords, updRecordBook, updStudentDisciplineRecord } from "../controllers/recordBook"
import { isAuthenticated, isProfessor } from "../middleware/userStatus"

export default (router: Router) =>{
    router.post('/record-book/create',isAuthenticated, isProfessor, crRecord),
    router.post('/record-book/create-many',isAuthenticated, isProfessor, createManyRecords),
    router.get('/record-book/:id',isAuthenticated, getRec),
    router.get('/record-book/student/:studentId',isAuthenticated, getStudentsRecords),
    router.get('/record-book/discipline/:disciplineId/student/:studentId',isAuthenticated, getStudentRecord),
    router.get('/record-book/discipline/:disciplineId',isAuthenticated, getDiscpRecBook),
    router.get('/record-book/student/debts/:studentId',isAuthenticated, getDebts),
    router.patch('/record-book/upd/:id',isAuthenticated, isProfessor, updRecordBook),
    router.patch('/record-book/student/:id/upd',isAuthenticated, isProfessor, updRecordBook),
    router.patch('/record-book/upd/discipline/:disciplineId/student/:studentId',isAuthenticated, isProfessor, updStudentDisciplineRecord),
    router.delete('/record-book/del/:id',isAuthenticated, isProfessor, delRecordBook),
    router.delete('/record-book/del/student/:studentId', isAuthenticated, isProfessor, delStudentRecordBook)
}