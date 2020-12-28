import React, { useState } from "react";
import { Typography } from "mdc-react";
import { TodoSteps } from "./todoSteps";
import TextField from "@material-ui/core/TextField";

export const SectionStepTodo = ({ todo, onUpdate }) => {
  const stepId = Math.random().toString(6).substring(6);

  const [step, setStep] = useState("");

  const handleCompleted = (id) => {
    onUpdate(todo.id, {
      steps: todo.steps.map((step) => {
        return step.stepId === id
          ? { ...step, completed: !step.completed }
          : step;
      }),
    });
  };

  const deleteStep = (id) => {
    onUpdate(todo.id, {
      steps: todo.steps.filter((step) => step.stepId !== id),
    });
  };

  const updateTodo = (e) => {
    e.preventDefault();

    onUpdate(todo.id, {
      steps: todo.steps.concat({
        title: step,
        completed: false,
        stepId,
      }),
    });
    setStep("");
  };

  return (
    <section className="todo-steps">
      <Typography variant="subtitle2" noMargin>
        Етапи
      </Typography>
      <TodoSteps
        todo={todo}
        handleChange={handleCompleted}
        deleteStep={deleteStep}
      />
      <form onSubmit={updateTodo}>
        <TextField
          id="standard-basic"
          label="Добавити етап"
          fullWidth
          required
          value={step}
          onChange={(e) => setStep(e.target.value)}
        />
      </form>
    </section>
  );
};
