import './App.scss';

function App() {
  const name = 'Easy Front End';
  const age = 18;
  const isMale = true;
  const studentA = {
    name: 'Hau',
    age: 18,
  };

  const showStudent = true;

  const studentList = [
    {
      id: 1,
      name: 'Hau',
      age: 18,
    },

    {
      id: 2,
      name: 'Hoang',
      age: 81,
    },
  ];

  const colorList = ['green', 'blue', 'red'];

  return (
    <section className="app">
      <h1>hello {name}</h1>
      <p>12</p>
      <p>Age: {age + 2}</p>
      <p>Is Male: {isMale ? 'yes' : 'no'}</p>
      <p>
        Render Null/Undefined: {null} {undefined}
      </p>

      {showStudent && (
        <>
          <h2>Student</h2>
          <p>Name: {studentA.name}</p>
          <p>Age: {studentA.age}</p>
        </>
      )}

      {!showStudent && <p>Don&apos;t show student</p>}

      {true && <p>render</p>}
      {false && <p>not render</p>}

      {true && <p>render</p>}
      {false && <p>not render</p>}
      {null && <p>not render</p>}
      {undefined && <p>not render</p>}
      {!!0 && <p>not render</p>}
      {!!123 && <p>not render</p>}
      {!!'' && <p>not render</p>}
      {!!'hello' && <p>not render</p>}

      <ul className="student-list">
        {studentList.map((student) => (
          <li key={student.id}>
            <p>Name: {student.name}</p>
            <p>Age: {student.age}</p>
          </li>
        ))}
      </ul>

      <h2>Color List</h2>
      <ul className="color-list">
        {colorList.map((color, index) => (
          <li key={index} style={{ color }}>
            <p>Color is: {color}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default App;
