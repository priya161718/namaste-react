
/**
 * nested if in html
 * <div id="parents">
 *  <div id="child1">
 * <h1>I'm a h1 tag</h1>
 * <h2>I'm a h2 tag</h2>
 *  </div> 
 * <div id="child2">
 * <h1>I'm a h1 tag</h1>
 * <h2>I'm a h2 tag</h2>
 *  </div>  
 * </div>
 */
/**nested if using react */
const parent =React.createElement("div",{id:"parent"},
    [React.createElement("div",{id:"child"},
        [React.createElement("h1",{},"I'm an h1 tag"),
        React.createElement("h2",{},"I'm an h2 tag")
        ]),
        React.createElement("div",{id:"child"},
        [React.createElement("h1",{},"I'm an h1 tag"),
        React.createElement("h2",{},"I'm an h2 tag")
        ])
    ]);

console.log(parent);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);



