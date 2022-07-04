const Categories = ({ categories, findAnyFoods }) => {
  return (
    <div>
      <div className="btn-container">
        {categories.map((category, index) => (
          <button
            type="button"
            className="filter-btn"
            key={index}
            onClick={() => findAnyFoods(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Categories;
