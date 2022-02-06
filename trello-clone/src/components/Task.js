import '../App.css';

function Task(props) {

  return (
      <div>
          <p>{props.task.text}</p>
          <button onClick={() => (props.nextStatus(props.task.key, props.newStatus))}>Continue</button>
      </div>
  );
}

export default Task;