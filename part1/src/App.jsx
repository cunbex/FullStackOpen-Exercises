const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Part = (props) => {
  return (
    <p>
      {props.part}
      {props.exercises}
    </p>
  );
};

const Content = (props) => {
  return (
    <>
      <Part part={props.parts[0].part} exercises={props.parts[0].exercise} />
      <Part part={props.parts[1].part} exercises={props.parts[1].exercise} />
      <Part part={props.parts[2].part} exercises={props.parts[2].exercise} />
    </>
  );
};

const Total = (props) => {
  return (
    <p>
      Number of exercises{" "}
      {props.exercises[0] + props.exercises[1] + props.exercises[2]}
    </p>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const parts = [
    {
      part: "Fundamentals of React",
      exercise: 10,
    },
    { part: "Using props to pass data", exercise: 7 },
    { part: "State of a component", exercise: 14 },
  ];

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total exercises={parts.map((x) => x["exercise"])} />
    </div>
  );
};

export default App;
