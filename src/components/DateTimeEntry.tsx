import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import DatePicker from "react-datetime";

function DateTimeEntry({ props }) {
  const { startDate, startTime, onChange, dateVal, timeVal, ...rest };
  const [date, setDate] = useState(new Date());
  const [hours, setHours] = useState(0);
  const [minutes, setminutes] = useState(0);

  return (
    <Col>
      <Row>
        <Col>
          <DatePicker />
        </Col>
      </Row>
    </Col>
  );
}
