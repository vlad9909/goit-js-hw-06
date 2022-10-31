const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const listRef = document.querySelector(".gallery");
const imgRef = images
  .map(
    (image) =>
      `<li class="gallery__item">
  <img class="gallery__image"
  src="${image.url}" 
  alt="${image.alt}"/>
  </li>`
  )
  .join("");
console.log(imgRef);
listRef.insertAdjacentHTML("beforeend", imgRef);

const galleryImgRef = document.querySelectorAll(".gallery__image");
console.log(galleryImgRef);

galleryImgRef.forEach((elem) => {
  elem.style.width = "100%";
});

listRef.style.display = "flex";
