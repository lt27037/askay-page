import React from 'react';

import '../styles/Button.scss';

const Button = ({ content, click, title = content }) => (
  <button
    className="button"
    type="button"
    onClick={click}
    title={title}
  >
    {content}

  </button>
);

export default Button;
