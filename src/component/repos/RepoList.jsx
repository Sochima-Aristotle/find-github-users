import React from 'react'

import RepoItem from './RepoItem'

function RepoList({repos}) {
   
  return (
    <div className='rounded-lg shadow-lg bg-base-100'>
        <h2 className="text-3xl my-4 font-bold card-title">
            Top Repositories
        </h2>
        
       {repos.map((repo)=>(
           <RepoItem key={repo.id} repo={repo} />
       ))}
    </div>
  )
}

export default RepoList