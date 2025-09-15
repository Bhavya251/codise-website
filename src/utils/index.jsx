// src/utils/utils.jsx

/**
 * Converts a page name into a URL path.
 * Example: "Home" -> "/", "About Us" -> "/about-us"
 */
export function createPageUrl(pageName) {
  if (!pageName) return "/";

  // Convert to lowercase, replace spaces with hyphens
  const formatted = pageName.trim().toLowerCase().replace(/\s+/g, "-");

  // Special case: Home should just be "/"
  if (formatted === "home") {
    return "/";
  }

  return `/${formatted}`;
}
