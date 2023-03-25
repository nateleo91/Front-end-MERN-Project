import React, { useState } from "react";
import { Table, Button, Form } from "react-bootstrap";

const MealTable = () => {
  const [breakfast, setBreakfast] = useState([]);
  const [lunch, setLunch] = useState([]);
  const [dinner, setDinner] = useState([]);
  const [newFood, setNewFood] = useState("");

  const handleAddFood = (meal) => {
    if (newFood.trim() === "") return;
    switch (meal) {
      case "breakfast":
        setBreakfast([...breakfast, newFood]);
        break;
      case "lunch":
        setLunch([...lunch, newFood]);
        break;
      case "dinner":
        setDinner([...dinner, newFood]);
        break;
      default:
        break;
    }
    setNewFood("");
  };

  return (
    <div>
      <h2>My Meal Table</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Meal</th>
            <th>Food</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Breakfast</td>
            <td>
              {breakfast.map((food, index) => (
                <div key={index}>{food}</div>
              ))}
              <Form>
                <Form.Control
                  type="text"
                  placeholder="Add food"
                  value={newFood}
                  onChange={(e) => setNewFood(e.target.value)}
                />
              </Form>
              <Button
                variant="primary"
                onClick={() => handleAddFood("breakfast")}
              >
                Add
              </Button>
            </td>
          </tr>
          <tr>
            <td>Lunch</td>
            <td>
              {lunch.map((food, index) => (
                <div key={index}>{food}</div>
              ))}
              <Form>
                <Form.Control
                  type="text"
                  placeholder="Add food"
                  value={newFood}
                  onChange={(e) => setNewFood(e.target.value)}
                />
              </Form>
              <Button
                variant="primary"
                onClick={() => handleAddFood("lunch")}
              >
                Add
              </Button>
            </td>
          </tr>
          <tr>
            <td>Dinner</td>
            <td>
              {dinner.map((food, index) => (
                <div key={index}>{food}</div>
              ))}
              <Form>
                <Form.Control
                  type="text"
                  placeholder="Add food"
                  value={newFood}
                  onChange={(e) => setNewFood(e.target.value)}
                />
              </Form>
              <Button
                variant="primary"
                onClick={() => handleAddFood("dinner")}
              >
                Add
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default MealTable;
