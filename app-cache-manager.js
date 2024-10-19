window.addEventListener('load', function () {
    var seconds = new Date().getTime();
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", '/version.json?v=' + seconds, true);
    xmlhttp.onload = async function () {
        if (xmlhttp.status == 200) {
            console.log("version file downloaded...")
            var response = JSON.parse(xmlhttp.responseText);
            var buildNumber = response.build_number;
            var currentBuildNumber = window.localStorage.getItem('buildNumber');
            console.log("retrieved build number...")
            if (currentBuildNumber && currentBuildNumber != buildNumber) {
                console.log("deleting cache...")
                await caches.delete('flutter-app-manifest');
                await caches.delete('flutter-temp-cache');
                await caches.delete('flutter-app-cache');
                console.log("cache deleted...")
                window.localStorage.setItem('buildNumber', buildNumber);
                console.log("build number set...")
                location.reload(true);
            }
        }
    };
    xmlhttp.send();
});

