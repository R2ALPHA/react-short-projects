import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODCTS = [
  {
    id: 'p1',
    price: 6,
    title: 'Alchemsit 1',
    description: 'This is my first book'
  },
  {
    id: 'p2',
    price: 43,
    title: 'Alchemist 2',
    description: 'This is my second book'
  },
  {
    id: 'p3',
    price: 6,
    title: 'Alchemist 3',
    description: 'Another product to look after'
  },
  {
    id: 'p4',
    price: 6,
    title: 'Alchemist',
    description: 'Another super good product to look upon'
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {
          DUMMY_PRODCTS.map((product) => (
            <ProductItem
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              description='This is a first product - amazing!'
            />
          ))
        }
      </ul>
    </section>
  );
};

export default Products;
