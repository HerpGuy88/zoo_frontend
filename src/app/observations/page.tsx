"use client";
import { ObservationForm } from "@/components";
import { useObservationStore } from "@/hooks";
import { useAuthState } from "@/hooks";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row, Table } from "react-bootstrap";

export default function Home() {
  const { getAllObservations, observations } = useObservationStore();
  const { token } = useAuthState();

  useEffect(() => {
    if (!observations?.length) {
      getAllObservations(process.env.NEXT_PUBLIC_BASE_URL);
    }
  }, []);

  function renderTableItem(obs) {
    const d = new Date(obs.observed_at);
    return (
      <tr>
        <th>{obs.animal_name}</th>
        <th>{obs.behavior.behavior_name}</th>
        <th>{obs?.observer?.display_name}</th>
        <th>
          {d.toLocaleDateString()} {d.toLocaleTimeString()}
        </th>
      </tr>
    );
  }

  return (
    <main>
      <div className="text-center mt-4 col-md-6 mx-auto">
        <Link href="/">
          <Button>Back to Login</Button>
        </Link>
        <h1 className="text-success">Observations</h1>
      </div>
      <div className="text-center">
        <Container>
          <h2> Enter New</h2>
          <ObservationForm />
        </Container>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Animal</th>
            <th>Behavior</th>
            <th>Observed By</th>
            <th>Observed At</th>
          </tr>
        </thead>
        <tbody>
          {observations?.length &&
            observations?.length > 0 &&
            Object.values(observations).map((x) => renderTableItem(x))}
        </tbody>
      </Table>
    </main>
  );
}
