import React from 'react';
import ContactList from '../Components/ContactList';
import Layout from '../Components/UI/Layout';

const USER_DATA = [
  {
    id: 1,
    name: 'John David',
    img_url: 'https://randomuser.me/api/portraits/men/70.jpg',
  },
  {
    id: 2,
    name: 'David Miller',
    img_url: 'https://randomuser.me/api/portraits/men/71.jpg',
  },
  {
    id: 3,
    name: 'Michel Baven',
    img_url: 'https://randomuser.me/api/portraits/men/72.jpg',
  },
  {
    id: 4,
    name: 'John David',
    img_url: 'https://randomuser.me/api/portraits/men/70.jpg',
  },
  {
    id: 5,
    name: 'David Miller',
    img_url: 'https://randomuser.me/api/portraits/men/71.jpg',
  },
  {
    id: 6,
    name: 'Michel Baven',
    img_url: 'https://randomuser.me/api/portraits/men/72.jpg',
  },
];
export default function AllContacts() {
  return (
    <Layout>
      <h2 class="contact-header">All Contacts</h2>
      <ContactList users={USER_DATA} />
    </Layout>
  );
}
