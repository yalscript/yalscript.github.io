window.addEventListener('load', function () {
    var seconds = new Date().getTime();
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", '/version.json?v=' + seconds, true);
    xmlhttp.onload = async function () {
        if (xmlhttp.status == 200) {
            print("version file downloaded...")
            var response = JSON.parse(xmlhttp.responseText);
            var buildNumber = response.build_number;
            var currentBuildNumber = window.localStorage.getItem('buildNumber');
            print("retrieved build number...")
            if (currentBuildNumber && currentBuildNumber != buildNumber) {
                print("deleting cache...")
                await caches.delete('flutter-app-manifest');
                await caches.delete('flutter-temp-cache');
                await caches.delete('flutter-app-cache');
                print("cache deleted...")
                window.localStorage.setItem('buildNumber', buildNumber);
                print("build number set...")
                location.reload(true);
            }
        }
    };
    xmlhttp.send();
});

