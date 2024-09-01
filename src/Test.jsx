export function Test() {
  const title = "Title";
  const obj = {
    name: "Jeff",
    age: 12,
  };
  return (
    <>
      <h1>Test {title}</h1>
      <svg>
        <circle cx="25" cy="75" r="20" stroke="green" strokeWidth="2" />
      </svg>
      <form>
        <input
          type="text"
          style={{ backgroundColor: "black", color: "pink" }}
        />
      </form>
      <p>
        {obj.name} is {obj.age} years old. He was born in {2024 - obj.age}
      </p>
    </>
  );
}
