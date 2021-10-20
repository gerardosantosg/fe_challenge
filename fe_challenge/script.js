let loginHeaderText = 'Log In';
let isAdminLogin = false;
let totalSiteLogins = 0;

const siteType = document.getElementById('site-type');
const logInTitle = document.getElementById('login-title');
const siteCheckbox = document.getElementById('admin-checkbox');
const totalSiteLoginsContainer = document.getElementById('total-site-logins');
const form = document.querySelector('form');

logInTitle.textContent = loginHeaderText;
totalSiteLoginsContainer.textContent = totalSiteLogins;

siteCheckbox.addEventListener('change', changeSite)
form.addEventListener('submit', increaseLogIns)

function changeSite() {
    isAdminLogin = !isAdminLogin;
    if (isAdminLogin) {
        siteType.textContent = 'Admin';
    } else {
        siteType.textContent = 'Player';
    }
}

function increaseLogIns(event) {
    event.preventDefault();
    totalSiteLogins++
    totalSiteLoginsContainer.textContent = totalSiteLogins;
}





