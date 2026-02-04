# httpbin

HTTP testing service built with SvelteKit and [@openworkers/adapter-sveltekit](https://github.com/openworkers/adapter-sveltekit).

Demonstrates **per-endpoint workers** - each endpoint is compiled into its own optimized worker with automatic tree-shaking for cookies and route params.

## Endpoints

### HTTP Methods
- `GET /get` - Returns GET request data
- `POST /post` - Returns POST request data
- `PUT /put` - Returns PUT request data
- `DELETE /delete` - Returns DELETE request data
- `PATCH /patch` - Returns PATCH request data
- `POST /anything` - Returns any request data

### Request Inspection
- `GET /headers` - Returns request headers
- `GET /ip` - Returns origin IP
- `GET /user-agent` - Returns user agent
- `GET /echo` - Echo back request body

### Response Formats
- `GET /html` - Returns HTML document
- `GET /json` - Returns JSON data
- `GET /xml` - Returns XML data
- `GET /encoding/utf8` - Returns UTF-8 encoded data

### Status Codes
- `GET /status/:code` - Returns status code
- `GET /status/:code/:reason` - Returns status with custom reason

### Redirects
- `GET /redirect/:n` - 302 redirect n times
- `GET /redirect-to?url=` - 302 redirect to URL
- `GET /absolute-redirect/:n` - Absolute URL redirects
- `GET /relative-redirect/:n` - Relative URL redirects

### Cookies
- `GET /cookies` - Returns cookies
- `GET /cookies/set?name=value` - Set cookies
- `GET /cookies/delete?name` - Delete cookies

### Auth
- `GET /basic-auth/:user/:pass` - Basic authentication
- `GET /bearer` - Bearer token authentication

### Dynamic Data
- `GET /bytes/:n` - Returns n random bytes
- `GET /range/:n` - Returns n bytes with range support
- `GET /stream/:n` - Stream n lines of JSON
- `GET /drip/...params` - Drip data over time
- `GET /delay/:n` - Delay response by n seconds
- `GET /uuid` - Returns UUID
- `GET /base64/:encoded` - Decode base64

### Other
- `GET /deny` - Returns 403 Forbidden

## Development

```bash
bun install
bun run dev
```

## Build

```bash
bun run build
```

Outputs to `dist/` with each endpoint as a separate optimized worker.
