function addEducation() {
  const input = prompt("Yeni təhsil məlumatını daxil edin (məs: 2029-2033 - Kompüter Elmləri - BDU)");
  if (input && input.trim()) {
    const div = document.createElement("p");
    div.innerHTML = input;
    document.getElementById("education-list").appendChild(div);
  }
}

function addWork() {
  const input = prompt("Yeni iş təcrübəsini daxil edin (məs: 2023-2024 - IT Mütəxəssisi - X Şirkəti)");
  if (input && input.trim()) {
    const div = document.createElement("p");
    div.innerHTML = input;
    document.getElementById("work-list").appendChild(div);
  }
}

function addSkill() {
  const input = prompt("Yeni bacarıq daxil edin (məs: JavaScript, Linux CLI və s.)");
  if (input && input.trim()) {
    const li = document.createElement("li");
    li.innerText = input;
    document.getElementById("skills-list").appendChild(li);
  }
}