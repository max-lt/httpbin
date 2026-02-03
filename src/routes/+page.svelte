<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>httpbin.workers.rocks</title>
</head>
<body>
  <h1>🌐 httpbin.workers.rocks</h1>
  <p>A simple HTTP Request & Response Service, powered by <a href="https://openworkers.com">OpenWorkers</a>.</p>

  <h2>HTTP Methods</h2>
  <ul>
    <li><span class="method get">GET</span> <a href="/get" class="endpoint">/get</a> - Returns GET data</li>
    <li><span class="method post">POST</span> <span class="endpoint">/post</span> - Returns POST data</li>
    <li><span class="method put">PUT</span> <span class="endpoint">/put</span> - Returns PUT data</li>
    <li><span class="method delete">DELETE</span> <span class="endpoint">/delete</span> - Returns DELETE data</li>
    <li><span class="method patch">PATCH</span> <span class="endpoint">/patch</span> - Returns PATCH data</li>
    <li><span class="method">ANY</span> <a href="/anything" class="endpoint">/anything</a> - Returns anything</li>
  </ul>

  <h2>Request Inspection</h2>
  <ul>
    <li><span class="method get">GET</span> <a href="/headers" class="endpoint">/headers</a> - Request headers</li>
    <li><span class="method get">GET</span> <a href="/ip" class="endpoint">/ip</a> - Origin IP</li>
    <li><span class="method get">GET</span> <a href="/user-agent" class="endpoint">/user-agent</a> - User agent</li>
  </ul>

  <h2>Response Formats</h2>
  <ul>
    <li><span class="method get">GET</span> <a href="/html" class="endpoint">/html</a> - HTML response</li>
    <li><span class="method get">GET</span> <a href="/json" class="endpoint">/json</a> - JSON response</li>
    <li><span class="method get">GET</span> <a href="/xml" class="endpoint">/xml</a> - XML response</li>
    <li><span class="method get">GET</span> <a href="/encoding/utf8" class="endpoint">/encoding/utf8</a> - UTF-8 sample</li>
  </ul>

  <h2>Dynamic Data</h2>
  <ul>
    <li><span class="method get">GET</span> <a href="/bytes/1024" class="endpoint">/bytes/:n</a> - Random bytes</li>
    <li><span class="method get">GET</span> <a href="/stream/5" class="endpoint">/stream/:n</a> - Stream n chunks</li>
    <li><span class="method get">GET</span> <a href="/drip/10/2/0/200" class="endpoint">/drip/:bytes/:duration/:delay/:code</a> - Drip data</li>
    <li><span class="method get">GET</span> <a href="/range/1024" class="endpoint">/range/:n</a> - Range requests</li>
    <li><span class="method get">GET</span> <a href="/uuid" class="endpoint">/uuid</a> - Random UUID</li>
    <li><span class="method get">GET</span> <a href="/base64/SGVsbG8gV29ybGQh" class="endpoint">/base64/:data</a> - Decode base64</li>
  </ul>

  <h2>Status Codes</h2>
  <ul>
    <li><span class="method get">GET</span> <a href="/status/200" class="endpoint">/status/:code</a> - Return status</li>
    <li><span class="method get">GET</span> <a href="/status/418/I'm%20a%20teapot" class="endpoint">/status/:code/:reason</a> - Custom reason</li>
  </ul>

  <h2>Redirects</h2>
  <ul>
    <li><span class="method get">GET</span> <a href="/redirect/3" class="endpoint">/redirect/:n</a> - Redirect n times</li>
    <li><span class="method get">GET</span> <span class="endpoint">/redirect-to?url=...</span> - Redirect to URL</li>
    <li><span class="method get">GET</span> <a href="/absolute-redirect/3" class="endpoint">/absolute-redirect/:n</a> - Absolute redirects</li>
    <li><span class="method get">GET</span> <a href="/relative-redirect/3" class="endpoint">/relative-redirect/:n</a> - Relative redirects</li>
  </ul>

  <h2>Delays</h2>
  <ul>
    <li><span class="method get">GET</span> <a href="/delay/1" class="endpoint">/delay/:n</a> - Delay n seconds (max 10)</li>
  </ul>

  <h2>Auth</h2>
  <ul>
    <li><span class="method get">GET</span> <span class="endpoint">/basic-auth/:user/:pass</span> - Basic auth</li>
    <li><span class="method get">GET</span> <span class="endpoint">/bearer</span> - Bearer token</li>
  </ul>

  <h2>Cookies</h2>
  <ul>
    <li><span class="method get">GET</span> <a href="/cookies" class="endpoint">/cookies</a> - Get cookies</li>
    <li><span class="method get">GET</span> <span class="endpoint">/cookies/set?name=value</span> - Set cookies</li>
    <li><span class="method get">GET</span> <span class="endpoint">/cookies/delete?name</span> - Delete cookies</li>
  </ul>

  <footer style="margin-top: 3rem; padding-top: 1rem; border-top: 1px solid #ccc; color: #666;">
    <p>Built with ❤️ using <a href="https://openworkers.com">OpenWorkers</a></p>
  </footer>
</body>
</html>

<style>
  :global(body) {
    font-family: system-ui, sans-serif;
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
    line-height: 1.6;
  }

  :global(:root) {
    color-scheme: light dark;
  }

  h1 {
    border-bottom: 2px solid currentColor;
    padding-bottom: 0.5rem;
  }

  h2 {
    margin-top: 2rem;
    color: #666;
  }

  :global(code) {
    background: #f4f4f4;
    padding: 0.2rem 0.4rem;
    border-radius: 4px;
  }

  @media (prefers-color-scheme: dark) {
    :global(code) {
      background: #333;
    }

    h2 {
      color: #aaa;
    }
  }

  a {
    color: #0066cc;
  }

  ul {
    list-style: none;
    padding-left: 0;
  }

  li {
    margin: 0.5rem 0;
  }

  .endpoint {
    font-family: monospace;
  }

  .method {
    display: inline-block;
    width: 60px;
    font-weight: bold;
  }

  .get {
    color: #2e7d32;
  }

  .post {
    color: #1565c0;
  }

  .put {
    color: #f57c00;
  }

  .delete {
    color: #c62828;
  }

  .patch {
    color: #7b1fa2;
  }
</style>
