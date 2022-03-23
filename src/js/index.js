const scrollingSection = document.getElementById('scrolling');

// Scroll_list

const URL = 'https://picsum.photos/200/300?random=';

        const scrollContainer = document.getElementById('scrollContainer')


function getRandNum() {
    return Math.floor(Math.random() * 100) ;
}

function randNum() {
    return Math.floor(Math.random() * (5 - 2)) + 2 ;
}

function loadImages(numImages = 30){
    let i = 0;
    while(i < numImages) {
        // const profileDiv = document.createElement('div');
        // const profileImg = document.createElement('img');
        // const profileText = document.createElement('p')

        const imgDiv  = document.createElement('div');
        const img = document.createElement('img');
        
        const overlayImg = document.createElement('div');
        const overlayBTN = document.createElement('button');
        const overlayDiv = document.createElement('div');
        const overlayDivShare = document.createElement('div');
        const overlayDivShareImg = document.createElement('div');
        const overlayDivComplaint = document.createElement('div');
        const overlayDivComplaintImg = document.createElement('div');

        // profileDiv.className = 'profile_container';

        overlayImg.className = 'overlay_img';
        overlayBTN.className = 'overlay_btn';
        overlayBTN.append(document.createTextNode('Сохранить'));
        overlayDiv.className = 'overlay_div';
        overlayDivComplaintImg.className = 'div_complaint_img';
        overlayDivComplaint.className = 'overlay_div_complaint';
        overlayDivShareImg.className = 'div_share_img';
        // overlayDivShareImg.src =  '../images/share-icon.png'
        overlayDivShare.className = 'overlay_div_share';
        // overlayDivShare.id = ''
        overlayDivShare.addEventListener("click", popupToggleShare)
        overlayDivComplaint.addEventListener("click", popupToggleComplaint)

        imgDiv.className = 'scroll_div';
        img.className = 'scroll_img';
        img.src = `https://picsum.photos/200/${randNum()}00?random=${getRandNum()}`
        // profileImg.src = `https://picsum.photos/200/200?random=${getRandNum()}`

        // profileDiv.append(profileImg, profileText)

        scrollContainer.append(imgDiv);
        imgDiv.append(img, overlayImg);

        overlayImg.append(overlayBTN, overlayDiv);
        overlayDiv.append(overlayDivShare, overlayDivComplaint);
        overlayDivComplaint.append(overlayDivComplaintImg)
        overlayDivShare.append(overlayDivShareImg);

        i++
    }
}

loadImages();

window.addEventListener('scroll', () => {
    if(window.scrollY + window.innerHeight >= document.documentElement.scrollHeight){
        loadImages();
    }
});

// Popups

const extraPopup = document.getElementById('extraPopup')
const pinPopup = document.getElementById('pinPopup')
const complainingPopup = document.getElementById('complainingPopup');
const reportPopup = document.getElementById('reportPopup');
const complainingBtn = document.getElementById('complainingBtn');
const complainingBg = document.getElementById('complainingBg')
const complaintPopup = document.getElementById('complaintPopup')
const sharePopup = document.getElementById('sharePopup');
const notifications_popup = document.getElementById('header_bell_popup');
const inbox_popup = document.getElementById('header_inbox_popup');
const clean_popup = document.getElementById('clean_popup'); 
const messages_popup = document.getElementById('content_second');
const expand_popup = document.getElementById('header_expand_popup');

function popupDoneReport(){
//     const reportDone = document.createElement('div');
//     reportDone.className = 'report_done';
//     reportDone.append(document.createTextNode('Спасибо! Благодаря вашим отзывам мы сможем сделать Pinterest ещё лучше'));
//     scrollingSection.append(reportDone);
    
//     var reportDoneActive;

//     function reportDoneActivation() {
        // reportDoneActive = setTimeout(function(){ reportDone.classList.add('active'); }, 500)
//         reportDone.classList.toggle('active')
//     }

    complainingBg.classList.remove('active');
    complainingBtn.classList.remove('active');
    complainingPopup.classList.remove('active');
    reportPopup.classList.remove('active');
}

function popupToggleExtra(){
    extraPopup.classList.toggle('active');
    pinPopup.classList.remove('active');
    clean_popup.classList.remove('active');
    inbox_popup.classList.remove('active');
    messages_popup.classList.remove('active');
    expand_popup.classList.remove('active');
    notifications_popup.classList.remove('active');
    sharePopup.classList.remove('active');
    complainingBtn.classList.remove('active');
    complaintPopup.classList.remove('active');
}

function popupTogglePin(){
    pinPopup.classList.toggle('active');
    extraPopup.classList.remove('active');
    clean_popup.classList.remove('active');
    inbox_popup.classList.remove('active');
    messages_popup.classList.remove('active');
    expand_popup.classList.remove('active');
    notifications_popup.classList.remove('active');
    sharePopup.classList.remove('active');
    complainingBtn.classList.remove('active');
    complaintPopup.classList.remove('active');
}

function popupAddReport(){
    reportPopup.classList.add('active');
    complainingBtn.classList.remove('active');
    complainingPopup.classList.remove('active');
}

function popupRemoveReport(){
    reportPopup.classList.remove('active')
    complainingPopup.classList.add('active')
}

function popupAddComplaining(){
    complainingBg.classList.add('active');
    complainingPopup.classList.add('active');
}

function popupRemoveComplaining(){
    complainingBg.classList.remove('active');
    complainingBtn.classList.remove('active');
    complainingPopup.classList.remove('active');
}

function popupToggleExpand(){
    expand_popup.classList.toggle('active');
    sharePopup.classList.remove('active');
    notifications_popup.classList.remove('active');
    clean_popup.classList.remove('active');
    inbox_popup.classList.remove('active');
    messages_popup.classList.remove('active');
    complaintPopup.classList.remove('active');
    extraPopup.classList.remove('active');
    pinPopup.classList.remove('active');
}

function popupToggleNotifications(){
    notifications_popup.classList.toggle('active');
    sharePopup.classList.remove('active');
    clean_popup.classList.remove('active');
    inbox_popup.classList.remove('active');
    messages_popup.classList.remove('active');
    expand_popup.classList.remove('active');
    complaintPopup.classList.remove('active');
    extraPopup.classList.remove('active');
    pinPopup.classList.remove('active');
}

function popupToggleInBox(){
    inbox_popup.classList.toggle('active');
    sharePopup.classList.remove('active');
    notifications_popup.classList.remove('active');
    messages_popup.classList.remove('active');
    clean_popup.classList.remove('active');
    expand_popup.classList.remove('active');
    complaintPopup.classList.remove('active');
    extraPopup.classList.remove('active');
    pinPopup.classList.remove('active');
}

function popupToggleMessages(){
    messages_popup.classList.toggle('active');
    clean_popup.classList.remove('active');
    expand_popup.classList.remove('active');
}

function popupToggleShare() {
    sharePopup.classList.toggle('active');
    clean_popup.classList.remove('active');
    inbox_popup.classList.remove('active');
    messages_popup.classList.remove('active');
    expand_popup.classList.remove('active');
    notifications_popup.classList.remove('active');
    complaintPopup.classList.remove('active');
    extraPopup.classList.remove('active');
    pinPopup.classList.remove('active');
}

function popupToggleComplaint(){
    complaintPopup.classList.toggle('active')
    clean_popup.classList.remove('active');
    inbox_popup.classList.remove('active');
    messages_popup.classList.remove('active');
    expand_popup.classList.remove('active');
    notifications_popup.classList.remove('active');
    sharePopup.classList.remove('active');
    complainingBtn.classList.remove('active');
    extraPopup.classList.remove('active');
    pinPopup.classList.remove('active');
}

function popupToggleClean(){
    clean_popup.classList.toggle('active');
}

function popupToggleSecond(){
    messages_popup.classList.remove('active');
}

function activationBtn(){
    complainingBtn.classList.add('active');
}