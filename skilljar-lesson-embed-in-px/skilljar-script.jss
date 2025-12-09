<script>
(function() {
  // Only run when embedded
  if (window.location === window.parent.location) return;

  const STYLE_ID = 'iframe-styles';
  const cssText = `
    #header, #lp-footer, button.ot-sdk-show-settings.j-custom-ot-btn { display: none !important; }
    #lp-wrapper { padding: 0 !important; margin: 0 !important; height: 250px !important; }
    .sjwc-lesson-content-item.sjwc-course-flexible-content { padding: 0 !important; }
  `;

  function ensureStyleTag() {
    if (!document.getElementById(STYLE_ID)) {
      const style = document.createElement('style');
      style.id = STYLE_ID;
      style.appendChild(document.createTextNode(cssText));
      document.head.appendChild(style);
    }
  }

  // Apply once ASAP (in case elements already exist)
  ensureStyleTag();

  // Watch for SPA updates and re-ensure styles
  const obs = new MutationObserver(() => ensureStyleTag());
  obs.observe(document.documentElement || document.body, {
    childList: true,
    subtree: true,
  });

  // Optional: stop observing after a while if you don't expect further rerenders
  setTimeout(() => obs.disconnect(), 15000); // 15s safety window
})();
</script>
