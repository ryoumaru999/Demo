document.querySelectorAll("details").forEach((detail) => {
  detail.addEventListener("toggle", () => {
    if (detail.open) {
      document.querySelectorAll("details").forEach((d) => {
        if (d !== detail) d.removeAttribute("open");
      });
    }
  });
});
