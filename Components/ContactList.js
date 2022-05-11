import React from 'react';
import ContactItem from './ContactItem';
export default function ContactList({ users }) {
  return (
    <div className="cards">
      {users.map((user) => (
        <ContactItem key={user.id} {...user} />
      ))}
    </div>
  );
}
