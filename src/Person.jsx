import { useState } from "react";

export default function Person() {
  const [person, setPerson] = useState({
    firstName: "John",
    lastName: "Jefferson",
    age: 100,
  });

  const handleIncreaseAge = () => {
    const newPerson = { ...person, age: person.age + 1 };
    setPerson(newPerson);
  };

  const handleFirstName = (event) => {
    const newPerson = { ...person, firstName: event.target.value };
    setPerson(newPerson);
  };

  const handleLastName = (event) => {
    const newPerson = { ...person, lastName: event.target.value };
    setPerson(newPerson);
  };

  return (
    <>
      <input type="text" value={person.firstName} onChange={handleFirstName} />
      <input type="text" value={person.lastName} onChange={handleLastName} />
      <h1>{person.firstName + " " + person.lastName}</h1>
      <h2>{person.age}</h2>
      <button onClick={handleIncreaseAge}>Increase age</button>
    </>
  );
}
