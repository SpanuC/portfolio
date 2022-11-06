const HeaderTitle = () => {
  document.addEventListener("mousemove", function () {
    let link = document.querySelectorAll(".hover-this");

    const animateit = function (e) {
      let span = this.querySelector("span");
      let { offsetX: x, offsetY: y } = e,
        { offsetWidth: width, offsetHeight: height } = this,
        move = 25,
        xMove = (x / width) * (move * 2) - move,
        yMove = (y / height) * (move * 2) - move;

      span.style.transform = `translate(${xMove}px, ${yMove}px)`;

      if (e.type === "mouseleave") span.style.transform = "";
    };

    link.forEach((b) => b.addEventListener("mousemove", animateit));
    link.forEach((b) => b.addEventListener("mouseleave", animateit));
  });
};
export default HeaderTitle;
