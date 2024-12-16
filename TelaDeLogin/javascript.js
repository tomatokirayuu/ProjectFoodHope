function openLoginPage() {
    window.open('index.html', '_self'); 
}

document.addEventListener('DOMContentLoaded', function() {
    
    document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault(); 
        window.location.href = "market.html";
    });
});