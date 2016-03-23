/*jslint browser: true*/
/*global $, jQuery, alert, planets*/
$(document).ready(function () {
    "use strict";
    //I want to believe!
    function animate() {
        $('#ufo').css({left: -200});
        $('#ufo').toggle();
        $('#ufo').animate({left: '+=150', top: '-=100'}, 1000);
        $('#ufo').animate({left: '+=100', top: '+=200'}, 1000);
        $('#ufo').animate({left: '+=1500', top: '-=100'}, 1000);
        setTimeout(function () {
            $('#ufo').toggle();
        }, 4000);
    }
    //planets list taken from json data
    $('#planetTableHeaderText').click(function () {
        var planetTable = $('#planetTableBody'),
            planetsObj,
            planetsArray = [],
            time = 250;
        if ($('#planetTableBody >td').length < 9) {
            //go get the json data
            planetsObj = JSON.parse(planets);
            $.each(planetsObj, function (index, planet) {
                var img = document.createElement('img'),
                    tdA = document.createElement('td'),
                    a = document.createElement('a');

                //set up the image associated with the planet
                img.src = 'img/' + planet.name.toLowerCase() + '.jpg';
                img.width = 100;
                img.height = 100;

                if (planet.name === 'Pluto') {
                    img.title = 'I was a planet until August 2006!';
                }

                a.textContent = planet.name;
                a.href = planet.website;
                a.target = '_blank';

                //create table cell with both
                tdA.appendChild(img);
                tdA.appendChild(document.createElement('br'));
                tdA.appendChild(a);

                //add the table cell to an array
                planetsArray[index] = tdA;
            });
            //foreach loop on our planet table cell array
            $.each(planetsArray, function (index) {
                setTimeout(function () {
                    //add the planet to the table
                    planetTable.append(planetsArray[index]);
                }, time);
                time += 250;
            });
            $('#planetTableHeaderText').text('Click to Hide Planet Info');
            animate();


        } else {
            //<a href="#" id="planetsHeader">Click to Learn More About The Planets!
            $('#planetTableHeaderText').text('Click to Show Planet Info');
            planetTable.empty();
        }
    });


});
