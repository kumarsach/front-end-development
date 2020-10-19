fetch('colleges.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
    });

function appendData(data) {
    var div = document.getElementById('myTable');

    for (var i = 0; i < data.length; i++) {
        var row = `<div class="gallery" >
                    <div class="divImg">
                    
                        <div class="imgInner1">${data[i].tags[0]}</div>
                        <div class="imgInner2">${data[i].tags[1]}</div>
                        <div class="imgInner3">#${data[i].ranking}</div>
                        <div class="imgInner4"><font size="+1"><center><b>${data[i].rating}</b></font>/5</center><p style="font-size:10px;">${data[i].rating_remarks}</p></div>
                        <div class="imgInner5">PROMOTED</div>

                    </div>
                    <div class="desc">
                        <div class="desc1"><b>${data[i].college_name}</b><p><font size="-1">${data[i].nearest_place[0]}<b> | </b><font  color="gray">${data[i].nearest_place[1]}</p><p>${data[i].famous_nearest_places}</font></font></p><p id="offertext">${data[i].offertext}</p></div>
                        <div class="desc2"><font><s>₹${data[i].original_fees}</s></font> <font size="+2" color="blue">-${data[i].discount}%</font><p><font size="+3" color="red">₹${data[i].discounted_fees}</font><p><font size="-10">${data[i].fees_cycle}</font><br><font size="-1">${data[i].amenties}</font></p></div>
                    </div>
                    </div>`
        // i = i + 1;
        div.innerHTML += row
    }
}