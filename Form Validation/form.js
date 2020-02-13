'use strict';
var $ = function(id){
    return document.getElementById(id);
};

// variable declaration and submit function
var processEntries = function(){
    var isValid = true;

    // declare field variables
    var firstName = $("fname").value;
    var lastName = $("lname").value;
    var address = $("address").value;
    var address2 = $("address2").value;
    var city = $("city").value;            // declare field variables
    var firstName = $("fname").value;
    var lastName = $("lname").value;
    var address = $("address").value;
    var address2 = $("address2").value;
    var city = $("city").value;
    var state = $("state").value;
    var zipCode = $("zipcode").value;
    var gender = "";
    if ($("male").checked){
        gender = "Male";
    }else{
        ($("female").checked);{
            gender = "Female";
        }
    }
    var birth = $("dob").value;
    var mstatus = $("mstatus").value;
                
    var sname = $("sname").value;
    var email = $("email").value;
    var phone = $("phone").value;
    var password = $("password").value;
    var password2 = $("password2").value;

    // declare label variables
    var fName = $("fnameLabel");
    var lName = $("lnameLabel");
    var addressL = $("addressLabel");
    var address2L = $("address2Label");
    var cityL = $("cityLabel");
    var stateL = $("stateLabel");
    var zipL = $("zipcodeLabel");
    var genderL = $("genderLabel");
    var birthL = $("dobLabel");
    var mstatusL = $("mstatusLabel");
    var snameL = $("snameLabel");
    var emailL = $("emailLabel");
    var phoneL = $("phoneLabel");
    var passL = $("passwordLabel");
    var pass2L = $("password2Label");

    // data validation
    if (firstName == ""){
        $("fname").nextElementSibling.firstChild.nodeValue = "This field is required.";
        $("error").innerHTML = "Please correct the following errors:";
        if (fName.hasAttribute("class")){
            fName.removeAttribute("class");
        }
        fName.setAttribute("class", "redtext");
        isValid = false;
    }else{
        $("fname").nextElementSibling.firstChild.nodeValue = "";
        if(fName.hasAttribute("class")){
            fName.removeAttribute("class");
        }
        fName.setAttribute("class", "blacktext");
        }
    if (lastName == ""){
        $("lname").nextElementSibling.firstChild.nodeValue = "This field is required.";
        $("error").innerHTML = "Please correct the following errors:";
        if(lName.hasAttribute("class")){
            lName.removeAttribute("class");
        }
        lName.setAttribute("class", "redtext");
        isValid = false;
    }else{
        $("lname").nextElementSibling.firstChild.nodeValue = "";
        if (lName.hasAttribute("class")){
            lName.removeAttribute("class");
        }
        lName.setAttribute("class", "blacktext");
    }
    if (address == ""){
        $("address").nextElementSibling.firstChild.nodeValue = "This field is required.";
        $("error").innerHTML = "Please correct the following errors:";
        if(addressL.hasAttribute("class")){
            addressL.removeAttribute("class");
        }
        addressL.setAttribute("class", "redtext");
        isValid = false;
    }else{
        $("address").nextElementSibling.firstChild.nodeValue = "";
        if (addressL.hasAttribute("class")){
            addressL.removeAttribute("class");
        }
        addressL.setAttribute("class", "blacktext");
    }
    if (address2 == ""){
        $("address2").nextElementSibling.firstChild.nodeValue = "This field is required.";
        $("error").innerHTML = "Please correct the following errors:";
        if (address2L.hasAttribute("class")){
            address2L.removeAttribute("class");
        }
        address2L.setAttribute("class", "redtext");
        isValid = false;
    }else{
        $("address2").nextElementSibling.firstChild.nodeValue = "";
        if (address2L.hasAttribute("class")){
            address2L.removeAttribute("class");
        }
        address2L.setAttribute("class", "blacktext");
    }
    if (city == ""){
        $("city").nextElementSibling.firstChild.nodeValue = "This field is required.";
        $("error").innerHTML = "Please correct the following errors:";
        if (cityL.hasAttribute("class")){
            cityL.removeAttribute("class");
        }
        cityL.setAttribute("class", "redtext");
        isValid = false;
    }else{
        $("city").nextElementSibling.firstChild.nodeValue = "";
        if (cityL.hasAttribute("class")){
            cityL.removeAttribute("class");
        }
        cityL.setAttribute("class", "blacktext");
    }
    if (state == ""){
        $("state").nextElementSibling.firstChild.nodeValue = "This field is required.";
        $("error").innerHTML = "Please correct the following errors:";
        if(stateL.hasAttribute("class")){
            stateL.removeAttribute("class");
        }
        stateL.setAttribute("class", "redtext");
        isValid = false;
    }else{
        $("state").nextElementSibling.firstChild.nodeValue = "";
        if (stateL.hasAttribute("class")){
            stateL.removeAttribute("class");
        }
        stateL.setAttribute("class", "blacktext");
    }
    if (zipCode == ""){
        $("zipcode").nextElementSibling.firstChild.nodeValue = "This field is required.";
        $("error").innerHTML = "Please correct the following errors:";
        if (zipL.hasAttribute("class")){
            zipL.removeAttribute("class");
        }
        zipL.setAttribute("class", "redtext");
        isValid = false;
    }else{
        $("zipcode").nextElementSibling.firstChild.nodeValue = "";
        if (zipL.hasAttribute("class")){
            zipL.removeAttribute("class");
        }
        zipL.setAttribute("class", "blacktext");
    }
    if (birth == ""){
        $("dob").nextElementSibling.firstChild.nodeValue = "This field is required.";
        $("error").innerHTML = "Please correct the following errors:";
        if (birthL.hasAttribute("class")){
            birthL.removeAttribute("class");
        }
        birthL.setAttribute("class", "redtext");
        isValid = false;
    }else{
        $("dob").nextElementSibling.firstChild.nodeValue = "";
        if (birthL.hasAttribute("class")){
            birthL.removeAttribute("class");
        }
        birthL.setAttribute("class", "blacktext");
    }
    if (mstatus == ""){
        $("mstatus").nextElementSibling.firstChild.nodeValue = "This field is required.";
        $("error").innerHTML = "Please correct the following errors:";
        if (mstatusL.hasAttribute("class")){
            mstatusL.removeAttribute("class");
        }
        mstatusL.setAttribute("class", "redtext");
        isValid = false;
    }else{
        $("mstatus").nextElementSibling.firstChild.nodeValue = "";
        if (mstatusL.hasAttribute("class")){
            mstatusL.removeAttribute("class");
        }
        mstatusL.setAttribute("class", "blacktext");
    }
    if (sname == ""){
        $("sname").nextElementSibling.firstChild.nodeValue = "This field is required";
        $("error").innerHTML = "Please correct the following errors:";
        if(snameL.hasAttribute("class")){
            snameL.removeAttribute("class");
        }
        snameL.setAttribute("class", "redtext");
    }else{
        $("sname").nextElementSibling.firstChild.nodeValue = "";
        if (snameL.hasAttribute("class")){
            snameL.removeAttribute("class");
        }
        snameL.setAttribute("class", "blacktext");
    }
    if (email == ""){
        $("email").nextElementSibling.firstChild.nodeValue = "This field is required.";
        $("error").innerHTML = "Please correct the following errors:";
        if (emailL.hasAttribute("class")){
            emailL.removeAttribute("class");
        }
        emailL.setAttribute("class", "redtext");
        isValid = false;
    }else{
        $("email").nextElementSibling.firstChild.nodeValue = "";
        if (emailL.hasAttribute("class")){
            emailL.removeAttribute("class");
        }
        emailL.setAttribute("class", "blacktext");
    }
    if (phone == ""){
        $("phone").nextElementSibling.firstChild.nodeValue = "This field is required.";
        $("error").innerHTML = "Please correct the following errors:";
        if (phoneL.hasAttribute("class")){
            phoneL.removeAttribute("class");
        }
        phoneL.setAttribute("class", "redtext");
        isValid = false;
    }else{
        $("phone").nextElementSibling.firstChild.nodeValue = "";
        if (phoneL.hasAttribute("class")){
            phoneL.removeAttribute("class");
        }
        phoneL.setAttribute("class", "blacktext");
    }
    if (password == ""){
        $("password").nextElementSibling.firstChild.nodeValue = "This field is required.";
        $("error").innerHTML = "Please correct the following errors:";
        if (passL.hasAttribute("class")){
            passL.removeAttribute("class");
        }
        passL.setAttribute("class", "redtext");
        return isValid = false;
    }else{
        $("password").nextElementSibling.firstChild.nodeValue = "";
        if (passL.hasAttribute("class")){
            passL.removeAttribute("class");
        }
        passL.setAttribute("class", "blacktext");
    }
    if (password2 == ""){
        $("password2").nextElementSibling.firstChild.nodeValue = "This field is required.";
        $("error").innerHTML = "Please correct the following errors:";
        if (pass2L.hasAttribute("class")){
            pass2L.removeAttribute("class");
        }
        pass2L.setAttribute("class", "redtext");
        isValid = false;
    }else{
        $("password2").nextElementSibling.firstChild.nodeValue = "";
        if (pass2L.hasAttribute("class")){
            pass2L.removeAttribute("class");
        }
        pass2L.setAttribute("class", "blacktext");
    }


    // code for password comparison
    if (password2 != password){
        $("password2").nextElementSibling.firstChild.nodeValue = "Passwords must match.";
        $("error").innerHTML = "Passwords must match!";
        isValid = false;
    }else{
        $("password2").nextElementSibling.firstChild.nodeValue = "";
    }

    // submit the form if all fields are valid
    if (isValid == true){
        $("form1").submit();
    }
};

// spouse name enable function
var mSelect = function(){
    var mstatus = $("mstatus").value;
    if (mstatus == "Married"){
        $("sname").disabled = false;
    }else{
        $("sname").disabled = true;
    }
};

// reset function
var resetForm = function(){
    $("form1").reset();
    $("fname").nextElementSibling.firstChild.nodeValue = "*";
    $("lname").nextElementSibling.firstChild.nodeValue = "*";
    $("address").nextElementSibling.firstChild.nodeValue = "*";
    $("address2").nextElementSibling.firstChild.nodeValue = "*";
    $("city").nextElementSibling.firstChild.nodeValue = "*";
    $("state").nextElementSibling.firstChild.nodeValue = "*";
    $("zipcode").nextElementSibling.firstChild.nodeValue = "*";
    $("dob").nextElementSibling.firstChild.nodeValue = "*";
    $("mstatus").nextElementSibling.firstChild.nodeValue = "*";
    $("email").nextElementSibling.firstChild.nodeValue = "*";
    $("phone").nextElementSibling.firstChild.nodeValue = "*";
    $("password").nextElementSibling.firstChild.nodeValue = "*";
    $("password2").nextElementSibling.firstChild.nodeValue = "*";
};

window.onload = function (){
    $("mstatus").onchange = mSelect;
    $("register").onclick = processEntries;
    $("reset_form").onclick = resetForm;
    $("fname").focus();
};            