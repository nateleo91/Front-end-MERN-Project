import React from 'react';

function MealTable() {
  return (
    <table>
      <thead>
        <tr>
          <th>Meal</th>
          <th>Calories (kcal)</th>
          <th>Carbs (g)</th>
          <th>Fat (g)</th>
          <th>Protein (g)</th>
          <th>Sodium (mg)</th>
          <th>Sugar (g)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Breakfast</td>
          <td>600</td>
          <td>30</td>
          <td>20</td>
          <td>40</td>
          <td>800</td>
          <td>10</td>
        </tr>
        <tr>
          <td>Lunch</td>
          <td>800</td>
          <td>50</td>
          <td>30</td>
          <td>60</td>
          <td>1200</td>
          <td>15</td>
        </tr>
        <tr>
          <td>Dinner</td>
          <td>1000</td>
          <td>70</td>
          <td>40</td>
          <td>80</td>
          <td>1600</td>
          <td>20</td>
        </tr>
        <tr>
          <td>Snacks</td>
          <td>300</td>
          <td>20</td>
          <td>10</td>
          <td>20</td>
          <td>400</td>
          <td>5</td>
        </tr>
      </tbody>
    </table>
  );
}

export default MealTable;
