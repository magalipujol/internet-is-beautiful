{/* <a class="lead" target="_blank" href="https://purecss.io/">Pure.css </a>
<div class="hidden">A set of small, responsive CSS modules that you can use in every web project.</div><br> */}




function addWebpage (sectionID, link, linkText, description) {
    var newLink = document.createElement("a")
    var newDescription = document.createElement("div");
    newLink.href = link
    newLink.target ="_blank"
    newLink.innerHTML = linkText
    newLink.classList.add("lead")
    newDescription.innerHTML = description
    newDescription.classList.add("hidden")
    document.getElementById(sectionID).appendChild(newLink)
    document.getElementById(sectionID).appendChild(newDescription)
    document.getElementById(sectionID).appendChild(document.createElement('br'))
}

// addWebpage ("webdev-content", "https://purecss.io/", "Pure.css", "A set of small, responsive CSS modules that you can use in every web project.")
// addWebpage ("webdev-content", "https://purecss.io/", "Pure.css", "A set of small, responsive CSS modules that you can use in every web project.")


for (let section of pages) {
    for (let content of section.contents) {
        addWebpage(section.sectionId, content.link, content.linkText, content.description)
    }
}
