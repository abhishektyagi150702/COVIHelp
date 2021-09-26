import React from "react";

export default function GetHelpModal() {
  return (
    <>
      {/* <!-- Button trigger modal --> */}

      <button
        type="button"
        className="btn theme-bg-btn m-1 h-100 "
        data-bs-toggle="modal"
        data-bs-target="#getHelp"
      >
        Get Help
      </button>
      <div
        class="modal fade"
        id="getHelp"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            
              <h5 class="modal-title m-auto" id="exampleModalLabel">
              Help us serve you better 1
              </h5>
              
            
            <div class="modal-body">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos ducimus delectus sequi quia laborum? Natus illo magni architecto nisi, inventore, dicta asperiores distinctio temporibus, reprehenderit dolore ipsum laboriosam veritatis quasi.
            Unde nam iste exercitationem autem, error accusantium deserunt consequatur, expedita adipisci facere nisi a voluptates aliquam eaque voluptatibus minus. Doloribus illum eos fuga eaque dolore minima fugit iure dolorem culpa.
            </div>
          </div>
        </div>
        
      </div>
      
 
      <button
        tyep="button"
        className="btn theme-bg-btn  m-1"
        data-bs-toggle="modal"
        data-bs-target="#giveHelp"
      >
        Give Help
      </button>
      {/* <!-- Modal --> */}
      <div
        class="modal fade"
        id="giveHelp"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content theme-modal-bg">
            
              <h3 class="modal-title mx-auto p-3" id="exampleModalLabel">
              Bring helping hands
              </h3>
              
              <div class="modal-body">
              
              <div className="d-flex flex-column">
              <button className="my-2 mx-auto w-75 border-0 modal-give-btn rounded p-1" >Donate Now</button>
              <button  className="my-2 mx-auto w-75 border-0 modal-give-btn rounded p-1">Give Food</button>
                <button  className="my-2 mx-auto w-75 border-0 modal-give-btn rounded p-1">Give Blood</button>
                <button  className="my-2 mx-auto w-75 border-0 modal-give-btn rounded p-1">Give Oxygen</button>
                <button  className="my-2 mx-auto w-75 border-0 modal-give-btn rounded p-1">Give Fellowship</button>
                <button  className="my-2 mx-auto w-75 border-0 modal-give-btn rounded p-1">Give Scholarship</button>
                <button  className="my-2 mx-auto w-75 border-0 modal-give-btn rounded p-1">Give Job</button>
              </div>
            </div>
          </div>
        </div>
        
      </div>
     
     
    </>
  );
}
