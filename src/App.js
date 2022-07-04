import { useEffect, useState } from "react";
import data from "../src/data";
import Categories from "./components/Categories";
import Menu from "./components/Menu";

const newCategories = ["all", ...new Set(data.map((item) => item.category))];

const App = () => {
  const [menuData, setMenuData] = useState(data);
  const [categories, setCategoris] = useState(newCategories);

  useEffect(() => {
    setCategoris(categories);
  }, [categories]);

  const findAnyFoods = (anyFoodItems) => {
    if (anyFoodItems === "all") {
      const resutl = setMenuData(data);
      return resutl;
    } else {
      const newItems = data.filter((item) => item.category === anyFoodItems);
      const filteredResult = setMenuData(newItems);
      return filteredResult;
    }
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} findAnyFoods={findAnyFoods} />
        <Menu items={menuData} />
      </section>
    </main>
  );
};

export default App;
