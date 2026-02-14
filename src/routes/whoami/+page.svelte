<script lang="ts">
  let { data } = $props();
</script>

<svelte:head>
  <title>whoami</title>
</svelte:head>

<div class="container">
  <h1>Who Am I?</h1>

  <div class="card codename-card">
    <span class="label">Your codename</span>
    <span class="codename">{data.codename}</span>
  </div>

  <dl class="card">
    <dt>IP</dt>
    <dd>{data.ip}</dd>

    <dt>User-Agent</dt>
    <dd>{data.userAgent}</dd>

    <dt>Accept-Language</dt>
    <dd>{data.lang}</dd>
  </dl>

  <dl class="card">
    <dt>Your visits</dt>
    <dd>{data.visits}</dd>

    <dt>Last seen</dt>
    <dd>{data.visited ?? 'First visit!'}</dd>

    <dt>Worker hits (since deploy)</dt>
    <dd>{data.totalHits}</dd>
  </dl>

  <div class="card compute">
    <span class="label">Server-side proof of work</span>
    <p>
      Computed the <strong>{data.compute.nthPrime.toLocaleString()}th</strong> prime number
      = <strong>{data.compute.value.toLocaleString()}</strong>
    </p>
    <span class="timing">SSR in {data.compute.ms}ms</span>
  </div>

  <p class="footer">
    Rendered at {data.serverTime} &mdash; entirely server-side, zero client JS needed.
  </p>
</div>

<style>
  :global(body) {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background: #1a1a2e;
    color: #e0e0e0;
  }

  .container {
    max-width: 600px;
    margin: 3rem auto;
    padding: 2rem;
  }

  h1 {
    font-size: 1.8rem;
    color: #fff;
    margin-bottom: 1.5rem;
  }

  .card {
    background: #16213e;
    border-radius: 8px;
    padding: 1.5rem;
    border: 1px solid #0f3460;
    margin-bottom: 1rem;
  }

  .codename-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }

  .codename {
    font-family: 'SF Mono', Monaco, 'Cascadia Code', monospace;
    font-size: 1.5rem;
    color: #e94560;
    font-weight: 600;
  }

  .label {
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: #7f8c9b;
  }

  dt {
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: #7f8c9b;
    margin-top: 1rem;
  }

  dt:first-child {
    margin-top: 0;
  }

  dd {
    margin: 0.25rem 0 0;
    font-family: 'SF Mono', Monaco, 'Cascadia Code', monospace;
    font-size: 0.95rem;
    color: #e0e0e0;
    word-break: break-all;
  }

  .compute {
    text-align: center;
  }

  .compute p {
    margin: 0.5rem 0;
    font-size: 0.95rem;
  }

  .compute strong {
    color: #fff;
  }

  .timing {
    display: inline-block;
    margin-top: 0.25rem;
    font-family: 'SF Mono', Monaco, 'Cascadia Code', monospace;
    font-size: 0.8rem;
    color: #53d769;
  }

  .footer {
    text-align: center;
    font-size: 0.75rem;
    color: #4a5568;
    margin-top: 1.5rem;
  }
</style>
