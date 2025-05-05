import { BehaviorSelector } from "@/components";
import { useObservationStore } from "@/hooks";
import { useAuthState } from "@/hooks";
import { useBehaviorStore } from "@/hooks";
import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row, Table } from "react-bootstrap";

function ObservationForm() {
  const { behaviors } = useBehaviorStore();
  const { submitObservation } = useObservationStore();
  const [validated, setValidated] = useState(false);
  const [animal, setAnimal] = useState("");
  const [behavior, setBehavior] = useState("");

  const validate = function () {
    console.log(animal?.length && animal?.length > 1);
    console.log(
      Object.values(behaviors).filter((x) => String(x.id) === String(behavior))
    );
    if (
      animal?.length &&
      animal?.length > 1 &&
      Object.values(behaviors).filter((x) => String(x.id) === String(behavior))
        .length === 1
    ) {
      setValidated(true);
    } else {
      setValidated(false);
    }
  };

  useEffect(() => {
    validate();
  }, [behavior, animal]);

  const handleSubmit = () => {
    console.log("hi");
    submitObservation(process.env.NEXT_PUBLIC_BASE_URL, {
      behavior_id: behavior,
      animal_name: animal,
    });
  };

  return (
    <Form noValidate validated={validated}>
      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label>Animal Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Sparky"
            value={animal}
            onChange={({ target }) => setAnimal(target.value)}
          />
        </Form.Group>
        <Col>
          <Form.Label>Behavior</Form.Label>
          <BehaviorSelector
            selected={behavior}
            onSelectionChange={setBehavior}
          />
        </Col>
        <Col>
          <Form.Label>{"  "} </Form.Label>
          <Button disabled={!validated} onClick={handleSubmit}>
            Submit
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default ObservationForm;
