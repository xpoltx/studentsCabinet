import { Router } from "express"
import { crRecordBook, delRecordBook, getDebts, getRec, getStudentsRecords, updRecordBook } from "../controllers/recordBook"
import { getDisciplinesRecordBook } from "../db/recordBook"

export default (router: Router) =>{
    router.post('/record-book/create', crRecordBook),
    router.get('/record-book/:id', getRec),
    router.get('/record-book/student/:studentId', getStudentsRecords),
    router.get('/record-book/discipline/:disciplineId', getDisciplinesRecordBook),
    router.get('/record-book/student/debts/:studentId', getDebts),
    router.patch('/record-book/upd/:id', updRecordBook),
    router.delete('/record-book/del/:id', delRecordBook)
}