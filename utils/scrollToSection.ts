export const scrollToSection = (id: string, instant: boolean = false) => {
  const section = document.getElementById(id);
  if (section) {
    window.scrollTo({
      top: section.offsetTop,
      behavior: instant ? "auto" : "smooth", // Instant scroll if needed
    });

    // Update URL without refreshing the page
    window.history.pushState(null, "", `#${id}`);
  }
};
