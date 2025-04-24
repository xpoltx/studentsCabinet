import React, { useState } from 'react'
import useFetch from '../../hooks/useFetch'
import { fetchStudentRecord, updateGrade } from '../../hooks/api'
import useMutation from '../../hooks/useMutation'

const UpdateRecordTable = ({id}) => {
    const {data, loading, error, refetch} = useFetch(()=>fetchStudentRecord(id))
    const [initGrade, setInitGrade] = useState();
    const [updatedGrade, setUpdatedGrade] = useState();
    const [changed, setChanged] = useState(false);
    
    const { mutate, loading: updLoading, error: updError } = useMutation(updateGrade);

    
    return (
    <div>
        <h1>Виставити оцінку</h1>
        <form action="">
            <table>
                <tbody>
                    <tr>
                        <td>
                            Студент:
                        </td>
                        <td>
                            {data.}
                        </td>
                        
                    </tr>
                </tbody>
            </table>
        </form>
    </div>
  )
}

export default UpdateRecordTable