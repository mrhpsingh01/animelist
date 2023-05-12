import Card from "react-bootstrap/Card";
import RegisterForm from "../components/RegisterForm";
import bgImage from "../assets/dope-anime.jpg";

function App() {
  return (
    <div
      style={{
        height: "100vh",
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundPositionX: "right",
        backgroundPositionY: "370px",
        backgroundColor: "black",
      }}
    >
      <div
        style={{
          paddingTop: "100px",
          paddingLeft: "300px",
          paddingRight: "300px",
        }}
      >
        <Card className="text-center" border="warning">
          <Card.Header>Login</Card.Header>
          <Card.Body>
            <RegisterForm />
          </Card.Body>
          <Card.Footer className="text-muted"></Card.Footer>
        </Card>
      </div>
    </div>
  );
}

export default App;
