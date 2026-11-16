import CardPizza from "./CardPizza";
import Header from "./Header";

// Datos locales usados para construir las tres tarjetas del Hito 1.
const pizzas = [
  {
    name: "Napolitana",
    price: 5950,
    ingredients: ["mozzarella", "tomates", "jamón", "orégano"],
    img: `${import.meta.env.BASE_URL}images/napolitana.svg`,
  },
  {
    name: "Española",
    price: 6950,
    ingredients: ["mozzarella", "gorgonzola", "parmesano", "provolone"],
    img: `${import.meta.env.BASE_URL}images/espanola.svg`,
  },
  {
    name: "Pepperoni",
    price: 6950,
    ingredients: ["mozzarella", "pepperoni", "orégano"],
    img: `${import.meta.env.BASE_URL}images/pepperoni.svg`,
  },
];

function Home() {
  return (
    <>
      <Header />
      <section className="menu" aria-labelledby="menu-title">
        <div className="section-heading">
          <span>Nuestro menú</span>
          <h2 id="menu-title">Elige tu favorita</h2>
          <p>Tres clásicos preparados con ingredientes seleccionados.</p>
        </div>

        <div className="pizza-grid">
          {pizzas.map((pizza) => (
            <CardPizza key={pizza.name} {...pizza} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
