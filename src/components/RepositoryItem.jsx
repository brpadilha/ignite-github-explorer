import React from 'react';


export function RepositoryItem(props) {
  return (
    <ul>
        <li>
          <strong>{props.repository.name ?? 'Default'}</strong>
          <p>{props.repository.description}</p>
          <a href={props.repository.link}>Acessar repositório</a>
        </li>
      </ul>
  );
}
