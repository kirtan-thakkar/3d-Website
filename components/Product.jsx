const Product = () => {
  return (
    <section id="product-viewer">
      <h2>Take closer look</h2>
      <div className="controls">
        <p className="info">MacbookPro 16" in Silver / Space Black</p>
        <div className="flex-center mt-5 gap-4">
          <div className="color-control">
            <div className="bg-neutral-300"></div>
            <div className="bg-neutral-900"></div>
          </div>
          <div className="size-control">
            <div>
              <p>14"</p>
            </div>
            <div>
              <p>16"</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Product;
