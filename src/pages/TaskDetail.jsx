import React from "react";
import { useParams } from "react-router";

const TaskDetail = () => {
  const param = useParams();

  const [taskInfo, setTaskInfo] = React.useState({});

  React.useEffect(() => {
    fetch(`http://localhost:3000/tasks/${param.taskId}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setTaskInfo(data);
      });

    return () => {};
  }, []);

  console.log(param);
  return (
    <div>
      TaskDetail <h1>title: {taskInfo?.title || ""}</h1>
    </div>
  );
};

export default TaskDetail;
