(function () {
    var personaElement = document.getElementById("persona");
    var personaArray = [];
    function extractPersona() {
        var personaDivs = personaElement.getElementsByTagName("div");
        for (var i = 0; i < personaDivs.length; i++) {
            var div = personaDivs[i];
            var img = div.getElementsByTagName("img")[0];
            var persona = {
                div: div,
                img: img
            };
            personaArray.push(persona);
        }
    }
    extractPersona();
    function placePersona() {
        var personaCount = personaArray.length;
        var personaWidth = 100/personaCount;
        personaArray.forEach(function (persona, i) {
            persona.div.style.left = (personaWidth * i) + "%";
            persona.div.style.width = personaWidth + "%";
            persona.div.style.top = "0";
            persona.div.style.height = "100%";
            persona.div.classList.add("out");
            persona.img.height = persona.div.clientHeight;
            function placeImg() {
                persona.img.style.left =
                    (persona.div.clientWidth - persona.img.width) / 2 + "px";
            }
            if (persona.img.complete) {
                placeImg();
            }
            else {
                persona.img.addEventListener("load", placeImg);
            }
            function mouseover() {
                personaArray.forEach(function (persona, j) {
                    if (i == j) {
                        persona.div.classList.add("over");
                        persona.div.classList.remove("out");
                    }
                    else {
                        persona.div.classList.add("out");
                        persona.div.classList.remove("over");
                    }
                });
            }
            persona.div.addEventListener("mouseover", mouseover);
        });
        function mouseout() {
            personaArray.forEach(function (persona, j) {
                persona.div.classList.remove("out");
                persona.div.classList.remove("over");
            });
        }
        personaElement.addEventListener("mouseout", mouseout);
    }
    placePersona();
})();
