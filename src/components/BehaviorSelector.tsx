"use client";

import { useEffect } from "react";
import { useBehaviorStore } from "../hooks";
import { Form } from "react-bootstrap";

function BehaviorSelector(props) {
  const { selected, onSelectionChange, ...rest } = props;
  const { behaviors, getAllBehaviors } = useBehaviorStore();

  useEffect(() => {
    if (!behaviors?.length) {
      getAllBehaviors(process.env.NEXT_PUBLIC_BASE_URL);
    } else {
    }
  }, []);
  function renderListItem(behavior) {
    return <option value={behavior.id}> {behavior.behavior_name} </option>;
  }
  return (
    <Form.Select
      aria-label="Select a behavior."
      value={selected}
      onChange={({ target }) => {
        onSelectionChange(target.value);
      }}
    >
      <option value="">Select a behavior.</option>
      {behaviors?.length &&
        behaviors?.length > 0 &&
        Object.values(behaviors).map((x) => renderListItem(x))}
    </Form.Select>
  );
}

export default BehaviorSelector;
