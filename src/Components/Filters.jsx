

const Filters = () => {
  return (
    <aside className="w-1/4 pr-4">
      <div className="border-b pb-4 mb-4">
        <h4 className="font-bold">Product Brand</h4>
        <ul>
          <li>Nike</li>
          <li>Adidas</li>
          <li>Puma</li>
        </ul>
      </div>
      <div className="border-b pb-4 mb-4">
        <h4 className="font-bold">Discount Offer</h4>
        <ul>
          <li>10% off</li>
          <li>20% off</li>
        </ul>
      </div>
      <div className="border-b pb-4 mb-4">
        <h4 className="font-bold">Rating</h4>
        <ul>
          <li>4 stars</li>
          <li>5 stars</li>
        </ul>
      </div>
      {/* Add more filters */}
    </aside>
  );
};

export default Filters;
