import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  decrementByValue,
  increment,
  incrementByValue,
  reset,
} from "../redux/counterConfig/counter.action";

const CounterPage = () => {
  const { count } = useSelector((state: any) => state.counterState);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <Card className="text-center">
        <Card.Header className="text-dark">Redux Counter Example</Card.Header>
        <Card.Body>
          <Card.Title className="text-dark">Count</Card.Title>
          <Card.Text className="text-dark">{count}</Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted gap-2">
          <Button
            variant="danger"
            className="me-1"
            onClick={() => dispatch(decrementByValue(5))}
          >
            - 5
          </Button>
          <Button
            variant="danger"
            className="me-1"
            onClick={() => dispatch(decrement())}
          >
            - 1
          </Button>
          <Button
            variant="secondary"
            className="me-1"
            onClick={() => dispatch(reset())}
          >
            Reset
          </Button>
          <Button
            variant="success"
            className="me-1"
            onClick={() => dispatch(increment())}
          >
            + 1
          </Button>
          <Button
            variant="success"
            onClick={() => dispatch(incrementByValue(5))}
          >
            + 5
          </Button>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default CounterPage;
