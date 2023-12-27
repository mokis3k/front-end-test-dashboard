const menuTogglerButtons = document.querySelectorAll(".menu__toggler");

menuTogglerButtons.forEach((toggler) => {
  toggler.addEventListener("click", () => {
    menuTogglerButtons.forEach((toggler) => {
      toggler.classList.toggle("active");
    });
  });
});
