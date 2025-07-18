# 🕉️ Vedic Wisdom Series - Playwright MCP Test Automation

## Setup Complete! ✅

The Playwright MCP server is now configured and ready to use. Here's what we've set up:

### Configuration
- **Server Name**: `playwright-browser`
- **Mode**: Headless Chrome
- **Viewport**: 1280x720 (desktop)
- **Features**: Vision capability, PDF generation, screenshots

### Available Commands

You can now use these commands in your Claude Code session:

```bash
# Basic Navigation
@playwright-browser navigate "http://localhost:5173"
@playwright-browser screenshot "homepage.png"

# Element Interaction
@playwright-browser click "text=Weekend Discourses"
@playwright-browser fill "[name=email]" "student@example.com"
@playwright-browser type "textarea" "I want to learn Sanskrit"

# Page Analysis
@playwright-browser get_page_content
@playwright-browser get_page_title
```

### Test Scenarios for Vedic Wisdom Series

#### 1. Homepage Transformation Test
```bash
# Navigate to current site
@playwright-browser navigate "http://localhost:5173"
@playwright-browser screenshot "millstone-current.png"

# After transformation
@playwright-browser navigate "http://localhost:5173"
@playwright-browser screenshot "vedic-wisdom-new.png"
```

#### 2. Course Enrollment Flow
```bash
# Test Weekend Discourses enrollment
@playwright-browser navigate "http://localhost:5173/discourses"
@playwright-browser click "text=Enroll for $25"
@playwright-browser fill "[name=name]" "Test Student"
@playwright-browser fill "[name=email]" "test@example.com"
@playwright-browser click "text=Complete Enrollment"
@playwright-browser screenshot "enrollment-success.png"
```

#### 3. Responsive Design Test
```bash
# Mobile view
@playwright-browser set_viewport 375 667
@playwright-browser navigate "http://localhost:5173"
@playwright-browser screenshot "mobile-view.png"

# Tablet view
@playwright-browser set_viewport 768 1024
@playwright-browser screenshot "tablet-view.png"

# Desktop view
@playwright-browser set_viewport 1920 1080
@playwright-browser screenshot "desktop-view.png"
```

#### 4. Content Verification
```bash
# Verify Dr. Nischaya Nagori's content
@playwright-browser navigate "http://localhost:5173/about"
@playwright-browser get_page_content
# Check for spiritual teacher information

# Verify all 4 offerings
@playwright-browser navigate "http://localhost:5173/teachings"
@playwright-browser screenshot "all-offerings.png"
```

### Advanced Usage

#### Generate PDF of Course Catalog
```bash
@playwright-browser navigate "http://localhost:5173/teachings"
@playwright-browser pdf "vedic-wisdom-catalog.pdf"
```

#### Test Form Submissions
```bash
@playwright-browser navigate "http://localhost:5173/contact"
@playwright-browser fill "[name=name]" "Spiritual Seeker"
@playwright-browser fill "[name=email]" "seeker@example.com"
@playwright-browser fill "[name=message]" "I want to join teacher training"
@playwright-browser click "button[type=submit]"
@playwright-browser wait_for_navigation
@playwright-browser screenshot "contact-form-submitted.png"
```

### Monitoring Transformation Progress

Create a monitoring script:
```bash
# Before transformation
@playwright-browser navigate "http://localhost:5173"
@playwright-browser screenshot "before/homepage.png"
@playwright-browser navigate "http://localhost:5173/about"
@playwright-browser screenshot "before/about.png"

# After each change
@playwright-browser navigate "http://localhost:5173"
@playwright-browser screenshot "progress/step1-config.png"
# ... continue for each step
```

### Tips for Using Playwright MCP

1. **Always start with navigation**: `@playwright-browser navigate "url"`
2. **Use text selectors**: `click "text=Button Text"` is more reliable
3. **Take screenshots**: Document each step of transformation
4. **Check console errors**: `@playwright-browser get_console_messages`
5. **Verify content**: Use `get_page_content` to ensure text is correct

### Next Steps

1. Start local dev server: `npm run dev`
2. Begin testing current Millstone India site
3. Make configuration changes
4. Test each transformation step
5. Document with screenshots

The Playwright MCP server is now your automated testing companion for the Vedic Wisdom Series transformation! 🎭✨