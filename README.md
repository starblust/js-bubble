# js-bubble
<h1>JS-Bubble</h1>
<p><b>Popup helper</b>. Light, minimal version.</p>
<h3>Changes</h3>
<ul>
<li> + callbacks events(show, hide)
<li> + option to set a classname for active bubble box
</ul>
<h3>Options</h3>
<pre>
    <code>
    close: '.popup_close', // close button
    background: ''         // background element
    box: '',               // html element of popup container 
    position: 'center',    // position of container
    trigger: '',           // trigger element
    clOutsideClose: true,  // close popup IF click outside of container
    shownClass: 'shown',   // classname for active bubble box
    onBeforeShow: null,    // callback(bubbleObject) before show
    onAfterShow: null,     // callback(bubbleObject) after show
    onBeforeHide: null,    // callback(bubbleObject) before hide
    onAfterHide: null      // callback(bubbleObject) after hide
    </code>
</pre>