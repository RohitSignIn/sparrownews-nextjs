import React from "react";

function AddPostForm() {
  return (
    <div className='w-full'>
      {/* TITLE STARTS */}
      <div className='m-4'>
        <label className='block text-sm' htmlFor='title'>
          Title
        </label>
        <input
          className='p-2 my-1 outline-none w-full'
          type='text'
          name='title'
          id='title'
          placeholder='Enter Title'
        />
      </div>
      {/* TITLE ENDS */}

      {/* CATEGORY STARTS  */}
      <div className='mx-4'>
        <label className='block text-sm' htmlFor='category'>
          Category
        </label>
        <select
          className='p-2 my-1 outline-none w-full'
          name='category'
          id='category'
        >
          <option value='news'>news</option>
          <option value='entertainment'>entertainment</option>
          <option value='politics'>politics</option>
          <option value='sports'>sports</option>
          <option value='articles'>articles</option>
        </select>
      </div>
      {/* CATEGORY ENDS  */}

      {/* SLUG STARTS */}
      <div className='m-4'>
        <label className='block text-sm' htmlFor='slug'>
          Slug
        </label>
        <input
          className='p-2 my-1 outline-none w-full'
          type='text'
          name='slug'
          id='slug'
          placeholder='Enter Slug'
        />
      </div>
      {/* SLUG ENDS */}

      {/* KEYWORDS STARTS */}
      <div className='m-4'>
        <label className='block text-sm' htmlFor='keywords'>
          Keywords
        </label>
        <textarea
          name='keywords'
          id='keywords'
          className='p-2 my-1 outline-none w-full h-[4rem]'
          placeholder='Enter Keywords Comma(,) Separated'
        ></textarea>
      </div>
      {/* KEYWORDS ENDS */}

      {/* DESCRIPTION STARTS */}
      <div className='m-4'>
        <label className='block text-sm' htmlFor='keywords'>
          Keywords
        </label>
        <textarea
          name='keywords'
          id='keywords'
          className='p-2 my-1 outline-none w-full h-[5rem]'
          placeholder='Enter small post description (summary)'
        ></textarea>
      </div>
      {/* DESCRIPTION ENDS */}
    </div>
  );
}

export default AddPostForm;
