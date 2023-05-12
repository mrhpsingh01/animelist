import React, { useRef, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import intlTelInput from "intl-tel-input";

function RegisterForm() {
  const navigate = useNavigate();
  const phoneInputRef = useRef(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("male");
  const [age, setAge] = useState(18);
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    const iti = intlTelInput(phoneInputRef.current);
    iti.setCountry("us");
    iti.setNumber("+12125552368");
    iti.setPlaceholderNumberType("FIXED_LINE");

    phoneInputRef.current.addEventListener("countrychange", () => {
      const selectedCountryData = iti.getSelectedCountryData();
      setCountry(selectedCountryData.name);
    });
  }, []);

  async function registerUser(event) {
    event.preventDefault();
    console.log(name, email, password, gender, age, phone, country);
    const response = await fetch("http://localhost:1337/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        gender,
        age,
        phone,
        country,
        password,
      }),
    });

    const data = await response.json();

    if (data.status === "ok") {
      alert("Registration successful");
      navigate("/login");
    } else {
      alert(data.error);
    }
  }

  const handleRangeChange = (event) => {
    console.log(event.target.value);
    setAge(event.target.value);
  };

  return (
    <Form onSubmit={registerUser}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="name"
          placeholder="Enter your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group key={"inline-radio"} className="mb-3">
        <Form.Check
          inline
          label="male"
          name="gender"
          type="radio"
          value="male"
          onChange={(e) => setGender(e.target.value)}
          id={"inline-radio-1"}
          required
        />
        <Form.Check
          inline
          label="female"
          name="gender"
          type="radio"
          value="female"
          onChange={(e) => setGender(e.target.value)}
          id={"inline-radio-2"}
          required
        />
        <Form.Check
          inline
          label="others"
          name="gender"
          type="radio"
          value="others"
          onChange={(e) => setGender(e.target.value)}
          id={"inline-radio-3"}
          required
        />
      </Form.Group>
      <Form.Group>
        Age
        <Form.Range
          value={age}
          onChange={handleRangeChange}
          min={0}
          max={90}
          step={1}
        />
        <Form.Label>{age}</Form.Label>
      </Form.Group>
      <Form.Control
        type="tel"
        ref={phoneInputRef}
        onChange={(e) => setPhone(e.target.value)}
      />

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Form.Text className="text-muted">
          A Valid Password must contain one lowercase, one uppercase, one digit
          & Minimum length of 8 characters.
        </Form.Text>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <div>
        Already have an account <Link to="/login">Login</Link>{" "}
      </div>
    </Form>
  );
}

export default RegisterForm;
