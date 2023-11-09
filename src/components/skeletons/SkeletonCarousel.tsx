import React from "react";

function SkeletonCarousel() {
  const carousel = new Array(8).fill(0);
  return (
    <div className='animate-pulse overflow-hidden z-0'>
      <div className='carousel gap-2 rounded-box py-4 mx-4'>
        {carousel.map((val, idx) => {
          return (
            <div key={idx} className='carousel-item'>
              <div className='w-[350px] h-[240px] bg-neutral rounded-md'></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SkeletonCarousel;
