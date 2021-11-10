window.onload = function BuyerMap() {

    buyershowMap(locationShops);
}

function buyershowMap(locations){
    let sch = location.search
    const params = new URLSearchParams(sch);

    var map = new naver.maps.Map('map', {
        center: new naver.maps.LatLng(params.get('lat'), params.get('lon')),
        zoom: 15
    });


    for (let i = 0; i < locations.length; i++) {
        var marker = new naver.maps.Marker({
            map: map,
            title: locations[i].place,
            position: new naver.maps.LatLng(locations[i].latitude, locations[i].longitude),
        });


        // 가게정보 json으로 받아와서 html코드로 작성
        var contentString = [
            '<div class="iw_inner">',
            '   <h3>서울특별시청</h3>',
            '   <p>서울특별시 중구 태평로1가 31 | 서울특별시 중구 세종대로 110 서울특별시청<br />',
            // '       <img src="'+ HOME_PATH +'/img/example/hi-seoul.jpg" width="55" height="55" alt="서울시청" class="thumb" /><br />',
            '       02-120 | 공공,사회기관 &gt; 특별,광역시청<br />',
            '       <a href="http://www.seoul.go.kr" target="_blank">www.seoul.go.kr/</a>',
            '   </p>',
            '</div>'
        ].join('');

        var infowindow = new naver.maps.InfoWindow({ // 마커정보인듯
            content: contentString,
            maxWidth: 140,
            backgroundColor: "#eee",
            borderColor: "#2db400",
            borderWidth: 5,
            anchorSize: new naver.maps.Size(30, 30),
            anchorSkew: true,
            anchorColor: "#eee",
            pixelOffset: new naver.maps.Point(20, -20)
        });

        naver.maps.Event.addListener(marker, "click", function (e) { // 클릭시 마커에 등록된 정보들 출력하는 함수인듯
            if (infowindow.getMap()) {
                infowindow.close();
            } else {
                infowindow.open(map, marker);
            }
        });
    }
}
