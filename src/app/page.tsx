"use client";
import { UserSelector } from "@/components";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/hooks";
import { useAuthState } from "@/hooks";
import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

export default function Home() {
  const router = useRouter();
  const { setCurrentUser } = useUserStore();
  const { token, login } = useAuthState();
  const [selected, setSelected] = useState("");
  return (
    <main>
      <div className="text-center mt-4 col-md-6 mx-auto">
        <h1 className="text-success">Welcome to the behavioral notes app!</h1>
        <p>
          Please select your name from the dropdown and click the button to log
          in.
        </p>
        <Container>
          <Row>
            <Col xs={9}>
              <UserSelector
                selected={selected}
                onSelectionChange={(newVal) => {
                  console.log("selected", newVal);
                  setSelected(newVal);
                }}
              />
            </Col>
            <Col sx={3}>
              <Button
                disabled={selected === ""}
                size="lg"
                onClick={() => {
                  login(selected);
                  router.push("/observations");
                }}
              >
                Login
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </main>
  );
}
