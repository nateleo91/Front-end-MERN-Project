import React, { useState } from "react";
import { Table, Button, Form } from "react-bootstrap";

const MealTable = () => {
  const [breakfast, setBreakfast] = useState([]);
  const [lunch, setLunch] = useState([]);
  const [dinner, setDinner] = useState([]);
  const [newFood, setNewFood] = useState("");
  

  