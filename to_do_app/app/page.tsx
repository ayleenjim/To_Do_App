import Image from "next/image";
import styles from "./page.module.css";
// testing bootstrap
import { Button } from 'react-bootstrap';
import TodoList from "./components/toDoList";
import BasicExample from "./components/navbar";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <BasicExample />
        <h1>Hello from Ayleen</h1>
        <TodoList />
        <Button variant="primary">Click me! (I do nothing :p)</Button>
      </main>
    </div>
  );
}