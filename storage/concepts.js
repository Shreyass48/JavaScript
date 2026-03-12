// localstorage : This store data to client side if you close the window data still remain
// data capacity : ~ 5MB
localStorage.setItem("name", "Shreyas");
localStorage.getItem("name");
localStorage.removeItem("name");

localStorage.clear();

// sessionstorage : This store data to client side if you close the window data will be removed
// data capacity : ~ 5MB
sessionStorage.setItem("sessionName", "Shreyas");
sessionStorage.getItem("sessionName");
sessionStorage.removeItem("sessionName");

sessionStorage.clear();

// cookies : This store data to cookie with expiry time if you close the window data still remain until expiry time(for light data)
// data automatic send to server with every request
// data capacity : ~ 4KB

document.cookie = "username=shreyas";
