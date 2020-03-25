let btn = document.querySelector(".btn"),
  scene = document.querySelector(".scene"),
  modal = document.querySelector(".modal"),
	closeBtn = document.querySelector(".cross"),
	arrowBtn = document.querySelector(".arrow"),
	pannel = document.querySelector(".pannelCtn"),
	triangle = document.querySelector(".triangle"),
	ctn =  document.querySelector(".ctn"),
	ici = document.querySelector(".ici"),
	tooltip = document.querySelector(".tooltip"),
	minicroi = document.querySelector(".minicroi");

btn.addEventListener("click", ()=> {
  btn.classList.add("divActive");
  scene.classList.add("sceneActive");
  modal.classList.toggle("modalActive");
});

btn.addEventListener("transitionend", ()=> {
  btn.classList.remove("divActive");
  scene.classList.remove("sceneActive");
});

closeBtn.addEventListener("click", () => {
  modal.classList.toggle("modalActive");
})

arrowBtn.addEventListener("click", () => {
	pannel.classList.toggle("pannelActive");
	triangle.classList.toggle("triangleActive");
	ctn.classList.toggle("ctnActive");
})

ici.addEventListener("click", ()=> {
	tooltip.classList.add("visible");
});

minicroi.addEventListener("click", () => {
	tooltip.classList.remove("visible");
})