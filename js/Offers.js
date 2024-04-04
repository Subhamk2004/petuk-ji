

$(document).ready(function () {
    $(".loader_container").hide(0);

    if ($(window).width() > 950) {
        $(".menu_container").hide(0);
    }

    $(".menu_container").hide(0);
    var open = Number(0);
    $(".menu_icon").click(function () {
        $(".menu_container").slideDown(500);
        open++;
        if (open === 2) {
            $(".menu_container").slideUp(500);
            open = 0;
        }
    });

    function fetchDataAndCreateCardsForTerms() {
        fetch('https://script.google.com/macros/s/AKfycbzW9qOnzwVY41-sgKVDxRVdZ38XTO4eJR2NYFGx9hNrUMoDTdMtr-ujyvTivUAw9w-yzg/exec')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                const dataList = data.data;
    
                const blogBody = document.querySelector('.blog_body');
                blogBody.innerHTML = '';
    
                // Iterate through the data and populate the HTML structure
                for (const heading in dataList) {
                    if (dataList.hasOwnProperty(heading) && Array.isArray(dataList[heading]) && dataList[heading].length > 0) {
                        // Create a div for the heading and points
                        const divElement = document.createElement('div');
                        divElement.classList.add('heading-container');
    
                        // Create heading element
                        const headingElement = document.createElement('h2');
                        headingElement.textContent = heading;
                        headingElement.classList.add("headings");
                        divElement.appendChild(headingElement);
    
                       
                        const ulElement = document.createElement('ul');
                        dataList[heading].forEach(point => {
                            if (point) { 
                                const pointElement = document.createElement('li');
                                pointElement.classList.add("points");
                                pointElement.textContent = point;
                                ulElement.appendChild(pointElement);
                            }
                        });
    
                    
                        if (ulElement.childNodes.length > 0) {
                            divElement.appendChild(ulElement);
                        }
    
                        blogBody.appendChild(divElement);
                    }
                }
            })
            .catch(error => console.error('Error fetching data:', error));
    }
    
    
    fetchDataAndCreateCardsForTerms();
    
});