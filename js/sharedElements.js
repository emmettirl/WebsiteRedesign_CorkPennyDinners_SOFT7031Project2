function createNavbar() {
    return `
    <nav class="navbar navbar-expand-lg mainNav sticky-top">
        <div class="container-fluid">
            <a class="navbar-brand" href="#"><strong>CORK PENNY DINNERS</strong> <em> |  Charity: CHY 4971.</em></a>
            
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" 
                    data-bs-target="#navbarNav" aria-controls="navbarNav" 
                    aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="index.html">Home</a>
                    </li>
                    <li>
                        <a class="nav-link" href="about.html">About</a>
                    </li>
                    <li>
                        <a class="nav-link" href="media.html">Media</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>`;
}

function createFooter() {
    return `
    <footer>
        <div class="footerSection">
            <p>
                 | Cork Penny Dinners | 4, Little Hanover Street, Cork | Tel: <a href="tel:+353214275604">021 4275604</a> |
                Email: <a href="mailto:mail@corkpennydinners.ie?subject=website%20email">mail@corkpennydinners.ie</a> | 
            </p>
        </div>
    
        <div class="footerSection"> | 
            <a href="About.html">Who we are</a> | 
            <a href="https://www.google.ie/maps/place/Penny+Dinners/@51.8976422,-8.4835751,17z/data=!3m1!4b1!4m5!3m4!1s0x484490179f625e07:0x274d054ff202fe0f!8m2!3d51.8976422!4d-8.4813864">Find
                Us</a> | 
            <a href="index.html#getInvolved">Donate</a> | 
            <a href="About.html#trustees">Trustees</a> | 
            <a href="cookiePolicy.html">Privacy Policy and Cookies</a> | 
        </div>
    </footer>`;
}

function createFABs() {
    return `
    <a href="index.html#access-tab" class="btn btn-primary floating-btn" id="floating-btn1">ACCESS OUR SERVICES</a>\n
    <a href="index.html#social-tab" class="btn btn-primary floating-btn" id="floating-btn2">MAKE YOUR CONTRIBUTION</a>`;
}

function cookieConsentButtons() {

    document.getElementById('accept').addEventListener('click', function() {
        document.cookie = "userAcceptedCookies=true; path=/; max-age=86400";
        document.getElementById('cookie-container').style.display = 'none';
    });

    document.getElementById('decline').addEventListener('click', function() {
        document.getElementById('cookie-container').style.display = 'none';
    });
}

function getCookieConsentStatus() {
    var allCookies = document.cookie.split(';');
    for (var i = 0; i < allCookies.length; i++) {
        var cookie = allCookies[i].trim();
        if (cookie.startsWith("userAcceptedCookies" + '=')) {
            return true;
        }
    }
    return false;
}

function createCookiebar() {
    document.getElementById("cookie-container").style.display="block"

    return `
    <div class="row justify-content-center align-items-center">
        <div class="col-auto">
            <p>This site Uses Cookies</p>
        </div>
        <div class="col-auto">
            <p><a href="cookiePolicy.html" target="_blank">Learn More</a></p>
        </div>
        <div class="col-auto">
            <p><a href="#accept" class="btn btn-success" id="accept">Accept</a></p>
        </div>
        <div class="col-auto">
            <p><a href="#decline" class="btn btn-danger" id="decline">Decline</a></p>
        </div>
    </div>
    `}

document.getElementById('navbar-container').innerHTML = createNavbar();
document.getElementById('footer-container').innerHTML = createFooter();
document.getElementById('fab-container').innerHTML = createFABs();

if (getCookieConsentStatus() === false) {
    document.getElementById('cookie-container').innerHTML = createCookiebar();
}

cookieConsentButtons();


