import React, {useState} from 'react'

const tableMenuList = [
  {
    category_dishes: [{dish_name: 'Spinach Salad', dish_calories: 15}],
    menu_category: 'Salad',
  },
  {
    category_dishes: [{dish_name: 'Bourbon Salad', dish_calories: 120}],
    menu_category: 'vegitable',
  },
  {
    category_dishes: [{dish_name: 'pizza', dish_calories: 70}],
    menu_category: 'non veg',
  },
  {
    category_dishes: [{dish_name: 'burger', dish_calories: 50}],
    menu_category: 'starters',
  },
  {
    category_dishes: [{dish_name: 'biryani', dish_calories: 40}],
    menu_category: 'halva',
  },
]

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null)

  const handleCategoryClick = category => {
    setSelectedCategory(category)
  }

  return (
    <div style={{padding: '20px'}}>
      <h1>Menu</h1>
      <div>
        {tableMenuList.map((item, index) => (
          <a
            key={index}
            onClick={() => handleCategoryClick(item.menu_category)}
            style={{
              margin: '10px',
              padding: '10px',
              cursor: 'pointer',
            }}
          >
            {item.menu_category}
          </a>
        ))}
      </div>
      <div>
        {selectedCategory && (
          <>
            {tableMenuList
              .find(item => item.menu_category === selectedCategory)
              .category_dishes.map((dish, index) => (
                <div key={index} style={{margin: '10px 0'}}>
                  <p>
                    <strong>{dish.dish_name}</strong> - {dish.dish_calories}
                    calories
                  </p>
                </div>
              ))}
          </>
        )}
      </div>
    </div>
  )
}

export default App
