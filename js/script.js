function myFunction() {
        var x = document.getElementById("myNavbar");
        if (x.className === "navbar") {
        x.className += " responsive";
        } else {
        x.className = "navbar";
        }
    };

var code;

function processForm(event) {
            if (validateForm() == false)
                {
                event.preventDefault();
                }
};
        
function validateForm(){
        
    let nameval = document.getElementById("name").value;
    let webval = document.getElementById("website").value;
    let email1val = document.getElementById("email1").value;
    let email2val = document.getElementById("email2").value;
    let queryval = document.getElementById("query").value;
    let captchaval = document.getElementById("captchaText").value;
            
            if (nameval == "" || nameval == null)
                {
                    document.getElementById("error1").innerHTML="Name is required... Please provide one...";
                    return false;
                }
        
            if else (webval == "" || webval == null)
                {
                    document.getElementById("error2").innerHTML="Website is required... Please provide one...";
                    return false;
                }
        
            if else (email1val == "" || email1val == null)
                {
                    document.getElementById("error3").innerHTML="Email is required... Please provide one...";
                    return false;
                }
        
            if else (email2val == "" || email2val == null)
                {
                    document.getElementById("error4").innerHTML="Email is required... Please provide one...";
                    return false;
                }
        
            if else (queryval == "" || queryval == null)
                {
                    document.getElementById("error5").innerHTML="Query/Comment is required... Please provide one...";
                    return false;
                }
    
            if else (captchaval == "" || captchaval == null)
                {
                    document.getElementById("error6").innerHTML="Captcha must be done...";
                    return false;
                }
        
            if else (!validateWebsite(webval)){
                document.getElementById("error2").innerHTML="Website cannot be found...";
                return false;
            }

            if else (!validateEmail(email1val)){
                document.getElementById("error3").innerHTML="Email is not a valid email...";
                return false;
            }
                
            if else (email1val != email2val){
                document.getElementById("error4").innerHTML="Email does not equal the email previous...";
                return false;
            }
        
            if else (document.getElementById("captchaText").value != code) {
                document.getElementById("error6").innerHTML="Incorrect Captcha..."
                createCaptcha();
                return false;
            }
    
            else
                return true;
};
        
function validateEmail(emailAddress) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(emailAddress);
};

function validateWebsite(websiteValue) {
    const websitePattern = /^[a-zA-Z]+\.[a-zA-Z0-9._-]+\.[a-zA-Z]{2,4}$/;
    return websitePattern.test(websiteValue);
};

function createCaptcha() {
        
    document.getElementById('captcha').innerHTML = "";
        
    var captchaArray = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var length = 6;
    var captcha = [];
        
    for (var i = 0; i < length; i++) {
        var index = Math.floor(Math.random() * captchaArray.length);
            
            if (captcha.indexOf(captchaArray[index]) == -1)
                captcha.push(captchaArray[index]);
            
            else i--;
            
        }
        
    var canv = document.createElement("canvas");
    canv.id = "captcha";
    canv.width = 100;
    canv.height = 50;
        
    var ctx = canv.getContext("2d");
    ctx.font = "25px Calibri";
    ctx.strokeText(captcha.join(""), 0, 30);
        
    code = captcha.join("");
    document.getElementById("captcha").appendChild(canv); 
        
};

document.getElementById("formcomp").addEventListener("submit", processForm);

document.getElementById("lcnext").addEventListener("click", lcnext);
document.getElementById("lcprev").addEventListener("click", lcprev);

let currentlcImg = 1;
function lcnext()
        {
            if (currentlcImg == 2)
                {
                    document.getElementById("lcImg").src="images/lc/lc1";
                    currentlcImg = 1;
                }
            
            else
                {
                    currentlcImg++;
                    document.getElementById("lcImg").src="images/lc/lc"+currentImg+".jpg";
                }
        }
        
function lcprev()
        {
            if (currentlcImg == 1)
                {
                    document.getElementById("lcImg").src="images/lc/lc2";
                    currentlcImg = 2;
                }
            
            else
                {
                    currentlcImg--;
                    document.getElementById("lcImg").src="images/lc/lc"+currentImg+".jpg";
                }
        }

document.getElementById("panext").addEventListener("click", panext);
document.getElementById("paprev").addEventListener("click", paprev);

let currentpaImg = 1;
function panext()
        {
            if (currentpaImg == 2)
                {
                    document.getElementById("paImg").src="images/pa/pa1";
                    currentpaImg = 1;
                }
            
            else
                {
                    currentpaImg++;
                    document.getElementById("paImg").src="images/pa/pa"+currentImg+".jpg";
                }
        }
        
function paprev()
        {
            if (currentpaImg == 1)
                {
                    document.getElementById("paImg").src="images/pa/pa2";
                    currentpaImg = 2;
                }
            
            else
                {
                    currentpaImg--;
                    document.getElementById("paImg").src="images/pa/pa"+currentImg+".jpg";
                }
        }

document.getElementById("cpnext").addEventListener("click", cpnext);
document.getElementById("cpprev").addEventListener("click", cpprev);

let currentcpImg = 1;
function cnext()
        {
            if (currentcpImg == 12)
                {
                    document.getElementById("cpImg").src="images/coding/code1";
                    currentcpImg = 1;
                }
            
            else
                {
                    currentcpImg++;
                    document.getElementById("cpImg").src="images/coding/code"+currentImg+".jpg";
                }
        }
        
function cprev()
        {
            if (currentcpImg == 1)
                {
                    document.getElementById("cpImg").src="images/coding/code12";
                    currentcpImg = 12;
                }
            
            else
                {
                    currentcpImg--;
                    document.getElementById("cpImg").src="images/coding/code"+currentImg+".jpg";
                }
        }

document.getElementById("wbnext").addEventListener("click", wbnext);
document.getElementById("wbprev").addEventListener("click", wbprev);

let currentwbImg = 1;
function wbnext()
        {
            if (currentwbImg == 16)
                {
                    document.getElementById("wbImg").src="images/wb/wb1";
                    currentwbImg = 1;
                }
            
            else
                {
                    currentwbImg++;
                    document.getElementById("wbImg").src="images/wb/wb"+currentImg+".jpg";
                }
        }
        
function wbprev()
        {
            if (currentwbImg == 1)
                {
                    document.getElementById("wbImg").src="images/wb/wb16";
                    currentwbImg = 16;
                }
            
            else
                {
                    currentwbImg--;
                    document.getElementById("wbImg").src="images/wb/wb"+currentImg+".jpg";
                }
        }

document.getElementById("sqlnext").addEventListener("click", sqlnext);
document.getElementById("sqlprev").addEventListener("click", sqlprev);

let currentsqlImg = 1;
function sqlnext()
        {
            if (currentsqlImg == 14)
                {
                    document.getElementById("sqlImg").src="images/sql/sql1";
                    currentsqlImg = 1;
                }
            
            else
                {
                    currentsqlImg++;
                    document.getElementById("sqlImg").src="images/sql/sql"+currentImg+".jpg";
                }
        }
        
function sqlprev()
        {
            if (currentsqlImg == 1)
                {
                    document.getElementById("sqlImg").src="images/sql/sql14";
                    currentsqlImg = 14;
                }
            
            else
                {
                    currentsqlImg--;
                    document.getElementById("sqlImg").src="images/sql/sql"+currentImg+".jpg";
                }
        }

document.getElementById("osnext").addEventListener("click", osnext);
document.getElementById("osprev").addEventListener("click", osprev);

let currentosImg = 1;
function osnext()
        {
            if (currentosImg == 22)
                {
                    document.getElementById("osImg").src="images/os/os1";
                    currentosImg = 1;
                }
            
            else
                {
                    currentosImg++;
                    document.getElementById("osImg").src="images/os/os"+currentImg+".jpg";
                }
        }
        
function osprev()
        {
            if (currentosImg == 1)
                {
                    document.getElementById("osImg").src="images/os/os22";
                    currentosImg = 22;
                }
            
            else
                {
                    currentosImg--;
                    document.getElementById("osImg").src="images/os/os"+currentImg+".jpg";
                }
        }