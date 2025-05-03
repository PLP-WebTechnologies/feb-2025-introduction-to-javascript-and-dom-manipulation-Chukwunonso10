// 1. Change text dynamically
document.getElementById("changeTextBtn").addEventListener("click", function () {
    const text = document.getElementById("dynamicText");
    text.textContent = " The text has been changed dynamically using JavaScript";
    text.style.color = "green";
    text.style.fontWeight = "bold";
  });
  
  // 2. Add/Remove a box dynamically
  const toggleBoxBtn = document.getElementById("toggleBoxBtn");
  const boxContainer = document.getElementById("boxContainer");
  
  toggleBoxBtn.addEventListener("click", () => {
    const existingBox = document.getElementById("dynamicBox");
  
    if (existingBox) {
      existingBox.remove();
      toggleBoxBtn.textContent = "Add Box";
    } else {
      const newBox = document.createElement("div");
      newBox.id = "dynamicBox";
      newBox.textContent = "I’m a dynamically added box!";
      newBox.style.padding = "20px";
      newBox.style.marginTop = "10px";
      newBox.style.backgroundColor = "#f0db4f";
      newBox.style.transition = "all 0.3s ease-in-out";
      newBox.style.borderRadius = "10px";
      newBox.style.boxShadow = "2px 2px 10px rgba(0,0,0,0.2)";
      boxContainer.appendChild(newBox);
      toggleBoxBtn.textContent = "Remove Box";
    }
  });
  