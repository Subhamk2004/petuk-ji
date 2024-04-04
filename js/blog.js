

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
    let startIndex = 0;
    const blogsPerPage = 4;
    let totalBlogs = 0;
    
    function showLoader() {
        document.getElementById('loaderContainer').style.display = 'block';
    }
    
    function hideLoader() {
        document.getElementById('loaderContainer').style.display = 'none';
    }
    
    function fetchDataAndCreateCardsForBlog() {
        showLoader();
        fetch('https://script.google.com/macros/s/AKfycbzhbbFnPwOzAWZLj6WTC7zKDfv7pxtutTAXqnaJLT5aAimg99neHZxOCwi_5Bn1eT9l/exec')
            .then(response => response.json())
            .then(data => {
                const dataList = data.data;
                const cardRow = document.getElementById('cardRow');
                let currentRow;
    

                for (let i = startIndex; i < Math.min(startIndex + blogsPerPage, dataList.length); i++) {
                    const item = dataList[i];
                    if (i % 4 === 0) {
                        cardRow.innerHTML += `<div class="row row-cols-1 row-cols-md-4 g-4" id="row${Math.floor(i / 4)}"></div>`;
                        currentRow = document.getElementById(`row${Math.floor(i / 4)}`);
                    }
                    currentRow.innerHTML += `
                        <div class="col">
                            <div class="card">
                                <div class="img_div">
                                    <img src="${item.pic}" class="card-img-top" alt="${item.name}">
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">${item.name}</h5>
                                    <p class="card-text">${item.details}</p>
                                </div>
                                <div class="links">
                                    <a class="read_link" href="${item.read}">
                                        <button class="read_button">Read</button>
                                    </a>
                                    <input type="text" value="${item.read}" id="myLink" readonly style="border: none; background-color: transparent; opacity:0; height:0;width:0">
                                    <button class="share_button">Share</button>
                                    <div class="prompt">${item.share}</div>
                                </div>
                            </div>
                        </div>`;
                    totalBlogs++;
                }

                startIndex += blogsPerPage;
    
                if (startIndex >= dataList.length) {
                    document.getElementById('showMoreButton').style.display = 'none';
                }
                hideLoader();
            })
            .catch(error => {
                console.error('Error fetching data for blogs:', error);
                hideLoader();
            });
    }

    fetchDataAndCreateCardsForBlog();
    
    document.getElementById('showMoreButton').addEventListener('click', function() {
        fetchDataAndCreateCardsForBlog();
    });
    

});