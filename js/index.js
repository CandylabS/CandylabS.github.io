// initialize page
function jsInit() {
  // collect DOM elements
  var sections = document.getElementsByClassName("main-section"),
    prevSectionIndex,
    filters = document.getElementsByClassName("filters__label"),
    projects = document.getElementsByClassName("portfolio__project");

  // helper callback
  function removeClass(classString) {
    return function(el) {
      el.classList.remove(classString);
    };
  }

  function filterProjects() {

    var category = this.getAttribute("data-cat");

    // update active state for category labels
    updateFilterLabel(this);

    // display or hide elements depending on selected category
    if (!category) {
      // display all projects if "all" is selected
      [].forEach.call(projects, displayEl);
    } else {
      [].forEach.call(projects, function(el) {
        if (el.getAttribute("data-cat") !== category) {
          hideEl(el);
        } else {
          displayEl(el);
        }
      });
    }

    // utility
    function updateFilterLabel(activeEl) {
      [].forEach.call(filters, removeClass("is-active"));
      activeEl.classList.add("is-active");
    }

    function displayEl(el) {
      el.style.display = "block";
    }

    function hideEl(el) {
      el.style.display = "none";
    }

  }

  // display all js-dependent elements
  var jsEl = document.getElementsByClassName("js-dis");
  [].forEach.call(jsEl, removeClass("js-dis"));

  /** event listeners: **/
  // filtering function
  [].forEach.call(filters, function(el) {
    el.addEventListener("click", filterProjects)
  });

}

jsInit();