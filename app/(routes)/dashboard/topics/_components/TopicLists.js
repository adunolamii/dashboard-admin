import React from 'react'
import CreateTopics from './CreateTopics'

const TopicLists = () => {
  return (
    <div className=' mt-7'>
        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                <CreateTopics/>
    </div>
    </div>
  )
}

export default TopicLists