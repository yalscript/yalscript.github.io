window.addEventListener('load', function () {
    var seconds = new Date().getTime();
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", '/version.json?v=' + seconds, true);
    xmlhttp.onload = function () {
        if (xmlhttp.status == 200) {
            var response = JSON.parse(xmlhttp.responseText);
            var buildNumber = response.build_number;
            var currentBuildNumber = window.localStorage.getItem('buildNumber');

            if (currentBuildNumber && currentBuildNumber != buildNumber) {
                caches.delete('flutter-app-manifest');
                caches.delete('flutter-temp-cache');
                caches.delete('flutter-app-cache');
            }

            window.localStorage.setItem('buildNumber', buildNumber);
        }
    };
    xmlhttp.send();
});

