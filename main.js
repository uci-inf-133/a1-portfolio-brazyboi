const projectData = {
  'student-assistant': {
    title: "Student Assistant",
    description: `
      <ul>
        <li>
          A socratic tutor AI chatbot, written in React and Node.js, using PostgreSQL for the database, redis for caching and rate limiting, and Docker + EC2 to host.
        </li>
        <li>
          <a href="https://github.com/brazyboi/student-assistant" target="_blank">GitHub</a>
        </li>
        <li>
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
        </li>
        <li>
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
        </li>
      </ul>`,
  },
  'search-engine': {
    title: "Search Engine",
    description: `
      <ul>
        <li>
          Implemented a multithreaded web crawler, an indexer, a search engine using various techniques in the fields of concurrency, natural language processing, and optimization.
        </li>
        <li>
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
        </li>
        <li>
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
        </li>
      </ul>
    `,
  },
  'chip-emulator': {
    title: "Chip-8 Emulator",
    description: `
      <ul>
        <li>
          Chip-8 retro console emulator, written in Rust. Following specification from Cowgod's Chip-8 technical reference.
        </li>
        <li>
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
        </li>
        <li>
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
        </li>
      </ul>
    `,
  },
  'micromouse': {
    title: "Micromouse",
    description: `
      <ul>
        <li>
          Micromouse is a maze-solving robotics competition. As part of IEEE @ UCI, I was on of the teams sent to All-American Micromouse Competition (AAMC) 2024 and 2025. I wrote code to solve the floodfill/pathfinding section of the software, as well as helped with test engineering.
        </li>
        <li>
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
        </li>
        <li>
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
        </li>
      </ul>
    `,
  }
};

function openDialog(dialogId) {
  const dialog = document.getElementById('proj-dialog');
  const data = projectData[dialogId];

  document.getElementById('dialog-title').innerText = data.title;
  document.getElementById('dialog-desc').innerHTML = data.description;

  dialog.showModal();
}

function closeDialog() {
  const dialog = document.getElementById('proj-dialog');
  dialog.close();
}

const dialogs = document.querySelectorAll('dialog');
dialogs.forEach(dialog => {
  dialog.addEventListener('click', (e) => {
    const dialogDimensions = dialog.getBoundingClientRect();
    // If you click outside, also exit 
    if (e.clientX < dialogDimensions.left || e.clientX > dialogDimensions.right
                                          || e.clientY < dialogDimensions.top
                                          || e.clientY > dialogDimensions.bottom) {
      dialog.close();
    }
  });
});