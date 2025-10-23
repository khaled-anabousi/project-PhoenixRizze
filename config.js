// Configuration for AI report generation
// SECURITY: Do NOT commit real keys. Prefer environment injection or runtime input.

// Ensure global config object exists
window.APP_CONFIG = window.APP_CONFIG || {};

// REQUIRED LINE: replace with your real API key before deploying
// Get a key from https://platform.openai.com/api-keys
window.APP_CONFIG.OPENAI_API_KEY = "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";

(function () {
  const cfg = window.APP_CONFIG;

  // Try external sources without overwriting a real, non-placeholder value
  try {
    const candidates = [
      cfg.OPENAI_API_KEY,
      (typeof window !== "undefined" ? window.__OPENAI_API_KEY : null),
      (typeof window !== "undefined" ? window.OPENAI_API_KEY : null),
      (function () { try { return localStorage.getItem("OPENAI_API_KEY"); } catch (_) { return null; } })()
    ].filter(Boolean);

    const firstValid = candidates.find((v) => typeof v === "string" && v.trim() && v !== "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");
    if (firstValid) cfg.OPENAI_API_KEY = firstValid;
  } catch (_) { /* ignore */ }

  // Defaults (do not overwrite if already provided)
  if (!cfg.OPENAI_API_ENDPOINT) cfg.OPENAI_API_ENDPOINT = "https://api.openai.com/v1/chat/completions";
  if (!cfg.OPENAI_MODEL) cfg.OPENAI_MODEL = "gpt-4o-mini";

  if (!cfg.EXPERT_PROMPT_TEXT) {
    cfg.EXPERT_PROMPT_TEXT =
      "اكتب تقرير دراسة جدوى احترافيًا وشاملًا بأسلوب أكاديمي عربي رصين، مع تحليل متعمّق في كل قسم، وتنسيق محاذاة كاملة للنص، وبطول 300–500+ كلمة لكل قسم رئيسي، وإجمالي لا يتجاوز 25 صفحة، يتضمن بيانات مالية وجداول وتحليلات ونِسب وROI.";
  }

  cfg.BRAND = Object.assign({
    LOGO_PATH: "../images/LOGO PH.png",
    WATERMARK_TEXT: "PhoenixRizze.com\nFeasibility Study Simulator"
  }, cfg.BRAND || {});

  cfg.PDF = Object.assign({
    DEFAULT_FONT: "Roboto",
    PRIMARY_COLOR: "#2c3e50",
    SECONDARY_COLOR: "#3498db"
  }, cfg.PDF || {});
})();

// SECURITY: Do NOT commit real keys. Inject at runtime via environment, server-side template, or localStorage.
