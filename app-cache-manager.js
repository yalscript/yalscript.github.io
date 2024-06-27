window.addEventListener('load', function () {
    var seconds = new Date().getTime();
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", '/version.json?v=' + seconds, true);
    xmlhttp.onload = async function () {
        if (xmlhttp.status == 200) {
            var response = JSON.parse(xmlhttp.responseText);
            var buildNumber = response.build_number;
            var currentBuildNumber = window.localStorage.getItem('buildNumber');
            
            if (currentBuildNumber && currentBuildNumber != buildNumber) {
                await caches.delete('flutter-app-manifest');
                await caches.delete('flutter-temp-cache');
                await caches.delete('flutter-app-cache');

                window.localStorage.setItem('buildNumber', buildNumber);

                location.reload(true);
            }
        }
    };
    xmlhttp.send();
});

