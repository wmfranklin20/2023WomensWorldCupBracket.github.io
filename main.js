

function draggableGroups () {

    var groupTables = document.querySelectorAll("ul.grouptable");

    groupTables.forEach(function (sortableList) {
        var dragItem = null;

        sortableList.addEventListener("dragstart", function (event) {
            dragItem = event.target;
            event.dataTransfer.effectAllowed = "move";
            event.dataTransfer.setData("text/html", dragItem.innerHTML);
        });

        sortableList.addEventListener("dragover", function (event) {
            event.preventDefault();
            event.dataTransfer.dropEffect = "move";
            var targetItem = event.target;

            if (targetItem && targetItem !== dragItem && targetItem.nodeName === "LI") {
                var rect = targetItem.getBoundingClientRect();
                var offset = event.clientY - rect.top;
                var isAfter = offset > rect.height / 2;

                if (isAfter) {
                    sortableList.insertBefore(dragItem, targetItem.nextSibling);
                } else {
                    sortableList.insertBefore(dragItem, targetItem);
                }
            }
        });

        sortableList.addEventListener("dragend", function (event) {
            dragItem = null;
        });
    });
        
};
draggableGroups();

function groupAdvancers() {
    let delay = 500;

    function groupA() {
        var group = document.getElementById("groupATable");
        var First = group.querySelector("li:first-child");
        var Winner = document.getElementById("r16One").querySelector("li:first-child");

        var Second = group.querySelector("li:nth-child(2)");
        var Runner = document.getElementById("r16Five").querySelector("li:nth-child(2)");

        var observer = new MutationObserver(function (mutationsList) {
            for (var mutation of mutationsList) {
                if (mutation.type === "childList") {
                    First = group.querySelector("li:first-child");
                    setTimeout (function() {
                        Winner.textContent = First.textContent;
                        Winner.id = First.id;
                        Winner.className = First.className;
                    }, delay);
                    Second = group.querySelector("li:nth-child(2)");
                    setTimeout (function() {
                        Runner.textContent = Second.textContent;
                        Runner.id = Second.id;
                        Runner.className = Second.className;
                    }, delay);
                }
            }
        });
        observer.observe(group, { childList: true });
    }   
    groupA();

    function groupB() {
        var group = document.getElementById("groupBTable");

        var First = group.querySelector("li:first-child");
        var Winner = document.getElementById("r16Two").querySelector("li:first-child");

        var Second = group.querySelector("li:nth-child(2)");
        var Runner = document.getElementById("r16Six").querySelector("li:nth-child(2)");

        var observer = new MutationObserver(function (mutationsList) {
            for (var mutation of mutationsList) {
                if (mutation.type === "childList") {
                    First = group.querySelector("li:first-child");
                    setTimeout (function() {
                        Winner.textContent = First.textContent;
                        Winner.id = First.id;
                        Winner.className = First.className;
                    }, delay);
                    Second = group.querySelector("li:nth-child(2)");
                    setTimeout (function() {
                        Runner.textContent = Second.textContent;
                        Runner.id = Second.id;
                        Runner.className = Second.className;
                    }, delay);
                }
            }
        });
        observer.observe(group, { childList: true });
    }   
    groupB();

    function groupC() {
        var group = document.getElementById("groupCTable");

        var First = group.querySelector("li:first-child");
        var Winner = document.getElementById("r16Five").querySelector("li:first-child");

        var Second = group.querySelector("li:nth-child(2)");
        var Runner = document.getElementById("r16One").querySelector("li:nth-child(2)");

        var observer = new MutationObserver(function (mutationsList) {
            for (var mutation of mutationsList) {
                if (mutation.type === "childList") {
                    First = group.querySelector("li:first-child");
                    setTimeout (function() {
                        Winner.textContent = First.textContent;
                        Winner.id = First.id;
                        Winner.className = First.className;
                    }, delay);
                    Second = group.querySelector("li:nth-child(2)");
                    setTimeout (function() {
                        Runner.textContent = Second.textContent;
                        Runner.id = Second.id;
                        Runner.className = Second.className;
                    }, delay);
                }
            }
        });
        observer.observe(group, { childList: true });
    }   
    groupC();

    function groupD() {
        var group = document.getElementById("groupDTable");

        var First = group.querySelector("li:first-child");
        var Winner = document.getElementById("r16Six").querySelector("li:first-child");

        var Second = group.querySelector("li:nth-child(2)");
        var Runner = document.getElementById("r16Two").querySelector("li:nth-child(2)");

        var observer = new MutationObserver(function (mutationsList) {
            for (var mutation of mutationsList) {
                if (mutation.type === "childList") {
                    First = group.querySelector("li:first-child");
                    setTimeout (function() {
                        Winner.textContent = First.textContent;
                        Winner.id = First.id;
                        Winner.className = First.className;
                    }, delay);
                    Second = group.querySelector("li:nth-child(2)");
                    setTimeout (function() {
                        Runner.textContent = Second.textContent;
                        Runner.id = Second.id;
                        Runner.className = Second.className;
                    }, delay);
                }
            }
        });
        observer.observe(group, { childList: true });
    }   
    groupD();

    function groupE() {
        var group = document.getElementById("groupETable");

        var First = group.querySelector("li:first-child");
        var Winner = document.getElementById("r16Three").querySelector("li:first-child");

        var Second = group.querySelector("li:nth-child(2)");
        var Runner = document.getElementById("r16Seven").querySelector("li:nth-child(2)");

        var observer = new MutationObserver(function (mutationsList) {
            for (var mutation of mutationsList) {
                if (mutation.type === "childList") {
                    First = group.querySelector("li:first-child");
                    setTimeout (function() {
                        Winner.textContent = First.textContent;
                        Winner.id = First.id;
                        Winner.className = First.className;
                    }, delay);
                    Second = group.querySelector("li:nth-child(2)");
                    setTimeout (function() {
                        Runner.textContent = Second.textContent;
                        Runner.id = Second.id;
                        Runner.className = Second.className;
                    }, delay);
                }
            }
        });
        observer.observe(group, { childList: true });
    }   
    groupE();

    function groupF() {
        var group = document.getElementById("groupFTable");

        var First = group.querySelector("li:first-child");
        var Winner = document.getElementById("r16Four").querySelector("li:first-child");

        var Second = group.querySelector("li:nth-child(2)");
        var Runner = document.getElementById("r16Eight").querySelector("li:nth-child(2)");

        var observer = new MutationObserver(function (mutationsList) {
            for (var mutation of mutationsList) {
                if (mutation.type === "childList") {
                    First = group.querySelector("li:first-child");
                    setTimeout (function() {
                        Winner.textContent = First.textContent;
                        Winner.id = First.id;
                        Winner.className = First.className;
                    }, delay);
                    Second = group.querySelector("li:nth-child(2)");
                    setTimeout (function() {
                        Runner.textContent = Second.textContent;
                        Runner.id = Second.id;
                        Runner.className = Second.className;
                    }, delay);
                }
            }
        });
        observer.observe(group, { childList: true });
    }   
    groupF();

    function groupG() {
        var group = document.getElementById("groupGTable");

        var First = group.querySelector("li:first-child");
        var Winner = document.getElementById("r16Seven").querySelector("li:first-child");

        var Second = group.querySelector("li:nth-child(2)");
        var Runner = document.getElementById("r16Three").querySelector("li:nth-child(2)");

        var observer = new MutationObserver(function (mutationsList) {
            for (var mutation of mutationsList) {
                if (mutation.type === "childList") {
                    First = group.querySelector("li:first-child");
                    setTimeout (function() {
                        Winner.textContent = First.textContent;
                        Winner.id = First.id;
                        Winner.className = First.className;
                    }, delay);
                    Second = group.querySelector("li:nth-child(2)");
                    setTimeout (function() {
                        Runner.textContent = Second.textContent;
                        Runner.id = Second.id;
                        Runner.className = Second.className;
                    }, delay);
                }
            }
        });
        observer.observe(group, { childList: true });
    }   
    groupG();

    function groupH() {
        var group = document.getElementById("groupHTable");

        var First = group.querySelector("li:first-child");
        var Winner = document.getElementById("r16Eight").querySelector("li:first-child");

        var Second = group.querySelector("li:nth-child(2)");
        var Runner = document.getElementById("r16Four").querySelector("li:nth-child(2)");

        var observer = new MutationObserver(function (mutationsList) {
            for (var mutation of mutationsList) {
                if (mutation.type === "childList") {
                    First = group.querySelector("li:first-child");
                    setTimeout (function() {
                        Winner.textContent = First.textContent;
                        Winner.id = First.id;
                        Winner.className = First.className;
                    }, delay);
                    Second = group.querySelector("li:nth-child(2)");
                    setTimeout (function() {
                        Runner.textContent = Second.textContent;
                        Runner.id = Second.id;
                        Runner.className = Second.className;
                    }, delay);
                }
            }
        });
        observer.observe(group, { childList: true });
    }   
    groupH();

};
groupAdvancers ();

function r16Prog() {

    function r16One () {
        var match = document.getElementById("r16One");
        var targetDiv = document.getElementById("qOne");


        var listItems = document.querySelectorAll('#r16One li');
        listItems.forEach(function(item, index) {
            item.addEventListener('mouseover', function() {
                this.classList.add('list-item-hover');
            });
            item.addEventListener('mouseout', function() {
                this.classList.remove('list-item-hover');
            });
            item.addEventListener('click', function(event) {
                this.classList.remove('list-item-out');
                var winner = (event.target.innerText);
                targetDiv.innerText = winner;
                targetDiv.id = event.target.id;
                targetDiv.className = event.target.className;
                var nextIndex = (index + 1) % listItems.length;
                var nextTeam = listItems[nextIndex];
                nextTeam.classList.add('list-item-out');
            });
        });
    };
    r16One();

    function r16Two () {
        var match = document.getElementById("r16Two");
        var targetDiv = document.getElementById("qFive");


        var listItems = document.querySelectorAll('#r16Two li');
        listItems.forEach(function(item, index) {
            item.addEventListener('mouseover', function() {
                this.classList.add('list-item-hover');
            });
            item.addEventListener('mouseout', function() {
                this.classList.remove('list-item-hover');
            });
            item.addEventListener('click', function(event) {
                this.classList.remove('list-item-out');
                var winner = (event.target.innerText);
                targetDiv.innerText = winner;
                targetDiv.id = event.target.id;
                targetDiv.className = event.target.className;
                var nextIndex = (index + 1) % listItems.length;
                var nextTeam = listItems[nextIndex];
                nextTeam.classList.add('list-item-out');
            });
        });
    };
    r16Two();

    function r16Three () {
        var match = document.getElementById("r16Three");
        var targetDiv = document.getElementById("qTwo");


        var listItems = document.querySelectorAll('#r16Three li');
        listItems.forEach(function(item, index) {
            item.addEventListener('mouseover', function() {
                this.classList.add('list-item-hover');
            });
            item.addEventListener('mouseout', function() {
                this.classList.remove('list-item-hover');
            });
            item.addEventListener('click', function(event) {
                this.classList.remove('list-item-out');
                var winner = (event.target.innerText);
                targetDiv.innerText = winner;
                targetDiv.id = event.target.id;
                targetDiv.className = event.target.className;
                var nextIndex = (index + 1) % listItems.length;
                var nextTeam = listItems[nextIndex];
                nextTeam.classList.add('list-item-out');
            });
        });
    };
    r16Three();

    function r16Four () {
        var match = document.getElementById("r16Four");
        var targetDiv = document.getElementById("qSix");


        var listItems = document.querySelectorAll('#r16Four li');
        listItems.forEach(function(item, index) {
            item.addEventListener('mouseover', function() {
                this.classList.add('list-item-hover');
            });
            item.addEventListener('mouseout', function() {
                this.classList.remove('list-item-hover');
            });
            item.addEventListener('click', function(event) {
                this.classList.remove('list-item-out');
                var winner = (event.target.innerText);
                targetDiv.innerText = winner;
                targetDiv.id = event.target.id;
                targetDiv.className = event.target.className;
                var nextIndex = (index + 1) % listItems.length;
                var nextTeam = listItems[nextIndex];
                nextTeam.classList.add('list-item-out');
            });
        });
    };
    r16Four();

    function r16Five () {
        var match = document.getElementById("r16Five");
        var targetDiv = document.getElementById("qThree");


        var listItems = document.querySelectorAll('#r16Five li');
        listItems.forEach(function(item, index) {
            item.addEventListener('mouseover', function() {
                this.classList.add('list-item-hover');
            });
            item.addEventListener('mouseout', function() {
                this.classList.remove('list-item-hover');
            });
            item.addEventListener('click', function(event) {
                this.classList.remove('list-item-out');
                var winner = (event.target.innerText);
                targetDiv.innerText = winner;
                targetDiv.id = event.target.id;
                targetDiv.className = event.target.className;
                var nextIndex = (index + 1) % listItems.length;
                var nextTeam = listItems[nextIndex];
                nextTeam.classList.add('list-item-out');
            });
        });
    };
    r16Five();

    function r16Six () {
        var match = document.getElementById("r16Six");
        var targetDiv = document.getElementById("qSeven");


        var listItems = document.querySelectorAll('#r16Six li');
        listItems.forEach(function(item, index) {
            item.addEventListener('mouseover', function() {
                this.classList.add('list-item-hover');
            });
            item.addEventListener('mouseout', function() {
                this.classList.remove('list-item-hover');
            });
            item.addEventListener('click', function(event) {
                this.classList.remove('list-item-out');
                var winner = (event.target.innerText);
                targetDiv.innerText = winner;
                targetDiv.id = event.target.id;
                targetDiv.className = event.target.className;
                var nextIndex = (index + 1) % listItems.length;
                var nextTeam = listItems[nextIndex];
                nextTeam.classList.add('list-item-out');
            });
        });
    };
    r16Six();

    function r16Seven () {
        var match = document.getElementById("r16Seven");
        var targetDiv = document.getElementById("qFour");


        var listItems = document.querySelectorAll('#r16Seven li');
        listItems.forEach(function(item, index) {
            item.addEventListener('mouseover', function() {
                this.classList.add('list-item-hover');
            });
            item.addEventListener('mouseout', function() {
                this.classList.remove('list-item-hover');
            });
            item.addEventListener('click', function(event) {
                this.classList.remove('list-item-out');
                var winner = (event.target.innerText);
                targetDiv.innerText = winner;
                targetDiv.id = event.target.id;
                targetDiv.className = event.target.className;
                var nextIndex = (index + 1) % listItems.length;
                var nextTeam = listItems[nextIndex];
                nextTeam.classList.add('list-item-out');
            });
        });
    };
    r16Seven();

    function r16Eight () {
        var match = document.getElementById("r16Eight");
        var targetDiv = document.getElementById("qEight");


        var listItems = document.querySelectorAll('#r16Eight li');
        listItems.forEach(function(item, index) {
            item.addEventListener('mouseover', function() {
                this.classList.add('list-item-hover');
            });
            item.addEventListener('mouseout', function() {
                this.classList.remove('list-item-hover');
            });
            item.addEventListener('click', function(event) {
                this.classList.remove('list-item-out');
                var winner = (event.target.innerText);
                targetDiv.innerText = winner;
                targetDiv.id = event.target.id;
                targetDiv.className = event.target.className;
                var nextIndex = (index + 1) % listItems.length;
                var nextTeam = listItems[nextIndex];
                nextTeam.classList.add('list-item-out');
            });
        });
    };
    r16Eight();

}
r16Prog();

function quartersProg() {

    function qLeftOne () {
        var match = document.getElementById("quartOne");
        var targetDiv = document.getElementById("sOne");


        var listItems = document.querySelectorAll('#quartOne li');
        listItems.forEach(function(item, index) {
            item.addEventListener('mouseover', function() {
                this.classList.add('list-item-hover');
            });
            item.addEventListener('mouseout', function() {
                this.classList.remove('list-item-hover');
            });
            item.addEventListener('click', function(event) {
                this.classList.remove('list-item-out');
                var winner = (event.target.innerText);
                targetDiv.innerText = winner;
                targetDiv.id = event.target.id;
                targetDiv.className = event.target.className;
                var nextIndex = (index + 1) % listItems.length;
                var nextTeam = listItems[nextIndex];
                nextTeam.classList.add('list-item-out');
            });
        });
    };
    qLeftOne();

    function qLeftTwo () {
        var match = document.getElementById("quartTwo");
        var targetDiv = document.getElementById("sTwo");


        var listItems = document.querySelectorAll('#quartTwo li');
        listItems.forEach(function(item, index) {
            item.addEventListener('mouseover', function() {
                this.classList.add('list-item-hover');
            });
            item.addEventListener('mouseout', function() {
                this.classList.remove('list-item-hover');
            });
            item.addEventListener('click', function(event) {
                this.classList.remove('list-item-out');
                var winner = (event.target.innerText);
                targetDiv.innerText = winner;
                targetDiv.id = event.target.id;
                targetDiv.className = event.target.className;
                var nextIndex = (index + 1) % listItems.length;
                var nextTeam = listItems[nextIndex];
                nextTeam.classList.add('list-item-out');
            });
        });
    };
    qLeftTwo();

    function qRightOne () {
        var match = document.getElementById("quartThree");
        var targetDiv = document.getElementById("sThree");


        var listItems = document.querySelectorAll('#quartThree li');
        listItems.forEach(function(item, index) {
            item.addEventListener('mouseover', function() {
                this.classList.add('list-item-hover');
            });
            item.addEventListener('mouseout', function() {
                this.classList.remove('list-item-hover');
            });
            item.addEventListener('click', function(event) {
                this.classList.remove('list-item-out');
                var winner = (event.target.innerText);
                targetDiv.innerText = winner;
                targetDiv.id = event.target.id;
                targetDiv.className = event.target.className;
                var nextIndex = (index + 1) % listItems.length;
                var nextTeam = listItems[nextIndex];
                nextTeam.classList.add('list-item-out');
            });
        });
    };
    qRightOne();

    function qRightTwo () {
        var match = document.getElementById("quartFour");
        var targetDiv = document.getElementById("sFour");


        var listItems = document.querySelectorAll('#quartFour li');
        listItems.forEach(function(item, index) {
            item.addEventListener('mouseover', function() {
                this.classList.add('list-item-hover');
            });
            item.addEventListener('mouseout', function() {
                this.classList.remove('list-item-hover');
            });
            item.addEventListener('click', function(event) {
                this.classList.remove('list-item-out');
                var winner = (event.target.innerText);
                targetDiv.innerText = winner;
                targetDiv.id = event.target.id;
                targetDiv.className = event.target.className;
                var nextIndex = (index + 1) % listItems.length;
                var nextTeam = listItems[nextIndex];
                nextTeam.classList.add('list-item-out');
            });
        });
    };
    qRightTwo();
}
quartersProg();

function finalsProg() {

    function finalOne() {
        var match = document.getElementById("semiOne");
        var targetDiv = document.getElementById("fOne");
        var thirdplaceDiv = document.getElementById("thirdOne");

        var listItems = document.querySelectorAll('#semiOne li');
        listItems.forEach(function(item, index) {
            item.addEventListener('mouseover', function() {
                this.classList.add('list-item-hover');
            });
            item.addEventListener('mouseout', function() {
                this.classList.remove('list-item-hover');
            });
            item.addEventListener('click', function(event) {
                this.classList.remove('list-item-out');
                var winner = (event.target.innerText);
                targetDiv.innerText = winner;
                targetDiv.id = event.target.id;
                targetDiv.className = event.target.className;
                var nextIndex = (index + 1) % listItems.length;
                var nextTeam = listItems[nextIndex];
                thirdplaceDiv.innerText = nextTeam.innerText;
                thirdplaceDiv.id = nextTeam.id;
                thirdplaceDiv.className = nextTeam.className;
                nextTeam.classList.add('list-item-out');
            });
        });
    };
    finalOne();

    function finalTwo() {
        var match = document.getElementById("semiTwo");
        var targetDiv = document.getElementById("fTwo");
        var thirdplaceDiv = document.getElementById("thirdTwo");

        var listItems = document.querySelectorAll('#semiTwo li');
        listItems.forEach(function(item, index) {
            item.addEventListener('mouseover', function() {
                this.classList.add('list-item-hover');
            });
            item.addEventListener('mouseout', function() {
                this.classList.remove('list-item-hover');
            });
            item.addEventListener('click', function(event) {
                this.classList.remove('list-item-out');
                var winner = (event.target.innerText);
                targetDiv.innerText = winner;
                targetDiv.id = event.target.id;
                targetDiv.className = event.target.className;
                var nextIndex = (index + 1) % listItems.length;
                var nextTeam = listItems[nextIndex];
                thirdplaceDiv.innerText = nextTeam.innerText;
                thirdplaceDiv.id = nextTeam.id;
                thirdplaceDiv.className = nextTeam.className;
                nextTeam.classList.add('list-item-out');
            });
        });
    };
    finalTwo();

    function winner() {
        var match = document.getElementById("finalMatch");
        var targetDiv = document.getElementById("winningTeam");

        var listItems = document.querySelectorAll('#finalMatch li');
        listItems.forEach(function(item,index) {
            item.addEventListener('mouseover', function() {
                this.classList.add('list-item-hover');
            });
            item.addEventListener('mouseout', function() {
                this.classList.remove('list-item-hover');
            });
            item.addEventListener('click', function(event) {
                var winner = (event.target.innerText);
                targetDiv.innerText = winner;
                targetDiv.id = event.target.id;
                targetDiv.className = event.target.className;
                var nextIndex = (index + 1) % listItems.length;
                var nextTeam = listItems[nextIndex];
                nextTeam.classList.add('list-item-out');
            });
        });
    };
    winner();

    function third() {
        var match = document.getElementById("thirdMatch");

        var listItems = document.querySelectorAll('#thirdMatch li');
        listItems.forEach(function(item,index) {
            item.addEventListener('mouseover', function() {
                this.classList.add('list-item-hover');
            });
            item.addEventListener('mouseout', function() {
                this.classList.remove('list-item-hover');
            });
            item.addEventListener('click', function(event) {
                var winner = (event.target.innerText);
                var nextIndex = (index + 1) % listItems.length;
                var nextTeam = listItems[nextIndex];
                nextTeam.classList.add('list-item-out');
            });
        });
    };
    third();
}
finalsProg();