const scrollToSection = (sectionRef: any) => {
  window.scrollTo({
    top: sectionRef.current.offsetTop,
    behavior: "smooth",
  });
};

export default scrollToSection;
