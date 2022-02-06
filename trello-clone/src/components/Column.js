import '../App.css';
import Task from './Task.js';

function Column(props) {

  return (
      <div className="column">
        <p>{props.filter}</p>
        {props.tasks.filter((task) => (task.category === props.filter)).map((task) => ( <Task task={task} newStatus={props.newStatus} nextStatus={props.nextStatus} />)
        )}
      </div>
  );
}

export default Column;
