import React from 'react'
import { useParams } from 'react-router-dom';
import UserHeader from '../../components/Common/UserHeader'
import GroupTable from '../../components/Common/GroupTable'
import ReturnButton from '../../components/Common/ReturnButton';

const Group = () => {

  const { groupName } = useParams();

  return (
    <div>
      <UserHeader />
      <ReturnButton />
      <GroupTable groupName={groupName} />
    </div>
  )
}

export default Group