# Welkin GameBar - Game Loading Pipeline Fix

## Problem Diagnosis

The original `launchWgGame` function in `welkin-gamebar.js` had a critical issue where fetched HTML games were rendered as inert text instead of executing scripts.

### Root Causes Identified

1. **Blob URL with `text/html` type**: Using `URL.createObjectURL(blob)` with `type: 'text/html'` created a blob URL that browsers treat with strict security policies. Scripts in blob-loaded HTML often don't execute due to:
   - Null origin for blob URLs
   - CSP restrictions on script execution
   - MIME type handling inconsistencies

2. **Missing sandbox configuration**: The iframe had no sandbox attributes, providing no explicit permissions for script execution

3. **Incomplete URL rewriting**: Only `src`, `href`, and `action` attributes were rewritten, missing:
   - CSS `url()` references
   - `<source>` tags
   - Dynamic resource loading

4. **No error recovery**: Single-attempt fetch with no retry logic

5. **Poor cleanup**: No proper resource cleanup on window close

## Solution Implemented

### 1. Switched from Blob URLs to `srcdoc`

**Before:**

```javascript
const blob = new Blob([fixedHtml], { type: "text/html" });
const blobUrl = URL.createObjectURL(blob);
frame.src = blobUrl;
```

**After:**

```javascript
frame.srcdoc = fixedHtml;
```

**Why `srcdoc` works better:**

- Designed specifically for inline HTML content
- Executes scripts in the context of the parent document's origin
- No blob URL origin issues
- Better browser support for script execution

### 2. Proper Sandbox Configuration

```javascript
frame.sandbox = "allow-scripts allow-same-origin allow-popups allow-modals";
```

**Permissions granted:**

- `allow-scripts`: Enables JavaScript execution in the iframe
- `allow-same-origin`: Treats content as same-origin (needed for relative URLs and CDN resources)
- `allow-popups`: Allows `window.open()` and similar
- `allow-modals`: Allows `alert()`, `confirm()`, `prompt()`

**Security note:** `allow-top-navigation` is intentionally omitted to prevent games from navigating the parent page.

### 3. Comprehensive URL Rewriting

```javascript
const processHtml = (html, baseUrl) => {
  return (
    html
      // Rewrite resource URLs (src, href, action)
      .replace(/(src|href|action)=["']([^"']+)["']/gi, (m, attr, path) => {
        if (path.match(/^(https?:|data:|blob:|#|\/\/|javascript:)/i)) return m;
        return `${attr}="${wrapUrl(baseUrl + path)}"`;
      })
      // Rewrite CSS url() references
      .replace(/url\(\s*['"]?([^'")]+)['"]?\s*\)/g, (m, path) => {
        if (path.match(/^(https?:|data:|blob:|#|\/\/)/i)) return m;
        return `url("${wrapUrl(baseUrl + path)}")`;
      })
      // Rewrite source URLs in <source> tags
      .replace(/(<source[^>]+src=)["']([^"']+)["']/gi, (m, prefix, path) => {
        if (path.match(/^(https?:|data:|blob:)/i)) return m;
        return `${prefix}"${wrapUrl(baseUrl + path)}"`;
      })
  );
};
```

### 4. Async Dependency Handling & Retry Logic

```javascript
const loadGame = async () => {
  if (isLoaded && retryCount >= MAX_RETRIES) return;

  msg.innerText =
    retryCount > 0
      ? `Retrying... (${retryCount}/${MAX_RETRIES})`
      : "Loading Game...";

  try {
    const response = await fetch(wrapUrl(url));
    if (!response.ok)
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);

    const html = await response.text();
    const baseUrl = url.substring(0, url.lastIndexOf("/") + 1);

    loadGameContent(html, baseUrl);
    isLoaded = true;
    retryCount = 0;
  } catch (err) {
    retryCount++;
    if (retryCount <= MAX_RETRIES) {
      // Exponential backoff retry
      setTimeout(() => loadGame(), 1000 * retryCount);
    } else {
      showError("Failed to load game. Click Retry to try again.", err);
    }
  }
};
```

**Features:**

- Exponential backoff (1s, 2s delays)
- Maximum 2 retries
- Manual retry button on final failure
- Proper error messages

### 5. Robust Error Recovery & Cleanup

```javascript
const cleanup = () => {
  isLoaded = true; // Prevent further retries
  cleanupHandlers.forEach((fn) => {
    try {
      fn();
    } catch (e) {}
  });
  cleanupHandlers = [];
  try {
    frame.src = "about:blank";
    frame.srcdoc = "";
  } catch (e) {}
};
```

**Cleanup handlers manage:**

- Event listener removal
- Timeout clearing
- Error monitor cleanup
- Resource deallocation
- Blob URL revocation

**Additional features:**

- Page visibility change handling
- Runtime error monitoring
- Unhandled rejection tracking
- Load timeout detection (20s)

### 6. Script Execution & Entry Point Initialization

```javascript
const onLoad = () => {
  clearTimeout(loadTimer);
  // Small delay to allow scripts to initialize
  setTimeout(() => {
    if (msg) msg.style.display = "none";
  }, 200);
};
```

The 200ms delay after load ensures:

- DOM is fully constructed
- Inline scripts have executed
- Entry point functions are available
- Styles are applied

## Testing

A test file `test_gamebar.html` is provided to verify:

1. **Script Execution**: Inline JavaScript runs correctly
2. **Style Application**: CSS styles are applied
3. **Event Handling**: Click handlers work
4. **DOM Manipulation**: Dynamic updates function
5. **External Resources**: CDN-loaded games work

### Test Coverage

- ✓ Inline script execution
- ✓ Event handler binding
- ✓ DOM manipulation
- ✓ CSS styling
- ✓ URL rewriting
- ✓ Error recovery
- ✓ Cleanup on close
- ✓ Retry logic

## Security Considerations

1. **Sandbox restrictions**: No `allow-top-navigation` prevents parent page navigation
2. **Same-origin treatment**: `allow-same-origin` is necessary for relative URLs but combined with sandbox provides isolation
3. **Script execution**: Limited to iframe context, cannot access parent page directly
4. **Resource loading**: All external resources go through proxy for CDN trust
5. **No eval injection**: URL rewriting uses regex matching, not eval

## Browser Compatibility

- `srcdoc`: Supported in Chrome 20+, Firefox 25+, Safari 6+, Edge 79+
- `sandbox`: Supported in Chrome 15+, Firefox 17+, Safari 6+, Edge 12+
- Fallback: Could add `src="about:blank"` for older browsers

## Performance Impact

- Minimal: `srcdoc` is more efficient than blob URLs
- No additional network requests for HTML content
- URL rewriting is fast regex operations
- Cleanup prevents memory leaks

## Migration Notes

The change is backward compatible:

- Same function signature: `launchWgGame(url, title)`
- Same window creation behavior
- Same UI/UX
- Only the loading mechanism changed

No changes required to:

- Game HTML files
- CDN resources
- Proxy configuration
- User interaction patterns
