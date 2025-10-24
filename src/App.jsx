import "./index.css";

function App() {
  const rows = [
    { color: "color-1", availability: 0, price: "£87.07", subtotal: "£0.00" },
    { color: "color-2", availability: 0, price: "£87.18", subtotal: "£0.00" },
    { color: "color-3", availability: 0, price: "£87.18", subtotal: "£0.00" },
    { color: "color-4", availability: 0, price: "£87.18", subtotal: "£0.00" },
    { color: "color-5", availability: 0, price: "£87.18", subtotal: "£0.00" },
    { color: "color-1", availability: 0, price: "£87.07", subtotal: "£0.00" },
    { color: "color-2", availability: 0, price: "£87.18", subtotal: "£0.00" },
    { color: "color-3", availability: 0, price: "£87.18", subtotal: "£0.00" },
    { color: "color-4", availability: 0, price: "£87.18", subtotal: "£0.00" },
    { color: "color-5", availability: 0, price: "£87.18", subtotal: "£0.00" },
  ];

  return (
    <div className="main-container">
      <div className="table-container">
        <table className="styled-table">
          <thead>
            <tr>
              <th>Color</th>
              <th>Availability</th>
              <th>Unit Price</th>
              <th>Subtotal</th>
              <th>Qty</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index}>
                <td>
                  <div className={`color ${row.color}`}></div>
                </td>
                <td>{row.availability}</td>
                <td>
                  <b>{row.price}</b>
                </td>
                <td>{row.subtotal}</td>
                <td>
                  <input type="number" className="qty-input" defaultValue="0" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
