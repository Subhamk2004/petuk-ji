$(document).ready(function () {

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
});

function fetchDataAndCreateCardsForAcheivement() {
    fetch('https://script.google.com/macros/s/AKfycbzhorUVn2z6kWcuvsMwiHsvJ0rSERfX93Zh_dUb86tRafBrBkQUgIGX5QhAnzlkMLoGcw/exec')
        .then(response => response.json())
        .then(data => {
            const dataList = data.data;
            const cardRow = document.getElementById('cardRow');
            let currentRow;
            dataList.forEach((item, index) => {
                if (index % 100 === 0) {
                    // Create a new row after every 100th card
                    cardRow.innerHTML += `<div class="row row-cols-1 row-cols-md-4 g-4" id="row${Math.floor(index / 3)}"></div>`;
                    currentRow = document.getElementById(`row${Math.floor(index / 3)}`);
                }
                currentRow.innerHTML += `
                    <div class="col">
                        <div class="card">
                        <div class = "img_div">
                            <img src="${item.pic}" class="card-img-top" alt="${item.name}">
                        </div>
                            <div class="card-body">
                                <h5 class="card-title">${item.name}</h5>
                                <p class="card-text">${item.details}</p>
                            </div>
                        </div>
                    </div>`;
            });
        })
        .catch(error => console.error('Error fetching data for acheivements:', error));
}

$(document).ready(function () {
    $(document).on('click', '.share_button', function () {
        var $link = $(this).closest('.links').find('input[type="text"]');
        var linkValue = $link.val();

        if (navigator.clipboard) {
            navigator.clipboard.writeText(linkValue).then(function () {
                console.log('Link copied to clipboard');
            }).catch(function (error) {
                console.error('Error copying link to clipboard:', error);
            });
        } else {
            var tempInput = document.createElement("textarea");
            tempInput.value = linkValue;
            document.body.appendChild(tempInput);
            tempInput.select();
            document.execCommand("copy");
            document.body.removeChild(tempInput);
            console.log('Link copied to clipboard');
        }
    });
});


function fetchDataAndCreateCardsForBlog() {
    fetch('https://script.google.com/macros/s/AKfycbzhbbFnPwOzAWZLj6WTC7zKDfv7pxtutTAXqnaJLT5aAimg99neHZxOCwi_5Bn1eT9l/exec')
        .then(response => response.json())
        .then(data => {
            const dataList = data.data.slice(0, 3); // Slice to get the first three entries
            const cardRow = document.getElementById('cardRow2');
            let currentRow;
            dataList.forEach((item, index) => {
                if (index % 100 === 0) {
                    cardRow.innerHTML += `<div class="row2 row-cols-1 row-cols-md-4 g-4" id="row2${Math.floor(index / 3)}"></div>`;
                    currentRow = document.getElementById(`row2${Math.floor(index / 3)}`);
                }
                currentRow.innerHTML += `
                <div class="col">
                    <div class="card">
                        <div class = "img_div">
                            <img src="${item.pic}" class="card-img-top" alt="${item.name}">
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">${item.name}</h5>
                            <p class="card-text">${item.details}</p>
                        </div>
                        <div class = "links">
                            <a class = "read_link" href = ${item.read}>
                            <button class = "read_button">
                                Read
                            </button> 
                            </a>
                            <input type="text" value="${item.read}" id="myLink" readonly style="border: none; background-color: transparent; opacity:0; height:0;width:0">
                            <button class = "share_button">
                                Share
                            </button>
                            
                            <div class = "prompt">
                                ${item.share}
                            </div>
                        </div>
                    </div>
                </div>`;
            });
            var no_of_blogs = dataList.length;
            console.log(no_of_blogs);
        })
        .catch(error => console.error('Error fetching data for blogs:', error));
}


function fetchDataAndCreateCardsForITTeam() {
    fetch('https://script.google.com/macros/s/AKfycbyZI_ViU4mCWbdDVbt58cygS4kAd_rdFrzhf_KSf5cJPL1GQApXIeFCWh0nfFKQorc3/exec')
        .then(response => response.json())
        .then(data => {
            const dataList = data.data;
            const cardRow = document.getElementById('cardRow3');
            let currentRow;
            dataList.forEach((item, index) => {
                if (index % 100 === 0) {
                    // Create a new row after every 100th card
                    cardRow.innerHTML += `<div class="row3" id="row3${Math.floor(index / 3)}"></div>`;
                    currentRow = document.getElementById(`row3${Math.floor(index / 3)}`);
                }
                currentRow.innerHTML += `
                    <div class="col">
                        <div class="card">
                            <img src="${item.pic}" class="card-img-top" alt="${item.name}">
                            <div class="card-body">
                                <h5 class="card-title">${item.name}</h5>
                                <p class="card-text">${item.details}</p>
                            </div>
                        </div>
                    </div>`;
            });
        })
        .catch(error => console.error('Error fetching data for IT team:', error));
}



function fetchDataAndCreateCardsForArticles() {
    fetch('https://script.google.com/macros/s/AKfycbx_y49Tvg2bXts8zkakXnmXLYm-YakvcPH6HCAGJ8XM0lD-n8Z4I5__fFsMn0I_LURZ/exec')
        .then(response => response.json())
        .then(data => {
            const dataList = data.data;

            // Create cards dynamically based on fetched data for the IT team
            const cardRow = document.getElementById('cardRow5');
            let currentRow;
            dataList.forEach((item, index) => {
                if (index % 100 === 0) {
                    // Create a new row after every 100th card
                    cardRow.innerHTML += `<div class="row5 row-cols-1 row-cols-md-4 g-4" id="row5${Math.floor(index / 3)}"></div>`;
                    currentRow = document.getElementById(`row5${Math.floor(index / 3)}`);
                }
                currentRow.innerHTML += `
                    <div class="col">
                        <div class="card">
                        <div class = "img_div">
                            <img src="${item.pic}" class="card-img-top" alt="${item.name}">
                        </div>
                            <div class="card-body">
                                
                            </div>
                        </div>
                    </div>`;
            });
        })
        .catch(error => console.error('Error fetching data for blogs:', error));
}

fetchDataAndCreateCardsForITTeam();
fetchDataAndCreateCardsForBlog();
fetchDataAndCreateCardsForArticles();
fetchDataAndCreateCardsForAcheivement();
