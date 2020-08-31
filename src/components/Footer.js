import { AMPonent } from "amponent";

AMPonent.make("my-footer", {
  render: (box, props) =>
    "<h1>I am the footer component</h1><button>Click Me</button>",
  box: {
    color: "green",
  },
  pretty: (box, props) => `h1 {color: ${box.color};}`,
  after: function (box, props) {
    const element = this;
    element.$s("button").addEventListener("click", () => {
      element.stuffBox({ color: "purple" });
    });
  },
});
