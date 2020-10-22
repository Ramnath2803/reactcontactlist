import React from "react";
import Card from "./Component/contact";
import contactList from "./Component/contactList";

function cardDetail(data) {
  return (
    <Card
      key={data.id}
      name={data.name}
      img={data.imgURL}
      phone={data.phone}
      email={data.email}
    />
  );
}

export default function App() {
  return (
    <div className="App">
      <h1>My Contacts</h1>
      {contactList.map(cardDetail)}
    </div>
  );
}
