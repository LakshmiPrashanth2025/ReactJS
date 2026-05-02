export default function Products({ products }) {
  return (
    <div style={styles.grid}>
      {products.length === 0 ? (
        <p style={{ gridColumn: "1 / -1", textAlign: "center" }}>
          No products found
        </p>
      ) : (
        products.map((product) => (
          <div key={product.id} style={styles.card}>
            <img
              src={
                product.images?.[0] ||
                "https://via.placeholder.com/300"
              }
              alt={product.title}
              style={styles.image}
            />

            <h3 style={styles.title}>{product.title}</h3>

            <p style={styles.price}>₹{product.price}</p>
          </div>
        ))
      )}
    </div>
  );
}

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "20px",
    padding: "20px",
  },
  card: {
    background: "#fff",
    padding: "16px",
    borderRadius: "10px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },
  image: {
    width: "100%",
    height: "160px",
    objectFit: "cover",
    borderRadius: "6px",
  },
  title: {
    marginTop: "10px",
    fontSize: "16px",
    fontWeight: "600",
  },
  price: {
    color: "green",
    fontWeight: "bold",
    marginTop: "5px",
  },
};