import React from 'react'
import { RepositoryItem } from './RepositoryItem'


const repository = {
  name:'unform',
  description: 'Forms in React',
  link: 'https://github.com/unform/unform'
}

export default function RepositoryList() {
  return (
    <section className="repository-list">
      <RepositoryItem repository={repository}/>
      <RepositoryItem repository={repository}/>
      <RepositoryItem repository={repository}/>
      <RepositoryItem repository={repository}/>

    </section>
  )
}
