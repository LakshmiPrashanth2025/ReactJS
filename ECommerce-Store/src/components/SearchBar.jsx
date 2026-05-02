export default function SearchBar({ onSearch }) {
  return (
    <div style={{ padding: "20px" }}>
      <input
        type="text"
        placeholder="Search products..."
        onChange={(e) => onSearch(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          borderRadius: "6px",
          border: "1px solid #ccc",
        }}
      />
    </div>
  );
}