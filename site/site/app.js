fetch("data.json?x=" + Date.now()).then(r => r.json()).then(d => {
  document.getElementById("college").textContent = d.college;
  document.getElementById("code").textContent = d.code;
  document.getElementById("labs").innerHTML = d.labs.map(l => "<li>" + l.name + " " + l.opens + "-" + l.closes + "</li>").join("");
}).catch(() => { document.getElementById("college").textContent = "Could not load data.json"; });
fetch("build.json?x=" + Date.now()).then(r => r.json()).then(b => {
  document.getElementById("build").textContent = "Deployed by " + b.deployed_by + " sha " + b.sha.slice(0, 7) + " run " + b.run;
}).catch(() => {});
