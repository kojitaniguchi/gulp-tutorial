import React from 'react';

const Html = (props) => {
    return (
      <html>
        <head>
          <meta charset="utf-8" />
          <title>redux sample</title>
          <link rel="manifest" href="./manifest.json" />
        </head>
        <body>
          <div className="content" dangerouslySetInnerHTML={ {__html: props.markup} }></div>
          <script src="./javascript/bundle.js" />
        </body>
      </html>
    )
}

export default Html
