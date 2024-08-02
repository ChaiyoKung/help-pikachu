const codeEditor = document.querySelectorAll(".codemirror-textarea")[0];
const frame = document.querySelector("#frame");
const btnStart = document.querySelector("#btn-start");

function render(css) {
  let fullHTML = `<!DOCTYPE html>
  <html>
  
  <head>
    <style>
      ${css}
    </style>
  </head>
  
  <body>
    <div id="image">
      <img src="https://kku.world/vy403" alt="head" id="head">
      <div id="face">
        <div id="eyes">
          <img src="https://kku.world/jd0rp" alt="left eye" id="left-eye">
          <img src="https://kku.world/q11bx" alt="right eye" id="right-eye">
        </div>
        <img src="https://kku.world/q8x3-" alt="nose" id="nose">
        <div id="cheaks">
          <img src="https://kku.world/akmku" alt="left cheak" id="left-cheak">
          <img src="https://kku.world/etmrh" alt="right cheak" id="right-cheak">
        </div>
        <img src="https://kku.world/345p3" alt="mouth" id="mouth">
      </div>
    </div>
  </body>
  
  </html>`;

  frame.src = "data:text/html;charset=utf-8," + encodeURIComponent(fullHTML);
}

// First render
render(codeEditor.value);

// CodeMirror
// Config
CodeMirror.fromTextArea(document.querySelectorAll(".codemirror-textarea")[0], {
  lineNumbers: true,
  // mode: "css",
  theme: "duotone-dark",
  tabSize: 2,
}).on("change", function (e) {
  e.save();
  render(codeEditor.value);
});

btnStart.addEventListener("click", function () {
  window.scrollTo(0, document.body.scrollHeight);
});
