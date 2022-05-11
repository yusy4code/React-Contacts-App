import React from 'react';
import Card from './UI/Card';

export default function ContactItem(props) {
  const { img_url, name } = props;
  return (
    <Card>
      <img src={img_url} />
      <div class="card-body">
        <h3 class="user-name">{name}</h3>
        <p class="user-details">Lorem ipsum dolor sit amet, consectetur</p>
      </div>
      <button class="btn">Add to Favorites</button>
    </Card>
  );
}
