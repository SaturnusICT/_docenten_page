function logoutFunction () 
{
    var logoutPopup = document.getElementById('logout_Popup');
    logoutPopup.classList.remove('div_Away');
    logoutPopup.classList.add('div_Show');

}

function logoutNo() {
    var logoutpopup = document.getElementById('logout_Popup');
    logoutpopup.classList.remove('div_Show');
    logoutpopup.classList.add('div_Away');
}

function logoutYes()
{
    alert('Logout later')
}

function docMoveLeft() {
    var mainpage = document.getElementById('mainPage');
    var resultspage = document.getElementById('results_Page');
    var controlpage = document.getElementById('control_Page');
    var popup = document.getElementById('disp_move_error');
    if(mainpage.classList.contains('div_Show'))
    {
        // Popup notification
        popup.classList.remove('div_Away');
        popup.classList.add('div_Show')

    } else if (resultspage.classList.contains('div_Show'))
    {
        resultspage.classList.remove('div_Show');
        resultspage.classList.add('div_Away');
        mainpage.classList.remove('div_Away');
        mainpage.classList.add('div_Show');
    } else if (controlpage.classList.contains('div_Show'))
    {
        controlpage.classList.remove('div_Show');
        controlpage.classList.add('div_Away');
        resultspage.classList.remove('div_Away');
        resultspage.classList.add('div_Show');
    }

}

function docMoveRight() {
    var mainpage = document.getElementById('mainPage');
    var resultspage = document.getElementById('results_Page');
    var controlpage = document.getElementById('control_Page');

    if(mainpage.classList.contains('div_Show'))
    {
        mainpage.classList.remove('div_Show');
        mainpage.classList.add('div_Away');
        resultspage.classList.remove('div_Away')
        resultspage.classList.add('div_Show');
    } else if (resultspage.classList.contains('div_Show'))
    {
        resultspage.classList.remove('div_Show');
        resultspage.classList.add('div_Away');
        controlpage.classList.remove('div_Away')
        controlpage.classList.add('div_Show')
    } else if (controlpage.classList.contains('div_Show'))
    {
        // Popup
        alert('Placeholder notification');
    }
}

function errhandelendpage () {
    var disperrokay = document.getElementById('disp_move_error');
    disperrokay.classList.remove('div_Show');
    disperrokay.classList.add('div_Away');
}
