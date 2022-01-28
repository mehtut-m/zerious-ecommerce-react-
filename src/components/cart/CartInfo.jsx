import React from 'react';

const CartInfo = () => {
  return (
    <>
      <button
        class="btn btn-primary"
        type="button"
        data-mdb-toggle="offcanvas"
        data-mdb-target="#offcanvasRight"
        aria-controls="offcanvasRight"
      >
        Toggle right offcanvas
      </button>

      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div class="offcanvas-header">
          <h5 id="offcanvasRightLabel">Offcanvas right</h5>
          <button
            type="button"
            class="btn-close text-reset"
            data-mdb-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">...</div>
      </div>
    </>
  );
};

export default CartInfo;
