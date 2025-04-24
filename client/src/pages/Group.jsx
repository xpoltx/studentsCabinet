import React, { useCallback, useContext } from 'react'
import { useParams } from 'react-router-dom'; 
import UserHeader from '../components/UserHeader'
import { AppContent } from '../context/AppContext'
import GroupTable from '../components/GroupTable'

const Group = () => {

  const { groupName } = useParams();

  
  return (
    <div>
      <UserHeader />
      <GroupTable groupName={groupName} />
    </div>
  )
}

export default Group