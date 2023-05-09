import Card from "react-bootstrap/Card";
import LoginForm from "../components/LoginForm";

function App() {
  return (
    <div
      style={{
        paddingTop: "150px",
        paddingLeft: "30px",
        paddingRight: "30px",
        backgroundColor: "#000",
        height: "100vh",
      }}
    >
      <Card className="text-center" border="warning">
        <Card.Header>Login</Card.Header>
        <Card.Body>
          <LoginForm />
        </Card.Body>
        <Card.Footer className="text-muted"></Card.Footer>
      </Card>
    </div>
  );
}

export default App;
