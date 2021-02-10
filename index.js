const getAndroidVersion = (ua) => {
    ua = (ua || navigator.userAgent).toLowerCase();
    let match = ua.match(/Android\s([0-9\.]*)/i);
    
    const version = match ? match[1] : "Not Available"
    document.getElementById("version").innerHTML = "Android Version Number: " + version;
};

window.onload = getAndroidVersion();

