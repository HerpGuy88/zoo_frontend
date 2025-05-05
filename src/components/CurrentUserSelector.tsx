"use client";

import { useEffect } from "react";
import { useUserStore } from "../hooks";
import { Form } from "react-bootstrap";

function CurrentUserSelector(props) {
  const { selected, onSelectionChange, ...rest } = props;
  const { users, getAllUsers } = useUserStore();

  useEffect(() => {
    if (!users?.length) {
      getAllUsers(process.env.NEXT_PUBLIC_BASE_URL);
    } else {
    }
  }, []);
  function renderListItem(user) {
    return <option value={user.id}>{user.display_name}</option>;
  }
  return (
    <Form.Select
      aria-label="Select your name to login"
      value={selected}
      onChange={({ target }) => {
        onSelectionChange(target.value);
      }}
    >
      <option value="">Select a user.</option>
      {users?.length &&
        users?.length > 0 &&
        Object.values(users).map((x) => renderListItem(x))}
    </Form.Select>
  );
}

export default CurrentUserSelector;
