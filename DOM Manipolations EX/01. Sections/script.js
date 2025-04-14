function create(words) {
   const contentRef = document.getElementById("content");

   function createAndAppendDivElement(root) {
      for (let i = 0; i < words.length; i++) { 
         const divEl = document.createElement("div");

         const pEl = document.createElement("p");
         pEl.textContent = words[i];
         pEl.style.display = "none";

         divEl.appendChild(pEl);
         divEl.addEventListener("click", onclick);
         root.appendChild(divEl);
      }
   }

   function onclick(event) {
      const target = event.currentTarget;
      if (!target.children.length) return;

      const p = target.children[0];
      p.style.display = (p.style.display === "none" || p.style.display === "") ? "block" : "none";
   }

   createAndAppendDivElement(contentRef);  
}
