const generateHTML = (projectsArr) => {
    const projectHTMLArr = projectsArr.map(({ name, id, email, officeNumber, school }))
  return `
    <section class="my-3" id="portfolio">
      <h2 class="text-dark bg-primary p-2 display-inline-block">Work</h2>
      <div class="flex-row justify-space-between">
        <!-- Leaving this empty as we'll dynamically insert project HTML here -->
      </div>
    </section>
    `;
};
