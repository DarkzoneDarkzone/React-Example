import React from 'react';
import Ckeditor from '../../components/ckeditor';
import Navbar from '../../components/layouts/navbar';

function Content() {
  return (
    <React.Fragment>
    <Navbar/>
    <div className="main-content">
      <div>
          <h2>Using CKEditor 5 build in React</h2>
          <Ckeditor/>
      </div>
    </div>
  </React.Fragment>
  )
}

export default Content
