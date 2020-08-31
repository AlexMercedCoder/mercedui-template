import {AMPonent} from 'amponent'

AMPonent.make("my-main", {
    render: (box, props) => '<h1>I am the main</h1>',
    pretty: (box, props) => `h1 {color: ${props.color};}`
  });